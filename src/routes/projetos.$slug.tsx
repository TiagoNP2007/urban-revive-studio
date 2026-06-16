import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    return {
      meta: p
        ? [
            { title: `${p.title} — Urban Repair` },
            { name: "description", content: p.outcome },
            { property: "og:title", content: p.title },
            { property: "og:description", content: p.outcome },
            { property: "og:image", content: p.cover },
            { name: "twitter:image", content: p.cover },
          ]
        : [],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-[1400px] px-5 py-32 lg:px-10">
      <h1 className="font-display text-5xl">Projeto não encontrado</h1>
      <Link to="/projetos" className="mt-6 inline-block underline">Ver todos</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-[1400px] px-5 py-32 lg:px-10">
      <h1 className="font-display text-4xl">Algo correu mal</h1>
      <p className="mt-4 text-muted-foreground">{error.message}</p>
      <button onClick={reset} className="mt-6 underline">Tentar novamente</button>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <section className="border-b border-border pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="flex items-center justify-between">
            <Link to="/projetos" className="eyebrow hover:text-foreground">← Projetos</Link>
            <span className="font-mono text-xs text-muted-foreground">{p.category}</span>
          </div>
          <Reveal className="mt-10">
            <h1 className="max-w-5xl text-balance font-display text-[clamp(2.25rem,6vw,5.5rem)] leading-[0.98]">
              {p.title}
            </h1>
          </Reveal>

          <dl className="mt-12 grid grid-cols-2 gap-px border border-border bg-border lg:grid-cols-4">
            {[
              { k: "Local", v: p.location },
              { k: "Ano", v: String(p.year) },
              { k: "Duração", v: p.duration },
              { k: "Área", v: p.area },
            ].map((m) => (
              <div key={m.k} className="bg-background p-6 lg:p-8">
                <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{m.k}</dt>
                <dd className="mt-3 font-display text-2xl">{m.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-border bg-ink">
        <div className="mx-auto max-w-[1400px]">
          <img
            src={p.cover}
            alt={p.title}
            className="h-[60vh] w-full object-cover lg:h-[80vh]"
          />
        </div>
      </section>

      <section className="border-b border-border py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-5 lg:grid-cols-3 lg:gap-12 lg:px-10">
          {[
            { k: "Desafio", v: p.challenge },
            { k: "Solução", v: p.solution },
            { k: "Resultado", v: p.outcome },
          ].map((b) => (
            <div key={b.k}>
              <span className="eyebrow">{b.k}</span>
              <p className="mt-6 text-pretty text-lg leading-relaxed">{b.v}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />

      <section className="border-t border-border py-16">
        <Link
          to="/projetos/$slug"
          params={{ slug: next.slug }}
          className="group mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 lg:px-10"
        >
          <div>
            <span className="eyebrow">Próximo projeto</span>
            <p className="mt-3 font-display text-3xl lg:text-5xl">{next.title}</p>
          </div>
          <ArrowUpRight className="h-10 w-10 shrink-0 transition-transform group-hover:translate-x-1" strokeWidth={1} />
        </Link>
      </section>
    </>
  );
}