// accueil voulez-vous jouer avec moi ?

if ( confirm( "Bonjour, bienvenue sur le jeu du shifumi !\nVoulez-vous jouer avec moi ?" ) ) {

} else {
   alert("Ooooh, vous pouvez alors fermer cette page \;\)");
}

// demande prénom
var prenom = prompt("Super ! Quel est votre prénom ?");

// longueur prénom

function taillePrenom(prenomenvoye) {
while (prenomenvoye.length < 2 ) {
    alert("Désolée, votre prénom est trop court !");
    prenomenvoye = prompt("Essayez encore une fois ! ");
}
while (prenomenvoye.length > 20 ) {
    alert("Désolée, votre prénom est trop long !");
    prenomenvoye = prompt("Essayez encore une fois ! ");
}
return prenomenvoye;
}

prenom = taillePrenom(prenom); 

alert("Enchantée de vous rencontrer " + prenom + " !!!" + "\n Jouons maintenant.");


// choix de l'IA

function choixIA() {
    var choix = Math.random();
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

var choixJoueur = prompt("voici les règles :\n La pierre bat les ciseaux\n Les ciseaux battent la feuille \n La feuille bat la pierre \n\n Alors que choisissez vous ? Pierre, feuille ou ciseaux ?");

// majuscule ou minuscule
choixJoueur = choixJoueur.toLowerCase();


// return du choix de l'IA en variable globale

var choixIA = choixIA();


// quand match nul

if(choixJoueur === choixIA) {
    alert("Désolée ! L'ordinateur a choisi " + choixIA + ". Match nul !");
}

// Quand joueur est gagnant

else if(choixJoueur === "pierre" && choixIA === "ciseaux") {
    alert("L'ordinateur a choisi " + choixIA + ". Vous avez gagné !")
}

else if(choixJoueur === "feuille" && choixIA === "pierre") {
    alert("L'ordinateur a choisi " + choixIA + ". Vous avez gagné !")
}

else if(choixJoueur === "ciseaux" && choixIA === "feuille") {
    alert("L'ordinateur a choisi " + choixIA + ". Vous avez gagné !")
}


// Quand joueur perd

else{
    alert("Désolée !!! L'ordinateur a choisi " + choixIA + ". Vous avez perdu !")
}