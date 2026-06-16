import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { services } from "@/data/services";

export const Route = createFileRoute("/orcamento")({
  head: () => ({
    meta: [
      { title: "Pedir orçamento — Urban Repair" },
      {
        name: "description",
        content:
          "Peça um orçamento detalhado em 72 horas. Visita técnica gratuita e sem compromisso, na Grande Lisboa.",
      },
      { property: "og:title", content: "Pedir orçamento — Urban Repair" },
      {
        property: "og:description",
        content: "Visita técnica grátis, orçamento escrito em 72h.",
      },
    ],
  }),
  component: OrcamentoPage,
});

function OrcamentoPage() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    service: "",
    timeframe: "",
    description: "",
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = () => {
    const body =
      `Pedido de orçamento — Urban Repair%0A%0A` +
      `Serviço: ${form.service}%0A` +
      `Prazo desejado: ${form.timeframe}%0A` +
      `Local: ${form.location}%0A%0A` +
      `${form.description}%0A%0A` +
      `${form.name} · ${form.email} · ${form.phone}`;
    window.location.href = `mailto:urbanrepair.geral@gmail.com?subject=Pedido%20de%20orçamento&body=${body}`;
    setDone(true);
  };

  if (done) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-40 text-center lg:px-10">
        <Check className="mx-auto h-12 w-12" strokeWidth={1.5} />
        <h1 className="mt-8 font-display text-5xl">Pedido enviado.</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Vamos rever os detalhes e contactá-lo em 24 horas úteis. Se preferir
          falar já, ligue <a className="underline" href="tel:+351968757393">968 757 393</a>.
        </p>
      </section>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow={`Orçamento · Passo ${step + 1} de 3`}
        title="Conte-nos sobre a sua obra."
        intro="Três passos rápidos. Sem campos obrigatórios escondidos, sem call centers."
        index="07 / 10"
      />

      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-10">
          <div className="mb-12 flex items-center gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-1 flex-1 ${i <= step ? "bg-foreground" : "bg-border"}`}
              />
            ))}
          </div>

          {step === 0 && (
            <div className="space-y-10">
              <Field label="Que serviço precisa?">
                <div className="grid gap-2 sm:grid-cols-2">
                  {services.map((s) => (
                    <label
                      key={s.slug}
                      className={`flex cursor-pointer items-center justify-between border px-4 py-3 text-sm transition ${
                        form.service === s.title
                          ? "border-foreground bg-foreground text-background"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      <span>{s.title}</span>
                      <input
                        type="radio"
                        name="service"
                        value={s.title}
                        checked={form.service === s.title}
                        onChange={(e) => update("service", e.target.value)}
                        className="sr-only"
                      />
                    </label>
                  ))}
                </div>
              </Field>

              <Field label="Para quando?">
                <div className="flex flex-wrap gap-2">
                  {["Urgente", "Próximas 4 semanas", "Próximos 3 meses", "Sem pressa"].map((t) => (
                    <button
                      key={t}
                      onClick={() => update("timeframe", t)}
                      className={`border px-4 py-2 text-sm transition ${
                        form.timeframe === t
                          ? "border-foreground bg-foreground text-background"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </Field>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-10">
              <Field label="Local da obra (cidade ou freguesia)">
                <input
                  type="text"
                  value={form.location}
                  onChange={(e) => update("location", e.target.value)}
                  placeholder="Ex.: Mem Martins, Sintra"
                  className="w-full border-b border-border bg-transparent py-3 text-lg outline-none focus:border-foreground"
                />
              </Field>
              <Field label="Descreva a obra com o detalhe que conseguir">
                <textarea
                  value={form.description}
                  onChange={(e) => update("description", e.target.value)}
                  rows={6}
                  placeholder="Ex.: Quero impermeabilizar o terraço de cerca de 60m². Houve infiltração para o piso inferior no inverno."
                  className="w-full border-b border-border bg-transparent py-3 text-base outline-none focus:border-foreground"
                />
              </Field>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-10">
              <Field label="Nome">
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full border-b border-border bg-transparent py-3 text-lg outline-none focus:border-foreground"
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full border-b border-border bg-transparent py-3 text-lg outline-none focus:border-foreground"
                />
              </Field>
              <Field label="Telefone">
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full border-b border-border bg-transparent py-3 text-lg outline-none focus:border-foreground"
                />
              </Field>
            </div>
          )}

          <div className="mt-16 flex items-center justify-between">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              className="text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground disabled:opacity-30"
              disabled={step === 0}
            >
              ← Voltar
            </button>
            {step < 2 ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                className="inline-flex items-center gap-3 bg-foreground px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-background hover:bg-smoke"
              >
                Continuar <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={submit}
                className="inline-flex items-center gap-3 bg-foreground px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-background hover:bg-smoke"
              >
                Enviar pedido <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow mb-5">{label}</p>
      {children}
    </div>
  );
}