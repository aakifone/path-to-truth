import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "What is Islam", path: "/islam" },
  { name: "Core Beliefs", path: "/beliefs" },
  { name: "Purpose of Life", path: "/purpose" },
  { name: "The Prophet ﷺ", path: "/prophet" },
  { name: "Misconceptions", path: "/misconceptions" },
  { name: "FAQ", path: "/faq" },
  { name: "The Qur'an", path: "/quran" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <BookOpen className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-serif text-xl font-bold text-foreground md:text-2xl">
            Path to Islam
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="container py-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                    location.pathname === link.path
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
