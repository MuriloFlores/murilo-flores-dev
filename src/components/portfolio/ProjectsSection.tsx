import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = {
  pt: [
    {
      title: "BankPoly",
      description:
        "Clone multiplayer do Banco Imobiliário como estudo de arquitetura: domínio isolado da infraestrutura (Clean Architecture, DDD, Domain Events) e testes unitários com xUnit.",
      tags: ["C#", ".NET", "ASP.NET Core", "xUnit"],
      github: "https://github.com/MuriloFlores/BankPoly",
      live: null,
    },
    {
      title: "Store Manager",
      description:
        "API RESTful em Go para gerenciamento de lojas e estoque, aplicando Clean Architecture e DDD.",
      tags: ["Go", "REST", "PostgreSQL"],
      github: "https://github.com/MuriloFlores/store-manager",
      live: null,
    },
  ],
  en: [
    {
      title: "BankPoly",
      description:
        "Multiplayer Monopoly clone built as an architecture study: domain isolated from infrastructure (Clean Architecture, DDD, Domain Events) and unit tests with xUnit.",
      tags: ["C#", ".NET", "ASP.NET Core", "xUnit"],
      github: "https://github.com/MuriloFlores/BankPoly",
      live: null,
    },
    {
      title: "Store Manager",
      description:
        "RESTful API in Go for store and inventory management, applying Clean Architecture and DDD.",
      tags: ["Go", "REST", "PostgreSQL"],
      github: "https://github.com/MuriloFlores/store-manager",
      live: null,
    },
  ],
};

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { lang } = useLanguage();
  const title = lang === "pt" ? "Projetos" : "Projects";
  return (
    <section className="py-24 border-t border-border" id="projects">
      <div
        className="container"
        ref={ref}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(16px)",
          filter: isVisible ? "blur(0)" : "blur(4px)",
          transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <span className="text-primary font-mono text-base mr-2">04.</span>
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects[lang].map((project, i) => (
            <a
              key={project.title}
              href={project.github ?? project.live ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-border rounded-sm p-6 hover:border-primary/40 transition-colors duration-200 group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(12px)",
                transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${400 + i * 100}ms`,
              }}
            >
              <h3 className="font-mono text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-muted-foreground border border-border px-2 py-0.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors duration-200">
                    [GitHub]
                  </span>
                )}
                {project.live && (
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors duration-200">
                    [Live Demo]
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
