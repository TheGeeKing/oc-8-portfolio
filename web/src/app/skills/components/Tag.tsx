import Link from "next/link";
import { type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tagStyles = cva("border", {
  variants: {
    clickable: {
      true: "",
      false: "",
    },
    variant: {
      company:
        "rounded-full border-violet-300/30 bg-violet-300/10 px-2.5 py-1 text-xs font-medium text-violet-100",
      detail:
        "rounded-md border-white/10 bg-white/[0.07] px-2.5 py-1.5 text-sm text-white/80",
      formation:
        "rounded-full border-sky-300/30 bg-sky-300/10 px-2.5 py-1 text-xs font-medium text-sky-100",
      "level-application":
        "rounded-full border-cyan-300/30 bg-cyan-300/10 px-2.5 py-1 text-xs font-semibold text-cyan-100",
      "level-en-cours":
        "rounded-full border-emerald-300/30 bg-emerald-300/10 px-2.5 py-1 text-xs font-semibold text-emerald-100",
      "level-maitrise":
        "rounded-full border-[hsl(280,100%,70%)]/50 bg-[hsl(280,100%,70%)]/15 px-2.5 py-1 text-xs font-semibold text-[hsl(280,100%,86%)]",
      "level-notions":
        "rounded-full border-white/15 bg-white/10 px-2.5 py-1 text-xs font-semibold text-white/70",
      project:
        "rounded-full border-white/15 bg-white/10 px-2.5 py-1 text-xs font-medium text-white/75",
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
        rel={target === "_blank" ? "noreferrer" : undefined}
        target={target}
        transitionTypes={transitionTypes}
      >
        {children}
      </Link>
    );
  }

  return <span className={tagClassName}>{children}</span>;
};
