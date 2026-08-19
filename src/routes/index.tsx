import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle,
  MapPin,
  Instagram,
  Phone,
  Shirt,
  Sparkles,
  ExternalLink,
} from "lucide-react";

import rumarmeLogo from "../assets/rumarme-logo.png.asset.json";
import armiaprLogo from "../assets/armiapr-logo.png.asset.json";

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
    icon: <Shirt className="h-5 w-5" />,
    variant: "secondary",
  },
  {
    label: "Booking MUA",
    caption: "@armiapr.makeup",
    href: "https://www.instagram.com/armiapr.makeup?igsh=MTB6cnVhMTF2anRtNw==",
    icon: <Sparkles className="h-5 w-5" />,
    variant: "secondary",
  },
  {
    label: "TikTok MUA",
    caption: "@armiapr.makeup",
    href: "https://www.tiktok.com/@armiapr.makeup?_r=1&_t=ZS-98zc8LKFhk9",
    icon: <ExternalLink className="h-5 w-5" />,
    variant: "outline",
  },
  {
    label: "Facebook Rumarme",
    caption: "Rumarme Boutique",
    href: "https://www.facebook.com/share/1Be68ZzqwV/?mibextid=wwXIfr",
    icon: <ExternalLink className="h-5 w-5" />,
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
    label: "Instagram MUA",
    href: "https://www.instagram.com/armiapr.makeup?igsh=MTB6cnVhMTF2anRtNw==",
    icon: <Instagram className="h-5 w-5" />,
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
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="flex h-20 w-32 items-center justify-center rounded-2xl bg-white/60 p-3 shadow-sm backdrop-blur-sm">
            <img
              src={rumarmeLogo.url}
              alt="Rumarme Boutique"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-32 items-center justify-center rounded-2xl bg-white/60 p-3 shadow-sm backdrop-blur-sm">
            <img
              src={armiaprLogo.url}
              alt="Armiapr Makeup"
              className="max-h-full max-w-full object-contain"
            />
          </div>
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
