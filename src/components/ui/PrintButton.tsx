"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return <button className="action-link action-link--secondary print-button" type="button" onClick={() => window.print()}><Printer aria-hidden="true" size={18} /><span>Imprimer ce support</span></button>;
}
