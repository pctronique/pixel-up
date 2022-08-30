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
    this.posLeft = undefined;
    this.posRight = undefined;
    if (this.taille === undefined) {
      this.taille = new Taille();
    }
    if (this.pos === undefined) {
      this.pos = new Position();
      this.posLeft = new Position();
      this.posRight = new Position();
    }
    this.game = undefined;
    this.areteRectangle = new AreteRectangle(this.pos, this.taille);
    this.areteRectangleLeft = new AreteRectangle(this.pos, this.taille);
    this.areteRectangleRight = new AreteRectangle(this.pos, this.taille);
    this.background = undefined;
    this.idBackground = undefined;
    this.projectDev = false;
  }

  setProjectDev() {
    this.projectDev = true;
  }

  test() {
      return false;
  }

  createBorder(canvas) {
    if(this.projectDev) {
      let ctx = canvas.getContext("2d");
      ctx.fillStyle = "black";
      ctx.fillRect(this.pos.x, this.pos.y, this.taille.x, 1);
      ctx.fillRect(this.pos.x, this.pos.y+this.taille.y, this.taille.x, 1);
      ctx.fillRect(this.pos.x, this.pos.y, 1, this.taille.y);
      ctx.fillRect(this.pos.x+this.taille.x, this.pos.y, 1, this.taille.y);
      ctx.fillRect(this.posLeft.x, this.posLeft.y, this.taille.x, 1);
      ctx.fillRect(this.posLeft.x, this.posLeft.y+this.taille.y, this.taille.x, 1);
      ctx.fillRect(this.posLeft.x, this.posLeft.y, 1, this.taille.y);
      ctx.fillRect(this.posLeft.x+this.taille.x, this.posLeft.y, 1, this.taille.y);
      ctx.fillRect(this.posRight.x, this.posRight.y, this.taille.x, 1);
      ctx.fillRect(this.posRight.x, this.posRight.y+this.taille.y, this.taille.x, 1);
      ctx.fillRect(this.posRight.x, this.posRight.y, 1, this.taille.y);
      ctx.fillRect(this.posRight.x+this.taille.x, this.posRight.y, 1, this.taille.y);
    }
  }

  stop() {}

  setGame(game) {
    this.game = game;
  }

  typeClass() {
    return "objet";
  }

  visibleGame() {
    if(this.background != undefined && this.background.taille != undefined) {
      if(!this.imgVisible()) {
        if(this.imgLeftVisible()) {
          this.setPosition(this.posLeft);
        } else if(this.imgRighttVisible()) {
          this.setPosition(this.posRight);
        }
      }
    }
  }

  imgVisible() {
    return (this.pos.x > 0 && this.pos.x < this.background.taille.x || 
      (this.pos.x+this.taille.x) > 0 && (this.pos.x+this.taille.x) < this.background.taille.x);
  }

  imgLeftVisible() {
      return ((this.pos.x > 0 && this.pos.x < this.background.taille.x && 
        this.pos.x+this.taille.x > this.background.taille.x) || !this.imgVisible() && this.pos.x > 0);

  }

  imgRighttVisible() {
      return ((this.pos.x < 0 && this.pos.x+this.taille.x > 0 && 
        this.pos.x+this.taille.x < this.background.taille.x) || !this.imgVisible() && this.pos.x < 0);
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
    if(this.background != undefined && this.background.taille != undefined) {
      this.posLeft = new Position(this.pos.x - this.background.taille.x, this.pos.y);
      this.posRight = new Position(this.pos.x + this.background.taille.x, this.pos.y);
    }
    this.areteRectangle = new AreteRectangle(this.pos, this.taille);
    this.areteRectangleLeft = new AreteRectangle(this.posLeft, this.taille);
    this.areteRectangleRight = new AreteRectangle(this.posRight, this.taille);
    this.visibleGame();
  }

  setPositionXY(posX, posY) {
    let posTmp = new Position(posX, posY);
    this.setPosition(posTmp);
    /*if (this.pos === undefined) {
      this.pos = new Position();
    }
      if(this.background == undefined && this.background.taille != undefined) {
        this.posLeft = new Position(this.pos.x - this.background.taille.x, this.pos.y);
        this.posRight = new Position(this.pos.x + this.background.taille.x, this.pos.y);
      }
    this.areteRectangle = new AreteRectangle(this.pos, this.taille);
    this.areteRectangleLeft = new AreteRectangle(this.posLeft, this.taille);
    this.areteRectangleRight = new AreteRectangle(this.posRight, this.taille);
    this.visibleGame();*/
  }

  setPositionX(posX) {
    if(this.pos != undefined && posX != undefined) {
      this.pos.x = posX;
      this.posLeft.x = this.pos.x - this.background.taille.x;
      this.posRight.x = this.pos.x + this.background.taille.x;
    }
    this.areteRectangle = new AreteRectangle(this.pos, this.taille);
    this.areteRectangleLeft = new AreteRectangle(this.posLeft, this.taille);
    this.areteRectangleRight = new AreteRectangle(this.posRight, this.taille);
    this.visibleGame();
  }

  positionValide() {

  }

  setPositionY(posY) {
    if(this.pos != undefined && posY != undefined) {
      this.pos.y = posY;
      this.posLeft.y = posY;
      this.posRight.y = posY;
    }
    this.areteRectangle = new AreteRectangle(this.pos, this.taille);
    this.areteRectangleLeft = new AreteRectangle(this.posLeft, this.taille);
    this.areteRectangleRight = new AreteRectangle(this.posRight, this.taille);
    this.visibleGame();
  }

  getAreteRectangle() {
    return this.areteRectangle;
  }

  getAreteRectangleLeft() {
    return this.areteRectangleLeft;
  }

  getAreteRectangleRight() {
    return this.areteRectangleRight;
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

  afficher(canvas) {}
}
