"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  MapPin, Star, ChevronDown, Menu, X, ArrowRight,
  Phone, Mail, Wifi, Car, UtensilsCrossed, Waves,
  Users, Calendar, ChevronLeft, ChevronRight,
  Instagram, Facebook, Twitter, Youtube
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

/* ─── Animation helpers ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: "easeOut" as const, delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

/* ─── Data ─── */
const rooms = [
  {
    name: "Chambre Supérieure",
    size: "35 m²",
    guests: "2 personnes",
    price: "180",
    desc: "Vue jardin, literie premium, douche à l'italienne, minibar.",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    tags: ["Wifi", "Climatisation", "Room Service"],
  },
  {
    name: "Junior Suite",
    size: "55 m²",
    guests: "2 personnes",
    price: "280",
    desc: "Salon séparé, baignoire balnéo, vue panoramique sur la piscine.",
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    tags: ["Balnéo", "Vue piscine", "Lounge"],
  },
  {
    name: "Suite Présidentielle",
    size: "120 m²",
    guests: "4 personnes",
    price: "650",
    desc: "Terrasse privée, butler dédié, jacuzzi extérieur, salle à manger.",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    tags: ["Terrasse", "Butler", "Jacuzzi"],
  },
];

const experiences = [
  {
    icon: <UtensilsCrossed size={28} />,
    title: "Gastronomie",
    subtitle: "Restaurant Le Jardin",
    desc: "Cuisine fusion afro-contemporaine préparée par notre Chef étoilé. Produits locaux, saveurs d'exception.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    color: "from-amber-900/80",
  },
  {
    icon: <Waves size={28} />,
    title: "Wellness & Spa",
    subtitle: "Espace L'Essentiel",
    desc: "3 000 m² dédiés au bien-être : hammam, piscine intérieure, massages signature et soins visage.",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    color: "from-teal-900/80",
  },
  {
    icon: <Users size={28} />,
    title: "Événements",
    subtitle: "Salles de réception",
    desc: "5 salles modulables jusqu'à 600 personnes. Mariage, conférence, séminaire : chaque détail est orchestré.",
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
    color: "from-indigo-900/80",
  },
];

const amenities = [
  { icon: <Wifi size={20} />, label: "WiFi Premium" },
  { icon: <Car size={20} />, label: "Voiturier" },
  { icon: <Waves size={20} />, label: "Piscine Infinity" },
  { icon: <UtensilsCrossed size={20} />, label: "3 Restaurants" },
  { icon: <Users size={20} />, label: "Centre affaires" },
  { icon: <Calendar size={20} />, label: "Concierge 24h" },
];

const testimonials = [
  {
    name: "Sophie Renard",
    country: "Paris, France",
    rating: 5,
    text: "Une expérience absolument inoubliable. Le service est d'une attention rare, les chambres somptueuses. Nous reviendrons sans hésiter.",
  },
  {
    name: "James Whitfield",
    country: "London, UK",
    rating: 5,
    text: "The presidential suite exceeded every expectation. The butler service is flawless and the spa is world-class. Truly 5-star.",
  },
  {
    name: "Amara Diallo",
    country: "Dakar, Sénégal",
    rating: 5,
    text: "Le meilleur hôtel que j'aie jamais visité sur le continent. La cuisine du Chef est une révélation. Service impeccable.",
  },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80", span: "" },
  { src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80", span: "" },
  { src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80", span: "" },
  { src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80", span: "" },
  { src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80", span: "" },
];

const navLinks = [
  { label: "Chambres & Suites", href: "#chambres" },
  { label: "Expériences", href: "#experiences" },
  { label: "Spa & Wellness", href: "#experiences" },
  { label: "Événements", href: "#experiences" },
  { label: "Galerie", href: "#galerie" },
];

/* ─── Booking widget ─── */
function BookingWidget() {
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState(2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
      className="w-full max-w-4xl mx-auto"
    >
      <div
        className="rounded-2xl p-2 flex flex-col md:flex-row items-stretch md:items-center gap-2"
        style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.12)" }}
      >
        {/* Check-in */}
        <div className="flex-1 px-5 py-3 flex flex-col border-b md:border-b-0 md:border-r border-white/10">
          <span className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-1">Arrivée</span>
          <input
            type="date"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            className="bg-transparent text-white font-medium text-sm outline-none [color-scheme:dark]"
          />
        </div>
        {/* Check-out */}
        <div className="flex-1 px-5 py-3 flex flex-col border-b md:border-b-0 md:border-r border-white/10">
          <span className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-1">Départ</span>
          <input
            type="date"
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            className="bg-transparent text-white font-medium text-sm outline-none [color-scheme:dark]"
          />
        </div>
        {/* Guests */}
        <div className="flex-1 px-5 py-3 flex flex-col border-b md:border-b-0 md:border-r border-white/10">
          <span className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-1">Voyageurs</span>
          <div className="flex items-center gap-3">
            <button onClick={() => setGuests(Math.max(1, guests - 1))} className="w-6 h-6 rounded-full border border-white/20 text-white flex items-center justify-center text-sm hover:border-gold-400 transition-colors">−</button>
            <span className="text-white font-medium text-sm w-4 text-center">{guests}</span>
            <button onClick={() => setGuests(Math.min(8, guests + 1))} className="w-6 h-6 rounded-full border border-white/20 text-white flex items-center justify-center text-sm hover:border-gold-400 transition-colors">+</button>
          </div>
        </div>
        {/* CTA */}
        <div className="px-2 py-1">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-gold px-8 py-4 text-sm font-bold w-full md:w-auto whitespace-nowrap flex items-center gap-2 justify-center"
          >
            Vérifier les disponibilités
            <ArrowRight size={15} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Animated stat counter ─── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const start = performance.now();
      const duration = 1600;
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(eased * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      obs.disconnect();
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─── Room card with 3D tilt ─── */
function RoomCard({ room, index }: { room: typeof rooms[0]; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * -10;
    setTilt({ x, y });
  };

  return (
    <motion.div
      {...fadeUp(index * 0.12)}
      className="group cursor-pointer"
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="luxury-card overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={room.img}
            alt={room.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
            <span className="text-white text-xs font-semibold">{room.size}</span>
          </div>
          <div className="absolute bottom-4 left-4">
            <p className="text-white/70 text-xs mb-1">À partir de</p>
            <p className="text-white font-bold text-2xl" style={{ fontFamily: "var(--font-playfair), serif" }}>
              {room.price}€<span className="text-sm font-normal text-white/60"> /nuit</span>
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-7">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2" style={{ fontFamily: "var(--font-playfair), serif" }}>
            {room.name}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-5 leading-relaxed">{room.desc}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {room.tags.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full border border-gold-500/30 text-gold-600 dark:text-gold-400 font-medium">
                {t}
              </span>
            ))}
          </div>
          <motion.button
            whileHover={{ gap: "12px" }}
            className="flex items-center gap-2 text-sm font-semibold text-gold-600 dark:text-gold-400 group/btn"
          >
            Réserver cette chambre
            <ArrowRight size={15} className="transition-transform group-hover/btn:translate-x-1" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main page ─── */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { scrollY } = useScroll();
  const heroImgY = useTransform(scrollY, [0, 700], ["0%", "20%"]);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  /* Auto-rotate testimonials */
  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-bg-main text-slate-800 dark:text-slate-200 overflow-x-hidden">

      {/* ══════════════ NAVBAR ══════════════ */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "glass-nav shadow-sm h-16" : "bg-transparent h-20"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span
              className={`font-bold text-xl tracking-[0.15em] transition-colors ${scrolled ? "text-slate-900 dark:text-white" : "text-white"}`}
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              BRAVIA
            </span>
            <span className={`text-[9px] tracking-[0.4em] font-medium transition-colors ${scrolled ? "text-gold-500" : "text-gold-300"}`}>
              HÔTELS & RESORTS
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-widest uppercase">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`relative group transition-colors ${scrolled ? "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white" : "text-white/70 hover:text-white"}`}
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:block btn-gold px-5 py-2.5 text-xs tracking-widest uppercase font-bold"
            >
              Réserver
            </motion.button>
            <button
              className={`lg:hidden p-2 rounded-xl border ${scrolled ? "border-border-ui" : "border-white/20"}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen
                ? <X size={20} className={scrolled ? "" : "text-white"} />
                : <Menu size={20} className={scrolled ? "" : "text-white"} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass-nav border-t border-border-ui"
            >
              <div className="px-6 py-5 flex flex-col gap-4">
                {navLinks.map((l) => (
                  <Link key={l.label} href={l.href}
                    className="text-sm font-semibold tracking-widest uppercase text-slate-600 dark:text-slate-300 hover:text-gold-500 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
                <button className="btn-gold px-5 py-3 text-xs tracking-widest uppercase font-bold mt-2 w-full">Réserver</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Parallax background */}
        <motion.div className="absolute inset-0 scale-110" style={{ y: heroImgY }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=85"
            alt="Bravia Hotels"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.65) 100%)" }} />
        </motion.div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto w-full mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/40 text-gold-300 text-xs font-semibold tracking-[0.2em] uppercase mb-8"
            style={{ background: "rgba(212,160,23,0.1)", backdropFilter: "blur(8px)" }}
          >
            <Star size={10} className="fill-gold-400 text-gold-400" />
            5 étoiles · Lomé, Togo
            <Star size={10} className="fill-gold-400 text-gold-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-8xl font-bold text-white leading-[1.05] mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            L&apos;art du<br />
            <em className="not-italic" style={{ background: "linear-gradient(135deg,#f0d080,#d4a017,#e8c245)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              séjour parfait
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-white/70 text-lg mb-12 max-w-xl mx-auto leading-relaxed"
          >
            Découvrez un havre d&apos;élégance et de sérénité au cœur de Lomé.
            Une expérience hôtelière d&apos;exception, à chaque visite.
          </motion.p>

          {/* Booking widget */}
          <BookingWidget />
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs tracking-widest uppercase"
        >
          <span>Découvrir</span>
          <ChevronDown size={18} />
        </motion.div>
      </section>

      {/* ══════════════ STATS STRIP ══════════════ */}
      <section className="py-14 border-y border-border-ui relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(90deg, rgba(212,160,23,0.03) 0%, transparent 50%, rgba(212,160,23,0.03) 100%)" }}
        />
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { target: 25, suffix: "+", label: "Années d'excellence" },
            { target: 12, suffix: "", label: "Établissements" },
            { target: 98, suffix: "%", label: "Satisfaction client" },
            { target: 3, suffix: "★", label: "Restaurants gastronomiques" },
          ].map((s, i) => (
            <motion.div key={s.label} {...fadeUp(i * 0.1)}>
              <div
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ fontFamily: "var(--font-playfair), serif", background: "linear-gradient(135deg,#d4a017,#f0d080)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                <Counter target={s.target} suffix={s.suffix} />
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════ ABOUT ══════════════ */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
          {/* Images collage */}
          <motion.div {...fadeUp(0)} className="relative h-[560px] hidden lg:block">
            <div className="absolute top-0 left-0 w-[65%] h-[70%] rounded-3xl overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&q=80" alt="Hotel lobby" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border-4 border-bg-main dark:border-navy-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1455587734955-081b22074882?w=600&q=80" alt="Hotel pool" className="w-full h-full object-cover" />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 right-4 -translate-y-1/2 luxury-card p-5 text-center shadow-xl"
            >
              <div className="text-3xl font-bold gold-text mb-1" style={{ fontFamily: "var(--font-playfair), serif" }}>1998</div>
              <p className="text-xs text-slate-400 font-medium">Fondé à Lomé</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div {...fadeUp(0.15)}>
            <p className="text-gold-500 font-semibold uppercase text-xs tracking-[0.2em] mb-5">Notre Histoire</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Un art de vivre africain, une élégance universelle.
            </h2>
            <div className="w-14 h-0.5 mb-8" style={{ background: "linear-gradient(90deg,#d4a017,transparent)" }} />
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              Depuis 1998, Bravia Hôtels incarne l&apos;hospitalité à son plus haut niveau sur le continent africain. Fondé à Lomé, notre groupe s&apos;est développé pour offrir une expérience unique — où le luxe contemporain rencontre la chaleur et la richesse culturelle africaines.
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-10">
              Chacun de nos 12 établissements est un sanctuaire pensé dans ses moindres détails : architecture singulière, gastronomie d&apos;exception, service personnalisé 24h/24.
            </p>
            {/* Amenities */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
              {amenities.map((a) => (
                <div key={a.label} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
                  <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 shrink-0">
                    {a.icon}
                  </div>
                  {a.label}
                </div>
              ))}
            </div>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="btn-gold px-8 py-4 text-sm">
              Découvrir notre histoire
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ CHAMBRES & SUITES ══════════════ */}
      <section id="chambres" className="py-32 border-t border-border-ui bg-slate-50/50 dark:bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-gold-500 font-semibold uppercase text-xs tracking-[0.2em] mb-4">Hébergement</p>
              <h2
                className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Chambres & Suites
              </h2>
            </div>
            <Link href="#" className="btn-outline px-6 py-3 text-sm shrink-0 inline-flex items-center gap-2">
              Voir tout <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room, i) => (
              <RoomCard key={room.name} room={room} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ EXPERIENCES ══════════════ */}
      <section id="experiences" className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #07111e 0%, #0d1b2e 100%)" }}>
        {/* Gold glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(212,160,23,0.08) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-gold-500 font-semibold uppercase text-xs tracking-[0.2em] mb-4">Art de vivre</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Des expériences <em className="not-italic gold-text">inoubliables</em>
            </h2>
            <div className="w-14 h-0.5 mx-auto" style={{ background: "linear-gradient(90deg,transparent,#d4a017,transparent)" }} />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                {...fadeUp(i * 0.12)}
                className="group relative rounded-3xl overflow-hidden cursor-pointer h-[480px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={exp.img} alt={exp.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-t ${exp.color} to-transparent`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="w-12 h-12 rounded-2xl mb-4 flex items-center justify-center text-gold-400"
                    style={{ background: "rgba(212,160,23,0.15)", border: "1px solid rgba(212,160,23,0.3)" }}
                  >
                    {exp.icon}
                  </div>
                  <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-2">{exp.subtitle}</p>
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-playfair), serif" }}>
                    {exp.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {exp.desc}
                  </p>
                  <div className="flex items-center gap-2 text-gold-400 text-sm font-semibold">
                    Explorer <ArrowRight size={14} className="transition-transform group-hover:translate-x-2 duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ TESTIMONIALS ══════════════ */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...fadeUp(0)} className="mb-16">
            <p className="text-gold-500 font-semibold uppercase text-xs tracking-[0.2em] mb-4">Témoignages</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white" style={{ fontFamily: "var(--font-playfair), serif" }}>
              Ce qu&apos;ils disent de nous
            </h2>
          </motion.div>

          {/* Testimonial slider */}
          <div className="relative min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="luxury-card p-10 text-center"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <blockquote
                  className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-200 mb-8 leading-relaxed italic"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  &ldquo;{testimonials[activeTestimonial].text}&rdquo;
                </blockquote>
                <p className="font-bold text-slate-900 dark:text-white">{testimonials[activeTestimonial].name}</p>
                <p className="text-sm text-slate-400 flex items-center justify-center gap-1.5 mt-1">
                  <MapPin size={12} /> {testimonials[activeTestimonial].country}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={() => setActiveTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-border-ui flex items-center justify-center hover:border-gold-400 transition-colors">
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === activeTestimonial ? "bg-gold-500 w-6" : "bg-slate-300 dark:bg-slate-600"}`}
                />
              ))}
            </div>
            <button onClick={() => setActiveTestimonial((p) => (p + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-border-ui flex items-center justify-center hover:border-gold-400 transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════ GALLERY ══════════════ */}
      <section id="galerie" className="py-32 border-t border-border-ui bg-slate-50/50 dark:bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <p className="text-gold-500 font-semibold uppercase text-xs tracking-[0.2em] mb-4">Galerie</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white" style={{ fontFamily: "var(--font-playfair), serif" }}>
              L&apos;hôtel en images
            </h2>
          </motion.div>

          <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[500px]">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                {...fadeIn(i * 0.08)}
                className={`overflow-hidden rounded-2xl group cursor-pointer ${img.span}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="py-40 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&q=80" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(7,17,30,0.92) 0%, rgba(13,27,46,0.85) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.p {...fadeIn(0)} className="text-gold-400 font-semibold uppercase text-xs tracking-[0.2em] mb-6">Offre exclusive</motion.p>
          <motion.h2
            {...fadeUp(0.1)}
            className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Réservez en direct,<br />économisez jusqu&apos;à 20%
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
            Petit-déjeuner inclus, annulation gratuite et accès prioritaire au spa pour toute réservation directe.
          </motion.p>
          <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="btn-gold px-10 py-4 text-sm w-full sm:w-auto">
              Réserver maintenant
            </motion.button>
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="btn-outline px-10 py-4 text-sm w-full sm:w-auto">
              Voir les offres
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer className="bg-[#030b13] border-t border-white/5 pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="font-bold text-2xl text-white tracking-[0.15em]" style={{ fontFamily: "var(--font-playfair), serif" }}>BRAVIA</div>
                <div className="text-[9px] tracking-[0.4em] text-gold-500 font-medium uppercase">Hôtels & Resorts</div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-xs">
                Une collection d&apos;hôtels de luxe qui célèbre le meilleur de l&apos;hospitalité africaine, avec élégance et raffinement.
              </p>
              {/* Newsletter */}
              <div className="flex gap-2 mb-8">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none focus:border-gold-500/50 transition-colors"
                />
                <button className="btn-gold px-4 py-2.5 text-xs font-bold shrink-0">S&apos;abonner</button>
              </div>
              {/* Social */}
              <div className="flex gap-3">
                {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                  <Link key={i} href="#"
                    className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-slate-500 hover:text-gold-400 hover:border-gold-400/30 transition-all"
                  >
                    <Icon size={15} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Liens */}
            <div>
              <h4 className="text-white font-semibold text-xs tracking-[0.15em] uppercase mb-6">L&apos;hôtel</h4>
              <ul className="space-y-3">
                {["Notre histoire", "Chambres & Suites", "Gastronomie", "Spa & Wellness", "Événements", "Galerie"].map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-slate-500 text-sm hover:text-gold-400 transition-colors">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold text-xs tracking-[0.15em] uppercase mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-slate-500">
                  <MapPin size={14} className="text-gold-500 shrink-0 mt-0.5" />
                  <span>Boulevard du Mono, Lomé<br />République Togolaise</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-500">
                  <Phone size={14} className="text-gold-500 shrink-0" />
                  +228 22 00 00 00
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-500">
                  <Mail size={14} className="text-gold-500 shrink-0" />
                  reservations@bravia.tg
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <p>© {new Date().getFullYear()} Bravia Hôtels & Resorts. Tous droits réservés.</p>
            <div className="flex gap-6">
              {["Mentions légales", "Confidentialité", "Cookies", "FAQ"].map((l) => (
                <Link key={l} href="#" className="hover:text-gold-400 transition-colors">{l}</Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
