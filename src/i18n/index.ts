import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const portugueseSpeakingCountries = [
  'AO', // Angola
  'BR', // Brazil
  'CV', // Cape Verde
  'GW', // Guinea-Bissau
  'MZ', // Mozambique
  'PT', // Portugal
  'ST', // São Tomé and Príncipe
];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          role: 'Full-Stack Developer crafting digital experiences',
          hireMe: 'Hire Me',
          skillsTitle: 'Skills & Services',
          skillsDescription: 'Full-Stack Developer specialized in React, Node.js, and NextJS, with a passion for creating performant and scalable web applications.',
          projectsTitle: 'Projects Showcase',
          hinarioDescription: "A digital version of the Brazilian Presbyterian Church's Novo Cântico hymnal. It is a mobile app providing easy access to music and lyrics.",
          visitProject: 'Visit Project',
          connectTitle: "Let's Connect",
        },
      },
      pt: {
        translation: {
          role: 'Desenvolvedor Full-Stack criando experiências digitais',
          hireMe: 'Contrate-me',
          skillsTitle: 'Habilidades & Serviços',
          skillsDescription: 'Desenvolvedor Full-Stack especializado em React, Node.js e NextJS, com paixão por criar aplicações web performáticas e escaláveis.',
          projectsTitle: 'Portfólio de Projetos',
          hinarioDescription: 'Uma versão digital do hinário Novo Cântico da Igreja Presbiteriana do Brasil. É um aplicativo móvel que fornece fácil acesso às músicas e letras.',
          visitProject: 'Visitar Projeto',
          connectTitle: 'Vamos Conectar',
        },
      },
    },
    detection: {
      order: ['navigator'],
      lookupNavigator: true,
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });