import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    company: "Fundação Getulio Vargas",
    role: "Estágio em Engenharia de Dados e Backend",
    period: "09/2025 – Atual",
    description:
      "Liderança técnica na modernização de pipeline ETL crítico, migrando de modelo síncrono para arquitetura orientada a eventos com Apache Kafka. Integração com AWS S3 e Webhooks para persistência e notificação.",
  },
  {
    company: "NeoSyx",
    role: "Estágio em Suporte e Banco de Dados",
    period: "07/2024 – 09/2025",
    description:
      "Manutenção e otimização de bancos relacionais e NoSQL (PostgreSQL, SQL Server, MongoDB). Diagnóstico de falhas e melhorias de desempenho em equipe multidisciplinar com Scrum.",
  },
  {
    company: "Stone",
    role: "Governança de TI — Jovem Aprendiz",
    period: "06/2022 – 04/2023",
    description:
      "Monitoramento de bases de dados corporativas e gerenciamento de contratos de TI (educação e telefonia).",
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal();

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
          Experiência
        </h2>

        <div className="relative pl-8 border-l border-border space-y-12">
          {experiences.map((exp, i) => (
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
