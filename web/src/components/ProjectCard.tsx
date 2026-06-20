import Link from "next/link";
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
  SiSocketdotio,
  SiBun,
} from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";

type TechStack = {
  nextjs?: boolean;
  react?: boolean;
  typescript?: boolean;
  python?: boolean;
  php?: boolean;
  java?: boolean;
  socketio?: boolean;
  javascript?: boolean;
  bun?: boolean;
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
  python: { name: "Python", icon: SiPython, href: "https://www.python.org" },
  php: { name: "PHP", icon: SiPhp, href: "https://www.php.net" },
  java: { name: "Java", icon: FaJava, href: "https://www.java.com" },
  socketio: {
    name: "Socket.IO",
    icon: SiSocketdotio,
    href: "https://socket.io",
  },
  javascript: {
    name: "JavaScript",
    icon: SiJavascript,
    href: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  bun: { name: "Bun", icon: SiBun, href: "https://bun.sh" },
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

const Stack = ({
  canBeLink = true,
  ...props
}: TechStack & { canBeLink?: boolean }) => {
  return (
    <div className="flex gap-2">
      {Object.entries(techStackIcons).map(
        ([key, { icon: Icon, name, href }]) => {
          if (props[key as keyof TechStack]) {
            if (canBeLink) {
              <Link href={href} key={name} rel="noopener" target="_blank">
                <Icon key={key} className="h-6 w-6" title={name} />
              </Link>;
            }
            return <Icon key={key} className="h-6 w-6" title={name} />;
          }
          return null;
        },
      )}
    </div>
  );
};

const ProjectCardContent = ({
  title,
  description,
  link,
  stack,
}: {
  title: string;
  description: string;
  link?: string;
  stack?: TechStack;
}) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold tracking-[-0.025em]">
          {title}
        </h3>
        <div className="max-w-[65ch] leading-7 text-white/65">{description}</div>
      </div>
      <div className="flex items-end justify-between gap-4">
        {stack ? <Stack {...stack} canBeLink={false} /> : <span />}
        {link ? (
          <span className="text-sm font-semibold text-[#d7c3f2]">Voir ↗</span>
        ) : null}
      </div>
    </>
  );
};

export const ProjectCard = ({
  id,
  title,
  description,
  link,
  stack,
}: {
  id?: string;
  title: string;
  description: string;
  link?: string;
  stack?: TechStack;
}) => {
  if (link) {
    return (
      <Link
        className="project-card flex h-full w-full scroll-mt-8 flex-col justify-between gap-8 rounded-2xl border border-white/10 bg-white/[0.045] p-6 text-[#f4f1ea] transition duration-200 hover:-translate-y-1 hover:border-[#a783d4]/50 hover:bg-white/[0.075] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#b995e5] active:translate-y-0"
        href={link}
        rel="noopener"
        id={id}
        target="_blank"
        data-umami-event="link-click"
        data-umami-event-link={title}
      >
        <ProjectCardContent
          title={title}
          description={description}
          link={link}
          stack={stack}
        />
      </Link>
    );
  }

  return (
    <div
      className="project-card flex h-full w-full scroll-mt-8 flex-col justify-between gap-8 rounded-2xl border border-white/10 bg-white/[0.045] p-6 text-[#f4f1ea]"
      id={id}
    >
      <ProjectCardContent
        title={title}
        description={description}
        link={link}
        stack={stack}
      />
    </div>
  );
};
