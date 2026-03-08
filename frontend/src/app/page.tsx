"use client";

import { motion } from "framer-motion";
import { 
  Package, 
  MapPin, 
  CreditCard, 
  Clock, 
  Truck,
  ShieldCheck,
  Smartphone,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-slate-800 dark:text-slate-200 transition-colors duration-500 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 to-white dark:from-slate-900/50 dark:to-slate-950"></div>
      
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 glass-nav transition-all h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-40 h-10 transition-transform duration-300 group-hover:scale-105">
              {/* Votre logo personnalisé ici */}
              <Image 
                src="/brand/logo.jpeg" 
                alt="Afrigo Express Logo" 
                fill
                className="object-contain dark:brightness-110"
                priority
              />
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600 dark:text-slate-400">
            <Link href="#services" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Services</Link>
            <Link href="#suivi" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Suivi Colis</Link>
            <Link href="#entreprise" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Entreprises</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-800"></div>
            <button className="bg-slate-900 dark:bg-primary-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 dark:hover:bg-primary-500 transition-all shadow-lg shadow-primary-600/10 flex items-center gap-2">
              Expédier
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            {/* Hero Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl relative z-10 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium text-xs mb-8 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
                </span>
                Opérationnel à Lomé et environs
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-slate-900 dark:text-white">
                La logistique <br className="hidden lg:block"/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400">
                  intelligente
                </span> au Togo.
              </h1>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                Expédiez, suivez et recevez vos colis en toute sérénité. Afrigo Express offre un suivi GPS précis et une transparence totale.
              </p>
              
              {/* Tracking Input */}
              <div className="premium-card p-2.5 flex items-center max-w-md w-full mx-auto lg:mx-0 focus-within:ring-2 focus-within:ring-primary-500/30 transition-all">
                <div className="pl-4 text-slate-400 dark:text-slate-500">
                  <MapPin size={22} />
                </div>
                <input 
                  type="text" 
                  placeholder="N° de suivi (ex: AF-8392)"
                  className="flex-1 bg-transparent px-4 py-3 outline-none text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 font-medium text-sm w-full"
                />
                <button className="bg-primary-600 text-white px-6 py-3 rounded-2xl text-sm font-semibold hover:bg-primary-500 transition-all shadow-lg shadow-primary-600/30">
                  Suivre
                </button>
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-emerald-500" size={18} />
                  Sécurisé
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="text-accent-500" size={18} />
                  Express
                </div>
              </div>
            </motion.div>

            {/* Visual Part */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
               <div className="premium-card aspect-square w-full p-2 relative overflow-hidden bg-white/50 dark:bg-slate-800/30">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-500/5 to-transparent"></div>
                  
                  <div className="w-full h-full border border-slate-100 dark:border-slate-700/50 rounded-[1.8rem] relative flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900">
                     <div className="absolute w-[80%] h-[80%] border border-slate-100 dark:border-slate-800 rounded-full animate-pulse"></div>
                     <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white shadow-2xl shadow-primary-500">
                        <MapPin size={24} />
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="services" className="py-24 relative bg-white dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-primary-600 font-bold uppercase text-xs tracking-widest mb-4">Fonctionnalités</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900 dark:text-white">Optimisé pour la rapidité.</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">Nous utilisons la technologie pour simplifier vos envois au Togo.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <MapPin size={24} />,
                  title: "Tracking GPS",
                  description: "Suivez votre colis sur une carte interactive en temps réel.",
                  color: "text-blue-600 dark:text-blue-400",
                  bg: "bg-blue-50 dark:bg-blue-900/20"
                },
                {
                  icon: <CreditCard size={24} />,
                  title: "Paiement Mobile",
                  description: "Intégration fluide de T-Money et Flooz pour payer vos courses.",
                  color: "text-emerald-600 dark:text-emerald-400",
                  bg: "bg-emerald-50 dark:bg-emerald-900/20"
                },
                {
                  icon: <Package size={24} />,
                  title: "Tarification Juste",
                  description: "Calcul immédiat selon la distance et le volume de l'envoi.",
                  color: "text-accent-600 dark:text-accent-400",
                  bg: "bg-accent-50 dark:bg-accent-900/20"
                }
              ].map((feature, idx) => (
                <div key={idx} className="premium-card p-10 hover:shadow-xl transition-all duration-300">
                  <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-8`}>
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden bg-slate-950">
          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
              Prêt à expédier au Togo ?
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
              Des milliers de particuliers et entreprises font déjà confiance à Afrigo Express.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary-500 transition-all shadow-lg shadow-primary-600/20">
                Créer un envoi
              </button>
              <button className="w-full sm:w-auto bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/20 transition-colors backdrop-blur-md">
                En savoir plus
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="relative w-32 h-8">
            <Image 
              src="/brand/logo.jpeg" 
              alt="Afrigo Express Logo" 
              fill
              className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all dark:brightness-200"
            />
          </Link>
          <p className="text-xs font-medium text-slate-500">
            © {new Date().getFullYear()} Afrigo Express. Propulsé par Kelvix.
          </p>
          <div className="flex items-center gap-6 text-xs font-medium text-slate-500">
            <Link href="#" className="hover:text-primary-600">Légal</Link>
            <Link href="#" className="hover:text-primary-600">Confidentialité</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
