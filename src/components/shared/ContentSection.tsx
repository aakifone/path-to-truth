import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContentSectionProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "muted" | "primary" | "pattern";
}

export function ContentSection({
  children,
  className,
  background = "default",
}: ContentSectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        background === "muted" && "bg-muted/30",
        background === "primary" && "bg-primary text-primary-foreground",
        background === "pattern" && "bg-pattern-islamic",
        className
      )}
    >
      <div className="container">{children}</div>
    </section>
  );
}
