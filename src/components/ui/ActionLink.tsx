import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

type Icon = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number | string }>;

interface ActionLinkProps {
  href: string;
  children: React.ReactNode;
  icon?: Icon;
  variant?: "primary" | "secondary" | "light" | "text";
  external?: boolean;
  className?: string;
}

export function ActionLink({ href, children, icon: Icon, variant = "primary", external = false, className = "" }: ActionLinkProps) {
  const classes = `action-link action-link--${variant} ${className}`.trim();
  const content = <>{Icon ? <Icon aria-hidden="true" size={18} strokeWidth={1.8} /> : null}<span>{children}</span></>;

  if (external) {
    return <a className={classes} href={href} target="_blank" rel="noopener noreferrer">{content}</a>;
  }

  return <Link className={classes} href={href}>{content}</Link>;
}
