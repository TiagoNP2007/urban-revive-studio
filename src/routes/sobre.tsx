import { createFileRoute } from "@tanstack/react-router";
import teamImg from "@/assets/team.jpg";
import { PageHeader } from "@/components/site/PageHeader";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Urban Repair" },
      {
        name: "description",
        content:
          "Quem somos, no que acreditamos e a equipa que vai estar na sua obra. Construção civil em Mem Martins desde 2008.",
      },
      { property: "og:title", content: "Sobre — Urban Repair" },
      {
        property: "og:description",
        content: "Uma equipa pequena, certificada e responsável pela obra do início ao fim.",
      },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre · 17 anos"
        title="Uma equipa pequena. Uma responsabilidade inteira."
        intro="Nascemos em 2008, em Mem Martins, com a convicção de que a construção civil em Portugal precisa de menos promessas e mais cumprimento. Tudo o resto, construímos a partir daí."
        index="03 / 10"
      />

      <section className="border-b border-border py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-5 lg:grid-cols-[1fr_1.2fr] lg:gap-24 lg:px-10">
          <div>
            <span className="eyebrow">A nossa história</span>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05]">
              Começámos como dois. Hoje somos doze.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>
              Quando o Pedro e o António fundaram a Urban Repair em 2008, a ideia
              era simples: oferecer uma alternativa séria às empresas que entram
              numa casa, deixam tudo a meio e desaparecem. Começaram com um
              telefone, uma carrinha e uma escada.
            </p>
            <p>
              Dezassete anos depois, somos uma equipa de doze profissionais com
              especialidades complementares — pedreiros, canalizadores,
              eletricistas, pintores, ladrilhadores — e mantemos a mesma regra
              não-escrita: o que prometemos, cumprimos. No prazo e no preço
              acordado.
            </p>
            <p>
              Trabalhamos para mais de 1.200 clientes desde então. Muitos
              voltaram. Quase todos recomendaram. É a única estatística que
              acreditamos verdadeiramente.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-bone py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <span className="eyebrow">No que acreditamos</span>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {[
              {
                t: "Prazo é palavra dada",
                d: "Se dizemos que entregamos no dia 14, entregamos. Atrasos custam dinheiro e confiança — não estamos dispostos a perder nenhum dos dois.",
              },
              {
                t: "Preço é preço final",
                d: "Orçamento detalhado e por escrito. Sem extras inventados a meio da obra. Se aparecer imprevisto técnico, falamos antes de avançar.",
              },
              {
                t: "Equipa própria, sempre",
                d: "Não vendemos a obra a quem aparecer mais barato. Quem entra na sua casa é alguém da nossa equipa, com nome, número e responsabilidade.",
              },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 0.08} className="bg-bone p-8 lg:p-10">
                <span className="font-mono text-xs text-muted-foreground">
                  V/{String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 font-display text-2xl leading-tight">{v.t}</h3>
                <p className="mt-4 text-muted-foreground">{v.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-5 lg:grid-cols-[1fr_1fr] lg:gap-24 lg:px-10">
          <div className="relative">
            <img
              src={teamImg}
              alt="Equipa Urban Repair"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <span className="eyebrow">A equipa</span>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05]">
              Doze pessoas. Trinta especialidades.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Cada obra tem um responsável dedicado — o seu interlocutor único do
              primeiro contacto à entrega de chaves.
            </p>
            <dl className="mt-12 space-y-6 border-t border-border pt-8">
              {[
                { k: "Pedro Almeida", r: "Fundador · Coordenação de obra" },
                { k: "António Vaz", r: "Fundador · Orçamentação" },
                { k: "Equipa de pedreiros", r: "4 profissionais · 60+ anos combinados" },
                { k: "Especialidades", r: "Canalização, eletricidade, pintura, revestimentos" },
              ].map((m) => (
                <div key={m.k} className="flex items-baseline justify-between gap-6 border-b border-border pb-6">
                  <dt className="font-display text-xl">{m.k}</dt>
                  <dd className="text-right text-sm text-muted-foreground">{m.r}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-ink py-20 text-bone">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-mist/15 px-0 lg:grid-cols-4">
          {[
            { k: "17", v: "anos no mercado" },
            { k: "12", v: "pessoas na equipa" },
            { k: "1.200+", v: "clientes desde 2008" },
            { k: "78214", v: "alvará IMPIC" },
          ].map((s) => (
            <div key={s.v} className="bg-ink p-8 lg:p-12">
              <p className="font-display text-5xl tracking-tight lg:text-6xl">{s.k}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.22em] text-mist/70">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}