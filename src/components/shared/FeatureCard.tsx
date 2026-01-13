import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  link,
  className,
}: FeatureCardProps) {
  const content = (
    <>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="font-serif text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </>
  );

  const cardClasses = cn(
    "card-glow block rounded-xl border border-border bg-card p-6 transition-all",
    link && "cursor-pointer hover:border-primary/30",
    className
  );

  if (link) {
    return (
      <Link to={link} className={cardClasses}>
        {content}
      </Link>
    );
  }

  return <div className={cardClasses}>{content}</div>;
}
