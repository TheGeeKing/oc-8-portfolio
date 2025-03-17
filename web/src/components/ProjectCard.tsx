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
} from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";

type TechStack = {
  nextjs?: boolean;
  react?: boolean;
  typescript?: boolean;
  javascript?: boolean;
  nodejs?: boolean;
  html?: boolean;
  tailwindcss?: boolean;
  scss?: boolean;
  css?: boolean;
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
} as const;

const Stack = (props: TechStack) => {
  return (
    <div className="flex gap-2">
      {Object.entries(techStackIcons).map(
        ([key, { icon: Icon, name, href }]) => {
          if (props[key as keyof TechStack]) {
            return (
              <Link href={href} key={name} target="_blank">
                <Icon key={key} className="h-6 w-6" title={name} />
              </Link>
            );
          }
          return null;
        },
      )}
    </div>
  );
};

export const ProjectCard = ({
  title,
  description,
  link,
  stack,
}: {
  title: string;
  description: string;
  link: string;
  stack?: TechStack;
}) => {
  return (
    <Link
      className="flex h-full w-full flex-col justify-between gap-4 rounded-xl bg-white/10 p-4 text-white transition-transform hover:scale-105 hover:bg-white/20"
      href={link}
      target="_blank"
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">{title} →</h3>
        <div className="text-lg">{description}</div>
      </div>
      {stack ? <Stack {...stack} /> : null}
    </Link>
  );
};
