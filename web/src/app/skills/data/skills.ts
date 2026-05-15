export type SkillLevel = "notions" | "application" | "maîtrise" | "en cours";

export type Usage = {
  type: "company" | "project" | "formation";
  label: string;
  projectSlug?: string;
};

export type Skill = {
  name: string;
  level: SkillLevel;
  details?: string[];
  usages: Usage[];
};
export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      {
        name: "Next.js",
        level: "maîtrise",
        details: [
          "App Router",
          "ISR",
          "SSR",
          "SSG",
          "composants serveurs",
          "exportation statique",
          "métadonnées",
          "chemin typés",
          "paramètre d'URL typés",
          "Fonctions serverless",
        ],
        usages: [
          { type: "company", label: "Morfo" },
          { type: "company", label: "Design Therapy" },
          {
            type: "project",
            label: "Control My Spotify",
            projectSlug: "control-my-spotify",
          },
        ],
      },
      {
        name: "React",
        level: "maîtrise",
        details: [
          "Hooks",
          "Context / Providers",
          "Local Storage",
          "Rendu conditionnel",
          "Formulaire",
          "Composants UI réutilisables",
        ],
        usages: [
          { type: "company", label: "Morfo" },
          { type: "company", label: "Design Therapy" },
          { type: "project", label: "Projet L2", projectSlug: "project-l2" },
          { type: "project", label: "TinyCRUD", projectSlug: "tinycrud" },
          { type: "project", label: "Kasa", projectSlug: "kasa" },
        ],
      },
      {
        name: "Astro",
        level: "notions",
        details: [],
        usages: [{ type: "company", label: "Design Therapy" }],
      },
      {
        name: "HTML / CSS / SCSS",
        level: "maîtrise",
        details: [
          "Sémantique HTML",
          "Design responsive",
          "Accessibilité",
          "Core Web Vitals (LCP, FCP, FID)",
          "Optimisation (SEO, performance)",
        ],
        usages: [
          { type: "project", label: "Bookie", projectSlug: "bookie" },
          { type: "project", label: "Kasa", projectSlug: "kasa" },
          { type: "project", label: "Help meeee", projectSlug: "help-meeee" },
        ],
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "TypeScript",
        level: "application",
        details: [
          "Types",
          "Interfaces",
          "Omit",
          "Pick",
          "Fonctions génériques",
          "Type conditionnel",
          "Type assertion",
          "Doom en types TypeScript",
        ],
        usages: [
          { type: "company", label: "Morfo" },
          { type: "company", label: "Design Therapy" },
          { type: "project", label: "Kasa", projectSlug: "kasa" },
          {
            type: "project",
            label: "Control My Spotify",
            projectSlug: "control-my-spotify",
          },
        ],
      },
      {
        name: "Node.js",
        level: "application",
        details: ["API REST", "Express", "Fastify", "SSE", "Middleware"],
        usages: [
          {
            type: "project",
            label: "umontpellier-ical-api",
            projectSlug: "umontpellier-ical-api",
          },
          {
            type: "project",
            label: "Mon Vieux Grimoire",
            projectSlug: "mon-vieux-grimoire",
          },
        ],
      },
      {
        name: "Bun",
        level: "application",
        details: [
          "Gestionnaire de paquets",
          "Runtime TypeScript",
          "Bundler",
          "Tests",
        ],
        usages: [
          {
            type: "project",
            label: "TinyCRUD",
            projectSlug: "tinycrud",
          },
          {
            type: "project",
            label: "EDF Tempo Bot",
            projectSlug: "edf-tempo-bot",
          },
          {
            type: "project",
            label: "Bun Chat",
            projectSlug: "bun-chat",
          },
        ],
      },
      {
        name: "NestJS",
        level: "application",
        details: [
          "Architecture RESTful",
          "Injection de dépendances",
          "Tests unitaires",
          "Tests E2E",
          "Authentification",
          "Cron",
          "WebSocket",
          "TypeORM",
          "Services",
          "Repositories",
          "DTOs",
        ],
        usages: [
          { type: "formation", label: "My Digital School" },
          {
            type: "project",
            label: "Chrysalis",
          },
          {
            type: "project",
            label: "Project L2",
            projectSlug: "project-l2",
          },
        ],
      },
      {
        name: "Python",
        level: "maîtrise",
        details: [
          "POO",
          "Selenium",
          "Gestion de fichiers",
          "Appels API",
          "Scripts d'automation",
          "Petits outils",
          "Prototypes IA/RAG",
          "Walrus opérateur",
        ],
        usages: [
          { type: "company", label: "Design Therapy" },
          { type: "company", label: "Morfo" },
          {
            type: "project",
            label: "TautulliPython2Trakt",
            projectSlug: "tautulli-python-2-trakt",
          },
          {
            type: "project",
            label: "File-Encrypter",
            projectSlug: "file-encrypter",
          },
          {
            type: "project",
            label: "Minecraft Server Maker",
            projectSlug: "minecraft-server-maker",
          },
          {
            type: "project",
            label: "Global Goals Grinder",
            projectSlug: "global-goals-grinder",
          },
        ],
      },
      {
        name: "PHP",
        level: "application",
        details: ["Gestion de session", "PDO", "Symfony"],
        usages: [
          { type: "company", label: "S.A.R.L Les Cagots" },
          { type: "formation", label: "My Digital School" },
          { type: "project", label: "Help meeee", projectSlug: "help-meeee" },
        ],
      },
      {
        name: "Java",
        level: "notions",
        details: ["POO", "public/private/protected/final", "exceptions"],
        usages: [
          { type: "formation", label: "Faculté des Sciences" },
          {
            type: "project",
            label: "Manhunt Plus",
            projectSlug: "manhunt-plus",
          },
        ],
      },
      {
        name: "C",
        level: "notions",
        details: ["Pointeurs", "Structures de données", "Malloc", "websockets"],
        usages: [{ type: "formation", label: "Faculté des Sciences" }],
      },
    ],
  },
  {
    title: "Data",
    skills: [
      {
        name: "PostgreSQL",
        level: "maîtrise",
        details: [
          "Indexes (B-tree, GIN, etc.)",
          "Données géospatiales",
          "Vues",
          "Vues matérialisées",
          "Triggers",
          "Procédures",
          "ORM (Drizzle, Prisma, TypeORM)",
        ],
        usages: [
          { type: "company", label: "Design Therapy" },
          { type: "company", label: "Morfo" },
          {
            type: "project",
            label: "New York City Bikes",
            projectSlug: "new-york-city-bikes",
          },
        ],
      },
      {
        name: "MySQL",
        level: "maîtrise",
        details: [
          "Cuseur",
          "Indexes (B-tree, GIN, etc.)",
          "Données géospatiales",
          "Vues",
          "Vues matérialisées",
          "Triggers",
          "Fonctions",
        ],
        usages: [
          { type: "company", label: "S.A.R.L Les Cagots" },
          {
            type: "project",
            label: "Help meeee",
            projectSlug: "help-meeee",
          },
        ],
      },
      {
        name: "MongoDB",
        level: "application",
        details: [
          "document-based storage",
          "JSON-like documents",
          "embedded data models",
        ],
        usages: [
          { type: "project", label: "Mon premier bot discord" },
          {
            type: "project",
            label: "Mon Vieux Grimoire",
            projectSlug: "mon-vieux-grimoire",
          },
        ],
      },
      {
        name: "SQLite",
        level: "application",
        details: ["embedded database", "file-based storage"],
        usages: [{ type: "project", label: "Différents petits projets" }],
      },
      {
        name: "Object Storage",
        level: "application",
        details: ["Bucket", "S3", "RustFS", "Minio"],
        usages: [
          { type: "company", label: "Design Therapy" },
          { type: "company", label: "Morfo" },
        ],
      },
    ],
  },
  {
    title: "Mobile",
    skills: [
      {
        name: "React Native",
        level: "application",
        details: [
          "bundle APK / AAB",
          "Splash screen",
          "utilisation appareil photo",
        ],
        usages: [
          {
            type: "project",
            label: "Tam mais en mieux",
            projectSlug: "tam-mais-en-mieux",
          },
          {
            type: "project",
            label: "No Thank You",
            projectSlug: "no-thank-you",
          },
        ],
      },
      {
        name: "Flutter",
        level: "notions",
        details: [
          "Stateless/Stateful Widgets",
          "Provider/Consumer",
          "FutureBuilder",
          "Splash screen",
        ],
        usages: [{ type: "project", label: "Todo List" }],
      },
    ],
  },
  {
    title: "Testing",
    skills: [
      {
        name: "Jest / Vitest / Bun:test",
        level: "application",
        details: [
          "tests unitaires",
          "tests d'intégration",
          "mocking",
          "coverage",
          "CI/CD",
        ],
        usages: [
          { type: "company", label: "Design Therapy" },
          { type: "company", label: "Morfo" },
          {
            type: "project",
            label: "EDF Tempo Bot",
            projectSlug: "edf-tempo-bot",
          },
          { type: "project", label: "TinyCRUD", projectSlug: "tinycrud" },
        ],
      },
      {
        name: "Playwright",
        level: "application",
        details: ["tests end-to-end", "CI/CD"],
        usages: [{ type: "company", label: "Design Therapy" }],
      },
    ],
  },
  {
    title: "IA",
    skills: [
      {
        name: "Python",
        level: "notions",
        details: ["RAG", "prompting", "document context"],
        usages: [{ type: "company", label: "Design Therapy" }],
      },
    ],
  },
  {
    title: "DevOps",
    skills: [
      {
        name: "Docker",
        level: "maîtrise",
        details: [
          "Dockerfiles",
          "Multi-stage builds",
          "Volumes",
          "Docker Compose",
          "Healthchecks",
          "Scaling",
        ],
        usages: [
          { type: "company", label: "Design Therapy" },
          { type: "project", label: "Shell", projectSlug: "shell" },
          { type: "project", label: "Portfolio", projectSlug: "top" },
          { type: "project", label: "Tous mes projets self-hostés" },
        ],
      },
      {
        name: "Portainer",
        level: "maîtrise",
        details: ["+80 containers qui tournent"],
        usages: [{ type: "project", label: "Tous mes projets self-hostés" }],
      },
      {
        name: "Coolify",
        level: "application",
        details: ["prod et pré-prod"],
        usages: [
          { type: "company", label: "Design Therapy" },
          { type: "project", label: "Bibi & Co" },
        ],
      },
      {
        name: "GitHub Actions",
        level: "application",
        details: [
          "CI/CD",
          "Workflows",
          "Actions",
          "Runners",
          "Schedulers",
          "Cache/Artifacts",
          "Security Scanning",
          "Code Quality",
        ],
        usages: [
          { type: "company", label: "Design Therapy" },
          { type: "company", label: "Morfo" },
          {
            type: "project",
            label: "Projets personnels",
            projectSlug: "projets",
          },
        ],
      },
      {
        name: "Reverse Proxy",
        level: "application",
        details: [
          "Nginx",
          "Caddy",
          "Traefik",
          "TLS",
          "HAProxy",
          "Load Balancer (Round Robin)",
        ],
        usages: [
          { type: "company", label: "Design Therapy" },
          { type: "project", label: "Tous mes projets self-hostés" },
        ],
      },
    ],
  },
  {
    title: "Outils",
    skills: [
      {
        name: "Notion",
        level: "maîtrise",
        details: [
          "Pages",
          "Databases",
          "Sprint Planning",
          "Kanban",
          "Gantt",
          "Documentation",
        ],
        usages: [
          { type: "company", label: "Design Therapy" },
          { type: "company", label: "Morfo" },
          { type: "formation", label: "OpenClassrooms" },
          {
            type: "project",
            label: "Projets personnels",
            projectSlug: "projets",
          },
        ],
      },
      {
        name: "Git",
        level: "application",
        details: [
          "Branches",
          "Pull Requests",
          "Conventional Commits",
          "Rebase",
          "Forks",
          "Tag/Release",
          "Code Reviews",
          "PR/Issue Templates",
        ],
        usages: [
          { type: "company", label: "Design Therapy" },
          { type: "company", label: "Morfo" },
          { type: "formation", label: "OpenClassrooms" },
          {
            type: "project",
            label: "Projets personnels",
            projectSlug: "projets",
          },
        ],
      },
      {
        name: "Figma",
        level: "application",
        details: [
          "Zoning",
          "Wireframes",
          "Prototypes",
          "Auto-layout",
          "Composants",
          "Plugins",
          "Design Tokens",
          "Design Systems",
        ],
        usages: [{ type: "company", label: "Design Therapy" }],
      },
    ],
  },
];
