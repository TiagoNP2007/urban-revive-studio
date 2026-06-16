import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { CTASection } from "@/components/site/CTASection";
import { services } from "@/data/services";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Urban Repair" },
      {
        name: "description",
        content:
          "Impermeabilizações, remodelações, fachadas, canalizações, eletricidade, revestimentos, afagamentos e construção civil. Oito especialidades, uma equipa.",
      },
      { property: "og:title", content: "Serviços — Urban Repair" },
      {
        property: "og:description",
        content:
          "Tudo o que precisa para a sua obra, sem subempreitadas e com garantia escrita.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Serviços · 08"
        title="Oito especialidades. Uma única responsabilidade — a sua obra entregue no prazo."
        intro="Coordenamos internamente todas as fases da construção e remodelação, do diagnóstico ao acabamento. Sem intermediários, sem cadeias de responsabilidade diluídas."
        index="01 / 10"
      />

      <section className="border-b border-border">
        <ul className="mx-auto max-w-[1400px] px-5 lg:px-10">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                to="/servicos/$slug"
                params={{ slug: s.slug }}
                className="group grid grid-cols-1 items-start gap-6 border-b border-border py-10 lg:grid-cols-[80px_1fr_auto] lg:gap-10 lg:py-14"
              >
                <span className="font-mono text-sm text-muted-foreground">{s.index}</span>
                <div>
                  <h2 className="font-display text-3xl leading-tight transition group-hover:translate-x-1 lg:text-5xl">
                    {s.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-muted-foreground">{s.short}</p>
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <span>Prazo · {s.duration}</span>
                    <span>Garantia · {s.warranty}</span>
                  </div>
                </div>
                <ArrowUpRight className="h-6 w-6 text-muted-foreground transition group-hover:text-foreground" strokeWidth={1.25} />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CTASection />
    </>
  );
}