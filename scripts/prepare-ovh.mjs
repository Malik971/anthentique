// Prépare le dossier `out/` pour un hébergement mutualisé OVH :
// s'assure que .htaccess est bien présent à la racine de l'export, puis contrôle
// que les fichiers indispensables à la mise en ligne ont été générés.
import { access, copyFile, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outDirectory = path.join(root, "out");
const htaccessSource = path.join(root, "public", ".htaccess");
const htaccessTarget = path.join(outDirectory, ".htaccess");

const exists = async (filePath) => {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
};

if (!(await exists(outDirectory))) {
  throw new Error("Le dossier out/ est absent. Lancer `npm run build` avant `prepare:ovh`.");
}

if (!(await exists(htaccessSource))) {
  throw new Error("public/.htaccess est introuvable : la configuration Apache OVH est manquante.");
}

// Next.js ne copie pas systématiquement les fichiers cachés de public/ vers out/.
await copyFile(htaccessSource, htaccessTarget);

const requiredFiles = [
  ".htaccess",
  "index.html",
  "carte/index.html",
  "qr-menu/index.html",
  "mentions-legales/index.html",
  "confidentialite/index.html",
  "robots.txt",
  "sitemap.xml",
  "images/menu/menu-recto.webp",
  "images/menu/menu-verso.webp",
  "qr/carte-lauthentique.svg",
  "qr/carte-lauthentique.png",
];

const missing = [];
for (const file of requiredFiles) {
  if (!(await exists(path.join(outDirectory, file)))) missing.push(file);
}

if (missing.length > 0) {
  throw new Error(`Fichiers manquants dans out/ :\n- ${missing.join("\n- ")}`);
}

const { size } = await stat(htaccessTarget);
console.log(`out/.htaccess copié (${size} octets).`);
console.log(`Export OVH vérifié : ${requiredFiles.length} fichiers requis présents dans out/.`);
