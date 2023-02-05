class TestBackgroundPlanete extends Background {
  constructor(allImage, idBackground, taille, scrollMove = undefined, tabConfig = undefined, configMoveUser = undefined, imgBack = undefined, imgBas = undefined) {
    super(allImage, idBackground, taille, scrollMove, tabConfig, configMoveUser, imgBack, imgBas);
    this.imageSrc("./img/ciel.png");
    this.imgGif = new ImageGif(
      [
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
      ],
      this.pos,
      this.taille
    );
    this.imgGif.setBackground(this);
    this.imgGif.start();
  }

  stop() {
    this.imgGif.stop();
  }

  imgBackDisplay(canvas) {
    this.imgGif.afficher(canvas);
  }
}
