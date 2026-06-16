import { Link } from "@tanstack/react-router";
import { Wordmark } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="mt-32 bg-ink text-bone">
      <div className="h-[2px] w-full spectrum-bar" />
      <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Wordmark className="[&_*]:!text-bone [&_span:last-child]:!text-mist/70" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-mist/75">
              Construção civil, remodelações e impermeabilizações de excelência
              na Grande Lisboa desde 2008. Cada obra entregue com a mesma
              exigência que pomos na primeira.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-mist/70">
              <span className="h-px w-8 bg-mist/50" />
              Alvará Nº 78214 · IMPIC
            </div>
          </div>

          <FooterCol
            title="Navegação"
            links={[
              { to: "/", label: "Início" },
              { to: "/servicos", label: "Serviços" },
              { to: "/projetos", label: "Projetos" },
              { to: "/processo", label: "Processo" },
              { to: "/sobre", label: "Sobre" },
            ]}
          />
          <FooterCol
            title="Serviços"
            links={[
              { to: "/servicos/impermeabilizacoes", label: "Impermeabilizações" },
              { to: "/servicos/remodelacoes", label: "Remodelações" },
              { to: "/servicos/canalizacoes", label: "Canalizações" },
              { to: "/servicos/eletricidade", label: "Eletricidade" },
              { to: "/servicos/revestimentos", label: "Revestimentos" },
            ]}
          />

          <div>
            <h4 className="eyebrow !text-mist/60">Contactos</h4>
            <ul className="mt-5 space-y-3 text-sm text-mist/85">
              <li>
                <a href="tel:+351968757393" className="hover:text-bone">
                  +351 968 757 393
                </a>
              </li>
              <li>
                <a
                  href="mailto:urbanrepair.geral@gmail.com"
                  className="hover:text-bone"
                >
                  urbanrepair.geral@gmail.com
                </a>
              </li>
              <li className="pt-2 text-mist/70 leading-relaxed">
                Rua João XXIII, Nº39
                <br />
                Casais de Mem Martins
                <br />
                2725-070 Mem Martins
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-mist/15 pt-8 text-xs text-mist/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Urban Repair. Todos os direitos reservados.</p>
          <p>
            Mem Martins · Sintra · Cascais · Oeiras · Lisboa
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="eyebrow !text-mist/60">{title}</h4>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-mist/85 hover:text-bone">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}