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
  Smartphone,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden transition-colors duration-500">
      {/* Background Ambience */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50 via-slate-50 to-slate-100 dark:from-primary-950/20 dark:via-[#050505] dark:to-[#050505]"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary-500/10 dark:bg-primary-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-500/10 dark:bg-accent-500/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 glass-panel border-x-0 border-t-0 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary-600 p-2.5 rounded-xl text-white shadow-lg shadow-primary-600/20">
              <Package size={22} strokeWidth={2.5} />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              AFRIGO<span className="text-accent-500">EXPRESS</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600 dark:text-slate-400">
            <Link href="#services" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Services</Link>
            <Link href="#suivi" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Suivi Colis</Link>
            <Link href="#entreprise" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Entreprises</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-800"></div>
            <button className="hidden sm:block text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              Connexion
            </button>
            <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-lg shadow-slate-900/10 dark:shadow-white/10 flex items-center gap-2">
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium text-xs mb-8 shadow-sm backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
                </span>
                Opérationnel à Lomé et environs
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-slate-900 dark:text-white">
                La logistique <br/>
                <span className="text-gradient from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400">
                  intelligente
                </span> au Togo.
              </h1>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed font-light">
                Expédiez, suivez et recevez vos colis en toute sérénité. Afrigo Express offre un suivi GPS précis et une transparence totale des tarifs.
              </p>
              
              {/* Tracking Input */}
              <div className="glass-card p-2.5 rounded-2xl flex items-center max-w-md w-full focus-within:ring-2 focus-within:ring-primary-500/50 transition-all group relative">
                <div className="absolute -inset-1 rounded-[20px] bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-accent-500/0 group-focus-within:from-primary-500/20 group-focus-within:via-primary-500/20 group-focus-within:to-accent-500/20 blur transition-all duration-500 -z-10"></div>
                
                <div className="pl-4 text-slate-400 dark:text-slate-500">
                  <MapPin size={22} />
                </div>
                <input 
                  type="text" 
                  placeholder="N° de suivi (ex: AF-8392)"
                  className="flex-1 bg-transparent px-4 py-3 outline-none text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600 font-medium text-sm w-full"
                />
                <button className="bg-primary-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-primary-500 transition-all shadow-lg shadow-primary-600/30">
                  Suivre
                </button>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-emerald-500 dark:text-emerald-400" size={18} />
                  Paiement Sécurisé
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="text-accent-500 dark:text-accent-400" size={18} />
                  Livraison Express
                </div>
              </div>
            </motion.div>

            {/* Premium Interactive Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
               <div className="relative w-full aspect-square rounded-[3rem] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-[#0a0a0a] dark:to-[#111] p-1 shadow-2xl dark:shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-slate-200/50 dark:border-white/10">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05] rounded-[3rem] mix-blend-overlay"></div>
                  
                  {/* Map/Radar Simulation inside the card */}
                  <div className="w-full h-full rounded-[2.8rem] bg-white dark:bg-[#050505] overflow-hidden relative flex items-center justify-center border border-slate-100 dark:border-white/5">
                    
                    {/* Radar Rings */}
                    <div className="absolute w-[150%] h-[150%] border border-primary-500/10 dark:border-primary-500/5 rounded-full"></div>
                    <div className="absolute w-[100%] h-[100%] border border-primary-500/20 dark:border-primary-500/10 rounded-full"></div>
                    <div className="absolute w-[50%] h-[50%] border border-primary-500/30 dark:border-primary-500/20 rounded-full flex items-center justify-center">
                       <div className="w-4 h-4 bg-primary-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>
                    </div>

                    {/* Floating UI Elements */}
                    <motion.div 
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                      className="absolute top-1/4 -left-8 glass-card p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20"
                    >
                      <div className="bg-emerald-500/10 p-3 rounded-full text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/20">
                        <Truck size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest mb-1">Statut</p>
                        <p className="font-semibold text-sm text-slate-900 dark:text-white">En route</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      animate={{ y: [10, -10, 10] }}
                      transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                      className="absolute bottom-1/4 -right-8 glass-card p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20"
                    >
                      <div className="bg-accent-500/10 p-3 rounded-full text-accent-600 dark:text-accent-400 ring-1 ring-accent-500/20">
                        <Smartphone size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest mb-1">Paiement</p>
                        <p className="font-semibold text-sm text-slate-900 dark:text-white">Sécurisé</p>
                      </div>
                    </motion.div>
                  </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="services" className="py-24 relative border-t border-slate-200/50 dark:border-white/[0.05] bg-white/50 dark:bg-[#0a0a0a]/50 backdrop-blur-3xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-primary-600 dark:text-primary-400 font-semibold tracking-widest uppercase text-xs mb-4">Fonctionnalités Clés</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight">Conçu pour l'excellence.</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg font-light">Une expérience fluide et sécurisée adaptée aux exigences modernes des entreprises et des particuliers.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: <MapPin size={24} />,
                  title: "Tracking Précis",
                  description: "Suivez l'emplacement exact de votre livreur en temps réel sur une carte interactive.",
                  color: "text-blue-600 dark:text-blue-400",
                  bg: "bg-blue-500/10",
                  ring: "ring-blue-500/20"
                },
                {
                  icon: <CreditCard size={24} />,
                  title: "Paiements Locaux",
                  description: "Intégration native et fluide avec T-Money et Flooz pour des transactions sans friction.",
                  color: "text-emerald-600 dark:text-emerald-400",
                  bg: "bg-emerald-500/10",
                  ring: "ring-emerald-500/20"
                },
                {
                  icon: <Package size={24} />,
                  title: "Tarifs Dynamiques",
                  description: "Algorithme intelligent calculant le juste prix selon la distance, le poids et le volume.",
                  color: "text-accent-600 dark:text-accent-400",
                  bg: "bg-accent-500/10",
                  ring: "ring-accent-500/20"
                }
              ].map((feature, idx) => (
                <div key={idx} className="glass-card rounded-[2rem] p-8 hover:-translate-y-1 transition-all duration-300 group">
                  <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} ring-1 ${feature.ring} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{feature.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden border-t border-slate-200/50 dark:border-white/[0.05]">
          <div className="absolute inset-0 bg-slate-900 dark:bg-black"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/40 via-transparent to-transparent opacity-50 dark:opacity-100"></div>
          
          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight">
              Prêt à accélérer vos livraisons ?
            </h2>
            <p className="text-slate-300 dark:text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
              Rejoignez des milliers de particuliers et d'entreprises togolaises qui font déjà confiance à notre technologie.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary-500 transition-colors shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2">
                Créer un compte
                <ArrowRight size={18} />
              </button>
              <button className="w-full sm:w-auto bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/20 transition-colors backdrop-blur-md">
                Parler à un conseiller
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#020202] text-slate-500 dark:text-slate-500 py-12 border-t border-slate-200 dark:border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-2">
             <Package size={20} className="text-slate-400 dark:text-slate-600" />
             <span className="font-bold tracking-tight text-slate-900 dark:text-white">
              AFRIGO<span className="text-slate-400 dark:text-slate-600">EXPRESS</span>
            </span>
          </div>
          <p className="text-xs font-medium">
            © {new Date().getFullYear()} Afrigo Express. Propulsé par Kelvix.
          </p>
          <div className="flex items-center gap-6 text-xs font-medium">
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Mentions Légales</Link>
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Confidentialité</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
