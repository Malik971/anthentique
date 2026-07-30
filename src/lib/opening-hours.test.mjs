import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

const source = await readFile(new URL("./opening-hours.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;
const moduleUrl = `data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`;
const { getNextOpening, getRestaurantStatus } = await import(moduleUrl);

const openingHours = {
  monday: { open: "09:00", close: "20:00" },
  tuesday: { open: "09:00", close: "20:00" },
  wednesday: { open: "09:00", close: "20:00" },
  thursday: { open: "09:00", close: "20:00" },
  friday: { open: "09:00", close: "20:00" },
  saturday: { open: "09:00", close: "20:00" },
  sunday: { open: "09:00", close: "15:00", needsClientConfirmation: true },
};
const timezone = "America/Guadeloupe";

const statusAt = (isoDate) => getRestaurantStatus(openingHours, timezone, new Date(isoDate));

test("lundi à 8 h 59 : fermé", () => {
  assert.equal(statusAt("2026-07-20T12:59:00.000Z").isOpen, false);
});

test("lundi à 9 h : ouvert", () => {
  assert.equal(statusAt("2026-07-20T13:00:00.000Z").isOpen, true);
});

test("lundi à 19 h 59 : ouvert", () => {
  assert.equal(statusAt("2026-07-20T23:59:00.000Z").isOpen, true);
});

test("lundi à 20 h : fermé", () => {
  assert.equal(statusAt("2026-07-21T00:00:00.000Z").isOpen, false);
});

test("dimanche à 14 h 59 : ouvert", () => {
  assert.equal(statusAt("2026-07-26T18:59:00.000Z").isOpen, true);
});

test("dimanche à 15 h : fermé", () => {
  assert.equal(statusAt("2026-07-26T19:00:00.000Z").isOpen, false);
});

test("calcule la prochaine ouverture", () => {
  const next = getNextOpening(openingHours, timezone, new Date("2026-07-21T00:00:00.000Z"));
  assert.deepEqual(next, {
    day: "tuesday",
    date: "2026-07-21",
    open: "09:00",
    offsetDays: 1,
  });
  assert.equal(statusAt("2026-07-21T00:00:00.000Z").detail, "Ouvre demain à 9 h");
});

test("utilise le fuseau de la Guadeloupe plutôt que le jour UTC", () => {
  const status = statusAt("2026-07-21T01:30:00.000Z");
  assert.equal(status.day, "monday");
  assert.equal(status.isOpen, false);
});
