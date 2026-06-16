import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-ink text-bone">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-32">
        <div>
          <span className="eyebrow !text-mist/60">Vamos começar</span>
          <h2 className="mt-6 text-balance text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.02] font-display">
            Tem uma obra
            <br />
            em mente?
          </h2>
        </div>
        <div className="flex flex-col justify-between gap-10">
          <p className="max-w-md text-lg leading-relaxed text-mist/85">
            Marcamos uma visita técnica gratuita e sem compromisso. Avaliamos o
            local, ouvimos o que precisa e devolvemos um orçamento claro,
            detalhado e honesto em até 72 horas.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/orcamento"
              className="group inline-flex items-center gap-3 bg-bone px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-ink transition hover:bg-mist"
            >
              Pedir orçamento
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <a
              href="tel:+351968757393"
              className="text-sm uppercase tracking-[0.18em] text-mist/85 underline-offset-8 hover:underline"
            >
              ou ligue 968 757 393
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}