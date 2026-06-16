import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/processo")({
  head: () => ({
    meta: [
      { title: "Processo — Como trabalhamos | Urban Repair" },
      {
        name: "description",
        content:
          "Cinco etapas claras do primeiro contacto à entrega de chaves. Visita técnica grátis e orçamento detalhado em 72 horas.",
      },
      { property: "og:title", content: "Processo — Urban Repair" },
      {
        property: "og:description",
        content: "Como conduzimos uma obra do diagnóstico à garantia.",
      },
    ],
  }),
  component: ProcessoPage,
});

const steps = [
  {
    n: "01",
    t: "Primeiro contacto",
    d: "Liga, escreve ou preenche o formulário. Em menos de 24 horas marcamos uma visita técnica ao local. Sem questionários longos, sem chamadas insistentes.",
    duration: "Resposta em 24h",
  },
  {
    n: "02",
    t: "Visita técnica",
    d: "Vamos ao local com o coordenador de obra. Medimos, fotografamos, identificamos imprevistos prováveis e ouvimos exactamente o que pretende.",
    duration: "60 a 90 min · grátis",
  },
  {
    n: "03",
    t: "Orçamento escrito",
    d: "Recebe um documento detalhado, com cada material e cada tarefa discriminados, prazo previsto e condições de pagamento. Sem letras pequenas.",
    duration: "Em 72h após visita",
  },
  {
    n: "04",
    t: "Execução da obra",
    d: "Equipa própria, sem subempreitadas. Coordenador único, ponto de situação semanal por escrito e fotos de progresso. Limpeza diária do local.",
    duration: "Conforme orçamento",
  },
  {
    n: "05",
    t: "Entrega e garantia",
    d: "Visita conjunta de receção, lista de pontos finais resolvida na hora, garantia escrita entre 2 e 10 anos consoante o serviço e ficha técnica entregue.",
    duration: "Garantia até 10 anos",
  },
];

function ProcessoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Processo · 05 etapas"
        title="Sem mistérios. Sem letras pequenas. Cinco etapas, do contacto à garantia."
        intro="A maior parte das frustrações em obras vem da falta de transparência. Por isso, escrevemos o processo todo aqui — e cumprimo-lo da mesma forma há 17 anos."
        index="04 / 10"
      />

      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <ol className="space-y-0">
            {steps.map((s) => (
              <Reveal key={s.n}>
                <li className="grid grid-cols-1 gap-8 border-b border-border py-12 lg:grid-cols-[120px_1fr_220px] lg:gap-12 lg:py-20">
                  <span className="font-display text-7xl text-muted-foreground/50">{s.n}</span>
                  <div>
                    <h2 className="font-display text-4xl leading-tight lg:text-5xl">{s.t}</h2>
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{s.d}</p>
                  </div>
                  <div className="self-start border-l border-border pl-6">
                    <span className="eyebrow">Tempo</span>
                    <p className="mt-3 font-display text-xl">{s.duration}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />
    </>
  );
}