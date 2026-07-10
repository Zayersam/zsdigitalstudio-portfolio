import { CheckCircle2, MapPin, Briefcase, Globe } from 'lucide-react';

const highlights = [
  'Professional websites & landing pages',
  'Marketing materials & brand design',
  'Organized business solutions',
  'On-time delivery, every time',
];

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-gold-500/5 blur-[100px]" />
      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Visual */}
          <div className="reveal relative">
            <div className="relative mx-auto max-w-md">
              <div className="aspect-[4/5] rounded-3xl glass overflow-hidden p-2">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 grid place-items-center relative overflow-hidden">
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  <div className="relative text-center">
                    <div className="w-28 h-28 mx-auto rounded-full bg-gold-gradient grid place-items-center font-display text-5xl font-bold text-navy-950 gold-glow">
                      SZ
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-semibold text-white">
                      Syed Zayer Abbas
                    </h3>
                    <p className="mt-1 text-gold-300 text-sm">Freelance Digital Expert</p>
                    <div className="mt-5 flex items-center justify-center gap-2 text-white/50 text-sm">
                      <MapPin size={14} className="text-gold-400" />
                      Dubai, UAE
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 glass-gold rounded-2xl px-5 py-4 gold-glow">
                <div className="flex items-center gap-3">
                  <Briefcase className="text-gold-300" size={22} />
                  <div>
                    <p className="font-display text-xl font-bold text-white">120+</p>
                    <p className="text-xs text-white/60">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
              About Me
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Crafting Digital Experiences That{' '}
              <span className="text-gradient-gold">Drive Results</span>
            </h2>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              Hi, I'm Syed Zayer Abbas, a freelancer based in Dubai, originally from India. I
              help businesses create professional websites, landing pages, marketing materials,
              and organized business solutions. My goal is to deliver high-quality work with
              excellent communication and on-time delivery.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold-400 shrink-0" size={20} />
                  <span className="text-white/80 text-sm">{h}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contact" className="btn-gold">
                Let's Work Together
              </a>
              <a href="#portfolio" className="btn-outline">
                <Globe size={18} />
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
