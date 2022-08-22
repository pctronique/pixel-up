// let sousTerre = new BackgroundSousTerre("background",new Taille(1000, 5000));
// sousTerre.afficher();
  
let sousMer = new BackgroundSousMer("background",new Taille(1000, 5000));
sousMer.afficher();

// let terre = new BackgroundTerre("background",new Taille(1000, 5000));
// terre.afficher();

// let cielNuages = new BackgroundCielNuages("background",new Taille(1000, 5000));
// cielNuages.afficher();

// let cielAvions = new BackgroundCielAvions("background",new Taille(1000, 5000));
// cielAvions.afficher();

let meduses = new PlateformeMeduses(new Taille(300, 170));
meduses.setPosition(new Position(0, 1100));
meduses.imageSrc("./img/meduse.png");
meduses.setCanvasBackground("background");
meduses.afficher();


let nacelles = new PlateformeNacelles(new Taille(300, 170));
nacelles.setPosition(new Position(700, 700));
nacelles.imageSrc("./img/nacelle.png");
nacelles.setCanvasBackground("background");
nacelles.afficher();

let meteoritesFeu = new PlateformeMeteoritesFeu(new Taille(300, 170));
meteoritesFeu.setPosition(new Position(700, 1000));
meteoritesFeu.imageSrc("./img/meteoriteFeu.png");
meteoritesFeu.setCanvasBackground("background");
meteoritesFeu.afficher();

let oiseaux = new PlateformeOiseaux(new Taille(300, 170));
oiseaux.setPosition(new Position(0, 700));
oiseaux.imageSrc("./img/oiseau.png");
oiseaux.setCanvasBackground("background");
oiseaux.afficher();

let nuages = new PlateformeNuages(new Taille(300, 170));
nuages.setPosition(new Position(700, 700));
nuages.imageSrc("./img/nuage3.png");
nuages.setCanvasBackground("background");
nuages.afficher();

let avions = new PlateformeAvions(new Taille(300, 170));
avions.setPosition(new Position(500, 800));
avions.imageSrc("./img/avion_pixel-remove1.png");
avions.setCanvasBackground("background");
avions.afficher();

let helicopteres = new PlateformeHelicopteres(new Taille(300, 170));
helicopteres.setPosition(new Position(700, 300));
helicopteres.imageSrc("./img/helicoptere.png");
helicopteres.setCanvasBackground("background");
helicopteres.afficher();