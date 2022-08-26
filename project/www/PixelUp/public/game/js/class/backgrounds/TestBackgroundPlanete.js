class TestBackgroundPlanete extends Background {
  constructor(idBackground, taille, imgBack = undefined, imgBas = undefined) {
    super(idBackground, taille, imgBack, imgBas);
    this.imageSrc("./img/ciel.png");
    this.imgGif = new ImageGif(
      [
<<<<<<< HEAD
        "./img/planete/GIF_Frame  0.png",
        "./img/planete/GIF_Frame  1.png",
        "./img/planete/GIF_Frame  2.png",
        "./img/planete/GIF_Frame  3.png",
        "./img/planete/GIF_Frame  4.png",
        "./img/planete/GIF_Frame  5.png",
        "./img/planete/GIF_Frame  6.png",
        "./img/planete/GIF_Frame  7.png",
        "./img/planete/GIF_Frame  8.png",
        "./img/planete/GIF_Frame  9.png",
=======
        "./img/panete/GIF_Frame  0.png",
        "./img/panete/GIF_Frame  1.png",
        "./img/panete/GIF_Frame  2.png",
        "./img/panete/GIF_Frame  3.png",
        "./img/panete/GIF_Frame  4.png",
        "./img/panete/GIF_Frame  5.png",
        "./img/panete/GIF_Frame  6.png",
        "./img/panete/GIF_Frame  7.png",
        "./img/panete/GIF_Frame  8.png",
        "./img/panete/GIF_Frame  9.png",
>>>>>>> devSymfony
      ],
      this.pos,
      this.taille
    );
    this.imgGif.setBackground(this);
<<<<<<< HEAD
    this.imgGif.start();
  }

  stop() {
    this.imgGif.stop();
=======
    this.imgGif.startGif();
>>>>>>> devSymfony
  }

  imgBackDisplay(canvas) {
    this.imgGif.afficher(canvas);
  }
}
