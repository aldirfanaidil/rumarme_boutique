import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle,
  MapPin,
  Instagram,
  Phone,
  ExternalLink,
} from "lucide-react";

import rumarmeLogoAsset from "../assets/rumarme-logo.png.asset.json";
import armiaprLogoAsset from "../assets/armiapr-logo.png.asset.json";

const rumarmeLogo = rumarmeLogoAsset?.url || "/rumarme-logo.png";
const armiaprLogo = armiaprLogoAsset?.url || "/armiapr-logo.png";

function TiktokIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .56.04.82.1v-3.6a6.37 6.37 0 0 0-.82-.05A6.34 6.34 0 0 0 3.15 15.5a6.34 6.34 0 0 0 10.83 4.47V10.45a8.3 8.3 0 0 0 5.61 2.16v-3.6a4.85 4.85 0 0 1-2-.32z" />
    </svg>
  );
}

function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.2.19 2.2.19v2.42h-1.24c-1.23 0-1.61.76-1.61 1.54V12h2.73l-.44 3h-2.29v6.8c4.56-.93 8-4.96 8-9.8z" />
    </svg>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rumarme Boutique | Baju Bodo & MUA Samarinda" },
      {
        name: "description",
        content: "Rumarme Boutique - penyewaan Baju Bodo dan jasa MUA profesional di Samarinda.",
      },
    ],
  }),
  component: Index,
});

interface LinkItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  caption?: string;
  variant: "primary" | "secondary" | "outline";
}

const links: LinkItem[] = [
  {
    label: "Chat WhatsApp",
    caption: "Admin: +62852-4990-9900",
    href: "https://wa.me/6285249909900",
    icon: <MessageCircle className="h-5 w-5" />,
    variant: "primary",
  },
  {
    label: "Lihat Koleksi Baju Bodo",
    caption: "@rumarme.smd",
    href: "https://www.instagram.com/rumarme.smd?igsh=Z3plcGk3eGV3Z242",
    icon: <Instagram className="h-5 w-5" />,
    variant: "secondary",
  },
  {
    label: "Booking MUA",
    caption: "@armiapr.makeup",
    href: "https://www.instagram.com/armiapr.makeup?igsh=MTB6cnVhMTF2anRtNw==",
    icon: <Instagram className="h-5 w-5" />,
    variant: "secondary",
  },
  {
    label: "TikTok MUA",
    caption: "@armiapr.makeup",
    href: "https://www.tiktok.com/@armiapr.makeup?_r=1&_t=ZS-98zc8LKFhk9",
    icon: <TiktokIcon className="h-5 w-5" />,
    variant: "outline",
  },
  {
    label: "Facebook Rumarme",
    caption: "Rumarme Boutique",
    href: "https://www.facebook.com/share/1Be68ZzqwV/?mibextid=wwXIfr",
    icon: <FacebookIcon className="h-5 w-5" />,
    variant: "outline",
  },
  {
    label: "Lokasi Kami",
    caption: "Jl. Tanjung Aru, kel. Masjid, Samarinda Seberang",
    href: "https://maps.google.com/?q=-0.524588,117.150177",
    icon: <MapPin className="h-5 w-5" />,
    variant: "outline",
  },
];

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/6285249909900",
    icon: <Phone className="h-5 w-5" />,
  },
  {
    label: "Instagram Rumarme",
    href: "https://www.instagram.com/rumarme.smd?igsh=Z3plcGk3eGV3Z242",
    icon: <Instagram className="h-5 w-5" />,
  },
  {
    label: "TikTok MUA",
    href: "https://www.tiktok.com/@armiapr.makeup?_r=1&_t=ZS-98zc8LKFhk9",
    icon: <TiktokIcon className="h-5 w-5" />,
  },
];

function LinkButton({ item }: { item: LinkItem }) {
  const base =
    "group relative flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const variants = {
    primary:
      "border-transparent bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/25",
    secondary:
      "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:translate-y-[-1px]",
    outline:
      "border-border bg-card text-foreground hover:border-primary/40 hover:bg-primary/5 hover:translate-y-[-1px]",
  };

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[item.variant]}`}
      aria-label={item.label}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
        {item.icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="font-display font-semibold tracking-tight">{item.label}</span>
          <ExternalLink className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
        {item.caption && <p className="text-sm opacity-80">{item.caption}</p>}
      </div>
    </a>
  );
}

function Index() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 py-12 font-sans">
      {/* Soft decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 left-1/4 h-[50rem] w-[50rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-1/4 right-1/4 h-[40rem] w-[40rem] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Unified brand logos */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <img
            src={rumarmeLogo}
            alt="Rumarme Boutique"
            className="h-14 w-auto object-contain"
          />
          <img
            src={armiaprLogo}
            alt="Armiapr Makeup"
            className="h-11 w-auto object-contain"
          />
        </div>

        {/* Identity */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Rumarme.smd & Armiapr.makeup
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Rumarme Boutique
          </h1>
          <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Penyewaan Baju Bodo Samarinda & MUA Samarinda. Satu tempat untuk tampil anggun di momen
            berharga Anda.
          </p>
        </div>

        {/* Social icons */}
        <div className="mb-8 flex items-center justify-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-card text-foreground shadow-sm ring-1 ring-border transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:ring-primary"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Link list */}
        <nav aria-label="Tautan utama" className="flex flex-col gap-3">
          {links.map((item) => (
            <LinkButton key={item.label} item={item} />
          ))}
        </nav>

        {/* Footer trust line */}
        <p className="mt-10 text-center text-xs text-muted-foreground">
          Made with care in Samarinda · Rumarme Boutique × Armiapr Makeup
        </p>
      </div>
    </main>
  );
}

