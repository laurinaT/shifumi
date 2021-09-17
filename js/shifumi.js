// accueil voulez vous jouer avec moi ?

if ( confirm( "Bonjour, bienvenue sur le jeu du shifumi !\n Voulez vous jouer avec moi ?" ) ) {
    // code non nécessaire ?
} else {
   alert("Ooooh, vous pouvez alors fermer cette page \;\)");
}

// demande prénom
var prenom = prompt("Super ! Quel est votre prénom ?");

// récupération prénom --> jouer


alert("Enchantée de vous rencontrer " + prenom + " !!!" + "\n Jouons maintenant.");

// Entrée du choix du joueur

var choixJoueur = prompt("voici les règles :\n La pierre bat les ciseaux\n Les ciseaux battent la feuille \n La feuille bat la pierre \n\n Alors que choisissez vous ? Pierre, feuille ou ciseaux ?");