import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          role: "Full-Stack Developer crafting digital experiences",
          hireMe: "Hire Me",
          skillsTitle: "Skills",
          skillsDescription:
            "Full-Stack Developer specialized in Typescript and React, with a passion for creating performant and scalable applications.",
          projectsTitle: "Projects Showcase",
          hinarioDescription:
            "A digital version of the Brazilian Presbyterian Church's Novo Cântico hymnal. It is a mobile app providing easy access to music and lyrics.",
          whatsappBotDescription:
            "A versatile WhatsApp bot featuring multiple commands including sticker generation from photos, videos, or GIFs, saved audio management, and administrative tools.",
          rezoneDescription:
            "A modern platform for Rematch players to analyze tactics, track statistics, and improve performance with interactive tools for tactical planning and game analysis.",
          chavepixDescription:
            "A modern PIX (Brazil's instant payment system) key management platform that allows users to create personalized PIX email keys. Perfect for those who want to maintain privacy and professionalism in their financial transactions.",
          visitProject: "Visit",
          bookMeeting: "Book a meeting",
          connectTitle: "Let's Connect",
        },
      },
      pt: {
        translation: {
          role: "Desenvolvedor Full-Stack criando experiências digitais",
          hireMe: "Contrate-me",
          skillsTitle: "Habilidades",
          skillsDescription:
            "Desenvolvedor Full-Stack especializado em Typescript e React, com paixão por criar aplicações performáticas e escaláveis.",
          projectsTitle: "Portfólio de Projetos",
          hinarioDescription:
            "Uma versão digital do hinário Novo Cântico da Igreja Presbiteriana do Brasil. É um aplicativo móvel que fornece fácil acesso às músicas e letras.",
          whatsappBotDescription:
            "Um bot versátil para WhatsApp com múltiplos comandos incluindo geração de figurinhas a partir de fotos, vídeos ou GIFs, gerenciamento de áudios salvos e ferramentas administrativas.",
          rezoneDescription:
            "Uma plataforma moderna para jogadores de Rematch analisarem táticas, acompanharem estatísticas e melhorarem seu desempenho com ferramentas interativas para planejamento tático e análise de jogos.",
          chavepixDescription:
            "Uma plataforma moderna de gerenciamento de chaves PIX que permite aos usuários criar chaves PIX personalizadas do tipo e-mail. Perfeito para quem deseja manter privacidade e profissionalismo em suas transações financeiras.",
          visitProject: "Visitar",
          bookMeeting: "Agendar reunião",
          connectTitle: "Vamos Conectar",
        },
      },
    },
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
