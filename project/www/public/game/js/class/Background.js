class Background {

    constructor(idBackground, taille, imgBack = undefined, imgBas = undefined){
        this.taille = taille;
        this.imgBack = imgBack;
        this.imgBas = imgBas;
        this.joueur = undefined;
        this.idBackground = idBackground;
        this.plateformes = [];
        this.plateformesCollision = [];
        this.screen_bottom = undefined;
        this.widthBottom = 0;
    }

    creerPlatforme() {
            this.plateformes = [];
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
                        let posArete = platforme.getAreteRectangle();
                        this.plateformesCollision.push({
                            id:this.plateformes.length,
                            haut:posArete.haut(),
                            bas:posArete.bas(),
                            gauche:posArete.gauche(),
                            droite:posArete.droite(),
                        });
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

    deplacement(scroll){

    }

    creerPlatformeBottom(){                               
        let taille = new Taille(100,20);
        let pos = new Position(0, this.taille.y-20);
        this.screen_bottom = new Plateforme(taille);
        this.screen_bottom.setPosition(pos);
        this.screen_bottom.setBackground(this);
    }

    screenBottom(posBas){
        console.log(posBas);
     
        if (this.widthBottom <= 700) {                     //pour augmenter en largeur progressivement le feu selon la hauteur du scroll
            let posBasScroll = -1 * posBas;
            this.widthBottom = 100 * (posBasScroll / 10);
            let taille = new Taille(this.widthBottom,20);
            this.screen_bottom.setTaille(taille);
          
        }
        let pos = new Position(0, this.taille.y+posBas+5);
        this.screen_bottom.setPosition(pos);    
        console.log(this.screen_bottom.pos);
        console.log(this.screen_bottom.taille);
    }

    scrollBarBottom(pos){

    }
    getPlateformes() {
        return this.plateformes;
    }

    getPlateformesCollision() {
        return this.plateformesCollision;
    }

    afficher() {
        this.creerPlatforme();
        //this.creerPlatformeBottom();
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
            this.joueur.setTabPlateforme(this.plateformes);
            this.joueur.setCanvasBackground(this.idBackground);
            this.joueur.afficher();
        }
        if(this.screen_bottom != undefined) {
            this.screen_bottom.setCanvasBackground(this.idBackground);
            this.screen_bottom.afficher();
        }
       //placer la barre du bas
    }
        
}
