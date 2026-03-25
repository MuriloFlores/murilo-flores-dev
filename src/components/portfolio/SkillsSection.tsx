import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const skillGroups = {
  pt: [
    { category: "Linguagens", items: ["Go", "Python", "Java", "JavaScript", "TypeScript", "PHP", "C"] },
    { category: "Bancos de Dados", items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server"] },
    { category: "Infra & Cloud", items: ["Docker", "Docker Compose", "AWS", "Redis"] },
    { category: "Padrões & Arquitetura", items: ["DDD", "Clean Architecture", "SOLID", "RESTful APIs"] },
  ],
  en: [
    { category: "Languages", items: ["Go", "Python", "Java", "JavaScript", "TypeScript", "PHP", "C"] },
    { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server"] },
    { category: "Infra & Cloud", items: ["Docker", "Docker Compose", "AWS", "Redis"] },
    { category: "Patterns & Architecture", items: ["DDD", "Clean Architecture", "SOLID", "RESTful APIs"] },
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
