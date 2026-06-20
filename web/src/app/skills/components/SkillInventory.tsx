"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { Tag } from "./Tag";
import { cn } from "@/lib/utils";
import type { Skill, SkillCategory, SkillLevel, Usage } from "../data/skills";

type SkillInventoryProps = {
  categories: SkillCategory[];
};

const levelTagVariants: Record<
  SkillLevel,
  "level-application" | "level-en-cours" | "level-maitrise" | "level-notions"
> = {
  notions: "level-notions",
  application: "level-application",
  maîtrise: "level-maitrise",
  "en cours": "level-en-cours",
};

const UsageTag = ({ usage }: { usage: Usage }) => {
  return (
    <Tag
      href={usage.projectSlug ? `/#${usage.projectSlug}` : undefined}
      transitionTypes={usage.projectSlug ? ["nav-back"] : undefined}
      variant={usage.type}
    >
      {usage.label}
    </Tag>
  );
};

const SkillRow = ({ skill }: { skill: Skill }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasDetails = !!skill.details?.length;

  const toggle = () => {
    if (!hasDetails) return;
    setIsOpen((current) => !current);
  };

  return (
    <article className="border-t border-white/10 px-4 sm:px-5">
      <button
        aria-expanded={isOpen}
        className={cn(
          "flex w-full flex-col gap-3 py-5 text-left",
          !hasDetails && "cursor-default",
        )}
        onClick={toggle}
        type="button"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <Tag variant={levelTagVariants[skill.level]}>{skill.level}</Tag>
            <FaChevronDown
              aria-hidden="true"
              className={cn(
                "h-4 w-4 text-white/60 transition-transform",
                isOpen && "rotate-180",
                !hasDetails && "invisible",
              )}
            />
          </div>
        </div>
      </button>

      <div className="flex flex-wrap gap-2 pb-5">
        {skill.usages.map((usage) => (
          <UsageTag key={`${usage.type}-${usage.label}`} usage={usage} />
        ))}
      </div>

      {hasDetails && (
        <div
          aria-hidden={!isOpen}
          className={cn(
            "grid overflow-hidden transition-[grid-template-rows,opacity] duration-[var(--duration-move)] ease-out motion-reduce:transition-none",
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="min-h-0 overflow-hidden pb-5">
            <p className="mb-3 text-sm text-white/45">
              Ce que je connais
            </p>
            <div className="flex flex-wrap gap-2">
              {skill.details!.map((detail) => (
                <Tag key={detail} variant="detail">
                  {detail}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export const SkillInventory = ({ categories }: SkillInventoryProps) => {
  return (
    <div className="grid gap-8">
      {categories.map((category) => (
        <section
          className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.025]"
          key={category.title}
        >
          <h2 className="px-4 py-5 text-2xl font-semibold tracking-[-0.025em] sm:px-5">
            {category.title}
          </h2>
          <div>
            {category.skills.map((skill) => (
              <SkillRow key={skill.name} skill={skill} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};
