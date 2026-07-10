import { Linkedin, Instagram, Facebook, MessageCircle, Mail, type LucideIcon } from 'lucide-react';

export const WHATSAPP_NUMBER = '971583010597';
export const EMAIL = 'zsdigitalstudio.info@gmail.com';

export type SocialLink = {
  label: string;
  href: string;
  Icon: LucideIcon | ((props: { size?: number; className?: string }) => JSX.Element);
};

export function FiverrIcon({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M14.5 3v2.25H9.25a3.75 3.75 0 0 0-3.75 3.75V11H3v2.5h2.5v2.5a3.75 3.75 0 0 0 3.75 3.75H14.5V22h2.5v-2.25h1.25a3.75 3.75 0 0 0 3.75-3.75V14.5H22V12h-1.25a3.75 3.75 0 0 0-3.75 3.75V11H14.5V8.75h5.25V3h-5.25Zm-2.5 8H8v-2a1.25 1.25 0 0 1 1.25-1.25H12V11Zm0 5H9.25A1.25 1.25 0 0 1 8 14.75V13.5h4V16Zm5-1.25a1.25 1.25 0 0 1-1.25 1.25H17V13.5h.25A1.25 1.25 0 0 1 18.5 14.75Z" />
    </svg>
  );
}

export const socialLinks: SocialLink[] = [
  { label: 'Fiverr', href: 'https://www.fiverr.com/zsdigitalstudio', Icon: FiverrIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zsdigitalstudio/', Icon: Linkedin },
  { label: 'Instagram', href: '#', Icon: Instagram },
  { label: 'Facebook', href: '#', Icon: Facebook },
  { label: 'WhatsApp', href: `https://wa.me/${WHATSAPP_NUMBER}`, Icon: MessageCircle },
  { label: 'Email', href: `mailto:${EMAIL}`, Icon: Mail },
];
