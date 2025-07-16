function changerCouleur() {
    // Générer une couleur aléatoire
    const couleurFond = couleurAleatoire();

    // Appliquer les couleurs au body
    document.body.style.backgroundColor = couleurFond;
}

function couleurAleatoire() {
    // Générer une couleur hexadécimale aléatoire
    const lettres = '0123456789ABCDEF';
    let couleur = '#';
    for (let i = 0; i < 6; i++) {
        couleur += lettres[Math.floor(Math.random() * 16)];
    }
    return couleur;
}
document.addEventListener('DOMContentLoaded', function() {
    var nombreSecret = Math.floor(Math.random() * 100) + 1;
    var boutonDeviner = document.getElementById('boutonDeviner');
    var resultat = document.getElementById('resultat');
    var inputDevinette = document.getElementById('devinette');

    boutonDeviner.addEventListener('click', function() {
        var devinette = parseInt(inputDevinette.value);

        if (isNaN(devinette) || devinette < 1 || devinette > 100) {
            resultat.textContent = 'Choisis un nombre valide entre 1 et 100.';
        } else if (devinette < nombreSecret) {
            resultat.textContent = 'Trop bas ! Essaye encore.';
        } else if (devinette > nombreSecret) {
            resultat.textContent = 'Trop haut ! Essaye encore.';
        } else {
            resultat.textContent = 'Félicitations ! Tu as deviné le bon nombre.';
            boutonDeviner.disabled = true;
        }
    });
});
