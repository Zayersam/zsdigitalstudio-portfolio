import { useState } from 'react';
import { Send, MessageCircle, Mail, Phone, MapPin, User, CheckCircle2, type LucideIcon } from 'lucide-react';
import { socialLinks, WHATSAPP_NUMBER } from './SocialIcons';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="contact" className="section-pad relative bg-navy-950">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-gold-500/5 blur-[120px]" />

      <div className="container-x relative z-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Let's Build Something{' '}
            <span className="text-gradient-gold">Great Together</span>
          </h2>
          <p className="mt-5 text-white/60 text-lg">
            Have a project in mind? Send a message or reach out on WhatsApp — I usually respond
            within a few hours.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          {/* Form */}
          <div className="lg:col-span-3 reveal">
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-7 sm:p-9 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field icon={User} label="Name">
                  <input
                    required
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your full name"
                    className="w-full bg-transparent text-white placeholder-white/30 focus:outline-none"
                  />
                </Field>
                <Field icon={Mail} label="Email">
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@example.com"
                    className="w-full bg-transparent text-white placeholder-white/30 focus:outline-none"
                  />
                </Field>
              </div>
              <Field icon={Phone} label="Phone">
                <input
                  value={form.phone}
                  onChange={update('phone')}
                  placeholder="+971 58 301 0597"
                  className="w-full bg-transparent text-white placeholder-white/30 focus:outline-none"
                />
              </Field>
              <Field icon={MessageCircle} label="Message">
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent text-white placeholder-white/30 focus:outline-none resize-none"
                />
              </Field>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button type="submit" className="btn-gold flex-1">
                  {sent ? (
                    <>
                      <CheckCircle2 size={18} /> Message Sent
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </button>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex-1"
                >
                  <MessageCircle size={18} /> WhatsApp Me
                </a>
              </div>
            </form>
          </div>

          {/* Info + socials */}
          <div className="lg:col-span-2 space-y-5 reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="glass rounded-3xl p-7 space-y-5">
              <h3 className="font-display text-xl font-semibold text-white">Contact Information</h3>
              <InfoRow icon={MapPin} label="Location" value="Dubai, UAE" />
              <InfoRow icon={Mail} label="Email" value="zsdigitalstudio.info@gmail.com" />
              <InfoRow icon={Phone} label="Phone" value="+971 58 301 0597" />
              <InfoRow icon={MessageCircle} label="WhatsApp" value="+971 58 301 0597" />
            </div>

            <div className="glass rounded-3xl p-7">
              <h3 className="font-display text-xl font-semibold text-white mb-4">Follow & Connect</h3>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((s) => {
                  const Icon = s.Icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="group flex flex-col items-center gap-2 py-4 rounded-xl glass-gold hover:bg-gold-gradient hover:border-transparent transition-all duration-300 hover:-translate-y-1"
                    >
                      <span className="grid place-items-center w-10 h-10 rounded-full bg-gold-gradient/10 border border-gold-400/20 text-gold-300 group-hover:bg-navy-950 group-hover:text-gold-300 transition-all duration-300">
                        <Icon size={20} />
                      </span>
                      <span className="text-xs text-white/60 group-hover:text-navy-950 transition-colors">
                        {s.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm text-white/60 font-medium mb-2 block">{label}</span>
      <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus-within:border-gold-400/50 transition-colors">
        <Icon size={18} className="text-gold-400 shrink-0" />
        {children}
      </div>
    </label>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 rounded-xl bg-gold-gradient/10 border border-gold-400/20 grid place-items-center shrink-0">
        <Icon size={20} className="text-gold-300" />
      </div>
      <div>
        <p className="text-xs text-white/40 uppercase tracking-wider">{label}</p>
        <p className="text-white/85 text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}
