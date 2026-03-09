import React from 'react';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Github,
  Linkedin,
  LucideIcon,
  Mail,
} from 'lucide-react';

interface FooterLink {
  href: string;
  label: string;
  icon: LucideIcon;
  external?: boolean;
}

const footerLinks: FooterLink[] = [
  {
    href: 'mailto:akrmwashim09@gmail.com',
    label: 'Email',
    icon: Mail,
  },
  {
    href: 'https://www.linkedin.com/in/washim-akram-frontend-developer/',
    label: 'LinkedIn',
    icon: Linkedin,
    external: true,
  },
  {
    href: 'https://github.com/washim09',
    label: 'GitHub',
    icon: Github,
    external: true,
  },
];

const FooterContent: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const year = new Date().getFullYear();

  return (
    <div className="border-b-0 bg-[#09101d] mt-10">
      <div
        className={`flex ${
          compact ? 'flex-col gap-6 px-5 py-6' : 'flex-col gap-8 px-8 py-7 xl:flex-row xl:items-center xl:justify-between'
        }`}
      >
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6F61]/30 bg-[#FF6F61]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#ffb1a9]">
            <BriefcaseBusiness className="h-3.5 w-3.5" />
            Available for freelance and full-time roles
          </div>
          <div className="space-y-2">
            <h3 className={`${compact ? 'text-xl' : 'text-2xl'} font-semibold text-white`}>
              Let&apos;s build something useful.
            </h3>
            <p className="max-w-2xl text-sm leading-6 text-slate-300">
              Frontend-focused fullstack developer building responsive interfaces, portfolio websites, and product experiences that feel sharp and clear.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {footerLinks.map(({ href, label, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:border-[#FF6F61] hover:bg-[#FF6F61] hover:text-[#09101d]"
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </div>

      <div
        className={`flex ${
          compact
            ? 'flex-col gap-2 px-5 py-4 text-center'
            : '-mt-1 min-h-16 flex-col gap-3 px-8 text-left md:flex-row md:items-center md:justify-between'
        } border-t border-white/10 text-sm text-slate-400`}
      >
        <p>&copy; {year} Washim Akram</p>
        <p>Frontend Developer | Full-Stack Developer</p>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <>
      <footer className="ml-[21rem] mr-8 hidden lg:block">
        <FooterContent />
      </footer>

      <footer className="ml-20 mr-5 hidden md:block lg:hidden">
        <FooterContent compact />
      </footer>

      <footer className="mx-4 w-[calc(100%-2rem)] md:hidden">
        <FooterContent compact />
      </footer>
    </>
  );
};

export default Footer;
