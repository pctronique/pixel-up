class BlockRectange extends Pause {
  /**
   *
   * @param {*} taille sa taille
   */
  constructor(taille = undefined) {
    super();
    this.taille = taille;
    this.img = undefined;
    this.pos = undefined;
    if (this.taille === undefined) {
      this.taille = new Taille();
    }
    if (this.pos === undefined) {
      this.pos = new Position();
    }
    this.areteRectangle = new AreteRectangle(this.pos, this.taille);
    this.background = undefined;
    this.idBackground = undefined;
  }

  setBackground(background) {
    this.background = background;
  }

  setCanvasBackground(idBackground) {
    this.idBackground = idBackground;
  }

  setPosition(pos) {
    this.pos = pos;
    if (this.pos === undefined) {
      this.pos = new Position();
    }
    this.areteRectangle = new AreteRectangle(this.pos, this.taille);
  }

  setPositionXY(posX, posY) {
    this.pos = new Position(posX, posY);
    if (this.pos === undefined) {
      this.pos = new Position();
    }
    this.areteRectangle = new AreteRectangle(this.pos, this.taille);
  }

  setPositionX(posX) {
    if(this.pos != undefined && posX != undefined) {
      this.pos.x = posX;
      this.areteRectangle = new AreteRectangle(this.pos, this.taille);
    }
  }

  setPositionY(posY) {
    if(this.pos != undefined && posY != undefined) {
      this.pos.y = posY;
      this.areteRectangle = new AreteRectangle(this.pos, this.taille);
    }
  }

  getAreteRectangle() {
    return this.areteRectangle;
  }

  getPosition() {
    return this.pos;
  }

  getTaille() {
    return this.taille;
  }
  
  setTaille(taille){
      this.taille = taille;
  }

  imageSrc(src) {
    this.img = src;
  }

  afficher() {}
}
