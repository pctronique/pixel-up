class Game {

    constructor(pause = false) {
        this.classPause = undefined;
        if(pause) {
            this.classPause = new Pause();
        }
        this.backgroundDeb = undefined;
        this.joueur = undefined;
    }

    setBackgroundDeb(background) {
        this.backgroundDeb = background;
    }

    setJoueur(joueur) {
        this.joueur = joueur;
    }

    afficher() {
        if(this.backgroundDeb != undefined && this.joueur != undefined) {
            this.joueur.setBackground(this.backgroundDeb);
            this.backgroundDeb.setJoueur(this.joueur);
            this.backgroundDeb.afficher();
        } else if(this.backgroundDeb != undefined) {
            this.creerPlatforme();
            this.backgroundDeb.afficher();
        } 
    }


}