var canvas = document.getElementById('background_game');
var ctx = canvas.getContext('2d');

ctx.fillStyle = '#EBDEF0';
ctx.fillRect(0, 0, 700, 1000);

let plateformes = [];
let positions = [[0, 100, 200, 300, 400, 500, 600], [50, 150, 250, 350, 450, 550, 650]]

let defaultHauteur = 70;
let startHauteur = defaultHauteur;
let i = 0;
while(startHauteur < 1000) {
    positions.forEach(element => {
        element.forEach(element2 => {
            let taille = new Taille(50,10);
            let pos = new Position(element2, startHauteur);
            let platforme = new Plateforme(taille, pos);
            plateformes.push(platforme);


            var ctxPlateform = canvas.getContext('2d');
            if(i == 0) {
                ctxPlateform.fillStyle = '#FFFFFF';
            } else if(i == 1) {
                ctxPlateform.fillStyle = '#448DE5';
            } else if(i == 2) {
                ctxPlateform.fillStyle = '#1FB1CF';
            } else if(i == 3) {
                ctxPlateform.fillStyle = '#41B1C7';
            } else if(i == 4) {
                ctxPlateform.fillStyle = '#19A3A1';
            } else {
                ctxPlateform.fillStyle = 'blue';
            }
            ctxPlateform.fillRect(pos.x, 1000-pos.y, taille.x, taille.y);
            if(i == 0) {
                console.log("Plateforme 0 : ");
                var ctxPlateformHaut = canvas.getContext('2d');
                ctxPlateform.fillStyle = 'Red';
                ctxPlateform.fillRect(pos.x, 1000-pos.y, taille.x, 1);
                console.log("haut : "+(1000-pos.y)+ " / "+pos.x+" / "+ (pos.x+taille.x));
                ctxPlateform.fillStyle = '#D99700';
                ctxPlateform.fillRect(pos.x, 1000-pos.y+9, taille.x, 1);
                console.log("bas : "+(1000-pos.y+9+1)+ " / "+pos.x+" / "+ (pos.x+taille.x));
                ctxPlateform.fillStyle = 'Red';
                ctxPlateform.fillRect(pos.x, 1000-pos.y, 1, taille.y);
                console.log("gauche : "+pos.x+ " / "+(1000-pos.y)+" / "+ (1000-pos.y+taille.y));
                ctxPlateform.fillStyle = '#D99700';
                ctxPlateform.fillRect(pos.x+50, 1000-pos.y, 1, taille.y);
                console.log("droite : "+(pos.x+50)+ " / "+(1000-pos.y)+" / "+ (1000-pos.y+taille.y));
            }
            i++;
        });
        startHauteur += defaultHauteur;
    });
}

var canvasUser = document.getElementById('utilisateur');
var ctxUser = canvasUser.getContext('2d');

ctxUser.fillStyle = '#24AE1D';
ctxUser.fillRect(0, 0, 20, 50);

let joueur = new Joueur();
joueur.deplacer();
