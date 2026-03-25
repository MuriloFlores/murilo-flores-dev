import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const links = {
  pt: [
    { label: "Sobre", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experiência", href: "#experience" },
    { label: "Projetos", href: "#projects" },
  ],
  en: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
  ],
};

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const currentLinks = links[lang];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-14">
        <a href="#" className="font-mono text-sm font-semibold">
          <span className="text-primary">~</span>/murilo
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {currentLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="font-mono text-xs border border-border px-2.5 py-1 rounded-sm hover:border-primary hover:text-primary transition-colors duration-200"
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="font-mono text-xs border border-border px-2 py-1 rounded-sm hover:border-primary hover:text-primary transition-colors duration-200"
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>
          <button
            className="font-mono text-xs text-muted-foreground"
            onClick={() => setOpen(!open)}
          >
            {open ? (lang === "pt" ? "[fechar]" : "[close]") : "[menu]"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          {currentLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block font-mono text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
