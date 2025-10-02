const prompt = require("prompt-sync")();
let livres = [];
let abonnes = [];

let choix = -1;
while (choix !== 12) {
  console.log(`Menu principale:
      1. Ajouter un ou plusieurs livres 
      2. Afficher tous les livres
      3.Trier les livres par titre
      4.Trier les livres par année de publication
      5. Afficher  les livres disponibles
      6. Rechercher un livre par ISBN
      7.Ajouter un abonné
      8.Afficher tous les abonnés
      9.Enregistrer un emprunt
      10.Enregistrer un retour
      11.Afficher les livres empruntés par un abonné
      12.Quitter

      `);

  choix = Number(prompt("Choisissez une option :"));

  let res;
  switch (choix) {
    case 1:
      res = AjouterPlusieursLivres();
      break;
    case 2:
      res = AfficherLivres();
      break;
    case 3:
      res = TrierLivresTitre();
      break;
    case 4:
      res = TrierLivresAnnee();
      break;

    case 5:
      res = AfficherLivresDisponibles();
      break;
    case 6:
      res = RechercherIsbn();
      break;
    case 7:
      res = AjouterAbonné();
      break;
    case 8:
      res = AfficheAbonnés();
      break;
    case 9:
      res = EnregisterEmprunt();
      break;
    case 10:
      res = EnregisterRetour();
      break;
    case 11:
      res = AfficherLivresEmpruntes();
      break;

    case 12:
      res = console.log("Programme terminé. À bientôt !");
      process.exit();
      break;
    default:
      console.log(" choix invalid entrer un nombre entre 1 et 12");
  }

  // console.log("resultat:", res);
}
// // 2. Ajouter plusieurs livres

function AjouterPlusieursLivres() {
  let nombre = parseInt(prompt("Combien de livres voulez-vous ajouter ?"));
  for (let i = 0; i < nombre; i++) {
    let isbn = prompt("Entrez l'ISBN du livre :");
    let titre = prompt("Entrez le titre  du livre :");
    let auteur = prompt("Entrez l'auteur  du livre :");
    let annee = prompt("Entrez l'année de publication du livre :");
    let disponible =
      prompt("Le livre est-il disponible ? (oui/non)").toLowerCase() === "oui";
    livres.push({ isbn, titre, auteur, annee, disponible });
  }
  console.log("listes des livres ajoutés :");
  console.log(livres);
  return "Livres ajoutés avec succès ";
}


//  ○ Afficher tous les livres

function AfficherLivres() {
  for (let livre of livres) {
    console.log(` Attributs:
                     ISBN :${livre.isbn} ,
                    Titre:${livre.titre} ,
                    Auteur:${livre.auteur} ,
                    Année de publication : ${livre.annee},
                    Disponible: ${livre.disponible} `);
  }
}
// AjouterPlusieursLivres();
// AfficherLivres();


// 3. Opérations sur les livres
// ○ Trier les livres par titre (ascendant/descendant)

function TrierLivresTitre() {
  const prompt = require("prompt-sync")();
  let ChoixTrier = prompt(
    `De quelle maniere  voulez vous trier le titre :"ascendant", "descendant" :`
  ).toLocaleLowerCase();

  if (ChoixTrier === "ascendant") {
    livres.sort((a, b) => a.titre.localeCompare(b.titre));
  } else if (ChoixTrier === "descendant") {
    livres.sort((a, b) => b.titre.localeCompare(a.titre));
  } else {
    console.log(
      "choix invalid vous devez entrer  'descendant' ou 'ascendant' "
    );
  }
  console.log(" Livres triés par titre :");
  for (let livre of livres) {
    console.log(livre.titre);
  }
}

// TrierLivresTitre();

// sort((a,b)=>a -b) ;ascendant

// livres.sort((a,b)=>b.isbn - a.isbn);
// console.log(livres);

// ○ Trier les livres par année de publication

function TrierLivresAnnee() {
  const prompt = require("prompt-sync")();
  let ChoixTrier = prompt(
    `De quelle maniere  voulez vous trier  l'année:"ascendant", "descendant" :`
  ).toLocaleLowerCase();

  if (ChoixTrier === "ascendant") {
    livres.sort((a, b) => a.annee - b.annee);
  } else if (ChoixTrier === "descendant") {
    livres.sort((a, b) => b.annee - a.annee);
  } else {
    console.log(
      "choix invalid vous devez entrer  'descendant' ou 'ascendant' "
    );
  }
  console.log(" Livres triés par année :");
  for (let livre of livres) {
    console.log(livre.annee);
  }
}

// TrierLivresAnnee();

// ○ Afficher uniquement les livres disponibles

function AfficherLivresDisponibles() {
  for (let livre of livres) {
    if (livre.disponible === true) {
      console.log(`les livres disponibles:
            *${livre.titre} `);
      return livre;
    }
  }
}
// AfficherLivresDisponibles();

function RechercherIsbn() {
  let isbn = Number(prompt("Entez l'ISBN du livre que vous voulez chercher :"));
  for (let livre of livres) {
    if (livre.isbn == isbn) {
      console.log(`le titre du livre recherché est :${livre.titre}`);
    }
  }
}
// RechercherIsbn();

// ______________________________________4. Gestion des abonnés ________________________________________________
// ○ Ajouter un abonné (ID, Nom, Prénom, Email).

function AjouterAbonné() {
  let nombre = parseInt(prompt("Combien d'abonnés voulez-vous ajouter ?"));
  for (let i = 0; i < nombre; i++) {
    let id = Number(
      prompt("Entrez l'ID de l'abonné que vous voulez ajouter :")
    );
    let nom = prompt("Entrez le Nom de l'abonné que vous voulez ajouter :");
    let prenom = prompt(
      "Entrez  le Prénom de l'abonné que vous voulez ajouter :"
    );
    let email = prompt("Entrez l'Email de l'abonné que vous voulez ajouter :");
    abonnes.push({ id, nom, prenom, email });
  }
  console.log("les informations  de l' abonné ajouté :");
  console.log(abonnes);
}
// AjouterAbonné();

function AfficheAbonnés() {
  for (let abonne of abonnes) {
    console.log(`
           ID: ${abonne.id},
           Nom:${abonne.nom},
           Prenom:${abonne.prenom},
           Email: ${abonne.email}

            `);
  }
}
// AfficheAbonnés();

// 5. Gestion des emprunts

// EnregisterEmprunt();

function EnregisterEmprunt() {
  let titre = prompt(
    "entrez le titre du livre que vous voulez emprunter:"
  ).toLocaleLowerCase();
  let livre = livres.find((l) => l.titre === titre);
  if (livre && livre.disponible === true) {
    livre.disponible = false;
    console.log(`${livre.titre} est emprunté  et sa disponibilité est  ${livre.disponible}`);
  } else {
    console.log(`le livre ne se trouve pas`);
  }
}
// EnregisterRetour();


function EnregisterRetour() {
    let titre = prompt("entrez le titre de livre que vous voulez retourner :");
    let livre =livres.find((l)=>l.titre);
    if(livre && livre.disponible === false){

        livre.disponible =true;
        console.log(`le livre retourné est: ${livre.titre}  et sa disponibilité est  ${livre.disponible}`);
    }else{
            console.log(`le livre ne se trouve pas`);



    }
}


// AfficherLivresEmpruntes();
