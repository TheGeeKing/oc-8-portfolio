import Link from "next/link";
import React from "react";
import { type IconType } from "react-icons";
import {
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiPhp,
} from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { Card } from "./Card";

type Mastering = "notions" | "application" | "maîtrise";

type TechStack = {
  nextjs?: Mastering;
  react?: Mastering;
  typescript?: Mastering;
  javascript?: Mastering;
  nodejs?: Mastering;
  html?: Mastering;
  tailwindcss?: Mastering;
  scss?: Mastering;
  css?: Mastering;
  python?: Mastering;
  php?: Mastering;
};

type IconObject = {
  name: string;
  icon: IconType;
  href: string;
};

const techStackIcons: Record<keyof TechStack, IconObject> = {
  nextjs: { name: "Next.js", icon: SiNextdotjs, href: "https://nextjs.org" },
  react: { name: "React", icon: SiReact, href: "https://react.dev" },
  typescript: {
    name: "TypeScript",
    icon: SiTypescript,
    href: "https://www.typescriptlang.org",
  },
  javascript: {
    name: "JavaScript",
    icon: SiJavascript,
    href: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  nodejs: { name: "Node.js", icon: FaNodeJs, href: "https://nodejs.org" },
  html: {
    name: "HTML",
    icon: SiHtml5,
    href: "https://developer.mozilla.org/docs/Web/HTML",
  },
  tailwindcss: {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    href: "https://tailwindcss.com",
  },
  scss: { name: "SCSS", icon: BsFiletypeScss, href: "https://sass-lang.com" },
  css: {
    name: "CSS",
    icon: SiCss3,
    href: "https://developer.mozilla.org/docs/Web/CSS",
  },
  python: {
    name: "Python",
    icon: SiPython,
    href: "https://www.python.org",
  },
  php: {
    name: "PHP",
    icon: SiPhp,
    href: "https://www.php.net",
  },
} as const;

const sortTechStack = (stack: TechStack): string[] => {
  const levels: Record<Mastering, number> = {
    notions: 1,
    application: 2,
    maîtrise: 3,
  };

  return Object.keys(stack).sort((a, b) => {
    const levelA = stack[a as keyof TechStack];
    const levelB = stack[b as keyof TechStack];

    if (levelA && levelB) {
      return levels[levelB] - levels[levelA];
    }

    // Handle undefined values by placing them at the end
    if (!levelA) return 1;
    if (!levelB) return -1;

    return 0;
  });
};

const Stack = (props: TechStack) => {
  const sortedKeys = sortTechStack(props);

  return (
    <div className="grid grid-cols-2 gap-4 min-[450px]:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {sortedKeys.map((key) => {
        const {
          icon: Icon,
          name,
          href,
        } = techStackIcons[key as keyof TechStack];
        return (
          <div
            key={name}
            className="flex flex-col items-center justify-center gap-2"
          >
            <Link href={href} target="_blank">
              <Icon className="h-6 w-6" title={name} />
            </Link>
            {props[key as keyof TechStack] && (
              <span>{props[key as keyof TechStack]}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export const SkillCard = ({
  title,
  stack,
}: {
  title: string;
  stack: TechStack;
}) => {
  return (
    <Card>
      <h3 className="text-2xl font-bold">{title}</h3>
      {stack ? <Stack {...stack} /> : null}
    </Card>
  );
};
