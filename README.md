# devops-esi4

## Introduction du projet

Sujet : Site vitrine de chaussure en REACT (Vite + TS) \
Déploiement continu : Vercel => https://devops-esi4.vercel.app/ \
Gestion des tests + tester le produit dans un environnement prod dupliqué : Github Actions 

12 étapes à réaliser sur le projet : 

Maintenir un dépôt de code source versionné (Git) \
Automatiser les étapes de build* \
Chaque étape de build entraine une série de test \ 
Tous les membres de l’équipe commit aussi souvent que possible \
Le système de gestion des branches (Git) doit être adapté au processus d’ajout des features \
Tout commit doit amener à la création ou l’utilisation d’une branche d’intégration \
Réduire le temps de build au maximum \
Tester son produit dans un environnement de prod dupliqué \
Rendre disponible facilement le dernier build \
Tous les acteurs du projet doivent avoir un accès facilité au processus d’IC \
Automatiser le déploiement \
Fournir un moyen de visualisation et/ou de reporting de chacune des étapes pour un meilleur suivi  

## Explication du Git

Branche main = prod -> à chaque push, build sur Vercel permettant de publier le dev commit \
Branche dev = regroupement des features avant build et de réaliser des tests pour détecter des bugs \
Branche features = Chaque fonctionnalité est créée sur cette branche. Lorsque la feature est terminée, un pull request est fait dans la branche dev puis la feature est automatiquement supprimée à la suite du merge en dev. 

## Explicatif du fonctionnement DevOps pour ce projet :

