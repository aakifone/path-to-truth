import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {eyebrow && (
        <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-secondary">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
      <div className="section-divider mt-6" />
    </div>
  );
}
