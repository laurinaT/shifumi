// // accueil voulez-vous jouer avec moi ?

// if ( confirm( "Bonjour, bienvenue sur le jeu du shifumi !\n Voulez vous jouer avec moi ?" ) ) {
//     // code non nécessaire ?
// } else {
//    alert("Ooooh, vous pouvez alors fermer cette page \;\)");
// }

// // demande prénom
// var prenom = prompt("Super ! Quel est votre prénom ?");

// // récupération prénom --> jouer


// alert("Enchantée de vous rencontrer " + prenom + " !!!" + "\n Jouons maintenant.");


// choix de l'IA

function choixIA() {
    var choix = Math.random();
    alert(choix);
    if (choix <= 0.33 ) {
        return "pierre";
    }
    if (choix <= 0.66 ) {
        return "feuille";
    } 
    else {
        return "ciseaux";
    }
}


// Entrée du choix du joueur

var choixJoueur = prompt("voici les règles :\ Ecrivez en minuscules\n La pierre bat les ciseaux\n Les ciseaux battent la feuille \n La feuille bat la pierre \n\n Alors que choisissez vous ? Pierre, feuille ou ciseaux ?");


// return du choix de l'IA en variable globale

var choixIA = choixIA();

// Apprentissage des règles à l'IA

// var a = choixJoueur("pierre");
// var b = choixJoueur("ciseaux");
// var c = choixJoueur("feuille");
// var d = ("Match nul");

// a = a + b || b + a;
// b = b + c || c + b;
// c = c + a || a + c;
// d = a + a || b + b || c + c;
// choixIA = "pierre";
if(choixJoueur === choixIA) {
    alert("match nul");
}

else if(choixJoueur === "pierre" && choixIA === "ciseaux") {
    alert("L'ordinateur a choisi " + choixIA + ". Vous avez gagné !")
}

else if(choixJoueur === "feuille" && choixIA === "pierre") {
    alert("L'ordinateur a choisi " + choixIA + ". Vous avez gagné !")
}

else if(choixJoueur === "ciseaux" && choixIA === "feuille") {
    alert("L'ordinateur a choisi " + choixIA + ". Vous avez gagné !")
}
else{
    alert("Désolée !!! L'ordinateur a choisi " + choixIA + ". Vous avez perdu !")
}
// alert(choixIA + " bonjour"); //vérification de l'affichage


// Comparaison choix du joueur
