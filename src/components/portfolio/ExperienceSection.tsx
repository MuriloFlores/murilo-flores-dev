import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const experiences = {
  pt: [
    {
      company: "Fundação Getulio Vargas",
      role: "Engenheiro de Dados e Backend",
      period: "05/2026 – Atual",
      description:
        "Desenvolvimento e manutenção de aplicações internas full stack (Go, Python e JavaScript), criação e integração de APIs REST e automação de fluxos complexos. Modelagem e manutenção de bancos PostgreSQL, migração de pipelines para arquiteturas orientadas a eventos com Apache Kafka e AWS, e gestão do ciclo de vida das aplicações via Docker.",
    },
    {
      company: "Fundação Getulio Vargas",
      role: "Estágio em Raspagem de Dados (Data/Backend)",
      period: "09/2025 – 05/2026",
      description:
        "Desenvolvimento e otimização de pipelines de dados (ETL) em Python, aumentando a eficiência da extração diária em ~35%. Criação de verificações e testes de integridade que reduziram inconsistências no banco final em 40% e aplicação de POO para diminuir o tempo de manutenção do código em 20%.",
    },
    {
      company: "NeoSyx",
      role: "Estágio em Suporte Técnico (Foco em Banco de Dados)",
      period: "07/2024 – 09/2025",
      description:
        "Manutenção e otimização de bancos relacionais e NoSQL (PostgreSQL, SQL Server, MongoDB), melhorando o tempo de resposta de queries críticas em ~25%. Diagnóstico e correção de 15+ chamados de nível 2 por semana e colaboração em equipe multidisciplinar em ambiente Scrum, reduzindo a indisponibilidade de ferramentas internas em 15%.",
    },
    {
      company: "Stone",
      role: "Jovem Aprendiz de Governança de TI",
      period: "06/2022 – 04/2023",
      description:
        "Monitoramento da integridade e confiabilidade de bases de dados corporativas e gestão da governança de contratos de telefonia e educação, assegurando 100% de compliance e otimizando o fluxo de renovações em colaboração com equipes técnicas.",
    },
  ],
  en: [
    {
      company: "Fundação Getulio Vargas",
      role: "Data & Backend Engineer",
      period: "05/2026 – Present",
      description:
        "Develop and maintain internal full stack applications (Go, Python and JavaScript), building and integrating REST APIs and automating complex workflows. PostgreSQL data modeling and maintenance, migration of pipelines to event-driven architectures with Apache Kafka and AWS, and application lifecycle management with Docker.",
    },
    {
      company: "Fundação Getulio Vargas",
      role: "Data Scraping Intern (Data/Backend)",
      period: "09/2025 – 05/2026",
      description:
        "Developed and optimized Python ETL data pipelines, increasing daily extraction efficiency by ~35%. Built integrity checks and tests that reduced inconsistencies in the final database by 40% and applied OOP principles to cut code maintenance time by 20%.",
    },
    {
      company: "NeoSyx",
      role: "Technical Support Intern (Database Focus)",
      period: "07/2024 – 09/2025",
      description:
        "Maintenance and optimization of relational and NoSQL databases (PostgreSQL, SQL Server, MongoDB), improving critical query response time by ~25%. Diagnosed and fixed 15+ level-2 tickets per week and collaborated with a multidisciplinary Scrum team, reducing internal tooling downtime by 15%.",
    },
    {
      company: "Stone",
      role: "IT Governance Young Apprentice",
      period: "06/2022 – 04/2023",
      description:
        "Monitored the integrity and reliability of corporate databases and managed governance of telephony and education contracts, ensuring 100% compliance and streamlining renewal workflows in collaboration with technical teams.",
    },
  ],
};

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { lang } = useLanguage();
  const title = lang === "pt" ? "Experiência" : "Experience";

  return (
    <section className="py-24 border-t border-border" id="experience">
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
          <span className="text-primary font-mono text-base mr-2">03.</span>
          {title}
        </h2>

        <div className="relative pl-8 border-l border-border space-y-12">
          {experiences[lang].map((exp, i) => (
            <div
              key={exp.company}
              className="relative"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(12px)",
                transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${300 + i * 100}ms`,
              }}
            >
              <div className="absolute -left-[calc(2rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full bg-primary" />
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-1">
                {exp.period}
              </p>
              <h3 className="text-lg font-semibold">{exp.company}</h3>
              <p className="text-sm text-primary font-mono mb-2">{exp.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
