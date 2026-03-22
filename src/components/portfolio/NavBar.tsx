import { useState } from "react";

const links = [
  { label: "Sobre", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experiência", href: "#experience" },
  { label: "Projetos", href: "#projects" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-14">
        <a href="#" className="font-mono text-sm font-semibold">
          <span className="text-primary">~</span>/murilo
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden font-mono text-xs text-muted-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? "[fechar]" : "[menu]"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          {links.map((link) => (
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
