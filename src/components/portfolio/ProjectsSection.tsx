import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = {
  pt: [
    {
      title: "Store Manager API",
      description:
        "API RESTful em Go para gerenciamento de lojas e estoque, aplicando Clean Architecture e DDD.",
      tags: ["Go", "REST", "PostgreSQL"],
      github: "https://github.com/MuriloFlores",
      live: null,
    },
  ],
  en: [
    {
      title: "Store Manager API",
      description:
        "RESTful API in Go for store and inventory management, applying Clean Architecture and DDD.",
      tags: ["Go", "REST", "PostgreSQL"],
      github: "https://github.com/MuriloFlores",
      live: null,
    },
  ],
};

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { lang } = useLanguage();
  const title = lang === "pt" ? "Projetos" : "Projects";
  const hint =
    lang === "pt"
      ? <>Para adicionar novos projetos, edite o array <code className="font-mono text-primary text-xs">projects</code> em <code className="font-mono text-primary text-xs">ProjectsSection.tsx</code></>
      : <>To add new projects, edit the <code className="font-mono text-primary text-xs">projects</code> array in <code className="font-mono text-primary text-xs">ProjectsSection.tsx</code></>;

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
        <p className="text-muted-foreground text-sm mb-12 max-w-lg">{hint}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects[lang].map((project, i) => (
            <div
              key={project.title}
              className="border border-border rounded-sm p-6 hover:border-primary/40 transition-colors duration-200 group"
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    [GitHub]
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    [Live Demo]
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
