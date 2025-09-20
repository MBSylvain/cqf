# Documentation du site Charles Quentin

## Description
Ce site est une plateforme pour présenter les services de photographie de Charles Quentin. Il inclut des informations sur les services proposés, les prix, une galerie d'images, et un formulaire de contact.

## Structure du projet

### Dossiers principaux
- **public/** : Contient les fichiers statiques comme les images, le fichier `index.html`, et d'autres ressources publiques.
- **src/** : Contient le code source principal de l'application React.
  - **components/** : Composants réutilisables comme `Navbar` et `Footer`.
  - **pages/** : Pages principales du site comme `Home`, `Services`, `Princing`, `Gallery`, et `Contact`.
  - **admin/** : Composants spécifiques à l'administration.

### Fichiers principaux
- **App.js** : Point d'entrée principal de l'application React.
- **Router.jsx** : Définit les routes pour naviguer entre les différentes pages.
- **tailwind.config.js** : Configuration de Tailwind CSS pour le style.

## Fonctionnalités

### Pages principales
1. **Accueil** : Présente une introduction au site.
2. **Services** : Liste les services de photographie proposés.
3. **Princing** : Affiche les prix des services avec des descriptions détaillées.
4. **Gallery** : Montre une galerie d'images.
5. **Contact** : Permet aux utilisateurs de contacter Charles Quentin via un formulaire.

### Composants
- **Navbar** : Barre de navigation pour accéder aux différentes pages.
- **Footer** : Pied de page avec des informations supplémentaires.

## Technologies utilisées
- **React** : Framework JavaScript pour construire l'interface utilisateur.
- **React Router** : Gestion des routes pour la navigation entre les pages.
- **Tailwind CSS** : Framework CSS pour le style.

## Installation et exécution

### Prérequis
- Node.js installé sur votre machine.

### Étapes
1. Clonez le dépôt :
   ```bash
   git clone <URL_DU_DEPOT>
   ```
2. Accédez au dossier du projet :
   ```bash
   cd cqf
   ```
3. Installez les dépendances :
   ```bash
   npm install
   ```
4. Lancez le serveur de développement :
   ```bash
   npm start
   ```
5. Ouvrez votre navigateur et accédez à `http://localhost:3000`.

## Déploiement
Pour déployer ce site, vous pouvez utiliser des plateformes comme Netlify, Vercel ou GitHub Pages.

## Auteur
- **Charles Quentin**

## Licence
Ce projet est sous licence [MIT](LICENSE).
