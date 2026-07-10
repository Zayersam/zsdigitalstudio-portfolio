import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { socialLinks } from './SocialIcons';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Odoo Website Design',
  'Landing Page Design',
  'Digital Marketing',
  'Canva Graphic Design',
  'SEO Optimization',
  'Data Entry',
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 border-t border-white/10 pt-16 pb-8">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="container-x px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-gold-gradient text-navy-950 font-display font-bold text-lg">
                ZS
              </span>
              <span className="font-display text-lg font-semibold">
                <span className="text-white">Digital</span>{' '}
                <span className="text-gradient-gold">Studio</span>
              </span>
            </a>
            <p className="mt-4 text-white/55 text-sm leading-relaxed">
              Helping businesses grow with professional digital solutions — from Odoo websites to
              marketing, design, and beyond.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {socialLinks.map((s) => {
                const Icon = s.Icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-xs text-white/60 hover:text-gold-300 hover:border-gold-400/30 transition-colors"
                  >
                    <Icon size={14} />
                    {s.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-base font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/55 text-sm hover:text-gold-300 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-400 group-hover:w-3 transition-all duration-300" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base font-semibold text-white mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/55 text-sm hover:text-gold-300 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-400 group-hover:w-3 transition-all duration-300" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-semibold text-white mb-5">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/55 text-sm">
                <MapPin size={18} className="text-gold-400 shrink-0 mt-0.5" />
                Dubai, UAE
              </li>
              <li className="flex items-start gap-3 text-white/55 text-sm">
                <Mail size={18} className="text-gold-400 shrink-0 mt-0.5" />
                zsdigitalstudio.info@gmail.com
              </li>
              <li className="flex items-start gap-3 text-white/55 text-sm">
                <Phone size={18} className="text-gold-400 shrink-0 mt-0.5" />
                +971 58 301 0597
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/45 text-sm text-center sm:text-left">
            Copyright © 2026 Syed Zayer Abbas. All rights reserved.
          </p>
          <a
            href="#home"
            className="flex items-center gap-2 text-white/50 hover:text-gold-300 text-sm transition-colors group"
          >
            Back to top
            <span className="grid place-items-center w-9 h-9 rounded-full glass group-hover:bg-gold-gradient group-hover:text-navy-950 transition-all duration-300">
              <ArrowUp size={16} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
