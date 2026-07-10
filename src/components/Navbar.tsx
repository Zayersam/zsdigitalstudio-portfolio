import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Why Me', href: '#why-me' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-navy-950/80 backdrop-blur-xl border-b border-white/10 py-3' : 'py-5'
      }`}
    >
      <nav className="container-x px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="grid place-items-center w-10 h-10 rounded-xl bg-gold-gradient text-navy-950 font-display font-bold text-lg shadow-lg shadow-gold-500/20 group-hover:scale-105 transition-transform">
            ZS
          </span>
          <span className="font-display text-lg font-semibold tracking-wide">
            <span className="text-white">Digital</span>{' '}
            <span className="text-gradient-gold">Studio</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-gold-300 transition-colors rounded-full hover:bg-white/5"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden lg:inline-flex btn-gold !py-2.5 !px-6 text-sm">
          Hire Me
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center w-10 h-10 rounded-lg glass text-white"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-5 sm:px-8 pt-4 pb-6 space-y-1 bg-navy-950/95 backdrop-blur-xl border-t border-white/10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-white/80 hover:text-gold-300 hover:bg-white/5 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-gold w-full mt-2"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
