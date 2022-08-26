var canvas = document.getElementById('background_game');
var ctx = canvas.getContext('2d');

let hauteurBackground = 1000;
let largeurBackground = 700;

ctx.fillStyle = '#EBDEF0';
ctx.fillRect(0, 0, largeurBackground, hauteurBackground);

let plateformes = [];
let areteRectangles = [];
let positions = [[0, 100, 200, 300, 400, 500, 600], [50, 150, 250, 350, 450, 550, 650]]

let tailleUser = new Taille(20,50);
let joueur = new Joueur(tailleUser);

let defaultHauteur = 70;
let startHauteur = defaultHauteur;
let i = 0;
while(startHauteur < hauteurBackground) {
    positions.forEach(element => {
        element.forEach(element2 => {
            let taille = new Taille(50,10);
            let pos = new Position(element2, hauteurBackground-startHauteur);
            let platforme = new Plateforme(taille);
            platforme.setPosition(pos);
            plateformes.push(platforme);

            


            var ctxPlateform = canvas.getContext('2d');
            ctxPlateform.fillStyle = 'blue';
            ctxPlateform.fillRect(platforme.pos.x, platforme.pos.y, platforme.taille.x, platforme.taille.y);
                /*
                let rectangle = platforme.setAreteRectangle();
                areteRectangles.push(rectangle);
                let haut = rectangle.haut();
                ctxPlateform.fillStyle = 'Red';
                ctxPlateform.fillRect(haut.debut, haut.pos, taille.x, 1);
                ctxPlateform.fillStyle = '#D99700';
                let bas = rectangle.bas();
                ctxPlateform.fillRect(bas.debut, bas.pos, taille.x, 1);
                ctxPlateform.fillStyle = 'Red';
                let gauche = rectangle.gauche();
                ctxPlateform.fillRect(gauche.pos, gauche.debut, 1, taille.y);
                ctxPlateform.fillStyle = '#D99700';
                let droite = rectangle.droite();
                ctxPlateform.fillRect(droite.pos, droite.debut, 1, taille.y);*/
        });
        startHauteur += defaultHauteur;
    });
}
let pos = new Position(0, hauteurBackground-1);
let taille = new Taille(700,10);
let platforme = new Plateforme(taille);
platforme.setPosition(pos);
plateformes.push(platforme);

console.log(plateformes);

joueur.setTabPlateforme(plateformes);

var ctxPlateform = canvas.getContext('2d');
ctxPlateform.fillStyle = 'blue';
ctxPlateform.fillRect(platforme.pos.x, platforme.pos.y, platforme.taille.x, platforme.taille.y);

var canvasUser = document.getElementById('utilisateur');
var ctxUser = canvasUser.getContext('2d');

ctxUser.fillStyle = '#24AE1D';
ctxUser.fillRect(0, 0, 20, 50);


joueur.deplacer();
joueur.sauter();
