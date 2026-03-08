# 🌍 AFRIGO EXPRESS - Logistique & Livraison au Togo

## 🚀 Vision du Projet
Transformer la logistique au Togo en une plateforme intelligente, fiable et accessible à tous (Particuliers & Entreprises), s'adaptant aux réalités locales (Lomé, Kara, Dapaong, etc.).

## 🛠 Fonctionnalités Cœur (Phase 1 - MVP)
- **Tracking GPS Temps Réel :** Suivi en direct du livreur sur carte (Leaflet/Mapbox).
- **Calculateur de Tarifs Dynamique :** Basé sur PostGIS (poids, distance, volume).
- **Gestion de Colis :** Génération de bordereaux QR Code pour la traçabilité.
- **Paiements Mobiles :** Intégration T-Money (Togocom) et Flooz (Moov).
- **Adressage Hybride :** Utilisation du GPS + Points de repère locaux.

## 🧠 Améliorations Stratégiques (Phase 2 - Intelligence)
- **Optimisation des Tournées :** Algorithme VRP pour réduire les coûts et délais.
- **Réseau de Points Relais :** Partenariats avec des boutiques de proximité.
- **Escrow de Livraison :** Sécurisation des paiements entre acheteurs et vendeurs (Satisfait ou Remboursé).
- **Bot WhatsApp :** Réservation simplifiée par messagerie sans passer par l'app.
- **Micro-Fulfillment :** Micro-stockage pour les e-commerçants (Lomé Centre).

## 💻 Stack Technique
- **Frontend :** Next.js 15 (TypeScript, Tailwind CSS, Framer Motion).
- **Mobile (Livreurs) :** React Native / Expo (Android & iOS).
- **Backend :** Node.js / TypeScript (Express ou NestJS).
- **Base de données :** PostgreSQL + **PostGIS** (Essentiel pour la géo-logistique).
- **Cartographie :** Leaflet (Web) & Mapbox (Mobile).
- **Notifications :** Firebase Cloud Messaging (FCM) & API WhatsApp.

## 🗺 Roadmap de Développement
1. **Conception :** Schéma BDD & Design UI/UX (Mobile-First).
2. **Infrastructure :** Setup Backend, Auth JWT & Connexion PostGIS.
3. **Core API :** CRUD Colis, Calcul de tarifs & Tracking.
4. **App Mobile :** Panel Livreur & Notifications Push.
5. **Phase de Test :** Beta-test à Lomé (Deckon, Agoè, Baguida).

---
*Projet propulsé par AFRIGO EXPRESS - "Votre confiance, notre moteur."*
