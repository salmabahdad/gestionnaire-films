# 🎬 Gestionnaire de Films

Projet réalisé dans le cadre du module **Projet Web React – 2024/2025**

## 📌 Objectif

Développer une application web complète avec React JS permettant de :

- Parcourir des films populaires via une API externe
- Rechercher des films avec un formulaire
- Ajouter des films manuellement
- Visualiser les détails d’un film

---

## 🚀 Technologies utilisées

- ⚛️ **React.js** (avec [Vite](https://vitejs.dev/))
- 📦 **React Router** pour la gestion des routes
- 🔗 **Axios** pour les appels API
- 🎨 **Tailwind CSS** / CSS pour le style
- 🌐 API utilisée : [TMDb (The Movie Database)](https://www.themoviedb.org/)

---

## 📁 Fonctionnalités principales

### 1. 🏠 Page d’accueil (`/`)
- Affiche les **films populaires** via l'API TMDb.

### 2. 🔍 Page de recherche (`/recherche`)
- Formulaire de recherche avec mot-clé
- Affiche les résultats correspondants depuis l’API

### 3. ➕ Ajouter un film (`/ajouter`)
- Formulaire avec :
  - Titre (obligatoire)
  - Description (obligatoire)
  - Date de sortie (optionnelle)
- Le film est ajouté localement à la liste

### 4. 📄 Détails d’un film (`/film/:id`)
- Affiche les informations complètes d’un film sélectionné

---

## ⚙️ Installation du projet

```bash
# 1. Cloner le projet
git clone https://github.com/ton-utilisateur/gestionnaire-films.git
cd gestionnaire-films

# 2. Installer les dépendances
npm install

# 3. Lancer l'application
npm run dev
