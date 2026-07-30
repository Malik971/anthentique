import { BrandIcon, type SocialPlatform } from "@/components/ui/BrandIcon";

interface BrandedSocialButtonProps {
  platform: SocialPlatform;
  href: string;
  label: string;
  variant?: "default" | "compact" | "footer";
  className?: string;
}

export function BrandedSocialButton({
  platform,
  href,
  label,
  variant = "default",
  className = "",
}: BrandedSocialButtonProps) {
  const isExternal = !href.startsWith("mailto:");

  return (
    <a
      className={`branded-social branded-social--${platform} branded-social--${variant} ${className}`.trim()}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <span className="branded-social__icon" aria-hidden="true">
        <BrandIcon platform={platform} />
      </span>
      <span>{label}</span>
    </a>
  );
}
