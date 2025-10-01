const prompt = require("prompt-sync")();

// infos livres
// let livres = [ ];
let livres = [
    { isbn: "123", titre: "Le Petit Prince", auteur: "Saint-Exupéry", 
annee: 1943, disponible: true }, 
{ isbn: "456", titre: "L'Étranger", auteur: "Camus", annee: 1942, 
disponible: true },
{ isbn: "567", titre: "Apple", auteur: "Camus", annee: 1942, 
disponible: true },
{ isbn: "890", titre: "Banana", auteur: "Camus", annee: 1942, 
disponible: true } ,
{ isbn: "890", titre: "Banana", auteur: "Camus", annee: 1942, 
disponible: false } 

]





// infos abonnes


// let abonnes = [ 
// { id: 1, nom: "Dupont", prenom: "Alice", email: "alice@gmail.com" } 
// ]; 

// infos emprunts

let emprunts = [ 
{ abonneId: 1, isbn: "123", dateEmprunt: "2025-09-22" } 
];



// console.log(`Menu principale:
//     1. Ajouter un ou plusieurs livres  un livre 
//     2. Afficher tous les livres 
//     3.Trier les livres par titre 
//     4.Trier les livres par année de publication 
//     5. Afficher uniquement les livres disponibles 
//     6. Rechercher un livre par ISBN 
//     7.Quitter

//     `)



//  ○ Afficher tous les livres 

// function AfficherLivres(){
//     for(let livre of livres){
//         console.log(` Attributs: ISBN :${livre.isbn} ,
//             Titre:${livre.titre} ,
//             Auteur:${livre.auteur} ,
//              Année de publication : ${livre.annee},
//              Disponible: ${livre.disponible} `)


//     }


// }
// AfficherLivres();



// 2. Ajouter plusieurs livres 

// function AjouterPlusieursLivres(){
    

//     let nombre = parseInt(prompt("Combien de livres voulez-vous ajouter ?"));
//     for(let i = 0 ; i < nombre ;i++){
    
//         let ISBN = prompt( "Entrez l'ISBN du livre :" );
//         let Titre = prompt( "Entrez le titre  du livre :" );
//         let Auteur = prompt( "Entrez l'auteur  du livre :" );
//         let AnneePub = prompt( "Entrez l'année de publication du livre :" );
//         let Disponible = prompt("Le livre est-il disponible ? (oui/non)").toLowerCase() === "oui";
//         livres.push({ISBN,Titre,Auteur,AnneePub,Disponible});






//     }
//     console.log("listes des livres ajoutés :");
//     console.log(livres);
    


// }
// AjouterPlusieursLivres();


// 3. Opérations sur les livres 
// ○ Trier les livres par titre (ascendant/descendant) 

// function TrierLivresTitre(){
//     const prompt = require("prompt-sync")();
//      let ChoixTrier =prompt(`De quelle maniere  voulez vous trier :"ascendant", "descendant" :` ).toLocaleLowerCase();


//     if (ChoixTrier === "ascendant"){
//             livres.sort((a,b) =>a.titre.localeCompare(b.titre));

            
//      }else if (ChoixTrier === "descendant") {
//         livres.sort((a,b) =>b.titre.localeCompare(a.titre));



//      } else{
//         console.log("choix invalid vous devez entrer  'descendant' ou 'ascendant' ")

//      }
//         console.log(" Livres triés par titre :")
//      for(let livre of livres){
//         console.log(livre.titre);
//      }


// }

    
// TrierLivresTitre();

    // sort((a,b)=>a -b) ;ascendant


// livres.sort((a,b)=>b.isbn - a.isbn);
// console.log(livres);


// ○ Trier les livres par année de publication 


// function TrierLivresTitre(){
//     const prompt = require("prompt-sync")();
//      let ChoixTrier =prompt(`De quelle maniere  voulez vous trier  l'année:"ascendant", "descendant" :` ).toLocaleLowerCase();


//     if (ChoixTrier === "ascendant"){
//             livres.sort((a,b) =>a.annee - b.annee);

            
//      }else if (ChoixTrier === "descendant") {
//         livres.sort((a,b)  =>b.annee - a.annee);



//      } else{
//         console.log("choix invalid vous devez entrer  'descendant' ou 'ascendant' ")

//      }
//         console.log(" Livres triés par titre :")
//      for(let livre of livres){
//         console.log(livre.annee);
//      }


// }

    
// TrierLivresTitre();

// ○ Afficher uniquement les livres disponibles 

// function AfficherLivresDisponibles(){
//     for(let livre of livres){
//         if(livre.disponible === true){
//              console.log(`les livres disponibles: 
//                 ${livre.titre} `);
//              return livre;
    
//         }
//     }

// }
// AfficherLivresDisponibles();



// function RechercherIsbn(){
//     let isbn  = Number(prompt("Entez l'ISBN du livre que vous voulez chercher :"));
//     for(let livre of livres){
//         if(livre.isbn == isbn){
//             console.log(`l'ISBN du livre recherché est :${livre.isbn}`)
                
//         }

//     }


// }
// RechercherIsbn();


// ______________________________________4. Gestion des abonnés ________________________________________________
// ○ Ajouter un abonné (ID, Nom, Prénom, Email). 
 let abonnes= [];

function AjouterAbonné(){
    let nombre = parseInt(prompt("Combien d'bonnes voulez-vous ajouter ?"));
    for(let i = 0 ; i < nombre ;i++){
    
        let ID = Number(prompt( "Entrez l'ID de l'abonné que vous voulez ajouter :" ));
        let Nom = prompt( "Entrez le Nom de l'abonné que vous voulez ajouter :" );
        let Prenom = prompt( "Entrez  le Prénom de l'abonné que vous voulez ajouter :" );
        let Email = prompt( "Entrez l'Email de l'abonné que vous voulez ajouter :" );
        abonnes.push({ID,Nom,Prenom,Email});


    }
    console.log("les informations  de l' abonné ajouté :");
    console.log(abonnes);

}
AjouterAbonné();



function AfficheAbonnés(){
    for(let abonne of abonnes){
        console.log(`
           ID: ${abonne.ID},
           Nom:${abonne.Nom},
           Prenom:${abonne.Prenom},
           Email: ${abonne.Email}

    
            `);
    }
}
AfficheAbonnés();

// 5. Gestion des emprunts 




















