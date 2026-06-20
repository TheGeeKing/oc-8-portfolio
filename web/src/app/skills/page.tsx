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
        <main className="min-h-dvh bg-[#101116] px-5 py-8 text-[#f4f1ea] sm:px-8 lg:px-10">
          <SkillCardHintStorage markSeen />
          <section className="mx-auto w-full max-w-7xl">
            <header className="flex flex-row items-start justify-between gap-6 border-b border-white/10 pb-8 pt-4">
              <div>
                <p className="mb-3 text-sm font-medium text-[#b9a2d8]">
                  Marc-Antoine Mouttet
                </p>
                <h1 className="text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
                  Compétences techniques
                </h1>
                <p className="mt-4 max-w-2xl leading-7 text-white/60">
                  Les technologies que j&apos;ai utilisées en entreprise, en
                  formation et pour construire mes propres projets.
                </p>
              </div>

              <Link
                aria-label="Retour"
                className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#b995e5]"
                href="/"
                transitionTypes={["nav-back"]}
              >
                <FaArrowLeft aria-hidden="true" className="h-4 w-4" />
                Retour
              </Link>
            </header>

            <div className="grid gap-12 py-10 lg:grid-cols-[1fr_20rem]">
              <SkillInventory categories={skillCategories} />

              <aside className="order-first grid h-fit gap-8 [&>section:first-child]:border-t-0 [&>section:first-child]:pt-0 lg:order-none lg:sticky lg:top-8">
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

                <SidebarCard title="Ce que j'approfondis">
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
                          className={
                            service.url
                              ? "border-[#b995e5]/35 bg-[#b995e5]/10 text-[#d8c5ef] underline decoration-[#b995e5]/40 underline-offset-4 hover:border-[#b995e5]/60 hover:bg-[#b995e5]/20"
                              : undefined
                          }
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
