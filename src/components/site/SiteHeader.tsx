import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Wordmark } from "./Logo";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/projetos", label: "Projetos" },
  { to: "/processo", label: "Processo" },
  { to: "/sobre", label: "Sobre" },
  { to: "/faq", label: "FAQ" },
  { to: "/contactos", label: "Contactos" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="h-[2px] w-full spectrum-bar opacity-90" />
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 lg:px-10">
        <Link to="/" className="shrink-0">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="text-sm transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+351968757393"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Phone className="h-3.5 w-3.5" />
            968 757 393
          </a>
          <Link
            to="/orcamento"
            className="group inline-flex items-center gap-2 rounded-none bg-foreground px-4 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-background transition hover:bg-smoke"
          >
            Pedir orçamento
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        <button
          aria-label="Abrir menu"
          className="lg:hidden"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col gap-1 px-5 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-base hairline"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/orcamento"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center bg-foreground px-4 py-3 text-xs font-medium uppercase tracking-[0.18em] text-background"
            >
              Pedir orçamento
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}