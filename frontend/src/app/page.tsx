"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Package, MapPin, CreditCard, Clock, Truck,
  ShieldCheck, Smartphone, ArrowRight, CheckCircle2,
  Star, ChevronDown, Menu, X, Phone, Mail,
  BarChart3, Zap, Globe2, HeadphonesIcon
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { useRef, useState, useEffect } from "react";

/* ─────────────────────── helpers ─────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

/* ─────────────────────── data ─────────────────────── */
const services = [
  {
    icon: <MapPin size={26} />,
    title: "Tracking GPS",
    description: "Suivez votre colis sur une carte interactive en temps réel avec notifications push.",
    color: "from-blue-500/20 to-blue-600/5",
    accent: "text-blue-400",
    border: "border-blue-500/20",
  },
  {
    icon: <CreditCard size={26} />,
    title: "Paiement Mobile",
    description: "T-Money, Flooz, carte bancaire — payez en 10 secondes sans friction.",
    color: "from-emerald-500/20 to-emerald-600/5",
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
  },
  {
    icon: <Zap size={26} />,
    title: "Livraison Express",
    description: "Collecte en 30 min à Lomé. Livraison le jour même dans les zones couvertes.",
    color: "from-gold-500/20 to-gold-600/5",
    accent: "text-gold-400",
    border: "border-gold-500/20",
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "Assurance Colis",
    description: "Chaque envoi est assuré jusqu'à 500 000 FCFA. Votre sérénité d'abord.",
    color: "from-purple-500/20 to-purple-600/5",
    accent: "text-purple-400",
    border: "border-purple-500/20",
  },
  {
    icon: <Globe2 size={26} />,
    title: "Couverture Nationale",
    description: "Lomé, Kpalimé, Sokodé, Kara, Dapaong — tout le Togo est connecté.",
    color: "from-rose-500/20 to-rose-600/5",
    accent: "text-rose-400",
    border: "border-rose-500/20",
  },
  {
    icon: <HeadphonesIcon size={26} />,
    title: "Support 24/7",
    description: "Une équipe disponible à toute heure pour vous accompagner.",
    color: "from-cyan-500/20 to-cyan-600/5",
    accent: "text-cyan-400",
    border: "border-cyan-500/20",
  },
];

const stats = [
  { value: "50K+", label: "Colis livrés" },
  { value: "98%", label: "Satisfaction client" },
  { value: "< 2h", label: "Délai moyen à Lomé" },
  { value: "40+", label: "Villes couvertes" },
];

const steps = [
  { n: "01", title: "Créez votre envoi", desc: "Remplissez le formulaire en ligne ou via notre app en moins de 2 minutes." },
  { n: "02", title: "Collecte à domicile", desc: "Notre coursier arrive chez vous dans les 30 minutes suivant votre commande." },
  { n: "03", title: "Suivi en direct", desc: "Recevez des notifications SMS et email à chaque étape du trajet." },
  { n: "04", title: "Livraison confirmée", desc: "Signature électronique et photo de preuve envoyées immédiatement." },
];

const testimonials = [
  {
    name: "Kossi Adjonou",
    role: "Gérant, Boutique Adjona",
    text: "Afrigo Express a transformé ma logistique. Mes clients reçoivent leurs commandes le jour même. Je recommande vivement.",
    rating: 5,
  },
  {
    name: "Abla Mensah",
    role: "Directrice RH, BTCI",
    text: "Fiabilité irréprochable pour nos courriers internes. Le tableau de bord entreprise est excellent.",
    rating: 5,
  },
  {
    name: "Yao Koudou",
    role: "E-commerçant",
    text: "En 6 mois, zéro colis perdu. Le tracking en temps réel rassure mes acheteurs. C'est vraiment professionnel.",
    rating: 5,
  },
];

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Suivi Colis", href: "#suivi" },
  { label: "Entreprises", href: "#entreprise" },
  { label: "Contact", href: "#contact" },
];

/* ─────────────────────── 3D floating package ─────────────────────── */
function FloatingPackage() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {/* Orbiting rings */}
      <div
        className="absolute rounded-full border border-gold-500/10"
        style={{ width: 420, height: 420 }}
      />
      <div
        className="absolute rounded-full border border-gold-500/10"
        style={{ width: 300, height: 300 }}
      />

      {/* Orbiting dot 1 */}
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-gold-400/60"
        style={{ left: "50%", top: "50%", marginLeft: -6, marginTop: -156, transformOrigin: "6px 156px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Orbiting dot 2 */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-blue-400/60"
        style={{ left: "50%", top: "50%", marginLeft: -4, marginTop: -96, transformOrigin: "4px 96px" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      {/* Main 3D cube */}
      <motion.div
        animate={{ y: [0, -16, 0], rotateY: [0, 8, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <div className="cube-scene">
          <div
            className="relative"
            style={{
              width: 140,
              height: 140,
              transformStyle: "preserve-3d",
              transform: "rotateX(-20deg) rotateY(30deg)",
            }}
          >
            {/* Box body */}
            <div
              className="absolute inset-0 rounded-2xl border border-gold-500/40"
              style={{
                background: "linear-gradient(135deg, rgba(212,160,23,0.15) 0%, rgba(13,27,46,0.6) 100%)",
                backdropFilter: "blur(8px)",
              }}
            />
            {/* Tape stripe */}
            <div
              className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2"
              style={{ background: "linear-gradient(90deg, transparent, rgba(212,160,23,0.6), transparent)" }}
            />
            <div
              className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2"
              style={{ background: "linear-gradient(180deg, transparent, rgba(212,160,23,0.6), transparent)" }}
            />
            {/* Logo mark */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "rgba(212,160,23,0.2)", border: "1px solid rgba(212,160,23,0.4)" }}
              >
                <Package size={20} className="text-gold-400" />
              </div>
            </div>
            {/* Shadow bottom */}
            <div
              className="absolute bottom-0 left-4 right-4 h-1 rounded-full"
              style={{ background: "rgba(212,160,23,0.2)", filter: "blur(4px)", transform: "translateY(8px)" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Floating status cards */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute left-0 top-1/4 luxury-card px-4 py-3 flex items-center gap-3 text-sm"
        style={{ minWidth: 180 }}
      >
        <div className="status-dot" />
        <div>
          <p className="font-semibold text-slate-800 dark:text-white text-xs">En transit</p>
          <p className="text-slate-400 text-xs">AF-8392 · Lomé</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute right-0 bottom-1/4 luxury-card px-4 py-3 flex items-center gap-3 text-sm"
        style={{ minWidth: 180 }}
      >
        <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
        <div>
          <p className="font-semibold text-slate-800 dark:text-white text-xs">Livré !</p>
          <p className="text-slate-400 text-xs">il y a 3 minutes</p>
        </div>
      </motion.div>

      {/* Particles */}
      {[
        { size: 6, top: "15%", left: "10%", dur: "7s", delay: "0s" },
        { size: 4, top: "70%", left: "15%", dur: "5s", delay: "1s" },
        { size: 5, top: "25%", right: "8%", dur: "8s", delay: "0.5s" },
        { size: 3, top: "80%", right: "20%", dur: "6s", delay: "2s" },
      ].map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: (p as {left?: string}).left,
            right: (p as {right?: string}).right,
            "--dur": p.dur,
            "--delay": p.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

/* ─────────────────────── Animated counter ─────────────────────── */
function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState("0");

  useEffect(() => {
    const target = ref.current;
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const numeric = parseInt(value.replace(/\D/g, ""));
          if (isNaN(numeric)) { setDisplayed(value); return; }
          let start = 0;
          const duration = 1800;
          const startTime = performance.now();
          const suffix = value.replace(/[\d.]/g, "");
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * numeric);
            setDisplayed(`${current}${suffix}`);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{displayed}</span>;
}

/* ─────────────────────── Main component ─────────────────────── */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen mesh-bg text-slate-800 dark:text-slate-200 overflow-x-hidden">

      {/* ══ NAVBAR ══ */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "glass-nav shadow-lg shadow-black/5 h-16" : "bg-transparent h-20"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="relative w-10 h-10"
            >
              <Image src="/brand/logo.jpeg" alt="Afrigo Express" fill className="object-contain rounded-xl" priority />
            </motion.div>
            <span style={{ fontFamily: "'Playfair Display', serif" }} className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">
              AFRIGO<span className="text-gold-500">EXPRESS</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="relative group hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:flex btn-gold items-center gap-2 px-5 py-2.5 text-sm"
            >
              Expédier maintenant
              <ArrowRight size={15} />
            </motion.button>
            <button
              className="md:hidden p-2 rounded-xl border border-border-ui"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
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
              className="md:hidden glass-nav border-t border-border-ui"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-gold-500 transition-colors py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
                <button className="btn-gold px-5 py-2.5 text-sm w-full mt-2">
                  Expédier maintenant
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ══ HERO ══ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      >
        {/* Background gradient blobs */}
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(212,160,23,0.08) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="text-center lg:text-left">
              <motion.div
                {...fadeIn(0.1)}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border-ui bg-bg-card/60 backdrop-blur-sm text-xs font-medium text-slate-500 dark:text-slate-400 mb-8"
              >
                <span className="status-dot" />
                Opérationnel à Lomé et dans 40+ villes
              </motion.div>

              <motion.h1
                {...fadeUp(0.2)}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                La livraison{" "}
                <br className="hidden lg:block" />
                <em className="not-italic gold-text">premium</em>
                <br className="hidden lg:block" />
                au Togo.
              </motion.h1>

              <motion.p
                {...fadeUp(0.35)}
                className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              >
                Expédiez, suivez et recevez vos colis avec la précision d&apos;une
                horloge suisse — partout au Togo, 7j/7.
              </motion.p>

              {/* Tracking bar */}
              <motion.div
                {...fadeUp(0.45)}
                id="suivi"
                className="luxury-card p-2 flex items-center max-w-md w-full mx-auto lg:mx-0 focus-within:ring-2 focus-within:ring-gold-500/30 transition-all"
              >
                <div className="pl-4 text-gold-500">
                  <MapPin size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Numéro de suivi (ex: AF-8392)"
                  className="flex-1 bg-transparent px-4 py-3 outline-none text-slate-800 dark:text-slate-200 placeholder:text-slate-400 font-medium text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-gold px-5 py-2.5 text-sm shrink-0"
                >
                  Suivre
                </motion.button>
              </motion.div>

              <motion.div
                {...fadeUp(0.55)}
                className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm font-medium text-slate-500 dark:text-slate-400"
              >
                {[
                  { icon: <ShieldCheck size={16} className="text-emerald-500" />, label: "100% Sécurisé" },
                  { icon: <Clock size={16} className="text-gold-500" />, label: "Express 30 min" },
                  { icon: <Smartphone size={16} className="text-blue-400" />, label: "App disponible" },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-2">
                    {b.icon}
                    {b.label}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — 3D visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block h-[520px]"
            >
              <FloatingPackage />
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-slate-400 text-xs"
          >
            <span>Découvrir</span>
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* ══ STATS BAND ══ */}
      <section className="py-16 border-y border-border-ui bg-navy-900/5 dark:bg-white/2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                {...fadeUp(i * 0.1)}
                className="text-center"
              >
                <div
                  className="text-4xl md:text-5xl font-extrabold mb-2 gold-text"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <AnimatedCounter value={s.value} />
                </div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section id="services" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-gold-500 font-semibold uppercase text-xs tracking-[0.2em] mb-4">
              Nos Services
            </p>
            <h2
              className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tout ce dont vous avez besoin
            </h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp(i * 0.08)}
                className={`luxury-card-hover p-8 group cursor-default border ${s.border}`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} ${s.accent} flex items-center justify-center mb-7 transition-transform duration-500 group-hover:scale-110`}
                >
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {s.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="py-32 relative bg-navy-900/3 dark:bg-white/1 border-y border-border-ui overflow-hidden">
        {/* Animated SVG path */}
        <svg
          className="absolute top-1/2 left-0 right-0 w-full opacity-[0.04] pointer-events-none"
          style={{ transform: "translateY(-50%)" }}
          viewBox="0 0 1200 100"
          fill="none"
        >
          <motion.path
            d="M0 50 Q300 0 600 50 Q900 100 1200 50"
            stroke="#d4a017"
            strokeWidth="2"
            strokeDasharray="1000"
            initial={{ strokeDashoffset: 1000 }}
            whileInView={{ strokeDashoffset: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-gold-500 font-semibold uppercase text-xs tracking-[0.2em] mb-4">
              Comment ça marche
            </p>
            <h2
              className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Simple, rapide, fiable
            </h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                {...fadeUp(i * 0.12)}
                className="relative text-center group"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+48px)] right-[-calc(50%-48px)] h-px border-t border-dashed border-gold-500/20" />
                )}
                {/* Number circle */}
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, rgba(212,160,23,0.15), rgba(212,160,23,0.05))",
                    border: "1px solid rgba(212,160,23,0.3)",
                    fontFamily: "'Playfair Display', serif",
                    animation: `pulse-gold 3s ease-in-out ${i * 0.5}s infinite`,
                    color: "#d4a017",
                  }}
                >
                  {step.n}
                </div>
                <h4 className="text-lg font-bold mb-3 text-slate-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {step.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ENTERPRISE SECTION ══ */}
      <section id="entreprise" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left visual */}
            <motion.div
              {...fadeUp(0)}
              className="relative hidden lg:block"
            >
              <div className="luxury-card p-10 relative overflow-hidden">
                {/* Mini dashboard mockup */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Livraisons ce mois</p>
                    <p className="text-3xl font-bold gold-text" style={{ fontFamily: "'Playfair Display', serif" }}>1 284</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                    <BarChart3 size={22} className="text-gold-500" />
                  </div>
                </div>

                {/* Bar chart */}
                <div className="flex items-end gap-2 h-24 mb-6">
                  {[40, 65, 45, 80, 60, 90, 75, 95, 70, 88, 62, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{
                        background: i === 11
                          ? "linear-gradient(180deg, #d4a017, #b8860b)"
                          : "rgba(212,160,23,0.2)",
                      }}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.04, ease: "easeOut" }}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "À temps", value: "97.3%", color: "text-emerald-400" },
                    { label: "En cours", value: "42", color: "text-blue-400" },
                    { label: "Incidents", value: "0", color: "text-red-400" },
                  ].map((m) => (
                    <div key={m.label} className="luxury-card p-4 text-center">
                      <p className={`text-xl font-bold ${m.color}`} style={{ fontFamily: "'Playfair Display', serif" }}>{m.value}</p>
                      <p className="text-xs text-slate-400 mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 luxury-card px-4 py-3 flex items-center gap-2"
              >
                <Truck size={16} className="text-gold-500" />
                <span className="text-xs font-semibold text-slate-700 dark:text-white">Flotte dédiée</span>
              </motion.div>
            </motion.div>

            {/* Right text */}
            <motion.div {...fadeUp(0.15)}>
              <p className="text-gold-500 font-semibold uppercase text-xs tracking-[0.2em] mb-4">
                Entreprises
              </p>
              <h2
                className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                La logistique pensée pour les professionnels.
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">
                Accédez à un tableau de bord en temps réel, négociez des tarifs volumes, profitez d&apos;une API d&apos;intégration et d&apos;un gestionnaire de compte dédié.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Tableau de bord analytics avancé",
                  "Facturation mensuelle centralisée",
                  "API REST pour e-commerce",
                  "Gestionnaire de compte dédié",
                  "SLA garanti 99.5% de disponibilité",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-gold-500 shrink-0" />
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-gold px-7 py-3.5 text-sm"
                >
                  Contacter les ventes
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-outline px-7 py-3.5 text-sm"
                >
                  Voir la documentation API
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="py-32 border-y border-border-ui bg-navy-900/3 dark:bg-white/1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-gold-500 font-semibold uppercase text-xs tracking-[0.2em] mb-4">
              Témoignages
            </p>
            <h2
              className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ils nous font confiance
            </h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                {...fadeUp(i * 0.1)}
                className="luxury-card-hover p-8"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-sm italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-gold-900 font-bold text-sm shrink-0"
                    style={{ background: "linear-gradient(135deg, #d4a017, #e8c245)" }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-white text-sm">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BAND ══ */}
      <section className="py-32 relative overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, #07111e 0%, #0d1b2e 40%, #1a2a40 100%)",
          }}
        />
        {/* Gold glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(212,160,23,0.15) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.p {...fadeIn(0)} className="text-gold-500 font-semibold uppercase text-xs tracking-[0.2em] mb-6">
            Commencez aujourd&apos;hui
          </motion.p>
          <motion.h2
            {...fadeUp(0.1)}
            className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Prêt à expédier au Togo ?
          </motion.h2>
          <motion.p
            {...fadeUp(0.2)}
            className="text-slate-400 mb-12 text-lg max-w-xl mx-auto"
          >
            Rejoignez 50 000+ clients qui font confiance à Afrigo Express pour leurs envois.
          </motion.p>
          <motion.div
            {...fadeUp(0.3)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="btn-gold px-8 py-4 text-base w-full sm:w-auto"
            >
              Créer un envoi gratuit
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="btn-outline px-8 py-4 text-base w-full sm:w-auto"
            >
              Télécharger l&apos;app
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer id="contact" className="bg-navy-950 dark:bg-[#030b13] border-t border-white/5 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="relative w-9 h-9">
                  <Image src="/brand/logo.jpeg" alt="Afrigo Express" fill className="object-contain rounded-xl" />
                </div>
                <span style={{ fontFamily: "'Playfair Display', serif" }} className="font-bold text-white">
                  AFRIGO<span className="text-gold-500">EXPRESS</span>
                </span>
              </Link>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-8">
                La plateforme logistique premium au Togo. Rapide, sécurisée, innovante.
              </p>
              <div className="flex flex-col gap-3 text-sm text-slate-500">
                <div className="flex items-center gap-3">
                  <Phone size={15} className="text-gold-500 shrink-0" />
                  <span>+228 90 00 00 00</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={15} className="text-gold-500 shrink-0" />
                  <span>contact@afrigoexpress.tg</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={15} className="text-gold-500 shrink-0" />
                  <span>Lomé, République Togolaise</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-6">Services</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                {["Livraison Express", "Suivi Colis", "Paiement Mobile", "Livraison Entreprise", "API Intégration"].map((l) => (
                  <li key={l}>
                    <Link href="#" className="hover:text-gold-400 transition-colors">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-6">Légal</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                {["Conditions d'utilisation", "Politique de confidentialité", "Cookies", "FAQ", "Presse"].map((l) => (
                  <li key={l}>
                    <Link href="#" className="hover:text-gold-400 transition-colors">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <p>© {new Date().getFullYear()} Afrigo Express. Tous droits réservés. Propulsé par Kelvix.</p>
            <p>Conçu avec passion au Togo 🇹🇬</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
