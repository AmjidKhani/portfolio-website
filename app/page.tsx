"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

/* ── ICONS ── */
const IconGitHub = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);
const IconStackOverflow = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M15 21H5v-2h10v2zm6-11.665l-1.571-9.335-1.643.58 1.57 9.335 1.644-.58zm-8 .893l-9.404-2.065-.43 1.955 9.404 2.065.43-1.955zm-1.838 4.516l-8.2-5.767-1.136 1.616 8.2 5.767 1.136-1.616zm5.338 7.256H7v-2h9v2zm-1.617-4H7v2h9v-2z"/>
  </svg>
);
const IconFiverr = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" width={20} height={20}>
    <path d="M17.5 3H6.5C4.6 3 3 4.6 3 6.5v11c0 1.9 1.6 3.5 3.5 3.5h11c1.9 0 3.5-1.6 3.5-3.5v-11C21 4.6 19.4 3 17.5 3zm-2.2 11.4c-.2.6-.5 1.1-.9 1.5-.4.4-.9.7-1.4.9-.6.2-1.2.3-1.8.3-.7 0-1.4-.1-2-.4-.6-.3-1.1-.7-1.6-1.2-.4-.5-.8-1-.9-1.6-.2-.6-.2-1.2-.2-1.8v-3.9c0-.3.2-.5.5-.5h1.6c.3 0 .5.2.5.5v3.9c0 .9.2 1.6.7 2.1.5.5 1.1.7 1.9.7.4 0 .8-.1 1.2-.2.4-.1.7-.3 1-.5.3-.2.5-.5.7-.8.2-.3.2-.6.2-1v-3.9c0-.3.2-.5.5-.5h1.6c.3 0 .5.2.5.5v3.9c0 .6-.1 1.2-.3 1.8z"/>
  </svg>
);
const IconFolder = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconMenu = () => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const IconClose = () => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 12 19.79 19.79 0 0 1 1.64 3.36 2 2 0 0 1 3.62 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.32 6.32l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IconMapPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const IconDownload = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
const IconAndroid = () => (
  <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor">
    <path d="M3 20.5v-17c0-.83 1-.95 1.4-.42l14 8.5c.37.22.37.62 0 .84l-14 8.5c-.4.53-1.4.41-1.4-.42z"/>
  </svg>
);
const IconApple = () => (
  <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);
const IconFigma = () => (
  <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor">
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5zm7-3.5h3.5a3.5 3.5 0 1 1 0 7H12V2zm0 8.5h3.5a3.5 3.5 0 1 1 0 7H12v-7zm-7 3.5A3.5 3.5 0 0 1 8.5 10.5H12V17H8.5A3.5 3.5 0 0 1 5 14zm3.5 3.5A3.5 3.5 0 1 1 12 21.5V18H8.5z"/>
  </svg>
);
const IconGlobe = () => (
  <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const IconAward = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

/* ── DATA ── */
const navLinks = [
  { name: "Home",       url: "#home" },
  { name: "About",      url: "#about" },
  { name: "Experience", url: "#experience" },
  { name: "Projects",   url: "#projects" },
  { name: "Skills",     url: "#skills" },
  { name: "Education",  url: "#education" },
  { name: "Contact",    url: "#contact" },
];

const socialLinks = [
  { name: "GitHub",         url: "https://github.com/AmjidKhani",                       icon: <IconGitHub /> },
  { name: "LinkedIn",       url: "https://www.linkedin.com/in/amjad-khan-19ba58218/",   icon: <IconLinkedIn /> },
  { name: "Stack Overflow", url: "https://stackoverflow.com/users/18973165/amjad-khan", icon: <IconStackOverflow /> },
  { name: "Fiverr",         url: "https://www.fiverr.com/amjad_appdev",                 icon: <IconFiverr /> },
];

const experiences = [
  {
    tab: "EcomPlug", company: "EcomPlug", title: "Product Engineer",
    range: "Dec 2025 – Present", location: "Islamabad, Pakistan · On-site",
    url: "https://ecomplug.com/",
    bullets: [
      "Own the product surface end to end — mobile apps, storefront websites and the core platform — running scoping, architecture decisions, code reviews and releases together with senior engineers, across 3 live apps and 6 production websites simultaneously.",
      "EcomPlug — Multi-Tenant E-Commerce SaaS (Laravel + FastAPI): Platform managing product inventory, tenants, warehouses, orders, sellers, multi-store data and staff roles & permissions from a single system.",
      "Next.js storefronts shipped: zeliy.com, uaestyles.com, dressfair.com/ae, businessarcade.com/ae, yumshape.com and khanstyle.com — SSR/SEO, multi-currency, Arabic RTL and payment gateway integration.",
      "DressFair (Flutter & React Native — Play Store & App Store): Full-scale e-commerce for Gulf markets — Arabic RTL, 5+ payment gateways, live order tracking, push notifications and seller management.",
      "EcomPlug Seller App (Flutter & React Native — Play Store & App Store): Shopify-style seller platform — product & brand management, order dashboard, finance reporting and staff permission controls.",
      "ShippingPlug (Play Store): Driver management app — live GPS tracking, smart route optimization, digital signature, photo proof-of-delivery and target-based earnings.",
    ],
    stack: ["Flutter", "Dart", "React Native", "Next.js", "React", "Laravel", "Firebase", "REST APIs", "Google Maps", "GetX", "Stripe"],
  },
  {
    tab: "Proto IT", company: "Proto IT Consultants", title: "Flutter Developer",
    range: "Oct 2024 – Dec 2025", location: "Islamabad, Pakistan · Hybrid",
    bullets: [
      "Novlt AI (Play Store & App Store): AI content creation platform for influencers — direct publishing to LinkedIn, Facebook, Instagram and TikTok with real-time engagement analytics.",
      "Integrated 4+ social media APIs — third-party account linking, real-time analytics sync and full state management across the production codebase.",
    ],
    stack: ["Flutter", "Dart", "REST APIs", "Firebase", "AI Integration", "Provider"],
  },
  {
    tab: "Strahlen", company: "Strahlen Studios", title: "App Developer",
    range: "Apr 2024 – Oct 2024", location: "Islamabad, Pakistan · On-site",
    bullets: [
      "Mobula Ray EV (Live UK — App Store): Full-lifecycle EV charging platform across UK stations — Google Maps locator, slot booking, NFC tap-to-charge, Stripe payments and push notifications.",
      "Built real-time REST API sync for live station availability, secure Stripe payment flows and NFC hardware integration for contactless charging.",
    ],
    stack: ["Flutter", "Dart", "Google Maps", "Stripe", "NFC", "Firebase", "REST APIs"],
  },
  {
    tab: "AHAD Softech", company: "AHAD Softech LLP", title: "Flutter Developer",
    range: "May 2023 – Apr 2024", location: "Islamabad, Pakistan · On-site",
    bullets: [
      "AI Calculator (50,000+ downloads — Play Store): AI-powered math solver — photo-snap equation detection, scientific calculator, dark mode, monetized via AdMob and AppLovin.",
      "Status Saver & All Document Reader: WhatsApp status downloader with sticker packs, subscription model and PDF toolkit (merge, split, compress, e-signature) — full ad stack across AdMob, AppLovin, Unity and Facebook Ads.",
    ],
    stack: ["Flutter", "Dart", "Firebase", "AdMob", "AppLovin", "Unity Ads", "GetX", "Crashlytics", "IAP"],
  },
  {
    tab: "Supportive Hands", company: "Supportive Hands IT Solutions", title: "Flutter Developer",
    range: "Jan 2022 – Jan 2023", location: "Abbottabad, Pakistan · On-site",
    bullets: [
      "Built and deployed HR & payroll mobile tools used by 80+ employees — salary calculation (taxes, increments), employee management and progress tracking via Play Store.",
      "Full REST API integration, Firebase backend and end-to-end Play Store deployment through Google Play Console.",
    ],
    stack: ["Flutter", "Dart", "REST APIs", "Firebase"],
  },
  {
    tab: "CODEMATICS", company: "CODEMATICS Inc (IT Park)", title: "Flutter Developer Intern",
    range: "2021", location: "Abbottabad, Pakistan",
    bullets: [
      "Built Travel Explorer App end-to-end: Google Maps, nearby places, category filters (Beach, City, Desert, Forest), star ratings and REST API integration.",
    ],
    stack: ["Flutter", "Dart", "Google Maps", "REST APIs"],
  },
];

/* Store URLs below are region-checked — App Store links point at the storefront
   the app is actually published in, so they resolve instead of 404-ing. */
const apps = [
  {
    name: "DressFair — E-Commerce",
    desc: "Full-scale e-commerce for Gulf markets — Arabic RTL, 5+ payment gateways, live order tracking, push notifications and seller management.",
    tech: ["Flutter", "Firebase", "GetX", "Stripe", "REST APIs"],
    badge: "50K+ Downloads",
    play: "https://play.google.com/store/apps/details?id=com.dressfair",
    ios:  "https://apps.apple.com/ae/app/dressfair-online-shopping/id1627667071",
  },
  {
    name: "Dress Fair Shopping",
    desc: "React Native build of the DressFair storefront — shared commerce backend, multi-currency checkout and push notifications across Android and iOS.",
    tech: ["React Native", "Redux", "REST APIs", "Firebase"],
    badge: "Live",
    play: "https://play.google.com/store/apps/details?id=com.dressfair.dressfairrnhybrid",
    ios:  "https://apps.apple.com/ae/app/dress-fair-shopping/id6764840409",
  },
  {
    name: "BusinessArcade — Online Shopping",
    desc: "Multi-category online shopping app for Gulf markets — catalogue browsing, cart and checkout, order tracking and payment gateway integration.",
    tech: ["Flutter", "Firebase", "REST APIs", "Payments"],
    badge: "Live",
    play: "https://play.google.com/store/apps/details?id=com.businessArcade",
    ios:  "https://apps.apple.com/ae/app/businessarcade-online-shopping/id1633614073",
  },
  {
    name: "EcomPlug Seller App",
    desc: "Shopify-style seller platform — product & brand management, order dashboard, finance reporting and granular staff permission controls.",
    tech: ["Flutter", "GetX", "REST APIs", "Firebase"],
    badge: "Live",
    play: "https://play.google.com/store/apps/details?id=com.dealsarcade.ecomplug.seller",
  },
  {
    name: "EcomPlug Seller",
    desc: "React Native seller app on the same multi-tenant platform — inventory, orders and staff roles for sellers on Android and iOS.",
    tech: ["React Native", "Redux", "REST APIs", "Firebase"],
    badge: "Live",
    play: "https://play.google.com/store/apps/details?id=com.ecomplug.seller",
    ios:  "https://apps.apple.com/ae/app/ecomplug-seller/id6779621122",
  },
  {
    name: "ShippingPlug — Driver & Delivery",
    desc: "Driver management app — live GPS tracking, smart route optimization, digital signature capture, photo proof-of-delivery and target-based earnings.",
    tech: ["Flutter", "Google Maps", "REST APIs", "Firebase"],
    badge: "Live",
    play: "https://play.google.com/store/apps/details?id=com.arcade.dressfairdriversapp",
  },
  {
    name: "Mobula Ray EV (UK)",
    desc: "Full-lifecycle EV charging platform across UK stations — Google Maps locator, slot booking, NFC tap-to-charge, Stripe payments and push notifications.",
    tech: ["Flutter", "Google Maps", "NFC", "Stripe", "Firebase"],
    badge: "Live · UK",
    ios: "https://apps.apple.com/gb/app/mobula-ray-ev/id6477913260",
  },
  {
    name: "Novlt AI",
    desc: "AI content creation platform for influencers — direct publishing to LinkedIn, Facebook, Instagram and TikTok with real-time engagement analytics.",
    tech: ["Flutter", "AI Integration", "Provider", "Firebase"],
    badge: "Live",
    play: "https://play.google.com/store/apps/details?id=com.app.nobility",
    ios:  "https://apps.apple.com/us/app/novlt/id6761835088",
  },
  {
    name: "AI Calculator — Scan & Solve",
    desc: "AI-powered math solver — photo-snap equation detection, scientific calculator and dark mode, monetized via AdMob and AppLovin.",
    tech: ["Flutter", "AdMob", "AppLovin", "AI", "Firebase"],
    badge: "50K+ Downloads",
    play: "https://play.google.com/store/apps/details?id=com.ahad.android.calculator",
  },
];

const storefronts = [
  { label: "zeliy.com",            url: "https://zeliy.com/" },
  { label: "uaestyles.com",        url: "https://uaestyles.com/" },
  { label: "dressfair.com/ae",     url: "https://dressfair.com/ae" },
  { label: "businessarcade.com/ae", url: "https://businessarcade.com/ae" },
  { label: "yumshape.com",         url: "https://yumshape.com/" },
  { label: "khanstyle.com",        url: "https://khanstyle.com/" },
];

const webProjects = [
  {
    name: "EcomPlug — Multi-Tenant E-Commerce SaaS",
    desc: "Platform managing product inventory, tenants, warehouses, orders, sellers, multi-store data and staff roles & permissions from a single system.",
    tech: ["Laravel", "FastAPI", "PHP", "Python", "MySQL", "Multi-tenant"],
    badge: "SaaS",
    links: [{ label: "ecomplug.com", url: "https://ecomplug.com/" }],
  },
  {
    name: "Next.js Storefronts",
    desc: "Six production storefronts shipped and maintained — SSR/SEO, multi-currency, Arabic RTL and payment gateway integration.",
    tech: ["Next.js", "React", "SSR & SEO", "Arabic RTL", "Payments"],
    badge: "6 Live Sites",
    links: storefronts,
  },
];

const ventures = [
  {
    name: "Noor e Moti",
    desc: "My own e-commerce store, built and operated end to end: storefront, product catalogue, checkout and fulfilment — growth driven by my own paid Meta & TikTok campaigns (pixel & events setup, creative testing, retargeting, ROAS scaling).",
    tech: ["E-Commerce", "Meta Ads", "TikTok Ads", "Pixel & CAPI"],
    badge: "My Store",
    links: [{ label: "nooremoti.store", url: "https://nooremoti.store/" }],
  },
  {
    name: "MyJobsFeed",
    desc: "Jobs portal for Pakistan & the Gulf — aggregates live job listings into one searchable feed, with organic SEO traffic as the primary growth channel.",
    tech: ["Python", "FastAPI", "Next.js", "Supabase", "SEO"],
    badge: "My Product",
    links: [{ label: "myjobsfeed.com", url: "https://www.myjobsfeed.com/" }],
  },
  {
    name: "Cropely",
    desc: "Agri-tech platform for farmers — live crop and mandi rates plus an online store for pesticides, sprays and farming supplies.",
    tech: ["Next.js", "React", "SEO"],
    badge: "My Product",
    note: "cropely.com — currently offline",
  },
  {
    name: "Freelance Paid Media",
    desc: "Meta & TikTok ad campaigns for client e-commerce brands — full-funnel setup, conversion tracking, audience building and budget scaling.",
    tech: ["Meta Ads", "TikTok Ads", "Conversions API", "ROAS Scaling"],
    badge: "Freelance",
  },
  {
    name: "Mind Companion",
    desc: "Mental wellness companion app — UI/UX redesign focused on calming visual language, mood tracking and mindfulness flows.",
    tech: ["Figma", "UI/UX", "Product Design"],
    badge: "Figma Design",
    figma: "https://www.figma.com/design/hgJdr7y6lo8ES4cyauKve5/Mind-companion-Redesign",
  },
];

/* Listings retired or internal to the client — deliberately not linked. */
const archiveProjects = [
  { name: "Status Saver & Sticker Maker",   detail: "WhatsApp status downloader — sticker packs, subscriptions, full ad stack" },
  { name: "All Document Reader & PDF Toolkit", detail: "Merge, split, compress, lock/unlock, image-to-PDF, watermarks, e-signature" },
  { name: "HR & Payroll Management Suite",  detail: "Supportive Hands IT Solutions — internal, used by 80+ employees" },
  { name: "Travel Explorer App",            detail: "CODEMATICS Inc — Google Maps, nearby places & REST APIs" },
];

const skillGroups = [
  { label: "Mobile",                skills: ["Flutter", "Dart", "React Native", "Android", "iOS", "Play Console", "App Store Connect"] },
  { label: "Full-Stack Web",        skills: ["Next.js", "React", "Node.js", "Laravel", "PHP", "Python", "FastAPI", "Supabase", "PostgreSQL", "MySQL"] },
  { label: "Architecture",          skills: ["Multi-tenant SaaS", "Clean Architecture", "MVVM", "GetX", "BLoC", "Riverpod", "Provider", "Redux"] },
  { label: "Backend & APIs",        skills: ["Firebase", "Firestore", "REST APIs", "GraphQL", "FCM", "Webhooks", "SSR & SEO"] },
  { label: "Digital Marketing",     skills: ["Meta Ads", "TikTok Ads", "Pixel & CAPI", "Event Tracking", "Retargeting", "Creative Testing", "ROAS Scaling"] },
  { label: "AI & Integration",      skills: ["ChatGPT API", "AI Integration", "Agora", "Camera API"] },
  { label: "Maps & Payments",       skills: ["Google Maps", "Stripe", "NFC", "In-App Purchases", "Live GPS", "5+ Payment Gateways"] },
  { label: "Monetization & DevOps", skills: ["AdMob", "AppLovin", "Unity Ads", "CI/CD", "Git", "Figma", "Crashlytics"] },
];

const highlights = [
  "10+ live apps published worldwide",
  "50,000+ total app downloads",
  "Apps live in UK, Gulf & Pakistan",
  "6 production Next.js storefronts",
  "Multi-tenant e-commerce SaaS shipped",
  "I run my own Meta & TikTok campaigns",
  "3,000+ LinkedIn connections",
  "BSc CGPA: 3.56/4.0 · 1st Position",
];

const certifications = [
  {
    name: "Google Digital Marketing & E-Commerce Professional Certificate",
    issuer: "Coursera",
    url: "https://coursera.org/share/4aee534aa226bf3c7095e8869047a938",
    action: "Verify Certificate",
  },
  {
    name: "DigiSkills Freelancing Certification",
    issuer: "DigiSkills · 2021",
  },
];

/* ── Link Button Component ── */
type LinkButtonType = "play" | "ios" | "figma" | "web";

function LinkButton({ type, url, label }: { type: LinkButtonType; url: string; label?: string }) {
  const [hovered, setHovered] = useState(false);

  const configs = {
    play:  { icon: <IconAndroid />, label: "Play Store" },
    ios:   { icon: <IconApple />,   label: "App Store" },
    figma: { icon: <IconFigma />,   label: "Figma" },
    web:   { icon: <IconGlobe />,   label: "Visit Site" },
  };

  const cfg = configs[type];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // Web links keep their label on small screens — the domain *is* the content,
      // whereas the Play/App Store glyphs still read on their own.
      className={`store-button${type === "web" ? " store-button--web" : ""}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "6px 14px",
        borderRadius: "40px",
        fontSize: "11px",
        fontFamily: "var(--font-jetbrains)",
        fontWeight: 500,
        letterSpacing: "0.3px",
        color: hovered ? "var(--navy)" : "var(--green)",
        background: hovered ? "var(--green)" : "var(--green-tint)",
        border: `1.5px solid ${hovered ? "var(--green)" : "var(--green-border)"}`,
        textDecoration: "none",
        transition: "all 0.25s cubic-bezier(0.2, 0.9, 0.4, 1.1)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered ? "0 6px 14px rgba(14,172,202,0.3)" : "none",
        cursor: "pointer",
        whiteSpace: "nowrap",
        lineHeight: 1,
      }}
    >
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 0 }}>
        {cfg.icon}
      </span>
      <span className="store-button-label">{label ?? cfg.label}</span>
    </a>
  );
}

/* ── Project Card Component ── */
type ProjectCardProps = {
  name: string;
  desc: string;
  tech: string[];
  badge: string;
  play?: string;
  ios?: string;
  figma?: string;
  note?: string;
  links?: { label: string; url: string }[];
};

function ProjectCard({ name, desc, tech, badge, play, ios, figma, note, links }: ProjectCardProps) {
  // A long list of site links wraps badly beside the badge, so it gets its own
  // full-width row under the description instead.
  const headerLinks = links && links.length <= 2 ? links : undefined;
  const bodyLinks   = links && links.length > 2  ? links : undefined;
  const hasHeaderButtons = Boolean(play || ios || figma || headerLinks?.length);

  return (
    <div className="project-card">
      <div className="project-card-header">
        <div className="project-folder"><IconFolder /></div>
        <div className="project-header-right">
          <span className="project-badge">{badge}</span>
          {hasHeaderButtons && (
            <div className="project-store-buttons">
              {play  && <LinkButton type="play"  url={play}  />}
              {ios   && <LinkButton type="ios"   url={ios}   />}
              {figma && <LinkButton type="figma" url={figma} />}
              {headerLinks?.map((l) => (
                <LinkButton key={l.url} type="web" url={l.url} label={l.label} />
              ))}
            </div>
          )}
        </div>
      </div>
      <h3 className="project-name">{name}</h3>
      <p className="project-desc">{desc}</p>
      {note && <p className="project-note">{note}</p>}
      {bodyLinks && (
        <div className="project-links">
          {bodyLinks.map((l) => (
            <LinkButton key={l.url} type="web" url={l.url} label={l.label} />
          ))}
        </div>
      )}
      <ul className="project-tech">
        {tech.map((t) => <li key={t}><span>{t}</span></li>)}
      </ul>
    </div>
  );
}

/* ── COMPONENT ── */
export default function Page() {
  const [activeTab, setActiveTab]       = useState(0);
  const [menuOpen, setMenuOpen]         = useState(false);
  const [scrolled, setScrolled]         = useState(false);
  const [navHidden, setNavHidden]       = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // ✅ FIX 1: lastY is now a ref, not state.
  // Before: useState caused handleScroll to be recreated on every scroll event,
  // which caused the useEffect to re-register the listener constantly → janky navbar.
  const lastYRef = useRef(0);

  // ✅ FIX 2: Empty dependency array — handleScroll is now stable and never recreated.
  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setScrolled(y > 50);
    if (y > lastYRef.current && y > 200) setNavHidden(true);
    else setNavHidden(false);
    lastYRef.current = y;
  }, []); // ← no deps needed — lastYRef.current is mutable and stable

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]); // handleScroll is now stable, so this effect runs exactly once

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 640) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ✅ FIX 3: Active nav link — IntersectionObserver watches each section.
  // When a section enters the viewport, its nav link gets the "active" class.
  // Before: the CSS .active class existed but was never applied by JS.
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.url.replace("#", ""));

    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        {
          // Section is considered "active" when it occupies the middle 40% of the viewport
          rootMargin: "-30% 0px -60% 0px",
          threshold: 0,
        }
      );
      obs.observe(el);
      return obs;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  // ✅ FIX 4: Mobile menu closes with a 100ms delay after link tap.
  // Before: menu closed instantly while smooth scroll fired simultaneously → layout jump.
  const handleMobileLinkClick = () => {
    setTimeout(() => setMenuOpen(false), 100);
  };

  const exp = experiences[activeTab];

  return (
    <>
      {/* ══════════ NAVBAR ══════════ */}
      <header className={["navbar", scrolled ? "scrolled" : "", navHidden ? "hidden" : ""].join(" ")}>
        <a href="#home" className="nav-logo">Amjad Khan</a>
        <nav>
          <ul className="nav-links">
            {navLinks.map((l) => (
              <li key={l.name}>
                <a
                  href={l.url}
                  // ✅ Active class now applied dynamically based on visible section
                  className={activeSection === l.url.replace("#", "") ? "active" : ""}
                >
                  {l.name}
                </a>
              </li>
            ))}
            <li>
              <a href="/amjad_khan_cv.pdf" download="Amjad_Khan_CV.pdf" className="nav-resume-btn">
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </header>

      {/* Mobile menu */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav>
          {navLinks.map((l) => (
            <a
              key={l.name}
              href={l.url}
              // ✅ FIX 4 applied: 100ms delay prevents layout jump on mobile
              onClick={handleMobileLinkClick}
            >
              {l.name}
            </a>
          ))}
        </nav>
        <a
          href="/amjad_khan_cv.pdf"
          download="Amjad_Khan_CV.pdf"
          className="btn-ghost mobile-menu-resume"
          onClick={handleMobileLinkClick}
        >
          Download CV
        </a>
      </div>

      {/* Left sidebar — social */}
      <div className="sidebar left">
        {socialLinks.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-icon"
            aria-label={s.name}
          >
            {s.icon}
          </a>
        ))}
      </div>

      {/* Right sidebar — email */}
      <div className="sidebar right">
        <a href="mailto:amjidkhaniuoh@gmail.com" className="email-link">
          amjidkhaniuoh@gmail.com
        </a>
      </div>

      <main>

        {/* ══════════ HERO ══════════ */}
        <section id="home">
          <div className="hero">
            <div className="hero-left">
              <p className="hero-greeting fade-in delay-1">Hi, my name is</p>
              <h1 className="hero-name fade-in delay-2">Amjad Khan.</h1>
              <h2 className="hero-title fade-in delay-3">I build products end to end.</h2>
              <p className="hero-desc fade-in delay-4">
                I&apos;m a Full Stack Developer based in Islamabad, Pakistan, shipping{" "}
                <strong style={{ color: "var(--lightest-slate)" }}>Flutter &amp; React Native</strong> apps,{" "}
                <strong style={{ color: "var(--lightest-slate)" }}>Next.js</strong> storefronts and a{" "}
                <strong style={{ color: "var(--lightest-slate)" }}>Laravel + FastAPI</strong>{" "}
                multi-tenant e-commerce SaaS. 10+ live apps and 50,000+ downloads across UK, Gulf
                &amp; Pakistan — and I run my own Meta &amp; TikTok campaigns.
              </p>
              <div className="hero-cta fade-in delay-5">
                <a href="#contact" className="btn-primary">Get In Touch</a>
                <a href="#projects" className="btn-ghost">View Projects</a>
              </div>
            </div>
            <div className="hero-photo-wrapper fade-in delay-3">
              <div className="hero-photo-box">
                <Image
                  src="/profile.png"
                  alt="Amjad Khan — Full Stack Developer"
                  width={280}
                  height={340}
                  priority
                  style={{
                    width: "100%", height: "100%",
                    objectFit: "cover", objectPosition: "top center",
                    borderRadius: 16, position: "relative", zIndex: 2,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ ABOUT ══════════ */}
        <section id="about">
          <div className="section-container">
            <h2 className="numbered-heading"><span className="num">01.</span>About Me</h2>
            <div className="about-text">
              <p>
                Hello! I&apos;m Amjad, a Full Stack Developer who owns products end to end — scoping,
                architecture, build, release and post-launch iteration — working alongside senior
                engineers and stakeholders. I&apos;ve been shipping since 2021, and today I ship across
                three surfaces at once: mobile apps, storefront websites and the platform behind them.
              </p>
              <p>
                Currently I&apos;m a{" "}
                <span style={{ color: "var(--green)" }}>Product Engineer</span> at{" "}
                <a href="https://ecomplug.com/" target="_blank" rel="noopener noreferrer">EcomPlug</a>,
                where I run <strong style={{ color: "var(--lightest-slate)" }}>3 live apps</strong> and{" "}
                <strong style={{ color: "var(--lightest-slate)" }}>6 production websites</strong>{" "}
                simultaneously — plus a Laravel + FastAPI multi-tenant SaaS handling inventory,
                warehouses, orders, sellers, multi-store data and staff permissions.
              </p>
              <p>
                I also build and run my own products — an e-commerce store, a jobs portal and an
                agri-tech platform — where I handle the paid{" "}
                <strong style={{ color: "var(--lightest-slate)" }}>Meta &amp; TikTok</strong> campaigns
                myself: pixel and events setup, creative testing, retargeting and ROAS scaling.
                Agile/Scrum practitioner, open to remote or on-site roles globally.
              </p>
              <p style={{ marginBottom: 8, color: "var(--lightest-slate)", fontWeight: 600 }}>
                A few highlights:
              </p>
              <ul className="about-highlights">
                {highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* ══════════ EXPERIENCE ══════════ */}
        <section id="experience">
          <div className="section-container">
            <h2 className="numbered-heading"><span className="num">02.</span>Where I&apos;ve Worked</h2>
            <div className="experience-wrapper">
              <div className="exp-tabs" role="tablist">
                {experiences.map((e, i) => (
                  <button
                    key={e.tab}
                    role="tab"
                    aria-selected={activeTab === i}
                    aria-controls="exp-panel"
                    className={`exp-tab-btn ${activeTab === i ? "active" : ""}`}
                    onClick={() => setActiveTab(i)}
                  >
                    {e.tab}
                  </button>
                ))}
              </div>
              {/* ✅ aria-controls ID added to panel for accessibility */}
              <div id="exp-panel" className="exp-content" role="tabpanel">
                <h3 className="exp-title">
                  {exp.title}{" "}
                  <span>
                    @{" "}
                    {exp.url
                      ? <a href={exp.url} target="_blank" rel="noopener noreferrer">{exp.company}</a>
                      : exp.company}
                  </span>
                </h3>
                <p className="exp-range">
                  {exp.range}&nbsp;·&nbsp;{exp.location}
                </p>
                <ul className="exp-bullets">
                  {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <div className="exp-stack">
                  {exp.stack.map((s) => (
                    <span key={s} className="exp-tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ PROJECTS ══════════ */}
        <section id="projects">
          <div className="section-container">
            <h2 className="numbered-heading"><span className="num">03.</span>Some Things I&apos;ve Built</h2>

            <h3 className="project-group-title">
              Live Apps <span>Flutter &amp; React Native</span>
            </h3>
            <div className="projects-grid">
              {apps.map((p) => <ProjectCard key={p.name} {...p} />)}
            </div>

            <h3 className="project-group-title">
              Web &amp; SaaS <span>Next.js · Laravel · FastAPI</span>
            </h3>
            <div className="projects-grid">
              {webProjects.map((p) => <ProjectCard key={p.name} {...p} />)}
            </div>

            <h3 className="project-group-title">
              Personal Products &amp; Ventures <span>Built and run by me</span>
            </h3>
            <div className="projects-grid">
              {ventures.map((p) => <ProjectCard key={p.name} {...p} />)}
            </div>

            <h3 className="project-group-title">
              Additional Shipped Products <span>Listings retired or internal</span>
            </h3>
            <ul className="archive-list">
              {archiveProjects.map((a) => (
                <li key={a.name}>
                  <strong>{a.name}</strong>
                  <span>{a.detail}</span>
                </li>
              ))}
            </ul>
            <p className="archive-note">
              Store listings for these have been retired or are internal to the client. Happy to walk
              through the codebase, architecture and screenshots on request.
            </p>
          </div>
        </section>

        {/* ══════════ SKILLS ══════════ */}
        <section id="skills">
          <div className="section-container">
            <h2 className="numbered-heading"><span className="num">04.</span>Technical Skills</h2>
            <div className="skills-grid">
              {skillGroups.map((g) => (
                <div key={g.label}>
                  <p className="skill-group-title">{g.label}</p>
                  <div className="skill-tags">
                    {g.skills.map((s) => <span key={s} className="skill-tag">{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ EDUCATION ══════════ */}
        <section id="education">
          <div className="section-container">
            <h2 className="numbered-heading"><span className="num">05.</span>Education &amp; Certifications</h2>
            <div className="edu-card">
              <h3 className="edu-degree">BSc Software Engineering</h3>
              <p className="edu-university">University of Haripur, Pakistan</p>
              <div className="edu-meta">
                <span>2017 – 2021</span>
                <span className="edu-cgpa">CGPA: 3.56 / 4.0</span>
                <span>🏆 1st Position Holder</span>
              </div>
              <p className="edu-desc">
                Graduated top of class with a CGPA of 3.56/4.0, securing 1st position for three
                consecutive semesters. Focused on software engineering principles, mobile application
                development, and systems design.
              </p>
            </div>

            <div className="cert-list">
              {certifications.map((c) => (
                <div key={c.name} className="cert-card">
                  <span className="cert-icon"><IconAward /></span>
                  <div className="cert-body">
                    <p className="cert-name">{c.name}</p>
                    <p className="cert-issuer">{c.issuer}</p>
                  </div>
                  {c.url && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link"
                    >
                      {c.action}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ CONTACT ══════════ */}
        <section id="contact">
          <div className="section-container">
            <div className="contact-section">
              <p className="contact-overline">What&apos;s Next?</p>
              <h2 className="contact-heading">Get In Touch</h2>
              <p className="contact-desc">
                I&apos;m currently open to new opportunities — remote or on-site, globally.
                Whether you have a question, a project, or just want to say hi, my inbox is always open!
              </p>
              <a href="mailto:amjidkhaniuoh@gmail.com" className="btn-primary">Say Hello</a>
              <a
                href="/amjad_khan_cv.pdf"
                download="Amjad_Khan_CV.pdf"
                className="btn-ghost"
                style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
              >
                <IconDownload /> Download CV
              </a>
              <div className="contact-links">
                <a href="tel:+923309189520" className="contact-link-item">
                  <IconPhone />+92 330 9189520
                </a>
                <a href="mailto:amjidkhaniuoh@gmail.com" className="contact-link-item">
                  <IconMail />amjidkhaniuoh@gmail.com
                </a>
                <span className="contact-link-item" style={{ cursor: "default" }}>
                  <IconMapPin />Islamabad, Pakistan
                </span>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="footer">
        <div className="footer-social">
          {socialLinks.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
              {s.icon}
            </a>
          ))}
        </div>
        <p>Designed &amp; Built by <span>Amjad Khan</span></p>
      </footer>
    </>
  );
}
