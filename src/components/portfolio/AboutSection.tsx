import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 border-t border-border" id="about">
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
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          <span className="text-primary font-mono text-base mr-2">01.</span>
          Sobre mim
        </h2>
        <div className="max-w-2xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Desenvolvedor Backend Júnior com experiência prática em{" "}
            <span className="text-foreground">Go</span>,{" "}
            <span className="text-foreground">Python</span>,{" "}
            <span className="text-foreground">PostgreSQL</span> e arquitetura limpa, 
            aplicando DDD e boas práticas de engenharia de software.
          </p>
          <p>
            Cursando <span className="text-foreground">Ciência da Computação</span>. 
            Experiência com containers Docker, integração com AWS, mensageria com Apache Kafka e automação de processos ETL.
          </p>
          <p>
            Perfil proativo e analítico, com interesse em sistemas distribuídos, 
            mensageria (Kafka, SQS) e orquestração com Kubernetes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
