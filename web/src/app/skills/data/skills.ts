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
        name: "TypeScript",
        level: "application",
        details: [
          "component props",
          "typed data models",
          "utility types",
          "API response shapes",
          "safer refactors",
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
          { type: "project", label: "Kasa", projectSlug: "kasa" },
          {
            type: "project",
            label: "Tam mais en mieux",
            projectSlug: "tam-mais-en-mieux",
          },
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
        name: "Node.js",
        level: "application",
        details: [
          // "REST endpoints",
          // "JSON responses",²
          // "external data fetching",
          // "server-side logic",
          "API REST",
          "Express",
          "Fastify",
          "Middleware",
        ],
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
            label: "EDF Tempo Bot",
            projectSlug: "edf-tempo-bot",
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
          "Gestion de fichiers",
          "Appels API",
          "Scripts d'automation",
          "Petits outils",
          "Prototypes IA/RAG",
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
        details: [
          "server-side scripting",
          "database integration",
          "form handling",
          "session management",
        ],
        usages: [
          { type: "project", label: "Help meeee", projectSlug: "help-meeee" },
        ],
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
        name: "Bucket Storage",
        level: "application",
        details: ["S3", "RustFS"],
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
        details: ["bundle APK ou AAB", "utilisation appareil photo"],
        usages: [
          {
            type: "project",
            label: "Tam mais en mieux",
            projectSlug: "tam-mais-en-mieux",
          },
        ],
      },
      {
        name: "Flutter",
        level: "notions",
        details: ["Stateless/Stateful Widgets", "Provider/Consumer"],
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
        details: ["unit tests", "mocking", "coverage", "CI/CD"],
        usages: [
          { type: "company", label: "Design Therapy" },
          { type: "company", label: "Morfo" },
          { type: "project", label: "EDF Tempo Bot" },
        ],
      },
      {
        name: "Playwright",
        level: "application",
        details: ["browser tests", "e2e tests", "CI/CD"],
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
    title: "Tooling / DevOps",
    skills: [
      {
        name: "Docker",
        level: "maîtrise",
        details: ["Dockerfiles", "Multi-stage builds", "Volumes"],
        usages: [
          { type: "company", label: "Morfo" },
          { type: "project", label: "Portfolio", projectSlug: "top" },
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
        name: "Git",
        level: "application",
        details: [
          "Branches",
          "Pull Requests",
          "Forks",
          "Conventional Commits",
          "Tag/Release",
          "PR Reviews",
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
    ],
  },
];
