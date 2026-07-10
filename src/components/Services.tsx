import {
  Globe,
  LayoutTemplate,
  Megaphone,
  Search,
  Image as ImageIcon,
  FileImage,
  Share2,
  Table2,
  ClipboardList,
  RefreshCw,
  Network,
  Palette,
} from 'lucide-react';

const services = [
  { icon: Globe, title: 'Odoo Website Design', desc: 'Custom, professional Odoo websites tailored to your brand and business goals.' },
  { icon: LayoutTemplate, title: 'Landing Page Design', desc: 'High-converting landing pages designed to turn visitors into customers.' },
  { icon: Megaphone, title: 'Digital Marketing', desc: 'Strategic marketing campaigns that grow your reach and drive engagement.' },
  { icon: Search, title: 'Google Ads Setup', desc: 'Fully configured Google Ads campaigns optimized for ROI and targeting.' },
  { icon: Palette, title: 'Canva Graphic Design', desc: 'Eye-catching graphics for branding, marketing, and social media presence.' },
  { icon: FileImage, title: 'Poster & Flyer Design', desc: 'Bold, memorable posters and flyers that capture attention instantly.' },
  { icon: Share2, title: 'Social Media Post Design', desc: 'Scroll-stopping social media content built for engagement and consistency.' },
  { icon: Table2, title: 'Microsoft Excel', desc: 'Spreadsheets, dashboards, and automation to organize your business data.' },
  { icon: ClipboardList, title: 'Data Entry', desc: 'Accurate, fast, and reliable data entry for any volume of information.' },
  { icon: RefreshCw, title: 'Website Updates', desc: 'Keep your site fresh with content, design, and feature updates on demand.' },
  { icon: Network, title: 'SEO Optimization', desc: 'Technical and on-page SEO that improves rankings and organic traffic.' },
  { icon: ImageIcon, title: 'Domain Connection & Website Setup', desc: 'End-to-end domain setup, hosting, and website launch handled for you.' },
];

export default function Services() {
  return (
    <section id="services" className="section-pad relative bg-navy-950">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-gold-500/5 blur-[120px]" />

      <div className="container-x relative z-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
            What I Offer
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Professional Services for{' '}
            <span className="text-gradient-gold">Every Need</span>
          </h2>
          <p className="mt-5 text-white/60 text-lg">
            From website design to digital marketing and data management — comprehensive
            solutions to help your business grow.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="reveal group glass rounded-2xl p-7 hover:border-gold-400/40 hover:bg-white/[0.07] transition-all duration-400 hover:-translate-y-1.5 cursor-default"
                style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gold-gradient/10 border border-gold-400/20 grid place-items-center group-hover:bg-gold-gradient group-hover:border-transparent transition-all duration-400">
                  <Icon
                    size={26}
                    className="text-gold-300 group-hover:text-navy-950 transition-colors duration-400"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white group-hover:text-gold-200 transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
