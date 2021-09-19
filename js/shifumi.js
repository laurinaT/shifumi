// longueur prénom, boucle ? True, false, tant que --> while ?
// fonction donc n'a pas besoin d'être dans la boucle

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

function orthographe() {
    while (choixJoueur != "pierre" || "feuille" || "ciseaux") {
    alert("Vous avez fait une erreur de saisie.");
    choixJoueur = prompt(" Alors pierre, feuille ou ciseaux ? ");
    }
    return choixJoueur;
    }
}


 //----------------------------------------------------------------------------------------------------------
   
 
 // accueil voulez-vous jouer avec moi ?
    if ( confirm( "Bonjour ! Bienvenue sur le jeu du shifumi ! \nVoulez-vous jouer avec moi ? ")) {
        var prenom = prompt("Super ! Quel est votre prénom ?");// demande prénom
        prenom = taillePrenom(prenom); // réassigne la nouvelle valeur à prenom
        var boucleJouer = true;// variable pour entrer dans boucle
        var scoreIA = 0;
        var scoreJoueur = 0;
        alert("Je suis enchantée de jouer avec vous, " + prenom + " !!!" + "\n C'est parti !");


        while(boucleJouer) {
            
            // Entrée du choix du joueur
            var choixJoueur = prompt("voici les règles :\n La pierre bat les ciseaux\n Les ciseaux battent la feuille \n La feuille bat la pierre \n\n Alors que choisissez vous ? Pierre, feuille ou ciseaux ?");
            orthographe(choixJoueur); 
            // majuscule ou minuscule
            choixJoueur = choixJoueur.toLowerCase();

            // return du choix de l'IA en variable globale
            var choixIAFait = choixIA();

            // quand match nul
            if(choixJoueur === choixIAFait) {
            alert("Désolée " + prenom + "! L'ordinateur a choisi " + choixIAFait + ". \n      Match nul ! \n Voici le score : \n Ordinateur : " + scoreIA + "\n Vous : " + scoreJoueur);

            }

            // Quand joueur est gagnant
            else if(choixJoueur === "pierre" && choixIAFait === "ciseaux") {
                scoreJoueur++;
                alert("Bravo " + prenom + " !!! L'ordinateur a choisi " + choixIAFait + ". \n        Vous avez gagné ! \n Voici le score : \n Ordinateur : " + scoreIA + "\n Vous : " + scoreJoueur);

                console.log(scoreJoueur);
            }

            else if(choixJoueur === "feuille" && choixIAFait === "pierre") {
                scoreJoueur++;
                console.log(scoreJoueur);
                alert("Bravo " + prenom + " !!! L'ordinateur a choisi " + choixIAFait + ". \n        Vous avez gagné ! \n Voici le score : \n Ordinateur : " + scoreIA + "\n Vous : " + scoreJoueur);

            }

            else if(choixJoueur === "ciseaux" && choixIAFait === "feuille") {
                scoreJoueur++;
                console.log(scoreJoueur);
                alert("Bravo " + prenom + " !!! L'ordinateur a choisi " + choixIAFait + ". \n        Vous avez gagné ! \n Voici le score : \n Ordinateur : " + scoreIA + "\n Vous : " + scoreJoueur);

            }

            // Quand joueur perd
            else{
                scoreIA++;
                alert("Désolée " + prenom + " !!! L'ordinateur a choisi " + choixIAFait + ". \n        Vous avez perdu ! \n Voici le score : \n Ordinateur : " + scoreIA + "\n Vous : " + scoreJoueur);

            }
            if(scoreIA === 3 || scoreJoueur === 3) { // arret de la boucle quand un des joueurs atteind 3
                if(scoreIA === 3){
                    alert("Vous avez perdu ! \n Score ordinateur : " + scoreIA + "\n Votre score : " + scoreJoueur);
                    scoreJoueur = 0;
                    scoreIA = 0;
                }
                if(scoreJoueur === 3){
                    alert("Vous avez gagné ! \n Votre score : " + scoreJoueur + "\n Score ordinateur : " + scoreIA);
                    scoreJoueur = 0;
                    scoreIA = 0;
                }
                if ( !confirm( "Ce jeu vous a plus ? Vous voulez continuer ? ") ) {
                    alert("Ooooh, vous pouvez alors fermer cette page \;\)");
                    boucleJouer = false;
                }
            }
    }
}   
    else {
       alert("Ooooh, vous pouvez alors fermer cette page \;\)");
    }