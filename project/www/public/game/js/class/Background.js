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
        this.creerPlatforme();
    }

    idSreenValue(idScreen) {
        this.idScreen = idScreen;
    }

    creerPlatforme() {
        // let positions = [[0, 100, 200, 300, 400, 500, 600], [50, 150, 250, 350, 450, 550, 650]]
            let defaultHauteur = 70;
            let startHauteur = defaultHauteur;
            // while(startHauteur < this.taille.y) {
            //     positions.forEach(element => {
            //         element.forEach(element2 => {
            //             let taille = new Taille(50,10);
            //             let pos = new Position(element2, this.taille.y-startHauteur);
            //             let platforme = new Plateforme(taille);
            //             platforme.setPosition(pos);
            //             platforme.setBackground(this);
            //             let posArete = platforme.getAreteRectangle();
            //             this.plateformesCollision.push({
            //                 id:this.plateformes.length,
            //                 haut:posArete.haut(),
            //                 bas:posArete.bas(),
            //                 gauche:posArete.gauche(),
            //                 droite:posArete.droite(),
            //             });
            //             this.plateformes.push(platforme);

            //         });
            //         startHauteur += defaultHauteur;
            //     });
            // }
            
        while (startHauteur < this.taille.y) {
            let posPlateforme = 0;
            console.log("************");
           while (posPlateforme < this.taille.x){
                let objRndPos = new RndPos(posPlateforme,0);
                objRndPos.minMax(0,30);
                let taille = new Taille(50,10);
               let plateforme = new Plateforme(taille);
               posPlateforme += objRndPos.getX();
               posPlateforme += taille.getX();

            let pos = new Position( posPlateforme, this.taille.y-startHauteur);

                        console.log(posPlateforme);
                         plateforme.setPosition(pos);
                            plateforme.setBackground(this);
                            let posArete = plateforme.getAreteRectangle();
                        this.plateformesCollision.push({
                            id:this.plateformes.length,
                            haut:posArete.haut(),
                            bas:posArete.bas(),
                            gauche:posArete.gauche(),
                            droite:posArete.droite(),
                         });
                       this.plateformes.push(plateforme);
                       
                    } 
                    startHauteur += defaultHauteur;
                    
        }
        
        
            // let objRndPos = new RndPos(0,0);
            // objRndPos.minMax(1, 100);
            // console.log(objRndPos.getX());
        
            let pos = new Position(0, this.taille.y-1);
            let taille = new Taille(this.taille.x,10);
            let plateforme = new Plateforme(taille);
            plateforme.setPosition(pos);
            plateforme.setBackground(this);
            this.plateformes.push(plateforme);
    }

    getTaille() {
        return this.taille;
    }

    setJoueur(joueur) {
        this.joueur = joueur;
    }

    deplacement(){

    }

    screenBottom(posBas){

    }

    getPlateformes() {
        return this.plateformes;
    }

    getPlateformesCollision() {
        return this.plateformesCollision;
    }

    afficher() {
        
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