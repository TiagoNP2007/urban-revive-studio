import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
  index,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  index?: string;
}) {
  return (
    <section className="border-b border-border bg-background pt-16 pb-20 lg:pt-28 lg:pb-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="flex items-center justify-between">
          <span className="eyebrow">{eyebrow}</span>
          {index && (
            <span className="font-mono text-xs text-muted-foreground">{index}</span>
          )}
        </div>
        <Reveal className="mt-8 max-w-5xl">
          <h1 className="text-balance text-[clamp(2.5rem,6.5vw,5.75rem)] leading-[0.95] font-display">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.1} className="mt-8 max-w-2xl">
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}