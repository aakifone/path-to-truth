import { Link } from "react-router-dom";
import { BookOpen, Heart } from "lucide-react";

const footerLinks = [
  {
    title: "Learn",
    links: [
      { name: "What is Islam", path: "/islam" },
      { name: "Core Beliefs", path: "/beliefs" },
      { name: "Purpose of Life", path: "/purpose" },
      { name: "The Prophet ﷺ", path: "/prophet" },
    ],
  },
  {
    title: "Explore",
    links: [
      { name: "Common Misconceptions", path: "/misconceptions" },
      { name: "Frequently Asked Questions", path: "/faq" },
      { name: "The Qur'an", path: "/quran" },
      { name: "Beauty of Islam", path: "/beauty" },
    ],
  },
  {
    title: "Reflect",
    links: [
      { name: "Call to Reflection", path: "/reflection" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <BookOpen className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-bold text-foreground">
                Path to Islam
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              An invitation to explore the message of Islam with wisdom, clarity, and compassion. 
              We aim to educate, remove misconceptions, and present the beauty of submitting to the One Creator.
            </p>
            <p className="mt-4 flex items-center gap-1 text-sm text-muted-foreground">
              Made with <Heart className="h-4 w-4 text-primary" /> for seekers of truth
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Path to Islam. For educational purposes only.
            </p>
            <p className="text-center text-xs text-muted-foreground">
              "Invite to the way of your Lord with wisdom and good instruction" — Qur'an 16:125
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
