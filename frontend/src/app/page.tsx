"use client";

import { motion } from "framer-motion";
import { 
  Package, 
  MapPin, 
  CreditCard, 
  Clock, 
  ChevronRight, 
  Truck,
  ShieldCheck,
  Smartphone
} from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 selection:bg-accent-500 selection:text-white overflow-hidden transition-colors duration-300">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary-600 p-2 rounded-xl text-white">
              <Package size={24} strokeWidth={2.5} />
            </div>
            <span className="font-bold text-xl tracking-tight text-primary-900 dark:text-white">
              AFRIGO<span className="text-accent-500">EXPRESS</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600 dark:text-slate-400">
            <Link href="#services" className="hover:text-primary-600 dark:hover:text-accent-400 transition-colors">Services</Link>
            <Link href="#suivi" className="hover:text-primary-600 dark:hover:text-accent-400 transition-colors">Suivi Colis</Link>
            <Link href="#entreprise" className="hover:text-primary-600 dark:hover:text-accent-400 transition-colors">Entreprises</Link>
          </nav>
          
          <div className="flex items-center gap-3 md:gap-4">
            <ThemeToggle />
            <button className="hidden sm:block text-slate-600 dark:text-slate-400 font-medium hover:text-primary-900 dark:hover:text-white transition-colors">
              Se Connecter
            </button>
            <button className="bg-primary-900 dark:bg-primary-600 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full font-medium hover:bg-primary-800 dark:hover:bg-primary-500 transition-colors shadow-lg shadow-primary-900/20 flex items-center gap-2 text-sm md:text-base">
              Expédier
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Background Decorative Blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-primary-100/50 dark:bg-primary-900/20 rounded-full blur-3xl -z-10 opacity-70"></div>
          <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-accent-100/30 dark:bg-accent-900/10 rounded-full blur-3xl -z-10 opacity-50"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-50 dark:bg-accent-900/30 border border-accent-100 dark:border-accent-800/50 text-accent-600 dark:text-accent-400 font-semibold text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
                </span>
                Opérationnel à Lomé et environs
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary-900 dark:text-white tracking-tight leading-[1.1] mb-6">
                La logistique <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">intelligente</span> au Togo.
              </h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
                Expédiez, suivez et recevez vos colis en toute sérénité. Afrigo Express révolutionne la livraison avec un suivi GPS en temps réel et des tarifs transparents.
              </p>
              
              {/* Tracking Input */}
              <div className="bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 flex items-center max-w-md w-full focus-within:ring-4 focus-within:ring-primary-100 dark:focus-within:ring-primary-900/30 transition-all">
                <div className="pl-4 text-slate-400">
                  <MapPin size={24} />
                </div>
                <input 
                  type="text" 
                  placeholder="N° de suivi (ex: AF-8392)"
                  className="flex-1 bg-transparent px-4 py-3 outline-none text-slate-800 dark:text-white placeholder:text-slate-400 font-medium w-full"
                />
                <button className="bg-primary-600 text-white px-4 md:px-6 py-3 rounded-xl font-semibold hover:bg-primary-500 transition-colors shadow-md shadow-primary-500/30">
                  Suivre
                </button>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-emerald-500" size={20} />
                  Paiement Sécurisé
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="text-accent-500" size={20} />
                  Livraison Express
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
               {/* Premium Abstract Mockup */}
               <div className="relative w-full aspect-square rounded-[2.5rem] bg-gradient-to-tr from-primary-900 via-primary-800 to-primary-600 shadow-2xl overflow-hidden flex items-center justify-center border-8 border-white dark:border-slate-800">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                  
                  {/* Floating Elements */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute top-1/4 -left-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100 dark:border-slate-700"
                  >
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full text-emerald-600 dark:text-emerald-400">
                      <Truck size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Statut</p>
                      <p className="font-bold text-slate-800 dark:text-white">En cours de route</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100 dark:border-slate-700"
                  >
                    <div className="bg-accent-100 dark:bg-accent-900/30 p-3 rounded-full text-accent-600 dark:text-accent-400">
                      <Smartphone size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Paiement</p>
                      <p className="font-bold text-slate-800 dark:text-white">Flooz / T-Money</p>
                    </div>
                  </motion.div>
                  
                  <div className="w-64 h-64 rounded-full border-4 border-white/20 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border-4 border-white/40 flex items-center justify-center">
                       <MapPin className="text-accent-400 w-20 h-20 drop-shadow-lg" />
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="services" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-primary-600 dark:text-accent-400 font-bold tracking-wide uppercase text-sm mb-3">Nos Services</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">Conçu pour l'excellence et la rapidité.</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">Nous avons repensé chaque étape de la livraison pour offrir une expérience fluide, sécurisée et adaptée aux réalités locales.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <MapPin size={28} />,
                  title: "Tracking GPS Temps Réel",
                  description: "Suivez votre colis sur une carte interactive du départ jusqu'à votre porte. Plus d'incertitude.",
                  color: "text-blue-600 dark:text-blue-400",
                  bg: "bg-blue-50 dark:bg-blue-900/20"
                },
                {
                  icon: <CreditCard size={28} />,
                  title: "Paiement Mobile Intégré",
                  description: "Réglez vos expéditions facilement via T-Money ou Flooz directement depuis la plateforme.",
                  color: "text-emerald-600 dark:text-emerald-400",
                  bg: "bg-emerald-50 dark:bg-emerald-900/20"
                },
                {
                  icon: <Package size={28} />,
                  title: "Tarification Dynamique",
                  description: "Des prix justes et transparents calculés automatiquement selon la distance et le volume.",
                  color: "text-accent-600 dark:text-accent-400",
                  bg: "bg-accent-50 dark:bg-accent-900/20"
                }
              ].map((feature, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6`}>
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary-900 dark:bg-slate-950"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Prêt à expédier votre premier colis ?
            </h2>
            <p className="text-primary-100 dark:text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Rejoignez des milliers de particuliers et entreprises qui font confiance à Afrigo Express pour leurs livraisons au Togo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-400 transition-colors shadow-lg shadow-accent-500/30">
                Créer un compte gratuit
              </button>
              <button className="w-full sm:w-auto bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-colors backdrop-blur-sm">
                Contacter le support
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-2 text-white">
             <Package size={24} className="text-accent-500" />
             <span className="font-bold text-xl tracking-tight">
              AFRIGO<span className="text-accent-500">EXPRESS</span>
            </span>
          </div>
          <p className="text-sm">
            © 2026 Afrigo Express. Tous droits réservés. Propulsé par Kelvix.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="#" className="hover:text-white transition-colors">Légal</Link>
            <Link href="#" className="hover:text-white transition-colors">Confidentialité</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
