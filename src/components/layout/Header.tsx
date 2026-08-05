"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { business } from "@/content/business";
import { whatsappHref } from "@/lib/links";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/carte", label: "La carte" },
  { href: "/#lieu", label: "Le lieu" },
  { href: "/#galerie", label: "Photos" },
  { href: "/#infos-pratiques", label: "Horaires & accès" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__topline">
        <div className="container">
          <p>Restaurant · Snack · Bar · Glacier</p>
          <div className="site-header__topline-status"><StatusBadge compact /><span>Village Artisanal · Sainte-Anne</span></div>
        </div>
      </div>
      <div className="site-header__main">
        <div className="container site-header__inner">
          <Link className="brand" href="/" aria-label="L’Authentique, accueil" onClick={() => setOpen(false)}>
            <Image src="/images/brand/logo-lauthentique-horizontal.webp" alt="Logo de L’Authentique" width={755} height={206} priority />
          </Link>

          <nav className="desktop-nav" aria-label="Navigation principale">
            {navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </nav>

          <ThemeToggle />

          <a className="header-cta" href={whatsappHref(business.whatsapp)} target="_blank" rel="noopener noreferrer">
            <BrandIcon platform="whatsapp" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>

          <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} onClick={() => setOpen((value) => !value)}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        {open ? (
          <nav className="mobile-nav" id="mobile-navigation" aria-label="Navigation mobile">
            <div className="container">
              {navItems.map((item) => <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
              <a href={whatsappHref(business.whatsapp)} target="_blank" rel="noopener noreferrer"><BrandIcon platform="whatsapp" aria-hidden="true" />Écrire sur WhatsApp</a>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
