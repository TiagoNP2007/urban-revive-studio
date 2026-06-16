import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { CTASection } from "@/components/site/CTASection";
import { categories, projects, type ProjectCategory } from "@/data/projects";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — Urban Repair" },
      {
        name: "description",
        content:
          "Casos de estudo de remodelações, impermeabilizações e reabilitações executadas pela Urban Repair em Mem Martins, Sintra, Cascais e Lisboa.",
      },
      { property: "og:title", content: "Projetos — Urban Repair" },
      {
        property: "og:description",
        content: "Obras executadas com prazos cumpridos e garantia escrita.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectCategory | "Todos">("Todos");
  const list = filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="Projetos · arquivo"
        title="Obras que falam por nós."
        intro="Uma seleção dos últimos 24 meses, organizada por especialidade. Cada caso inclui desafio, solução e resultado — para que veja exactamente como trabalhamos."
        index="02 / 10"
      />

      <section className="border-b border-border py-10 lg:py-14">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="flex flex-wrap gap-2">
            {(["Todos", ...categories] as const).map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                  filter === c
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.05}>
                <Link
                  to="/projetos/$slug"
                  params={{ slug: p.slug }}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                    <img
                      src={p.cover}
                      alt={p.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <span className="eyebrow">{p.category} · {p.year}</span>
                      <h3 className="mt-2 font-display text-2xl leading-snug">{p.title}</h3>
                      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {p.location}
                      </p>
                    </div>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-foreground" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          {list.length === 0 && (
            <p className="text-muted-foreground">Sem projetos nesta categoria ainda.</p>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}