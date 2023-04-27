# DevOps-ESI4

## Introduction du projet

Sujet : ToDoList en REACT (Vite + TS) \
La ToDoList propose d'ajouter des lignes à réaliser. Il est possible de supprimer chaque élément individuellement ou de tous les supprimer à l'aide de boutons. \
Déploiement continu : Vercel => https://devops-esi4.vercel.app/ \
Tests unitaires : Vitest \
Tests des composants React (en simulant un DOM) : Testing-library/react 
Gestion des workflows pour la mise en prod, la preview et les tests : Github Actions 

### Pré-requis pour lancer le projet :
- Node V16.X

### Lancement du projet :
Récupérer le code dans Github
Dans le terminal : 
- npm install 
- npm run dev

### Lancement des tests depuis le terminal :
- npm run test
- npm run test:ui (pour obtenir une interface graphique)

## Explication du Git

Branche main = prod -> à chaque push, build sur Vercel permettant de publier le dev commit \
Branche dev = regroupement des features avant build et de réaliser des tests pour détecter des bugs \
Branche features = Chaque fonctionnalité est créée sur cette branche. Lorsque la feature est terminée, un pull request est fait dans la branche dev puis la feature est automatiquement supprimée à la suite du merge en dev. 

Pour les commits, utilisation de git-cz (https://www.npmjs.com/package/git-cz?activeTab=readme) 

### Les Workflows : 
Il y a 3 workflows différents (Voir Actions) :
- Vercel Production Deployment : Déploiement en ligne automatique lorsqu'un push est réalisé sur la branche main.
- Vercel Preview Deployment : A chaque push en dehors de la branche main, une preview est proposée sur Vercel pour voir les changements. 
- Runs All Unit tests : A chaque push/commit, run tous les tests. 

Il est possible de visualiser l'état des tests et workflows réalisés sur Github :
Se rendre dans Actions
Choisir un des 3 Workflows sur le côté
Cliquer sur un workflow run et voir les étapes

## Explicatif du fonctionnement DevOps pour ce projet :

Voir schéma __Schéma - fonctionnement DevOps.png__
