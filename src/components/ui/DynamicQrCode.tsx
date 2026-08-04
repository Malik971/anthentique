"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { brandPalette } from "@/content/brand";
import { business } from "@/content/business";

interface DynamicQrCodeProps {
  path?: string;
  size?: number;
  className?: string;
}

const configuredSiteUrl = business.siteUrl.trim().replace(/\/$/, "");

function getPublicTarget(path: string) {
  if (!configuredSiteUrl) return null;

  try {
    const base = new URL(configuredSiteUrl);
    if (!/^https?:$/.test(base.protocol) || ["localhost", "127.0.0.1", "::1"].includes(base.hostname)) {
      return null;
    }
    return new URL(path, `${base.toString().replace(/\/$/, "")}/`).toString();
  } catch {
    return null;
  }
}

export function DynamicQrCode({ path = "/carte/", size = 320, className }: DynamicQrCodeProps) {
  const target = getPublicTarget(path);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!target) return;

    QRCode.toDataURL(target, {
      errorCorrectionLevel: "Q",
      margin: 3,
      width: Math.max(size * 2, 640),
      color: { dark: `${brandPalette.ink}FF`, light: `${brandPalette.white}FF` },
    })
      .then(setSrc)
      .catch(() => setSrc(null));
  }, [size, target]);

  if (!target || !src) {
    return (
      <span className="qr-code-pending" role="status">
        <span aria-hidden="true">QR</span>
        <small>Génération du QR…</small>
      </span>
    );
  }

  return (
    <Image
      className={className}
      src={src}
      alt={`QR code ouvrant ${target}`}
      width={size}
      height={size}
      unoptimized
    />
  );
}
