import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      { title: "Contactos — Urban Repair, Mem Martins" },
      {
        name: "description",
        content:
          "Rua João XXIII, 39, Casais de Mem Martins, 2725-070. Telefone 968 757 393. Email urbanrepair.geral@gmail.com.",
      },
      { property: "og:title", content: "Contactos — Urban Repair" },
      {
        property: "og:description",
        content: "Visite-nos em Mem Martins ou peça uma visita técnica gratuita.",
      },
    ],
  }),
  component: ContactosPage,
});

function ContactosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contactos · Mem Martins"
        title="Estamos a 20 minutos de Lisboa. A um telefonema da sua obra."
        intro="Atende-lhe quem trata da obra, não um call center. Respondemos a chamadas, emails e formulários em 24 horas úteis."
        index="06 / 10"
      />

      <section className="border-b border-border py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-5 lg:grid-cols-[1fr_1.3fr] lg:gap-24 lg:px-10">
          <div className="space-y-10">
            <Block icon={Phone} title="Telefone">
              <a href="tel:+351968757393" className="font-display text-3xl hover:underline">
                +351 968 757 393
              </a>
              <p className="mt-2 text-xs text-muted-foreground">
                Chamada para a rede móvel nacional
              </p>
            </Block>
            <Block icon={Mail} title="Email">
              <a
                href="mailto:urbanrepair.geral@gmail.com"
                className="font-display text-2xl break-all hover:underline"
              >
                urbanrepair.geral@gmail.com
              </a>
            </Block>
            <Block icon={MapPin} title="Morada">
              <p className="font-display text-2xl leading-snug">
                Rua João XXIII, Nº39
                <br />
                Casais de Mem Martins
                <br />
                2725-070 Mem Martins
              </p>
            </Block>
            <Block icon={Clock} title="Horário">
              <p className="font-display text-2xl leading-snug">
                Seg–Sex · 08h00 às 19h00
                <br />
                Sáb · 09h00 às 13h00
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Urgências de canalização e eletricidade 24/7
              </p>
            </Block>
          </div>

          <div>
            <div className="aspect-[4/5] overflow-hidden border border-border bg-mist">
              <iframe
                title="Localização Urban Repair"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-9.36%2C38.78%2C-9.34%2C38.80&layer=mapnik&marker=38.79%2C-9.35"
                className="h-full w-full grayscale"
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Casais de Mem Martins · Sintra
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function Block({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Phone;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-border pt-8">
      <div className="flex items-center gap-3">
        <Icon className="h-4 w-4" strokeWidth={1.5} />
        <span className="eyebrow">{title}</span>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}