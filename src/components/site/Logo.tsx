import logoAsset from "@/assets/logo.png.asset.json";

export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Urban Repair"
      width={48}
      height={48}
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Logo className="h-8 w-8" />
      <div className="flex flex-col leading-none">
        <span className="font-display text-[1.35rem] tracking-tight">Urban Repair</span>
        <span className="text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
          Construção · Remodelação
        </span>
      </div>
    </div>
  );
}