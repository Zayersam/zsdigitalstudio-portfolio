import { useState } from 'react';
import { ExternalLink, Globe, LayoutTemplate, Palette } from 'lucide-react';

const categories = ['All', 'Business Websites', 'Landing Pages', 'Canva Designs'] as const;
type Cat = (typeof categories)[number];

type Project = {
  title: string;
  category: Exclude<Cat, 'All'>;
  tag: string;
  desc: string;
  url?: string;
  icon: typeof Globe;
  /** visual theme for the mock screenshot */
  accent: string;
  mock: 'jewellery' | 'landing' | 'canva';
};

const projects: Project[] = [
  {
    title: 'Al Seraj Jewellery Box',
    category: 'Business Websites',
    tag: 'Odoo',
    desc: 'A full Odoo business website for a luxury jewellery brand, featuring product catalog, elegant showcase, and seamless navigation.',
    url: 'https://www.alserajjewellerybox.com',
    icon: Globe,
    accent: 'from-gold-400/20 to-navy-700/40',
    mock: 'jewellery',
  },
  {
    title: 'ZS Jewels',
    category: 'Business Websites',
    tag: 'Odoo',
    desc: 'A refined Odoo jewellery website with a premium catalog layout, gold-accented product pages, and mobile-first design.',
    icon: Globe,
    accent: 'from-gold-300/20 to-navy-800/40',
    mock: 'jewellery',
  },
  {
    title: 'Odoo Landing Page Project',
    category: 'Landing Pages',
    tag: 'Conversion',
    desc: 'A high-converting Odoo landing page designed to capture leads with a clear value proposition and strong call-to-action.',
    icon: LayoutTemplate,
    accent: 'from-navy-400/20 to-gold-500/10',
    mock: 'landing',
  },
  {
    title: 'Canva Marketing Designs',
    category: 'Canva Designs',
    tag: 'Branding',
    desc: 'A collection of Canva marketing graphics — social posts, posters, and promotional creatives built for brand consistency.',
    icon: Palette,
    accent: 'from-gold-400/15 to-navy-600/30',
    mock: 'canva',
  },
];

function BrowserMock({ project }: { project: Project }) {
  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`}>
      <div className="absolute inset-0 grid-pattern opacity-20" />
      {/* Browser chrome */}
      <div className="absolute top-0 inset-x-0 h-9 bg-navy-950/60 backdrop-blur-sm border-b border-white/10 flex items-center gap-2 px-4">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-3 text-[10px] text-white/30 truncate font-mono">
          {project.url ? project.url.replace(/^https?:\/\//, '') : 'localhost/project'}
        </span>
      </div>

      {/* Stylized screenshot content */}
      <div className="absolute top-9 inset-x-0 bottom-0 p-5 flex flex-col">
        {project.mock === 'jewellery' && <JewelleryMock />}
        {project.mock === 'landing' && <LandingMock />}
        {project.mock === 'canva' && <CanvaMock />}
      </div>

      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gold-500/10 blur-2xl group-hover:bg-gold-400/20 transition-all duration-500" />
    </div>
  );
}

function JewelleryMock() {
  return (
    <div className="flex flex-col h-full">
      {/* Nav bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded bg-gold-gradient" />
          <div className="h-2 w-14 rounded-full bg-white/20" />
        </div>
        <div className="flex gap-2">
          <div className="h-1.5 w-6 rounded-full bg-white/15" />
          <div className="h-1.5 w-6 rounded-full bg-white/15" />
          <div className="h-1.5 w-6 rounded-full bg-gold-400/40" />
        </div>
      </div>
      {/* Hero */}
      <div className="text-center mb-4">
        <div className="h-2.5 w-32 mx-auto rounded-full bg-white/25 mb-2" />
        <div className="h-1.5 w-24 mx-auto rounded-full bg-gold-400/40" />
      </div>
      {/* Product grid */}
      <div className="grid grid-cols-3 gap-2.5 mt-auto">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg bg-white/5 border border-white/10 p-2 flex flex-col items-center gap-1.5">
            <div className="w-full aspect-square rounded-md bg-gradient-to-br from-gold-300/20 to-navy-700/40 border border-gold-400/15" />
            <div className="h-1.5 w-full rounded-full bg-white/15" />
            <div className="h-1.5 w-2/3 rounded-full bg-gold-400/30" />
          </div>
        ))}
      </div>
    </div>
  );
}

function LandingMock() {
  return (
    <div className="flex flex-col h-full items-center justify-center text-center gap-3">
      <div className="w-12 h-12 rounded-2xl bg-gold-gradient/20 border border-gold-400/30 grid place-items-center">
        <LayoutTemplate size={22} className="text-gold-300" />
      </div>
      <div className="h-3 w-40 rounded-full bg-white/25" />
      <div className="h-2 w-28 rounded-full bg-white/15" />
      <div className="h-2 w-32 rounded-full bg-white/10" />
      <div className="mt-2 h-7 w-24 rounded-full bg-gold-gradient/40 border border-gold-400/30" />
    </div>
  );
}

function CanvaMock() {
  return (
    <div className="grid grid-cols-2 gap-2.5 h-full content-center">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className={`rounded-lg border border-white/10 p-2 flex flex-col gap-1.5 ${
            i % 2 === 0 ? 'bg-gold-400/10' : 'bg-navy-500/20'
          }`}
        >
          <div className="w-full aspect-[4/3] rounded-md bg-gradient-to-br from-gold-300/15 to-navy-700/30" />
          <div className="h-1.5 w-3/4 rounded-full bg-white/15" />
        </div>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState<Cat>('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-pad relative">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-navy-500/10 blur-[120px]" />
      <div className="container-x relative z-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            A Glimpse of <span className="text-gradient-gold">My Work</span>
          </h2>
          <p className="mt-5 text-white/60 text-lg">
            A curated selection of real client projects across Odoo web design, landing pages, and
            creative design.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5 reveal">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === c
                  ? 'bg-gold-gradient text-navy-950 shadow-lg shadow-gold-500/20'
                  : 'glass text-white/70 hover:text-gold-300 hover:border-gold-400/30'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {filtered.map((p, i) => {
            const Icon = p.icon;
            const Wrapper = p.url ? 'a' : 'div';
            return (
              <Wrapper
                key={p.title}
                {...(p.url
                  ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="reveal group glass rounded-2xl overflow-hidden hover:border-gold-400/40 hover:bg-white/[0.07] transition-all duration-400 hover:-translate-y-1.5 block"
                style={{ transitionDelay: `${(i % 2) * 0.08}s` }}
              >
                {/* Browser mock screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <BrowserMock project={p} />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-400" />
                  {p.url && (
                    <div className="absolute top-9 right-4 flex items-center gap-1.5 text-xs font-medium text-gold-200 bg-navy-950/70 backdrop-blur-sm px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                      Visit Live Site <ExternalLink size={13} />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="grid place-items-center w-10 h-10 rounded-xl bg-gold-gradient/10 border border-gold-400/20">
                      <Icon size={18} className="text-gold-300" />
                    </span>
                    <span className="text-xs font-medium px-3 py-1 rounded-full glass-gold text-gold-200">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white group-hover:text-gold-200 transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed">{p.desc}</p>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
