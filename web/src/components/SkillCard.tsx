import Link from "next/link";
import { type IconType } from "react-icons";
import { FaRegHandPointer } from "react-icons/fa6";
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
  SiNodedotjs,
  SiDocker,
} from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { Card } from "./Card";
import { cn } from "@/lib/utils";

type Mastering = "notions" | "application" | "maîtrise" | "expertise";

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
  docker?: Mastering;
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
  nodejs: { name: "Node.js", icon: SiNodedotjs, href: "https://nodejs.org" },
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
  docker: {
    name: "Docker",
    icon: SiDocker,
    href: "https://www.docker.com",
  },
} as const;

const sortTechStack = (stack: TechStack): string[] => {
  const levels: Record<Mastering, number> = {
    notions: 1,
    application: 2,
    maîtrise: 3,
    expertise: 4,
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

const Stack = ({
  interactive = true,
  ...props
}: TechStack & { interactive?: boolean }) => {
  const sortedKeys = sortTechStack(props);

  return (
    <div className="grid grid-cols-2 gap-4 min-[450px]:grid-cols-3 min-[550px]:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
            {interactive ? (
              <Link href={href} target="_blank">
                <Icon className="h-6 w-6" title={name} />
              </Link>
            ) : (
              <Icon className="h-6 w-6" title={name} />
            )}
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
  href,
  ariaLabel,
  transitionTypes,
}: {
  title: string;
  stack: TechStack;
  href?: string;
  ariaLabel?: string;
  transitionTypes?: string[];
}) => {
  const card = (
    <Card
      className={cn(
        href && "relative overflow-hidden transition-colors hover:bg-white/20",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-2xl font-bold">{title}</h3>
        {href && (
          <span
            aria-hidden="true"
            className="skill-tap-hint pointer-events-none relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[hsl(280,100%,70%)]/40 bg-black/25 text-[hsl(280,100%,70%)] shadow-lg shadow-black/20"
          >
            <span className="skill-tap-ring absolute inset-0 rounded-full border border-[hsl(280,100%,70%)]/45" />
            <FaRegHandPointer className="skill-tap-icon relative h-5 w-5" />
          </span>
        )}
      </div>
      {stack ? <Stack {...stack} interactive={!href} /> : null}
    </Card>
  );

  if (href) {
    return (
      <Link
        aria-label={ariaLabel ?? title}
        className="block h-full rounded-xl outline-offset-4 transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[hsl(280,100%,70%)]"
        href={href}
        transitionTypes={transitionTypes}
      >
        {card}
      </Link>
    );
  }

  return card;
};
