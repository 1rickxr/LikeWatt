
# Test Technique LikeWatt - Partie 1

L'objectif de ce script est de récupérer des données depuis une URL spécifiée, puis d'effectuer des opérations de filtrage et de tri sur ces données.


## Badges

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)



## API Réference

#### Get all items

```http
  https://apitest.likewatt-infra.com/entry-test/1
```


## Etapes 

Étapes
Filtrage par type :

Le tableau initial est filtré en fonction du type spécifié ('string', 'number', 'object', 'array').
Triage des chaînes de caractères :

 - Les chaînes de caractères sont triées par ordre alphabétique.

- Triage des nombres : Les nombres sont triés par ordre décroissant.

- Séparation des éléments :
Les éléments du tableau sont séparés en cinq tableaux distincts :
 -
Tableau pour les chaînes de caractères d'une seule lettre.
Tableau pour les chaînes de caractères multi-lettres.
Tableau pour les nombres.
Tableau pour les objets.
Tableau pour les tableaux.
Combinaison des tableaux triés :



## Explication 

 - `getData(url)`
Cette fonction asynchrone utilise l'API fetch pour effectuer une requête vers l'URL spécifiée. Elle analyse ensuite la réponse au format JSON et retourne la propriété 'data' de la réponse JSON. Toutes les erreurs survenues au cours du processus sont capturées et enregistrées dans la console.

- `filterData(array)`
Cette fonction prend un tableau en entrée et effectue les opérations suivantes :

Filtre le tableau en fonction du type spécifié ('string', 'number', 'object', 'array').
Trie les chaînes de caractères par ordre alphabétique.
Trie les nombres par ordre décroissant.
Sépare les chaînes de caractères d'une seule lettre, les chaînes de caractères multi-lettres, les nombres, les objets et les tableaux dans des tableaux distincts.
Combine les tableaux triés

- `main`
La fonction principale est une fonction asynchrone qui appelle getData pour récupérer des données à partir de l'URL spécifiée, puis appelle filterData sur les données récupérées.
## Exécution du script 

Pour déployer ce projet, exécutez

```bash
  node Algo.js

```

