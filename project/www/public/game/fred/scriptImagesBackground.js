let sousTerre = new BackgroundSousTerre("background",new Taille(300, 170));
sousTerre.afficher();
  
let sousMer = new BackgroundSousMer("background",new Taille(300, 170));
sousMer.afficher();

let meduses = new PlateformeMeduses(new Taille(300, 170));
meduses.setPosition(new Position(0, 1350));
meduses.setImage("./img/meduses2.jpg");
meduses.setCanvasBackground("background");
meduses.afficher();


let nacelles = new PlateformeNacelles(new Taille(300, 170));
nacelles.setPosition(new Position(0, 700));
nacelles.setImage("./img/nacelle.jpg");
nacelles.setCanvasBackground("background");
nacelles.afficher();