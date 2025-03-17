/* eslint-disable react/no-unescaped-entities */
import { Card } from "@/components/Card";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillCard } from "@/components/SkillCard";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#1f153d] to-[#15162c] text-white">
      <h1 className="mx-auto my-8 flex flex-col items-center justify-center gap-6 text-4xl font-extrabold tracking-wide text-white sm:flex-row sm:text-4xl md:text-5xl lg:m-12 lg:text-6xl">
        Marc-Antoine<span className="text-[hsl(280,100%,70%)]">Mouttet</span>
      </h1>

      <div className="flex flex-col gap-4 px-12">
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
                Je suis actuellement étudiant en alternance Développeur Web chez
                Morfo 🌱. J'ai fait 2 années de Licence CMI Informatique à
                l'Université de Montpellier et suit désormais un cursus en
                alternance au sein d'OpenClassrooms. J'ai pour objectif de
                continuer sur un Bachelor développeur Web puis ensuite sur un
                Master FullStack. J'aime réaliser des projets qui répondent à
                des besoins personnels, ou contribuer à l'open source.
              </p>
            </Card>
          </div>
        </div>
        {/* Projets */}
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
            link="https://github.com/TheGeeKing/oc-4-photographe"
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
  );
}
