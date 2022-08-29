class PlateformeMeduses extends PlateformePiegeHaut {
  constructor(taille = undefined, collisionHautStable = true) {
    super(taille, collisionHautStable);
    this.taille = new Taille(0, 80);
    this.imgGif = new ImageGif(
      ["./img/meduse3.png", "./img/meduse6.png"],// 
      this.pos,
      this.taille
    );
    this.imgGif.setIsRepeat(true);
    this.imgGif.start();
  }

  test() {
    return true;
  }

  typeMort() {
    return EnumTypeMort.MEDUSE;
  }

  stop() {
    this.imgGif.stop();
  }

  afficher(canvas) {
    this.createBorder(canvas);
    this.imgGif.setBackground(this.background);
    this.imgGif.pos = this.pos;
    this.imgGif.setTaille(this.taille);
    this.imgGif.afficher(canvas);
    //this.img;
    /*this.imageSrc("./img/meduse3.png");
    this.createBorder(canvas);
    let meduses = new Images(this.img, this.pos, this.taille);
    meduses.setIsRepeat(true);
    meduses.setBackground(this.background);
    meduses.afficher(canvas);*/
  }
}
