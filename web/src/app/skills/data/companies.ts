type CompanyStack = {
  name: string;
  tags: string[];
  url: string;
};

export const companyStacks: CompanyStack[] = [
  {
    name: "Design Therapy",
    url: "https://design-therapy.fr",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Coolify",
      "Python",
      "IA (RAG)",
    ],
  },
  {
    name: "Morfo",
    url: "https://morfo.rest",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Python",
      "Vercel",
      "AWS",
      "Supabase",
    ],
  },
];
