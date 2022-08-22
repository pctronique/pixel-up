/*let image = new Images("feu.png", new Position(-20, 320), new Taille(1100, 200));
image.afficher("images");
let image1= new Images("oiseau.png", new Position(150, 110), new Taille(50,50));
image1.afficher("images");
let image2= new Images("nuage bis.png", new Position(850, 110), new Taille(150,120));
image2.afficher("images");

let feu = new Images("feu.png", new Position(-20, 320), new Taille(1100, 200)); 
feu.afficher();*/


/*let backgroundEspaceAsteroide = new BackgroundEspaceAsteroide("background",new Taille(500, 170));
backgroundEspaceAsteroide.afficher();*/


let espaceSatellite = new BackgroundEspaceSatellite("background",new Taille(1000, 5000));
espaceSatellite.afficher();

let feu = new PlateformeFeu(new Taille(1000, 170));
feu.setPosition(new Position(0, 4850));
//feu.imageSrc("feu.png");
feu.setCanvasBackground("background");
feu.afficher();

let pierre = new PlateformePierre(new Taille(150, 100));
pierre.setPosition(new Position(0, 150));
pierre.setCanvasBackground("background");
pierre.afficher();

let requin = new PlateformeMobileRequin(new Taille(150, 100));
requin.setPosition(new Position(500, 150));
requin.setCanvasBackground("background");
requin.afficher();

let satellite = new PlateformeMobileSatellite(new Taille(150, 100));
satellite.setPosition(new Position(700, 550));
satellite.setCanvasBackground("background");
satellite.afficher();

let asteroide = new PlateformeMobileAsteroide(new Taille(150, 100));
asteroide.setPosition(new Position(700, 650));
asteroide.setCanvasBackground("background");
asteroide.afficher();

let poisson = new PlateformeMobilePoisson(new Taille(150, 100));
poisson.setPosition(new Position(700, 850));
poisson.setCanvasBackground("background");
poisson.afficher();







/*var monCanvas = document.getElementById('images');
    //if (monCanvas.getContext) {
        ctx = monCanvas.getContext('2d');
        /* nouvelle image */
        /*feu = new Image();*/
        /* définition de la source */
        //feu.src = 'feu.png';
        /* tracé uniquement quand l'image sera chargée
        (quand l'événement onLoad sera déclenché, exécuter ctx.drawImage() */
       // feu.onload = function () {
          //  ctx.drawImage(feu, -20, 90);
        //}
        //oiseau = new Image();
        /* définition de la source */
        //oiseau.src = 'oiseau.png';
        /* tracé uniquement quand l'image sera chargée
        (quand l'événement onLoad sera déclenché, exécuter ctx.drawImage() */
       // oiseau.onload = function () {
            //ctx.drawImage(oiseau, 150, 10);  //changer position x/y
        //}
        //nuage = new Image();
        /* définition de la source */
        //nuage.src = 'nuage bis.png';
        /* tracé uniquement quand l'image sera chargée
        (quand l'événement onLoad sera déclenché, exécuter ctx.drawImage() */
        //nuage.onload = function () {
            //ctx.drawImage(nuage, 500, -150);  //changer position x/y
        //}
    /*} else {
        alert('canvas non supporté par ce navigateur');
    }*/


