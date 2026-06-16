import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CTASection } from "@/components/site/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Perguntas frequentes — Urban Repair" },
      {
        name: "description",
        content:
          "Respostas honestas às perguntas mais comuns sobre prazos, garantias, materiais, pagamentos e área de atuação da Urban Repair.",
      },
      { property: "og:title", content: "FAQ — Urban Repair" },
      { property: "og:description", content: "Prazos, garantias, materiais e pagamentos." },
    ],
  }),
  component: FaqPage,
});

const faq = [
  {
    q: "Em quanto tempo recebo o orçamento?",
    a: "Em até 72 horas após a visita técnica. Se a obra for muito complexa ou exigir orçamentos a fornecedores específicos, avisamos no fim da visita.",
  },
  {
    q: "A visita técnica é mesmo gratuita?",
    a: "Sim. Não cobramos a visita inicial nem o orçamento, mesmo que não avance connosco. É a única forma honesta de orçamentar uma obra.",
  },
  {
    q: "Trabalham com subempreitadas?",
    a: "Não. Toda a obra é executada pela nossa equipa. Em casos pontuais (por exemplo, fabrico de mobiliário lacado) podemos integrar parceiros — sempre identificados no orçamento.",
  },
  {
    q: "Como funcionam os pagamentos?",
    a: "Tipicamente: 30% no início, 40% a meio da obra mediante auto de medição, 30% na entrega. Para obras pequenas ajusta-se a 50/50.",
  },
  {
    q: "Qual é a garantia que oferecem?",
    a: "Entre 2 e 10 anos consoante o serviço: 10 anos em sistemas de impermeabilização, 7 anos em pintura exterior, 5 anos em estruturas e revestimentos, 2 anos em canalização e mão-de-obra.",
  },
  {
    q: "Posso fornecer eu os materiais?",
    a: "Pode, mas a garantia passa a cobrir apenas a mão-de-obra. Recomendamos os nossos fornecedores para manter a responsabilidade integrada.",
  },
  {
    q: "Trabalham em prédios em propriedade horizontal?",
    a: "Sim. Temos experiência em obras de condomínio, incluindo coordenação com administrações, autos de medição e libertação para assembleia.",
  },
  {
    q: "Que zonas cobrem?",
    a: "Concelhos de Sintra, Amadora, Cascais, Oeiras e Lisboa. Fora desta zona avaliamos caso a caso — a deslocação pode ser orçamentada à parte.",
  },
  {
    q: "Cuidam da limpeza no fim?",
    a: "Sim. Limpeza diária do local de trabalho e limpeza final entregue antes da receção. Não deixamos entulho nem detritos.",
  },
  {
    q: "Têm alvará e seguro?",
    a: "Sim. Alvará IMPIC nº 78214, seguro de responsabilidade civil profissional ativo e situação contributiva regularizada.",
  },
  {
    q: "Fazem licenciamento camarário?",
    a: "Quando a obra exige licença ou comunicação prévia, tratamos da articulação com arquiteto e câmara. Pode também trazer o seu técnico.",
  },
  {
    q: "Quanto custa uma remodelação completa?",
    a: "Depende muito do nível de acabamento, mas, como ordem de grandeza, uma remodelação chave-na-mão de T2 fica entre 28.000€ e 65.000€. Só após visita conseguimos um valor real.",
  },
];

function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ · 12 perguntas"
        title="As perguntas que toda a gente faz — e quase ninguém responde por escrito."
        intro="Se não encontrar aqui a sua dúvida, escreva-nos. Garantimos resposta humana, sem chatbots."
        index="05 / 10"
      />

      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-10">
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, i) => (
              <AccordionItem key={item.q} value={`q-${i}`} className="border-b border-border">
                <AccordionTrigger className="py-6 text-left font-display text-xl hover:no-underline lg:text-2xl">
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                    {item.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pr-8 text-base leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection />
    </>
  );
}