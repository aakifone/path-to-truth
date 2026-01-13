import { cn } from "@/lib/utils";

interface QuranVerseProps {
  arabic?: string;
  translation: string;
  reference: string;
  className?: string;
  variant?: "default" | "featured" | "simple";
}

export function QuranVerse({
  arabic,
  translation,
  reference,
  className,
  variant = "default",
}: QuranVerseProps) {
  if (variant === "simple") {
    return (
      <blockquote className={cn("border-l-4 border-primary pl-4", className)}>
        <p className="text-lg italic text-foreground">"{translation}"</p>
        <footer className="mt-2 text-sm text-muted-foreground">— {reference}</footer>
      </blockquote>
    );
  }

  if (variant === "featured") {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl bg-primary p-8 text-center md:p-12",
          className
        )}
      >
        <div className="absolute inset-0 bg-pattern-geometric opacity-20" />
        <div className="relative">
          {arabic && (
            <p className="verse-arabic mb-6 text-2xl text-primary-foreground/90 md:text-3xl">
              {arabic}
            </p>
          )}
          <p className="mx-auto max-w-2xl font-serif text-xl leading-relaxed text-primary-foreground md:text-2xl">
            "{translation}"
          </p>
          <p className="mt-4 text-sm font-medium text-primary-foreground/70">
            — {reference}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "card-glow rounded-xl border border-border bg-card p-6 md:p-8",
        className
      )}
    >
      {arabic && (
        <p className="verse-arabic mb-4 text-xl text-primary/80 md:text-2xl">
          {arabic}
        </p>
      )}
      <p className="font-serif text-lg italic leading-relaxed text-foreground md:text-xl">
        "{translation}"
      </p>
      <p className="mt-4 text-sm font-medium text-secondary">— {reference}</p>
    </div>
  );
}
