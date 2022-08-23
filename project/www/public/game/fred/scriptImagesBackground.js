// let sousTerre = new BackgroundSousTerre("background",new Taille(1000, 5000));
// sousTerre.afficher();
  
let sousMer = new BackgroundSousMer("background",new Taille(1000, 5000));
sousMer.afficher();
let background = document.getElementById("background");
// let terre = new BackgroundTerre("background",new Taille(1000, 5000));
// terre.afficher();

// let cielNuages = new BackgroundCielNuages("background",new Taille(1000, 5000));
// cielNuages.afficher();

// let cielAvions = new BackgroundCielAvions("background",new Taille(1000, 5000));
// cielAvions.afficher();

let meduses = new PlateformeMeduses(new Taille(300, 170));
meduses.setPosition(new Position(0, 1100));
// meduses.setCanvasBackground("background");
meduses.afficher(background);


let nacelles = new PlateformeNacelles(new Taille(300, 170));
nacelles.setPosition(new Position(700, 700));
// nacelles.setCanvasBackground("background");
nacelles.afficher(background);

let meteoritesFeu = new PlateformeMeteoritesFeu(new Taille(300, 170));
meteoritesFeu.setPosition(new Position(700, 1000));
// meteoritesFeu.setCanvasBackground("background");
meteoritesFeu.afficher(background);

let oiseaux = new PlateformeOiseaux(new Taille(300, 170));
oiseaux.setPosition(new Position(0, 700));
// oiseaux.setCanvasBackground("background");
oiseaux.afficher(background);

let nuages = new PlateformeNuages(new Taille(300, 170));
nuages.setPosition(new Position(700, 700));
// nuages.setCanvasBackground("background");
nuages.afficher(background);

let avions = new PlateformeAvions(new Taille(300, 170));
avions.setPosition(new Position(500, 800));
// avions.setCanvasBackground("background");
avions.afficher(background);

let helicopteres = new PlateformeHelicopteres(new Taille(300, 170));
helicopteres.setPosition(new Position(700, 300));
// helicopteres.setCanvasBackground("background");
helicopteres.afficher(background);