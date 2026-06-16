import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowUpRight,
  Building2,
  Droplets,
  Hammer,
  Layers,
  PaintRoller,
  Plug,
  Wrench,
} from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";
import heroFacade from "@/assets/hero-facade.jpg";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Urban Repair — Construção, Remodelação e Impermeabilização em Mem Martins" },
      {
        name: "description",
        content:
          "Construímos, restauramos e protegemos. Empresa de construção civil com 17 anos de experiência na Grande Lisboa. Orçamentos em 72 horas.",
      },
      {
        property: "og:title",
        content: "Urban Repair — Construção & Remodelação",
      },
      {
        property: "og:description",
        content:
          "Remodelações chave-na-mão, impermeabilizações e pinturas com garantia até 10 anos.",
      },
      { property: "og:image", content: heroFacade },
      { name: "twitter:image", content: heroFacade },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <ServicesBento />
      <FeaturedProject />
      <ProcessStrip />
      <Portfolio />
      <Testimonials />
      <Areas />
      <CTASection />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 140]);

  return (
    <section ref={ref} className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 pt-12 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 lg:pt-24 lg:pb-32">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-foreground" />
            <span className="eyebrow">Mem Martins · Desde 2008</span>
          </div>

          <h1 className="mt-8 text-balance font-display leading-[0.92] text-[clamp(3rem,9vw,8rem)]">
            Construímos,
            <br />
            restauramos,
            <em className="not-italic"> </em>
            <span className="italic text-muted-foreground">protegemos.</span>
          </h1>

          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Uma equipa multidisciplinar de construção civil que trata da sua obra
            do princípio ao fim — sem subempreitadas, sem surpresas, com garantia
            escrita em cada serviço.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/orcamento"
              className="group inline-flex items-center gap-3 bg-foreground px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-background transition hover:bg-smoke"
            >
              Pedir orçamento
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 px-2 py-4 text-sm uppercase tracking-[0.2em] underline-offset-8 hover:underline"
            >
              Ver projetos →
            </Link>
          </div>

          <dl className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8 text-sm">
            {[
              { k: "17", v: "anos" },
              { k: "420+", v: "obras" },
              { k: "10", v: "anos garantia" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-4xl tracking-tight">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <motion.div style={{ y: yImg }} className="relative aspect-[4/5] overflow-hidden">
            <img
              src={heroFacade}
              alt="Reabilitação de fachada em Mem Martins"
              width={1920}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          </motion.div>

          <motion.img
            style={{ rotate }}
            src={logoAsset.url}
            alt=""
            aria-hidden
            className="absolute -left-10 -bottom-10 h-32 w-32 drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] lg:h-44 lg:w-44"
          />

          <div className="absolute right-4 bottom-4 max-w-[220px] bg-bone p-4 text-xs">
            <span className="eyebrow">Obra · 2024</span>
            <p className="mt-2 font-display text-base leading-snug">
              Reabilitação de fachada — 640 m² em 4 semanas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Impermeabilizações",
    "Remodelações",
    "Fachadas",
    "Canalizações",
    "Eletricidade",
    "Revestimentos",
    "Pinturas",
    "Afagamentos",
    "Construção Civil",
  ];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-bone py-6">
      <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap">
        {row.map((it, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-3xl text-muted-foreground">
            {it}
            <span aria-hidden className="text-foreground">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  const items = [
    { k: "97%", v: "clientes satisfeitos" },
    { k: "72h", v: "para o orçamento" },
    { k: "5★", v: "média Google" },
    { k: "0", v: "subempreitadas" },
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 lg:grid-cols-4">
        {items.map((s, i) => (
          <Reveal
            key={s.v}
            delay={i * 0.05}
            className={`px-6 py-12 lg:px-10 lg:py-16 ${
              i !== items.length - 1 ? "lg:border-r border-border" : ""
            } ${i < 2 ? "border-b lg:border-b-0 border-border" : ""}`}
          >
            <p className="font-display text-5xl tracking-tight lg:text-6xl">{s.k}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {s.v}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const SERVICE_ICONS: Record<string, typeof Droplets> = {
  impermeabilizacoes: Droplets,
  remodelacoes: Hammer,
  fachadas: Building2,
  canalizacoes: Wrench,
  eletricidade: Plug,
  revestimentos: Layers,
  afagamentos: PaintRoller,
  "construcao-civil": Building2,
};

function ServicesBento() {
  const featured = services.slice(0, 6);
  return (
    <section className="border-b border-border bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-xl">
            <span className="eyebrow">O que fazemos</span>
            <h2 className="mt-5 text-balance font-display text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.02]">
              Oito especialidades, uma única equipa.
            </h2>
          </div>
          <Link
            to="/servicos"
            className="text-sm uppercase tracking-[0.2em] underline-offset-8 hover:underline"
          >
            Todos os serviços →
          </Link>
        </div>

        <div className="mt-16 grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-6">
          {featured.map((s, i) => {
            const Icon = SERVICE_ICONS[s.slug] ?? Hammer;
            const big = i === 0 || i === 3;
            return (
              <Link
                key={s.slug}
                to="/servicos/$slug"
                params={{ slug: s.slug }}
                className={`group relative flex flex-col justify-between bg-background p-8 transition hover:bg-bone lg:p-10 ${
                  big ? "lg:col-span-3" : "lg:col-span-2"
                } ${big ? "lg:row-span-2" : ""}`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-muted-foreground">{s.index}</span>
                  <Icon className="h-5 w-5 text-muted-foreground transition group-hover:text-foreground" strokeWidth={1.25} />
                </div>
                <div>
                  <h3 className="font-display text-2xl leading-tight lg:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {s.short}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground">
                    Saber mais
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturedProject() {
  const p = projects[0];
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-ink text-bone">
      <img
        src={p.cover}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-32 lg:px-10 lg:py-48">
        <span className="eyebrow !text-mist/70">Obra em destaque · {p.year}</span>
        <h2 className="mt-6 max-w-3xl text-balance font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98]">
          {p.title}
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-mist/85">{p.outcome}</p>
        <div className="mt-10 flex flex-wrap gap-x-12 gap-y-4 text-xs uppercase tracking-[0.2em] text-mist/70">
          <span>Local · {p.location}</span>
          <span>Duração · {p.duration}</span>
          <span>Área · {p.area}</span>
        </div>
        <Link
          to="/projetos/$slug"
          params={{ slug: p.slug }}
          className="mt-12 inline-flex items-center gap-3 border-b border-bone pb-1 text-sm uppercase tracking-[0.2em]"
        >
          Ver caso completo <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function ProcessStrip() {
  const steps = [
    { n: "01", t: "Contacto", d: "Conta-nos a obra em 2 minutos." },
    { n: "02", t: "Visita técnica", d: "Vamos ao local sem custo." },
    { n: "03", t: "Orçamento", d: "Detalhado, em até 72 horas." },
    { n: "04", t: "Execução", d: "Equipa própria, sem atrasos." },
    { n: "05", t: "Garantia", d: "Até 10 anos por escrito." },
  ];
  return (
    <section className="border-b border-border py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="eyebrow">Como trabalhamos</span>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05]">
              Cinco passos, zero surpresas.
            </h2>
          </div>
          <Link to="/processo" className="text-sm uppercase tracking-[0.2em] underline-offset-8 hover:underline">
            Processo completo →
          </Link>
        </div>

        <ol className="mt-16 grid gap-px bg-border md:grid-cols-5">
          {steps.map((s) => (
            <li key={s.n} className="bg-background p-6 lg:p-8">
              <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
              <h3 className="mt-6 font-display text-2xl">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Portfolio() {
  const featured = projects.slice(0, 6);
  return (
    <section className="border-b border-border bg-bone py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="eyebrow">Trabalho selecionado</span>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05]">
              Obras de que nos orgulhamos.
            </h2>
          </div>
          <Link to="/projetos" className="text-sm uppercase tracking-[0.2em] underline-offset-8 hover:underline">
            Ver todos os projetos →
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
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
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-xs text-bone">
                    <span className="bg-ink/80 px-2 py-1 uppercase tracking-[0.18em]">
                      {p.category}
                    </span>
                    <span className="bg-ink/80 px-2 py-1">{p.year}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl leading-snug">{p.title}</h3>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-foreground" />
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {p.location}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const tlist = [
    {
      q: "Pediram orçamentos a quatro empresas. A Urban Repair foi a única que apareceu à hora, escreveu tudo e cumpriu o prazo ao dia.",
      a: "Marta R.",
      r: "Apartamento, Sintra",
    },
    {
      q: "Resolveram em 5 dias uma infiltração que arrastámos durante anos. Sem dramas, sem extras.",
      a: "João P.",
      r: "Vivenda, Cascais",
    },
    {
      q: "Reabilitaram a fachada do nosso prédio com qualidade que não vemos há muito tempo. Recomendo sem reservas.",
      a: "Cond. Almeida & Filhos",
      r: "Mem Martins",
    },
  ];
  return (
    <section className="border-b border-border py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <span className="eyebrow">O que dizem os clientes</span>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          {tlist.map((t, i) => (
            <Reveal key={i} delay={i * 0.08} className="bg-background p-8 lg:p-10">
              <p className="font-display text-2xl leading-[1.25] text-foreground">
                <span className="text-muted-foreground">“</span>
                {t.q}
                <span className="text-muted-foreground">”</span>
              </p>
              <div className="mt-8 flex items-center justify-between text-sm">
                <span className="font-medium">{t.a}</span>
                <span className="text-muted-foreground">{t.r}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Areas() {
  const cities = [
    "Mem Martins", "Sintra", "Algueirão", "Cacém", "Rio de Mouro",
    "Queluz", "Amadora", "Cascais", "Oeiras", "Lisboa",
    "Carcavelos", "Estoril",
  ];
  return (
    <section className="border-b border-border bg-bone py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 lg:grid-cols-[1fr_1.4fr] lg:gap-24 lg:px-10">
        <div>
          <span className="eyebrow">Onde trabalhamos</span>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05]">
            Grande Lisboa, com base em Mem Martins.
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Concelhos onde temos equipa pronta a deslocar-se. Para obras fora
            desta zona, fale connosco — avaliamos caso a caso.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-y-1 self-end sm:grid-cols-3">
          {cities.map((c) => (
            <li key={c} className="flex items-center justify-between border-b border-border py-3 font-display text-xl">
              <span>{c}</span>
              <span className="text-xs text-muted-foreground">●</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
