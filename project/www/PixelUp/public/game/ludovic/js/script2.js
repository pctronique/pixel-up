let folderWorker = "./../js/worker/";
let screenGame = document.getElementById("screenGame");
let backgroundTaille = new Taille(400, 400);
let idBackground = "backgroundTest";
let newcanvas = document.createElement('canvas');
newcanvas.width = backgroundTaille.x;
newcanvas.height = backgroundTaille.y;
newcanvas.id = idBackground;
screenGame.insertBefore(newcanvas, screenGame.querySelector("canvas"));
let background = new TestBackgroundPlanete(idBackground, backgroundTaille);
background.afficher();