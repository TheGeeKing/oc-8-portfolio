import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

const tagStyles = cva("border", {
  variants: {
    clickable: {
      true: "",
      false: "",
    },
    variant: {
      company:
        "rounded-md border-[#b995e5]/25 bg-[#b995e5]/10 px-2.5 py-1 font-medium text-[#d8c5ef] text-xs",
      detail:
        "rounded-md border-white/10 bg-white/[0.07] px-2.5 py-1.5 text-sm text-white/80",
      formation:
        "rounded-md border-sky-300/20 bg-sky-300/[0.08] px-2.5 py-1 font-medium text-sky-100/80 text-xs",
      "level-application":
        "rounded-md border-white/10 bg-white/[0.05] px-2.5 py-1 font-medium text-white/65 text-xs",
      "level-en-cours":
        "rounded-md border-white/10 bg-white/[0.05] px-2.5 py-1 font-medium text-white/65 text-xs",
      "level-maitrise":
        "rounded-md border-[#b995e5]/25 bg-[#b995e5]/10 px-2.5 py-1 font-medium text-[#d8c5ef] text-xs",
      "level-notions":
        "rounded-md border-white/10 px-2.5 py-1 font-medium text-white/45 text-xs",
      project:
        "rounded-md border-white/10 bg-white/[0.05] px-2.5 py-1 font-medium text-white/65 text-xs",
    },
  },
  compoundVariants: [
    {
      clickable: true,
      className: "transition-colors hover:bg-white/20",
      variant: "project",
    },
  ],
});

export const Tag = ({
  children,
  className,
  href,
  target,
  transitionTypes,
  variant,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  transitionTypes?: string[];
  variant: VariantProps<typeof tagStyles>["variant"];
}) => {
  const tagClassName = cn(tagStyles({ clickable: !!href, variant }), className);

  if (href) {
    return (
      <Link
        className={tagClassName}
        href={href}
        rel={target === "_blank" ? "noopener" : undefined}
        target={target}
        transitionTypes={transitionTypes}
      >
        {children}
      </Link>
    );
  }

  return <span className={tagClassName}>{children}</span>;
};
