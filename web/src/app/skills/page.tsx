import Link from "next/link";
import type { Metadata } from "next";
import { ViewTransition } from "react";
import { SkillCardHintStorage } from "@/components/SkillCardHintStorage";
import { FaArrowLeft } from "react-icons/fa6";
import { SidebarCard } from "./components/SidebarCard";
import { SkillInventory } from "./components/SkillInventory";
import { Tag } from "./components/Tag";
import { skillCategories } from "./data/skills";
import { companyStacks } from "./data/companies";
import { selfHostedServices } from "./data/selfhosted";
import { siteConfig } from "../seo";

const skillsDescription =
  "Compétences techniques : React, Next.js, TypeScript, Python, Docker, DevOps, projets professionnels et services self-hostés.";

export const metadata: Metadata = {
  title: "Compétences techniques",
  description: skillsDescription,
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    title: `Compétences | ${siteConfig.name}`,
    description: skillsDescription,
    url: "/skills",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Compétences | ${siteConfig.name}`,
    description: skillsDescription,
  },
};

const skillsUrl = new URL("/skills", siteConfig.url).toString();

const skillJsonLdItems = skillCategories.flatMap((category) =>
  category.skills.map((skill) => ({
    category: category.title,
    level: skill.level,
    name: skill.name,
  })),
);

const skillsJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${skillsUrl}#skills`,
  url: skillsUrl,
  name: `Compétences | ${siteConfig.name}`,
  description: skillsDescription,
  inLanguage: "fr-FR",
  mainEntity: {
    "@type": "ItemList",
    name: "Compétences techniques",
    itemListElement: skillJsonLdItems.map((skill, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "DefinedTerm",
        name: skill.name,
        description: `${skill.category} - niveau ${skill.level}`,
      },
    })),
  },
};

const nextSteps = [
  "Stress testing: k6, stress/load/performance/scalability testing.",
  "DevOps: k8s, k3s, observabilité, grafana, swarm/cluster, environnements reproductibles.",
];

export default function SkillsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(skillsJsonLd) }}
      />
      <ViewTransition
        default="none"
        enter={{ "nav-forward": "overlay-in", default: "none" }}
        exit={{ "nav-back": "overlay-out", default: "none" }}
      >
        <main className="min-h-dvh bg-black/20 px-3 py-4 text-white sm:px-6 lg:px-8">
          <SkillCardHintStorage markSeen />
          <section className="mx-auto grid h-[calc(100dvh-2rem)] w-full max-w-7xl grid-rows-[auto_1fr] overflow-hidden rounded-xl border border-white/10 bg-[#16172c] shadow-2xl shadow-black/40">
            <header className="flex flex-row items-center justify-between gap-4 border-b border-white/10 bg-white/[0.04] p-4 sm:p-5">
              <div>
                {/* <p className="text-xs font-semibold uppercase tracking-wide text-white/45">
                Notes techniques
              </p> */}
                <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
                  Compétences
                </h1>
              </div>

              <Link
                aria-label="Retour"
                className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[hsl(280,100%,70%)]"
                href="/"
                transitionTypes={["nav-back"]}
              >
                <FaArrowLeft aria-hidden="true" className="h-4 w-4" />
                Retour
              </Link>
            </header>

            <div className="grid gap-4 overflow-y-auto p-4 lg:grid-cols-[1fr_21rem] lg:p-5">
              <SkillInventory categories={skillCategories} />

              <aside className="grid h-fit gap-4 lg:sticky lg:top-5">
                <SidebarCard title="Utilisé en entreprise">
                  <div className="mt-4 grid gap-4">
                    {companyStacks.map((company) => (
                      <div key={company.name}>
                        <h3 className="text-sm font-semibold text-white/80">
                          <Link
                            href={company.url}
                            rel="noopener"
                            target="_blank"
                          >
                            {company.name}
                          </Link>
                        </h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {company.tags.map((tag) => (
                            <Tag key={tag} variant="company">
                              {tag}
                            </Tag>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </SidebarCard>

                <SidebarCard title="En cours / Prochainement">
                  <ol className="mt-4 grid gap-3">
                    {nextSteps.map((step, index) => (
                      <li
                        className="grid grid-cols-[1.75rem_1fr] gap-3 text-sm leading-6 text-white/75"
                        key={step}
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white/70">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </SidebarCard>
                <SidebarCard title="Une partie de mes services self-hostés">
                  <ol className="mt-2 flex flex-wrap gap-2">
                    {selfHostedServices.map((service) => (
                      <li key={service.name}>
                        <Tag
                          href={service.url}
                          target={service.url ? "_blank" : undefined}
                          variant="project"
                        >
                          {service.name}
                        </Tag>
                      </li>
                    ))}
                  </ol>
                </SidebarCard>
              </aside>
            </div>
          </section>
        </main>
      </ViewTransition>
    </>
  );
}
