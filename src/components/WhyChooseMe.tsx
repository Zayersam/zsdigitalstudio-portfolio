import {
  Award,
  Zap,
  Smartphone,
  Search,
  BadgeDollarSign,
  MessageSquare,
  HeartHandshake,
  LifeBuoy,
} from 'lucide-react';

const features = [
  { icon: Award, title: 'Professional Quality', desc: 'Polished, production-ready work that reflects the standard your brand deserves.' },
  { icon: Zap, title: 'Fast Delivery', desc: 'Quick turnarounds without compromising on quality or attention to detail.' },
  { icon: Smartphone, title: 'Mobile Responsive', desc: 'Every project looks and works flawlessly across all devices and screen sizes.' },
  { icon: Search, title: 'SEO Friendly', desc: 'Built with search engines in mind to help your business get found online.' },
  { icon: BadgeDollarSign, title: 'Affordable Pricing', desc: 'Premium services at competitive rates that fit your budget and scope.' },
  { icon: MessageSquare, title: 'Excellent Communication', desc: 'Clear, responsive updates throughout the project so you are always informed.' },
  { icon: HeartHandshake, title: 'Client Satisfaction', desc: 'Your success is the priority — I work until you are completely happy with the result.' },
  { icon: LifeBuoy, title: 'Ongoing Support', desc: 'Reliable post-delivery support to keep everything running smoothly after launch.' },
];

export default function WhyChooseMe() {
  return (
    <section id="why-me" className="section-pad relative bg-navy-950">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-gold-500/5 blur-[120px]" />

      <div className="container-x relative z-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
            Why Choose Me
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            The Advantages of{' '}
            <span className="text-gradient-gold">Working With Me</span>
          </h2>
          <p className="mt-5 text-white/60 text-lg">
            A commitment to quality, speed, and long-term partnership on every project.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="reveal group glass rounded-2xl p-6 text-center hover:border-gold-400/40 hover:bg-white/[0.07] transition-all duration-400 hover:-translate-y-1.5"
                style={{ transitionDelay: `${(i % 4) * 0.07}s` }}
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gold-gradient/10 border border-gold-400/20 grid place-items-center group-hover:bg-gold-gradient group-hover:border-transparent transition-all duration-400">
                  <Icon
                    size={28}
                    className="text-gold-300 group-hover:text-navy-950 transition-colors duration-400"
                  />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2.5 text-white/55 text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
