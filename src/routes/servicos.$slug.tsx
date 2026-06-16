import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { getService, services } from "@/data/services";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    return {
      meta: s
        ? [
            { title: `${s.title} — Urban Repair` },
            { name: "description", content: s.short },
            { property: "og:title", content: `${s.title} — Urban Repair` },
            { property: "og:description", content: s.short },
          ]
        : [],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-[1400px] px-5 py-32 lg:px-10">
      <h1 className="font-display text-5xl">Serviço não encontrado</h1>
      <Link to="/servicos" className="mt-6 inline-block underline">
        Voltar aos serviços
      </Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-[1400px] px-5 py-32 lg:px-10">
      <h1 className="font-display text-4xl">Algo correu mal</h1>
      <p className="mt-4 text-muted-foreground">{error.message}</p>
      <button onClick={reset} className="mt-6 underline">Tentar novamente</button>
    </div>
  ),
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const idx = services.findIndex((s) => s.slug === service.slug);
  const next = services[(idx + 1) % services.length];

  return (
    <>
      <section className="border-b border-border pt-16 pb-20 lg:pt-28 lg:pb-32">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="flex items-center justify-between">
            <Link to="/servicos" className="eyebrow hover:text-foreground">
              ← Serviços
            </Link>
            <span className="font-mono text-xs text-muted-foreground">{service.index}</span>
          </div>
          <Reveal className="mt-10">
            <h1 className="max-w-5xl text-balance font-display text-[clamp(2.5rem,6.5vw,6rem)] leading-[0.95]">
              {service.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 max-w-3xl">
            <p className="text-pretty text-xl leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </Reveal>

          <dl className="mt-16 grid grid-cols-2 gap-px border border-border bg-border lg:grid-cols-4">
            {[
              { k: "Prazo médio", v: service.duration },
              { k: "Garantia", v: service.warranty },
              { k: "Equipa", v: "Própria" },
              { k: "Orçamento", v: "Em 72h" },
            ].map((m) => (
              <div key={m.k} className="bg-background p-6 lg:p-8">
                <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{m.k}</dt>
                <dd className="mt-3 font-display text-2xl">{m.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-border py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-5 lg:grid-cols-[1fr_1.4fr] lg:gap-24 lg:px-10">
          <div>
            <span className="eyebrow">O que está incluído</span>
            <h2 className="mt-5 font-display text-4xl leading-[1.05]">
              Trabalho coberto neste serviço.
            </h2>
          </div>
          <ul className="space-y-4">
            {service.scope.map((item) => (
              <li key={item} className="flex items-start gap-4 border-b border-border pb-4 text-lg">
                <Check className="mt-1 h-5 w-5 shrink-0" strokeWidth={1.5} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border bg-bone py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div>
            <span className="eyebrow">Materiais que usamos</span>
            <h2 className="mt-5 font-display text-4xl leading-[1.05]">
              Marcas certificadas, sem atalhos.
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Trabalhamos apenas com fornecedores que nos dão garantia de
              produto, para que a nossa garantia de mão-de-obra valha alguma
              coisa.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-px self-start bg-border sm:grid-cols-3">
            {service.materials.map((m) => (
              <li key={m} className="bg-bone p-6 text-center font-display text-2xl">
                {m}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <span className="eyebrow">Sinais de que precisa</span>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05]">
            Considere falar connosco se reconhece algum destes cenários.
          </h2>
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {service.whenYouNeed.map((w, i) => (
              <li
                key={w}
                className="flex gap-6 border-t border-border pt-6"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-xl leading-snug">{w}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />

      <section className="border-t border-border py-16">
        <Link
          to="/servicos/$slug"
          params={{ slug: next.slug }}
          className="group mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 lg:px-10"
        >
          <div>
            <span className="eyebrow">Próximo serviço · {next.index}</span>
            <p className="mt-3 font-display text-3xl lg:text-5xl">{next.title}</p>
          </div>
          <ArrowUpRight className="h-10 w-10 shrink-0 transition-transform group-hover:translate-x-1" strokeWidth={1} />
        </Link>
      </section>
    </>
  );
}