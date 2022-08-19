/*let image = new Images("feu.png", new Position(-20, 320), new Taille(1100, 200));
image.afficher("images");
let image1= new Images("oiseau.png", new Position(150, 110), new Taille(50,50));
image1.afficher("images");
let image2= new Images("nuage bis.png", new Position(850, 110), new Taille(150,120));
image2.afficher("images");

let feu = new Images("feu.png", new Position(-20, 320), new Taille(1100, 200)); 
feu.afficher();*/


let feu = new PlateformeFeu(new Taille(1500, 170));
feu.setPosition(new Position(0, 1350));
feu.setImage("feu.png");
feu.setCanvasBackground("background");
feu.afficher();










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


