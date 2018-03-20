# CtkVueJsTest

> A Vue.js Test

####Exercice 1

- Créer un nouveau composant (EmployeesList) : Afficher la liste des "Employees" dans une table qui affiche les propriétés de chaque employé
- Dans cette table, ajouter une colonne action. Cette colonne contiendra un bouton qui permettra de supprimer l'utilisateur correspondant
- Edition d'un employé : 
	- Créer un nouveau composant (EditEmployee) : Ce composant permettra d'afficher un formulaire pour modifier chaque information de l'employé (sauf ID) **Le composant n'est pas visible à l'initialisation** : Le faire apparaitre dans une modal ou autre moyen. Le composant contiendra un bouton 'Fermer' qui fermera le formulaire
	- Ajouter un bouton dans la colonne action du composant 'EmployeesList' qui permettra l'affichage du composant 'EditEmployee' avec les informations de l'employé
	- Modifier le sport de 'Aurélien' en **Running**

####Exercice 2

- Via Vue-Router (déjà installé dans l'app) : Créer une nouvelle page qui aura pour path : **/offers-list**
- Elle affichera un nouveau composant appelé : **OffersList**
- Le composant 'OfferList' fera à sa **création** un appel réseau pour avoir la liste des offres (pas de préférence dans la manière de faire) et affichera le body de la réponse (JSON)

#####Infos nécessaires : 
- Request Header 'Authorization' = 'Bearer goodToken'
- Root : 'http://192.168.1.7:1234'
- Path : '/v2/companies/123456789/offers'


#### Exercice 3 

- Installer **Vuex** et créer un store 
- Le state du store aura la propriété **offerList**
- Lorsque le composant 'OfferList' a fait son appel, il faudra que ce dernier mette à jour le state du store et la propriété 'offersList' avec la réponse de l'appel


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
