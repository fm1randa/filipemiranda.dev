import type React from "react";
import { useTranslation } from "react-i18next";
import {
  Github,
  Linkedin,
  MessageSquare,
  Mail,
  ExternalLink,
  Code2,
  Terminal,
  Blocks,
  CalendarPlus,
} from "lucide-react";
import { LanguageSwitch } from "./components/LanguageSwitch";
import { Link } from "react-router-dom";
function App() {
  const { t } = useTranslation();

  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <LanguageSwitch />
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:32px_32px]" />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Filipe Miranda
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            {t("role")}
          </p>
          <button
            type="button"
            onClick={scrollToContact}
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
          >
            {t("hireMe")}
          </button>
        </div>
      </div>

      {/* Skills Section */}
      <section className="py-20 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <Code2 className="w-8 h-8 text-cyan-400" />
                <h2 className="text-2xl font-semibold">{t("skillsTitle")}</h2>
              </div>
              <p className="text-xl text-gray-300">{t("skillsDescription")}</p>
              <div className="flex flex-wrap gap-4">
                {[
                  "TypeScript",
                  "React",
                  "Node.js",
                  "NextJS",
                  "Tailwind CSS",
                  "React Native",
                  "Expo",
                  "MongoDB",
                  "PostgreSQL",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium border border-purple-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/10 to-black/0" />
        <div className="container mx-auto px-6 relative">
          <div className="flex items-center gap-4 mb-12">
            <Blocks className="w-8 h-8 text-cyan-400" />
            <h2 className="text-2xl font-semibold">{t("projectsTitle")}</h2>
          </div>
          <div className="grid md:grid-cols-1 gap-8">
            <div className="group relative bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">
                Whatsapp Bot (Taki)
              </h3>
              <p className="text-gray-400 mb-4">
                {t("whatsappBotDescription")}
              </p>
              <div className="flex items-center justify-between">
                <a
                  href="https://wa.me/5521936186163"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
                >
                  {t("visitProject")} <ExternalLink className="w-4 h-4" />
                </a>
                <div className="flex flex-wrap gap-2 justify-end">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    WhatsApp API
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    MongoDB
                  </span>
                </div>
              </div>
            </div>
            <div className="group relative bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Hinario IPB</h3>
              <p className="text-gray-400 mb-4">{t("hinarioDescription")}</p>
              <div className="flex items-center justify-between">
                <a
                  href="https://hinarioipb.filipemiranda.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
                >
                  {t("visitProject")} <ExternalLink className="w-4 h-4" />
                </a>
                <div className="flex flex-wrap gap-2 justify-end">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    React Native
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    Expo
                  </span>
                </div>
              </div>
            </div>
            <div className="group relative bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Rezone</h3>
              <p className="text-gray-400 mb-4">{t("rezoneDescription")}</p>
              <div className="flex items-center justify-between">
                <a
                  href="https://rz.flpm.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
                >
                  {t("visitProject")} <ExternalLink className="w-4 h-4" />
                </a>
                <div className="flex flex-wrap gap-2 justify-end">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <Terminal className="w-8 h-8 text-cyan-400" />
            <h2 className="text-2xl font-semibold">{t("connectTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="https://github.com/fm1randa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/-filipemiranda"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://discordapp.com/users/filipemiranda"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <MessageSquare className="w-6 h-6" />
              <span>Discord</span>
            </a>
            <a
              href="mailto:email@filipemiranda.dev"
              className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
              <span>Email</span>
            </a>
            <Link
              to="/meet"
              className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <CalendarPlus className="w-6 h-6" />
              <span>{t("bookMeeting")}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
