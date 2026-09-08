import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type PrimaryButtonProps = { children: ReactNode; className?: string; href?: string } & ComponentProps<"button">;

export function PrimaryButton({ children, className, href, ...buttonProps }: PrimaryButtonProps) {
  const classes = cn("inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-burgundy px-5 text-sm font-semibold text-white shadow-sm transition active:scale-[0.98]", className);
  if (href) return <Link className={classes} href={href}>{children}</Link>;
  return <button className={classes} {...buttonProps}>{children}</button>;
}
