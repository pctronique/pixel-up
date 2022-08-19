let sousTerre = new BackgroundSousTerre("background",new Taille(1500, 170));
//  sousTerre.afficher();

let meduses = new PlateformeMeduses(new Taille(1500, 170));
meduses.setPosition(new Position(0, 1350));
meduses.setImage("meduses3.webp");
meduses.setCanvasBackground("background");
meduses.afficher();
