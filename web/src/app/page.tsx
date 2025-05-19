/* eslint-disable react/no-unescaped-entities */
import { Card } from "@/components/Card";
import Dot from "@/components/Dot";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { SkillCard } from "@/components/SkillCard";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main>
        <h1 className="mx-auto my-8 flex flex-col items-center justify-center gap-6 text-4xl font-extrabold tracking-wide text-white sm:flex-row sm:text-4xl md:text-5xl lg:m-12 lg:text-6xl">
          Marc-Antoine<span className="text-[hsl(280,100%,70%)]">Mouttet</span>
        </h1>

        <div className="mb-12 flex flex-col gap-4 px-12 lg:px-28">
          <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3">
            <div className="col-span-1">
              <SkillCard
                title="Skills"
                stack={{
                  python: "maîtrise",
                  nextjs: "application",
                  // javascript: "application",
                  react: "application",
                  typescript: "application",
                  // nodejs: "application",
                  tailwindcss: "application",
                  php: "application",
                }}
              />
            </div>
            <div className="col-span-2">
              <Card>
                <p className="text-xl">
                  Je suis actuellement étudiant en alternance Développeur Web
                  chez Morfo 🌱. J'ai fait 2 années de Licence CMI Informatique
                  à l'Université de Montpellier et je suis désormais un cursus
                  en alternance au sein d'OpenClassrooms. J'ai pour objectif de
                  continuer sur un Bachelor développeur Web puis ensuite sur un
                  Master FullStack. J'aime réaliser des projets qui répondent à
                  des besoins personnels, ou contribuer à l'open source.
                </p>
              </Card>
            </div>
          </div>
          <Section title="Projets Personnels" />
          <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 [&>*]:min-h-52">
            <ProjectCard
              title="Projet L2"
              description="Un site avec 3 jeux de cartes en ligne. Projet réalisé en plusieurs phases de rush de 4 jours."
              link="https://projet-l2.home.mma.dev"
              stack={{ react: true, javascript: true, socketio: true }}
            />
            <ProjectCard
              title="tam-mais-en-mieux"
              description="Une application mobile pour voir les horaires des transports en commun de Montpellier"
              stack={{ react: true, typescript: true }}
            />
            <ProjectCard
              title="control-my-spotify"
              description="Un site pour contrôler ma musique Spotify."
              stack={{ react: true, typescript: true, nextjs: true }}
            />
            <ProjectCard
              title="umontpellier-ical-api"
              description="Une API pour récupérer l'emploi du temps de l'Université de Montpellier"
              link="https://github.com/TheGeeKing/umontpellier-ical-api"
              stack={{ nodejs: true, javascript: true }}
            />
            <ProjectCard
              title="TautulliPython2Trakt"
              description="Un script pour synchroniser vos films et séries vues et/ou possédez avec Tautulli vers Trakt.tv."
              link="https://github.com/TheGeeKing/TautulliPython2Trakt"
              stack={{ python: true }}
            />
            <ProjectCard
              title="Help meeee"
              description="Améliorer la qualité d'enseignement des élèves"
              link="https://mma.dev/help_me/"
              stack={{ css: true, html: true, javascript: true, php: true }}
            />
            <ProjectCard
              title="File-Encrypter"
              description="Decrypt, modify, encrypt your file!"
              link="https://github.com/TheGeeKing/File-Encrypter"
              stack={{ python: true }}
            />
            <ProjectCard
              title="Global-Goals-Grinder"
              description="Grind some money on Samsung Global Goals app to donate to good causes :)"
              link="https://github.com/TheGeeKing/Global-Goals-Grinder"
              stack={{ python: true }}
            />
            <ProjectCard
              title="Discord-RPC-Maker"
              description="Broadcast a custom RPC to your Discord status"
              link="https://github.com/TheGeeKing/Discord-RPC-Maker"
              stack={{ python: true }}
            />
            <ProjectCard
              title="Minecraft-Server-Maker"
              description="Make your own Minecraft server easily!"
              link="https://github.com/TheGeeKing/Minecraft-Server-Maker"
              stack={{ python: true }}
            />
            <ProjectCard
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
              title="Bookie"
              description="Créez la page d'accueil d'une agence de voyage"
              link="https://github.com/TheGeeKing/oc-2-bookie"
              stack={{ css: true, html: true }}
            />
            <ProjectCard
              title="Portfolio - Sophie Bluel"
              description="Créez une page web dynamique"
              link="https://github.com/TheGeeKing/oc-3-architecte"
              stack={{ css: true, javascript: true }}
            />
            <ProjectCard
              title="Photographe - Nina Carducci"
              description="Débuggez et optimisez un site de photographe"
              link="https://github.com/TheGeeKing/oc-4-photographe"
              stack={{ html: true }}
            />
            <ProjectCard
              title="Kasa"
              description="Créez une application web de location immobilière"
              link="https://github.com/TheGeeKing/oc-5-immobilier"
              stack={{ scss: true, react: true, typescript: true }}
            />
            <ProjectCard
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
        >
          LinkedIn
        </Link>
        <Dot />
        <Link
          className="text-[hsl(280,100%,70%)]"
          href="https://github.com/TheGeeKing"
        >
          GitHub
        </Link>
      </footer>
    </>
  );
}
