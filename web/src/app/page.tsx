/* eslint-disable react/no-unescaped-entities */
import { Card } from "@/components/Card";
import Dot from "@/components/Dot";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectCardTargetSync } from "@/components/ProjectCardTargetSync";
import { Section } from "@/components/Section";
import { SkillCard } from "@/components/SkillCard";
import Link from "next/link";
import { siteConfig } from "./seo";

const profileUrl = siteConfig.url.toString();

const projectJsonLdItems = [
  {
    name: "Projet L2",
    description:
      "Site avec 3 jeux de cartes en ligne, réalisé en plusieurs phases de rush de 4 jours.",
    url: "https://projet-l2.home.mma.dev",
  },
  {
    name: "New York City Bikes",
    description:
      "Projet d'optimisation de performance avec une base de données de plus de 25 millions de lignes.",
    url: "https://nyc-bike-stats.mma.dev",
  },
  {
    name: "TinyCRUD",
    description:
      "Alternative à crudcrud.com pour disposer rapidement d'une API REST de prototypage.",
    url: "https://tinycrud.dev",
  },
  {
    name: "Bun Chat",
    description: "Chat en temps réel avec Bun et Socket.IO.",
    url: "https://chat.mma.dev",
  },
  {
    name: "Shell",
    description:
      "Environnement containerisé pour exécuter des commandes shell en ligne.",
    url: "https://shell.mma.dev",
  },
  {
    name: "Manhunt Plus",
    description: "Fork d'un plugin Minecraft amélioré.",
    url: "https://github.com/TheGeeKing/manhunt-plus",
  },
] as const;

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${profileUrl}#profile`,
  url: profileUrl,
  name: siteConfig.title,
  description: siteConfig.description,
  inLanguage: "fr-FR",
  mainEntity: {
    "@type": "Person",
    "@id": `${profileUrl}#person`,
    name: siteConfig.name,
    url: profileUrl,
    jobTitle: "Développeur Full-Stack & DevOps",
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "Bun",
      "Tailwind CSS",
      "SCSS",
      "CSS",
      "HTML",
      "JavaScript",
      "Docker",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQLite",
      "Redis",
      "Valkey",
      "DevOps",
      "Développement web",
      "Développement Full-Stack",
      "Développement DevOps",
    ],
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  },
};

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${profileUrl}#projects`,
  name: "Projets de Marc-Antoine Mouttet",
  itemListElement: projectJsonLdItems.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: project.name,
      description: project.description,
      url: project.url,
      creator: {
        "@id": `${profileUrl}#person`,
      },
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      <ProjectCardTargetSync />
      <main id="top">
        <h1 className="mx-auto my-8 flex flex-col items-center justify-center gap-6 text-4xl font-extrabold tracking-wide text-white sm:flex-row sm:text-4xl md:text-5xl lg:m-12 lg:text-6xl">
          Marc-Antoine<span className="text-[hsl(280,100%,70%)]">Mouttet</span>
        </h1>

        <div className="mb-12 flex flex-col gap-4 px-4 sm:px-12 md:px-20 lg:px-28">
          <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3">
            <div className="col-span-1">
              <SkillCard
                ariaLabel="Voir le détail de mes compétences"
                href="/skills"
                title="Compétences"
                transitionTypes={["nav-forward"]}
                stack={{
                  typescript: "maîtrise",
                  python: "maîtrise",
                  react: "maîtrise",
                  nextjs: "maîtrise",
                  docker: "maîtrise",
                  tailwindcss: "application",
                  // javascript: "application",
                  // nodejs: "application",
                  // php: "application",
                }}
              />
            </div>
            <div className="col-span-2">
              <Card>
                <p className="text-xl">
                  Développeur full-stack en alternance chez Design Therapy 🖌️,
                  je conçois et développe des applications web avec une
                  attention particulière portée à la maintenabilité, à
                  l'expérience utilisateur et à l'infrastructure. Je travaille
                  principalement avec React, Next.js, TypeScript et Node.js, du
                  frontend au backend, en passant par le déploiement et
                  l'administration de services. En parallèle de mes études, je
                  développe et héberge mes propres projets autour du
                  self-hosting, du DevOps et des architectures web modernes.
                  J'aime construire des solutions concrètes, comprendre le
                  fonctionnement des outils que j'utilise et expérimenter de
                  nouvelles technologies.
                </p>
              </Card>
            </div>
          </div>
          <Section title="Projets Personnels" />
          <div
            className="grid scroll-mt-8 grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 [&>*]:min-h-52"
            id="projets"
          >
            <ProjectCard
              id="project-l2"
              title="Projet L2"
              description="Un site avec 3 jeux de cartes en ligne. Projet réalisé en plusieurs phases de rush de 4 jours."
              link="https://projet-l2.home.mma.dev"
              stack={{ react: true, javascript: true, socketio: true }}
            />
            <ProjectCard
              id="tam-mais-en-mieux"
              title="Tam mais en mieux"
              description="Une application mobile pour voir les horaires des transports en commun de Montpellier."
              stack={{ react: true, typescript: true }}
            />
            <ProjectCard
              id="new-york-city-bikes"
              title="New York City Bikes"
              description="Un projet ayant pour but de me challenger sur l'optimisation de performance avec une base de données ayant +300M de lignes."
              link="https://nyc-bike-stats.mma.dev"
              stack={{
                react: true,
                typescript: true,
                nextjs: true,
                tailwindcss: true,
              }}
            />
            <ProjectCard
              id="control-my-spotify"
              title="Control My Spotify"
              description="Un site pour que n'importe qui puisse ajouter des morceaux à ma queue Spotify."
              stack={{ react: true, typescript: true, nextjs: true }}
            />
            <ProjectCard
              id="tinycrud"
              title="TinyCRUD"
              description="Une alternative avec BEAUCOUP moins de limites que crudcrud.com permettant d'avoir rapidement une API REST pour faire des POCs."
              link="https://tinycrud.dev"
              stack={{
                bun: true,
                react: true,
                typescript: true,
                tailwindcss: true,
              }}
            />
            <ProjectCard
              id="no-thank-you"
              title="No Thank You"
              description="Rétro-ingénierie sur une application mobile trop lente au démarrage afin de développer mon propre frontend."
              stack={{ react: true, typescript: true }}
            />
            <ProjectCard
              id="manhunt-plus"
              title="Manhunt Plus"
              link="https://github.com/TheGeeKing/manhunt-plus"
              description="Fork d'un plugin minecraft afin de l'améliorer."
              stack={{ java: true }}
            />
            <ProjectCard
              id="bun-chat"
              title="Bun Chat"
              description="Un chat en temps réel avec Bun et Socket.IO."
              link="https://chat.mma.dev"
              stack={{ typescript: true, socketio: true, bun: true }}
            />
            <ProjectCard
              id="shell"
              title="Shell"
              description="Un environnement containerisé pour exécuter des commandes shell en ligne."
              link="https://shell.mma.dev"
              stack={{ typescript: true, socketio: true, react: true }}
            />
            <ProjectCard
              id="edf-tempo-bot"
              title="EDF Tempo Bot"
              description="Un bot qui notifie tous les jours des prévisions des 9 prochains jours EDF Tempo."
              link="https://t.me/tempo_edf_week"
              stack={{ typescript: true, bun: true }}
            />
            <ProjectCard
              id="umontpellier-ical-api"
              title="umontpellier-ical-api"
              description="Une API indexant l'emploi du temps de l'Université de Montpellier."
              link="https://github.com/TheGeeKing/umontpellier-ical-api"
              stack={{ nodejs: true, javascript: true }}
            />
            <ProjectCard
              id="tautulli-python-2-trakt"
              title="TautulliPython2Trakt"
              description="Un script pour synchroniser vos films et séries vues et/ou possédez avec Tautulli vers Trakt.tv."
              link="https://github.com/TheGeeKing/TautulliPython2Trakt"
              stack={{ python: true }}
            />
            <ProjectCard
              id="help-meeee"
              title="Help meeee"
              description="Améliorer la qualité d'enseignement des élèves."
              link="https://old.mma.dev/help_me/"
              stack={{ css: true, html: true, javascript: true, php: true }}
            />
            <ProjectCard
              id="file-encrypter"
              title="File-Encrypter"
              description="Decrypt, modify, encrypt your file!"
              link="https://github.com/TheGeeKing/File-Encrypter"
              stack={{ python: true }}
            />
            <ProjectCard
              id="global-goals-grinder"
              title="Global-Goals-Grinder"
              description="Permet d'automatiser le visionnage de pubs pour ensuite faire des donations aux Global Goals."
              link="https://github.com/TheGeeKing/Global-Goals-Grinder"
              stack={{ python: true }}
            />
            <ProjectCard
              id="discord-rpc-maker"
              title="Discord-RPC-Maker"
              description="Une interface simple pour personnaliser son activité sur Discord."
              link="https://github.com/TheGeeKing/Discord-RPC-Maker"
              stack={{ python: true }}
            />
            <ProjectCard
              id="minecraft-server-maker"
              title="Minecraft-Server-Maker"
              description="Un petit GUI pour créer un serveur Minecraft."
              link="https://github.com/TheGeeKing/Minecraft-Server-Maker"
              stack={{ python: true }}
            />
            <ProjectCard
              id="lock-pressed-keys"
              title="Lock-pressed-keys"
              description="Define a key that, when pressed, locks the previous keys in the down position. Ideal for games without an auto run key."
              link="https://github.com/TheGeeKing/Lock-pressed-keys"
              stack={{ python: true }}
            />
          </div>
          <Section title="Projets OpenClassrooms" />

          {/* Projets OC */}
          <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 [&>*]:min-h-52">
            <ProjectCard
              id="bookie"
              title="Bookie"
              description="Créez la page d'accueil d'une agence de voyage"
              link="https://github.com/TheGeeKing/oc-2-bookie"
              stack={{ css: true, html: true }}
            />
            <ProjectCard
              id="portfolio-sophie-bluel"
              title="Portfolio - Sophie Bluel"
              description="Créez une page web dynamique"
              link="https://github.com/TheGeeKing/oc-3-architecte"
              stack={{ css: true, javascript: true }}
            />
            <ProjectCard
              id="nina-carducci"
              title="Photographe - Nina Carducci"
              description="Débuggez et optimisez un site de photographe"
              link="https://github.com/TheGeeKing/oc-4-photographe"
              stack={{ html: true }}
            />
            <ProjectCard
              id="kasa"
              title="Kasa"
              description="Créez une application web de location immobilière"
              link="https://github.com/TheGeeKing/oc-5-immobilier"
              stack={{ scss: true, react: true, typescript: true }}
            />
            <ProjectCard
              id="mon-vieux-grimoire"
              title="Mon Vieux Grimoire"
              description="Développez le back-end d'un site de notation de livres"
              link="https://github.com/TheGeeKing/oc-6-livres"
              stack={{ javascript: true }}
            />
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-center gap-4 bg-white/10 p-4 text-white">
        <Link
          className="text-[hsl(280,100%,70%)]"
          href="https://www.linkedin.com/in/mma--/"
          data-umami-event="link-click"
          data-umami-event-link="LinkedIn"
        >
          LinkedIn
        </Link>
        <Dot />
        <Link
          className="text-[hsl(280,100%,70%)]"
          href="https://github.com/TheGeeKing"
          data-umami-event="link-click"
          data-umami-event-link="GitHub"
        >
          GitHub
        </Link>
        <Dot />
        <Link
          className="text-[hsl(280,100%,70%)]"
          download
          href="/CV_MOUTTET_Marc-Antoine.pdf"
          data-umami-event="file-download"
          data-umami-event-file="CV_MOUTTET_Marc-Antoine.pdf"
        >
          CV
        </Link>
      </footer>
    </>
  );
}
