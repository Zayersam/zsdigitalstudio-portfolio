import { ArrowRight, FolderOpen, Sparkles, Star } from 'lucide-react';

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '120+', label: 'Projects Done' },
  { value: '60+', label: 'Happy Clients' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-navy-radial"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold-500/10 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-navy-500/30 blur-[120px]" />
      <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] rounded-full bg-gold-400/5 blur-[100px] animate-float" />

      <div className="container-x px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-sm text-gold-200 mb-7 animate-fade-in">
              <Sparkles size={15} className="text-gold-300" />
              <span className="font-medium">Available for freelance projects</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight animate-fade-up">
              Helping Businesses Grow with{' '}
              <span className="text-gradient-gold">Professional Digital Solutions</span>
            </h1>

            <p
              className="mt-7 text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.15s' }}
            >
              Freelance Odoo Website Designer, Landing Page Creator, Digital Marketing
              Specialist, Canva Designer, and Data Entry Expert.
            </p>

            <div
              className="mt-9 flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              <a href="#contact" className="btn-gold">
                Hire Me
                <ArrowRight size={18} />
              </a>
              <a href="#portfolio" className="btn-outline">
                <FolderOpen size={18} />
                View Portfolio
              </a>
            </div>

            <div
              className="mt-12 flex flex-wrap gap-8 animate-fade-up"
              style={{ animationDelay: '0.45s' }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-bold text-gradient-gold">
                    {s.value}
                  </div>
                  <div className="text-sm text-white/50 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual card */}
          <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative mx-auto max-w-sm">
              {/* Floating rating badge */}
              <div className="absolute -top-5 -left-5 z-20 glass-gold rounded-2xl px-4 py-3 gold-glow animate-float">
                <div className="flex items-center gap-1 text-gold-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xs text-white/70 mt-1">5.0 Client Rating</p>
              </div>

              {/* Main card */}
              <div className="glass rounded-3xl p-8 gold-glow">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 border border-white/10 grid place-items-center relative overflow-hidden">
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div className="relative text-center px-6">
                    <div className="font-display text-7xl font-bold text-gradient-gold mb-3">
                      ZS
                    </div>
                    <p className="text-white/60 text-sm tracking-widest uppercase">
                      Digital Studio
                    </p>
                    <div className="mt-4 h-px w-16 mx-auto bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
                    <p className="mt-4 text-white/50 text-xs">
                      Syed Zayer Abbas
                      <br />
                      Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">Premium Quality</p>
                    <p className="text-white/50 text-sm">On-time delivery</p>
                  </div>
                  <div className="flex -space-x-2">
                    {['from-gold-300 to-gold-500', 'from-navy-300 to-navy-500', 'from-gold-400 to-gold-600'].map(
                      (g, i) => (
                        <div
                          key={i}
                          className={`w-9 h-9 rounded-full bg-gradient-to-br ${g} border-2 border-navy-950`}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Floating service badge */}
              <div
                className="absolute -bottom-5 -right-5 z-20 glass rounded-2xl px-4 py-3 animate-float"
                style={{ animationDelay: '1.5s' }}
              >
                <p className="text-xs text-white/50">Specializing in</p>
                <p className="text-sm font-semibold text-gold-300">Odoo & Web Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold-400/60 to-transparent" />
      </div>
    </section>
  );
}
