
# Test Technique LikeWatt - Partie 2

L'objectif de cette application est de créer un composant tableau éditable en utilisant React. Voici une explication détaillée du code :


## Badges

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## API Réference

```http
https://apitest.likewatt-infra.com/entry-test/2
```


## Composent

- **Composant App** : Le composant principal qui encapsule l'ensemble de l'application.

- **Composant Tableau Éditable** : Ce composant rend un tableau avec des lignes éditables et une dernière ligne pour ajouter de nouvelles données.

- **Composant Tableau Non-Éditable**  : Ce composant rend un tableau en mode visualisation, affichant les données récupérées depuis l'API.
## Fonctionnalités

Au chargement de l'application, les données sont récupérées depuis l'API pour peupler le composant App. 

**Partie Gauche du Tableau** : La partie non-éditable du tableau affiche les données en mode visualisation. Chaque ligne comporte :

- Un ID
- Un statut "Actif" ou "Inactif"
- Une Titre
- Une capacité
- Un modèle
- Les lignes actives ont un fond de couleur différent pour une meilleure distinction visuelle.

**Partie Droite du Tableau Éditable** : La partie éditable du tableau permet à l'utilisateur de modifier les données. Chaque ligne comporte :
- Un label
- Un input de type texte
- Un input de type nombre avec bornes
- Un input de type nombre sans borne
- Une case à cocher
- Un icone de suppression

## Actions 

- **Modification** : L'utilisateur peut modifier les données directement dans les champs de la partie droite du tableau. Les modifications sont enregistrées dynamiquement.
- **Suppression** : Chaque ligne dispose d'un bouton de suppression (pictogramme corbeille) permettant de supprimer la ligne correspondante.
- **Ajout** : La dernière ligne du tableau éditable permet d'ajouter de nouvelles données. Les utilisateurs peuvent remplir les champs requis et appuyer sur le bouton "Add" pour ajouter une nouvelle ligne.
## Code 

Le code utilise des **composants stylisés** avec styled-components pour une présentation visuelle. Les actions principales effectuées sont la modification, la suppression et l'ajout de lignes dans le tableau éditable.


## Déploiement


Cette application est déployée et accessible en ligne. Vous pouvez la tester en suivant ce lien

```bash
  https://like-watt.vercel.app/

```

