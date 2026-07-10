import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed Al-Rashid',
    role: 'CEO, TechVenture FZE',
    review:
      'Syed delivered our Odoo website ahead of schedule and the quality was outstanding. His communication throughout the project was excellent. Highly recommended for any business looking for a professional online presence.',
    initials: 'AR',
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Manager, Bloom Retail',
    review:
      'The landing pages and social media designs ZS Digital Studio created completely transformed our campaign performance. Conversions went up significantly. Truly a talented and reliable freelancer.',
    initials: 'PS',
  },
  {
    name: 'James Carter',
    role: 'Founder, Carter Consulting',
    review:
      'From Google Ads setup to SEO optimization, every deliverable was professional and on point. Syed understands business needs and delivers solutions that actually drive results. Will work with him again.',
    initials: 'JC',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold-500/5 blur-[120px]" />
      <div className="container-x relative z-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            What Clients{' '}
            <span className="text-gradient-gold">Say About Me</span>
          </h2>
          <p className="mt-5 text-white/60 text-lg">
            Real feedback from businesses I have helped grow with professional digital solutions.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal group glass rounded-3xl p-8 relative hover:border-gold-400/30 hover:bg-white/[0.07] transition-all duration-400 hover:-translate-y-1.5"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <Quote className="absolute top-6 right-6 text-gold-400/20" size={48} />

              <div className="flex items-center gap-1 text-gold-300">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="mt-5 text-white/75 leading-relaxed text-[15px]">"{t.review}"</p>

              <div className="mt-7 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-gradient grid place-items-center font-display font-bold text-navy-950">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-gold-300/80">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
