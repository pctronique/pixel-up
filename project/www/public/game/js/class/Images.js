class Images {
    constructor(src, pos, taille) {

        this.src = src;
        this.x = 0;
        this.y = 0;
        this.pos = pos;
        this.taille = taille;
    }
    afficher(idGame) {
        let monCanvas = document.getElementById(idGame);
        //if (monCanvas.getContext) {
        let ctx = monCanvas.getContext('2d');
        /* nouvelle image */
        let feu = new Image();
        /* définition de la source */
        feu.src = this.src;
        /* tracé uniquement quand l'image sera chargée
        (quand l'événement onLoad sera déclenché, exécuter ctx.drawImage() */
        let posImage = this.pos;
        let tailleImage = this.taille;
        
        feu.onload = function () {
          
            ctx.drawImage(feu, posImage.x, posImage.y, tailleImage.x, tailleImage.y);
        }

    }
    
    select(nbr) {

    }

    cust(x, y) {

    }

}