import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  Globe,
  FileText,
  MapPin,
  Linkedin,
  Github,
  MessageCircle,
  Instagram,
} from 'lucide-react';
import { scrollTo } from '@/hooks/useSmoothScroll';

const CONTACT = {
  phone: '+216 27 893 834',
  email: 'azherelyes@gmail.com',
  website: 'mohamedelyesazher.com',
  websiteUrl: 'https://mohamedelyesazher.com',
  location: 'Tunis · Tunisia',
};

const SOCIALS = [
  { label: 'LinkedIn',  icon: Linkedin,      href: '#' },
  { label: 'GitHub',    icon: Github,        href: '#' },
  { label: 'WhatsApp',  icon: MessageCircle, href: '#' },
  { label: 'Instagram', icon: Instagram,     href: '#' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-bg">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 grid-engineering opacity-15" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-silver/5 blur-[140px]" />

      <div className="container-main relative py-5 md:py-7">
        {/* Main 3-column grid */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr_1fr] lg:gap-16">

          {/* COLUMN 1 — Logo + Name + Tagline + Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            {/* Logo */}
            <button
              onClick={() => scrollTo('#home')}
              className="group mb-3 block"
              aria-label="Back to top"
            >
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Mohamed Elyes Azher logo"
                className="h-36 w-36 object-contain transition-transform duration-500 group-hover:scale-105 md:h-44 md:w-44"
                width={176}
                height={176}
              />
            </button>

            {/* Name */}
            <h3 className="mb-3 bg-gradient-to-b from-white via-white to-text-muted bg-clip-text text-2xl font-semibold tracking-[0.12em] text-transparent uppercase md:text-3xl">
              Mohamed Elyes Azher
            </h3>

            {/* Decorative line */}
            <div className="mb-4 h-px w-16 bg-gradient-to-r from-transparent via-silver/60 to-transparent" />

            {/* Badge */}
            <div className="group relative mb-6 inline-flex items-center gap-2 overflow-hidden rounded-full border border-silver/30 bg-gradient-to-b from-silver/10 to-transparent px-4 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-silver opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-silver" />
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-silver-bright uppercase">
                Resident Engineer
              </span>
            </div>

            {/* Description */}
            <p className="text-left text-sm leading-relaxed text-text-muted lg:max-w-sm">
              An engineering professional focused on leadership, quality, and operational bringing technical understanding.
            </p>
          </motion.div>

          {/* COLUMN 2 — Hexagon Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Silver glow */}
              <div className="pointer-events-none absolute inset-0 -z-10 bg-silver/10 blur-[60px]" />
              <div className="hexagon-frame">
                <img
                  src={`${import.meta.env.BASE_URL}portrait.jpg`}
                  alt="Mohamed Elyes Azher portrait"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* COLUMN 3 — Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center gap-3"
          >
            <ContactCard
              icon={<Phone className="h-4 w-4" />}
              label="Phone"
              value={CONTACT.phone}
              href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
            />
            <ContactCard
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value={CONTACT.email}
              href={`mailto:${CONTACT.email}`}
            />
            <ContactCard
              icon={<Globe className="h-4 w-4" />}
              label="Website"
              value={CONTACT.website}
              href={CONTACT.websiteUrl}
            />
            <ContactCard
              icon={<FileText className="h-4 w-4" />}
              label="Curriculum Vitae"
              value="Download CV"
              href={`${import.meta.env.BASE_URL}cv.pdf`}
            />
          </motion.div>
        </div>

        {/* BOTTOM BAR — Location + Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 grid gap-6 rounded-2xl border border-border bg-surface/40 p-4 backdrop-blur-sm md:p-5 lg:grid-cols-[1.2fr_0.9fr_1fr] lg:gap-6"
        >
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-sm text-text-muted lg:justify-start">
            <MapPin className="h-4 w-4 text-silver" />
            <span>{CONTACT.location}</span>
          </div>

          {/* Empty middle column */}
          <div className="flex items-center justify-center" />

          {/* Socials */}
          <div className="flex items-center justify-center gap-2 lg:justify-end">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-bright bg-bg/60 text-text-muted transition-all duration-300 hover:border-silver/50 hover:bg-silver/10 hover:text-silver-bright"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* FINAL LINE — Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-col items-center gap-6 border-t border-border pt-8"
        >
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-silver/40" />
              <div className="h-1 w-1 rounded-full bg-silver/60" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-silver/40" />
            </div>

            <p className="font-mono text-xs tracking-[0.2em] text-text-dim uppercase">
              <span className="text-silver">©</span>{' '}
              <span>{new Date().getFullYear()}</span>
              <span className="mx-2 text-border-bright">·</span>
              <span className="text-text-muted">Mohamed Elyes Azher</span>
              <span className="mx-2 text-border-bright">·</span>
              <span>All rights reserved</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 rounded-2xl border border-border bg-surface/40 p-4 transition-all duration-300 hover:border-silver/40 hover:bg-surface/70"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-bright bg-bg/60 text-silver transition-all duration-300 group-hover:border-silver/50 group-hover:bg-silver/10">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[10px] tracking-widest text-text-dim uppercase">
          {label}
        </p>
        <p className="truncate text-sm text-text-muted transition-colors group-hover:text-text">
          {value}
        </p>
      </div>
    </a>
  );
}