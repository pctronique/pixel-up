class Background {

    constructor(idBackground, taille, imgBack = undefined, imgBas = undefined){
        this.taille = taille;
        this.imgBack = imgBack;
        this.imgBas = imgBas;
        this.joueur = undefined;
        this.idBackground = idBackground;
        this.plateformes = [];
        this.screen_bottom = undefined;
    }

    creerPlatforme() {
            let positions = [[0, 100, 200, 300, 400, 500, 600], [50, 150, 250, 350, 450, 550, 650]]
            let defaultHauteur = 70;
            let startHauteur = defaultHauteur;
            while(startHauteur < this.taille.y) {
                positions.forEach(element => {
                    element.forEach(element2 => {
                        let taille = new Taille(50,10);
                        let pos = new Position(element2, this.taille.y-startHauteur);
                        let platforme = new Plateforme(taille);
                        platforme.setPosition(pos);
                        platforme.setBackground(this);
                        this.plateformes.push(platforme);

                    });
                    startHauteur += defaultHauteur;
                });
            }
            let pos = new Position(0, this.taille.y-1);
            let taille = new Taille(this.taille.x,10);
            let platforme = new Plateforme(taille);
            platforme.setPosition(pos);
            platforme.setBackground(this);
            this.plateformes.push(platforme);
    }

    getTaille() {
        return this.taille;
    }

    setJoueur(joueur) {
        this.joueur = joueur;
    }

    deplacement(){

    }

    screenBottom(){

    }

    getPlateformes() {
        return this.plateformes;
    }

    afficher() {
        this.creerPlatforme();
        let background = document.getElementById(this.idBackground);
        let ctx = background.getContext('2d');
        ctx.fillStyle = '#EBDEF0';
        ctx.fillRect(0, 0, this.taille.x, this.taille.y);
        this.plateformes.forEach(element => {
            if(element != undefined) {
                element.setCanvasBackground(this.idBackground);
                element.afficher();
            }
        });
        if(this.joueur != undefined) {
            this.joueur.setCanvasBackground(this.idBackground);
            this.joueur.afficher();
        }
    }

}