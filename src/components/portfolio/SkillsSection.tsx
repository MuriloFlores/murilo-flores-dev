import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const skillGroups = {
  pt: [
    { category: "Linguagens", items: ["Go", "C#", "Python", "TypeScript", "JavaScript", "Java", "PHP"] },
    { category: "Back-end & APIs", items: ["APIs REST", "ASP.NET Core", "Node.js", "Apache Kafka"] },
    { category: "Front-end", items: ["React", "Angular", "Vue.js", "HTML", "CSS"] },
    { category: "Bancos de Dados", items: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB"] },
    { category: "Cloud & Infra", items: ["Docker", "Docker Compose", "AWS", "Redis"] },
    { category: "Testes & Versionamento", items: ["xUnit", "Testes unitários", "Git", "GitHub", "Code review"] },
    { category: "Padrões & Arquitetura", items: ["Clean Architecture", "DDD", "SOLID"] },
    { category: "Metodologias", items: ["Scrum", "Kanban"] },
  ],
  en: [
    { category: "Languages", items: ["Go", "C#", "Python", "TypeScript", "JavaScript", "Java", "PHP"] },
    { category: "Back-end & APIs", items: ["REST APIs", "ASP.NET Core", "Node.js", "Apache Kafka"] },
    { category: "Front-end", items: ["React", "Angular", "Vue.js", "HTML", "CSS"] },
    { category: "Databases", items: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB"] },
    { category: "Cloud & Infra", items: ["Docker", "Docker Compose", "AWS", "Redis"] },
    { category: "Testing & Versioning", items: ["xUnit", "Unit testing", "Git", "GitHub", "Code review"] },
    { category: "Patterns & Architecture", items: ["Clean Architecture", "DDD", "SOLID"] },
    { category: "Methodologies", items: ["Scrum", "Kanban"] },
  ],
};

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { lang } = useLanguage();
  const title = lang === "pt" ? "Competências" : "Skills";

  return (
    <section className="py-24 border-t border-border" id="skills">
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
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          <span className="text-primary font-mono text-base mr-2">02.</span>
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillGroups[lang].map((group, i) => (
            <div key={group.category} style={{ transitionDelay: `${i * 80}ms` }}>
              <h3 className="font-mono text-sm text-muted-foreground uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-sm border border-border px-3 py-1.5 rounded-sm hover:border-primary hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
