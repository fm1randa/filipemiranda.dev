import { useState } from 'react';

interface WorkItem {
  name: string;
  url: string;
  logo: string;
  current?: boolean;
  via?: { name: string; url: string; logo: string };
}

interface ProjectItem {
  name: string;
  url: string;
  logo: string;
}

const eCore = {
  name: 'e-Core',
  url: 'https://e-core.com',
  logo: '/work/ecore.png',
};
const mgn = {
  name: 'MGN',
  url: 'https://www.mgnit.com.br/',
  logo: '/work/mgn.png',
};

const workItems: WorkItem[] = [
  {
    name: 'Agidesk',
    url: 'https://agidesk.com.br',
    logo: '/work/agidesk.png',
    current: true,
  },
  {
    name: 'Tempo',
    url: 'https://tempo.io',
    logo: '/work/tempo.png',
    via: eCore,
  },
  {
    name: 'SimTC',
    url: 'https://simtc.com.br',
    logo: '/work/simtc.png',
    via: mgn,
  },
  {
    name: 'Tanto',
    url: 'https://www.tanto.com.br',
    logo: '/work/tanto.png',
    via: mgn,
  },
  {
    name: 'Atende Portaria',
    url: 'https://www.atendeportaria.com.br',
    logo: '/work/atende.png',
    via: mgn,
  },
  {
    name: 'ByteBureau',
    url: 'https://web.archive.org/web/20211225191847/http://www.bytebureau.com/',
    logo: '/work/bytebureau.png',
    via: mgn,
  },
];

const projectItems: ProjectItem[] = [
  {
    name: 'Taki',
    url: 'https://bot.flpm.net?text=!ajuda',
    logo: '/projects/taki.jpeg',
  },
  {
    name: 'Hinario IPB',
    url: 'https://hinarioipb.filipemiranda.dev',
    logo: '/projects/hinarioipb.png',
  },
  {
    name: 'ChavePIX.io',
    url: 'https://chavepix.io',
    logo: '/projects/chavepix.png',
  },
];

const socialLinks = [
  {
    handle: '@fm1randa',
    url: 'https://github.com/fm1randa',
    iconPath:
      'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  },
  {
    handle: '/in/-filipemiranda',
    url: 'https://linkedin.com/in/-filipemiranda',
    iconPath:
      'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    handle: '@filipemiranda',
    url: 'https://discordapp.com/users/filipemiranda',
    iconPath:
      'M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z',
  },
  {
    handle: '@filipem1randa',
    url: 'https://x.com/filipem1randa',
    iconPath:
      'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
];

const navItems = [
  {
    href: '/',
    label: 'Home',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        role="img"
        aria-hidden="true"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

function ItemIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-8 h-8 rounded-md bg-white/10 object-contain p-0.5 shrink-0"
      loading="lazy"
    />
  );
}

function Sidebar({ onClose }: { onClose: () => void }) {
  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : '/';

  return (
    <aside className="flex flex-col h-full px-3 pt-6 pb-6">
      <div className="flex items-center justify-between mb-8 md:mb-0">
        <div className="flex items-center gap-3">
          <img
            src="/avatar.jpg"
            alt="Filipe Miranda"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-sm font-medium">Filipe Miranda</span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="md:hidden text-white/50 hover:text-white transition-colors p-1"
          aria-label="Close menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            role="img"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <nav className="flex-1 mt-6">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                type="button"
                className={`flex items-center gap-2.5 text-sm py-1 px-2 rounded-md transition-all duration-200 ${
                  pathname === item.href
                    ? 'text-white bg-white/[0.08] ring-1 ring-white/10 shadow-sm font-medium'
                    : 'text-white/50 hover:text-white hover:bg-white/[0.06] hover:ring-1 hover:ring-white/10'
                }`}
                onClick={() => {
                  if (item.href === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                  onClose();
                }}
              >
                {item.icon}
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-white/10 pt-4 space-y-2">
        {socialLinks.map((link) => (
          <a
            key={link.handle}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-xs text-white/30 hover:text-white transition-colors group"
          >
            <span className="flex items-center gap-2 font-mono">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="img"
                aria-hidden="true"
              >
                <path d={link.iconPath} />
              </svg>
              {link.handle}
            </span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              role="img"
              aria-hidden="true"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        ))}
      </div>
    </aside>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Mobile header bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <img
              src="/avatar.jpg"
              alt="Filipe Miranda"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium">Filipe Miranda</span>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="text-white/50 hover:text-white transition-colors p-1"
            aria-label="Open menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              role="img"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile sidebar overlay */}
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="md:hidden fixed inset-0 z-50 bg-black/60"
          onClick={() => setMenuOpen(false)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setMenuOpen(false);
          }}
        >
          <div
            role="presentation"
            className="w-64 h-full bg-black border-r border-white/10"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <Sidebar onClose={() => setMenuOpen(false)} />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden md:block fixed top-0 left-0 w-64 h-full border-r border-white/10 bg-black z-30">
        <Sidebar onClose={() => setMenuOpen(false)} />
      </div>

      {/* Main content */}
      <main className="md:ml-64 pt-16 md:pt-0">
        <div className="max-w-2xl mx-auto px-6 py-12 md:py-16">
          {/* Intro */}
          <div className="mb-16">
            <h1 className="text-lg font-medium mb-3">
              Hey! I'm Filipe Miranda
            </h1>
            <p className="text-white/60 text-sm leading-relaxed">
              I'm a software developer.{' '}
              <a
                href="mailto:email@filipemiranda.dev"
                className="text-white/50 hover:text-white underline underline-offset-4 transition-colors"
              >
                Say hi
              </a>
            </p>
          </div>

          {/* Work */}
          <section id="work" className="mb-16">
            <h2 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-6">
              Work
            </h2>
            <div className="space-y-0">
              {workItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-2.5 py-2 border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <ItemIcon src={item.logo} alt={item.name} />
                  </a>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 hover:text-white hover:underline underline-offset-4 transition-colors"
                  >
                    {item.name}
                  </a>
                  {item.via && (
                    <a
                      href={item.via.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[11px] text-white/25 hover:text-white/50 hover:underline underline-offset-2 transition-colors ml-1"
                    >
                      <img
                        src={item.via.logo}
                        alt={item.via.name}
                        className="w-3.5 h-3.5 rounded-sm object-contain"
                      />
                      via {item.via.name}
                    </a>
                  )}
                  {item.current && (
                    <span className="text-[10px] font-medium text-emerald-400/80 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                      Current
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="mb-16">
            <h2 className="text-xs font-medium text-white/30 uppercase tracking-wider mb-6">
              Projects
            </h2>
            <div className="space-y-0">
              {projectItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-2.5 py-2 border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <ItemIcon src={item.logo} alt={item.name} />
                  </a>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 hover:text-white hover:underline underline-offset-4 transition-colors"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
