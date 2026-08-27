"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  href: string;
  label: string;
  target?: string;
  rel?: string;
  className?: string;
  size?: "sm" | "default";
}

export function CTAButton({
  href,
  label,
  target,
  rel,
  className = "",
  size = "default",
}: CTAButtonProps) {
  return (
    <Button asChild variant="gold" size={size} className={className}>
      <Link href={href} target={target} rel={rel}>
        {label}
        <ArrowRight className={size === "sm" ? "h-3.5 w-3.5" : "h-5 w-5"} />
      </Link>
    </Button>
  );
}
