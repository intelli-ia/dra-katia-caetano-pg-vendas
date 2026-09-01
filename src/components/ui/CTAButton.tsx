"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  href: string;
  label: string;
  mobileLabel?: string;
  target?: string;
  rel?: string;
  className?: string;
  size?: "sm" | "default";
}

function CTALabel({ label, mobileLabel }: { label: string; mobileLabel?: string }) {
  if (!mobileLabel) return <>{label}</>;
  return (
    <>
      <span className="md:hidden">{mobileLabel}</span>
      <span className="hidden md:inline">{label}</span>
    </>
  );
}

export function CTAButton({
  href,
  label,
  mobileLabel,
  target,
  rel,
  className = "",
  size = "default",
}: CTAButtonProps) {
  if (href.startsWith("#")) {
    const id = href.slice(1);
    return (
      <Button
        variant="gold"
        size={size}
        className={className}
        onClick={() =>
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <CTALabel label={label} mobileLabel={mobileLabel} />
        <ArrowRight className={size === "sm" ? "h-3.5 w-3.5" : "h-5 w-5"} />
      </Button>
    );
  }

  return (
    <Button asChild variant="gold" size={size} className={className}>
      <Link href={href} target={target} rel={rel}>
        <CTALabel label={label} mobileLabel={mobileLabel} />
        <ArrowRight className={size === "sm" ? "h-3.5 w-3.5" : "h-5 w-5"} />
      </Link>
    </Button>
  );
}
