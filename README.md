# MangasProject

##Mini projet à faire pour consolider les bases : 
###Nouveau projet Angular

Créer un projet angular avec le ng new en choisissant de mettre le router (par défaut c'est non, donc faites attention) et d'être en css
Créer un fichier src/app/entities.ts et dedans faire une interface Manga qui va reprendre la structure en dessous
Créer un HomeComponent et faire une route racine qui pointe dessus

**Affichage des mangas**
**Generer:**
HomeComponent, qui sera l'accueil
MangaList qui affichera les mangas
MangaDetails qui affichera un manga avec les details

**Le service**

Générer un service avec le cli (ng g s ) qui s'appelera MangaService.
Créer une méthode fetchAll() qui va retourner tous les mangas
Côté MangaList, on rajoute un constructeur avec une private MangaService 
On ajoute une méthode getManga qui va utiliser la méthode fetchAll du manga service et qui va directement assigner la valeur  à la propriété mangas du Manga List Component
On rajoute un bouton qui au click nous redirige vers mangaDetails
Un autre bouton ajout qui rajoutera les mangas selectionnés dans un "panier" qui sera un nouveau tableau
Avec le compoenet mangadetails créer une route paramétrée sur 'pokemons/:id' qui va pointer sur ce component
Dans le MangaService, créer une méthode fetchOne qui va attendre un id:any en argument et s'en servir pour recuperer  l'id du manga dans le tableau d'objet  et qui va donc return un Manga. 

