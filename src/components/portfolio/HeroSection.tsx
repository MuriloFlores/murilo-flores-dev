import muriloPhoto from "@/assets/murilo-photo.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

const t = {
  pt: {
    subtitle: "Backend Developer",
    description:
      "Desenvolvedor Backend Júnior focado em Go, Python e arquitetura limpa. Construindo soluções robustas com código de qualidade.",
    resume: "Currículo ↓",
    contact: "Contato",
  },
  en: {
    subtitle: "Backend Developer",
    description:
      "Junior Backend Developer focused on Go, Python and clean architecture. Building robust solutions with quality code.",
    resume: "Resume ↓",
    contact: "Contact",
  },
};

const HeroSection = () => {
  const { lang } = useLanguage();
  const text = t[lang];

  return (
    <section className="min-h-screen flex items-center">
      <div className="container py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-border shrink-0 transition-all duration-500">
            <img
              src={muriloPhoto}
              alt="Murilo Flores"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="font-mono text-muted-foreground text-sm mb-3 tracking-widest uppercase">
              <span className="text-primary">~/</span> {text.subtitle}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold leading-[0.95] mb-6 text-balance">
              Murilo{" "}
              <span className="text-primary">Flores</span>
            </h1>
            <p className="text-muted-foreground max-w-lg text-base md:text-lg leading-relaxed font-light">
              {text.description}
            </p>
            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
              <a
                href="https://github.com/MuriloFlores"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm border border-border px-5 py-2.5 rounded-sm hover:border-primary hover:text-primary transition-colors duration-200 active:scale-[0.97]"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/murilo-flores/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm border border-border px-5 py-2.5 rounded-sm hover:border-primary hover:text-primary transition-colors duration-200 active:scale-[0.97]"
              >
                LinkedIn ↗
              </a>
              <a
                href="/curriculo_murilo_flores.pdf"
                download
                className="font-mono text-sm border border-border px-5 py-2.5 rounded-sm hover:border-primary hover:text-primary transition-colors duration-200 active:scale-[0.97]"
              >
                {text.resume}
              </a>
              <a
                href="mailto:muriloaflores@gmail.com"
                className="font-mono text-sm bg-primary text-primary-foreground px-5 py-2.5 rounded-sm hover:opacity-90 transition-opacity duration-200 active:scale-[0.97]"
              >
                {text.contact}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
