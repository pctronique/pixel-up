class Images {
  constructor(src, pos, taille, tailleImg = undefined) {
    this.src = src;
    this.x = 0;
    this.y = 0;
    this.nbr = 0;
    this.pos = pos;
    this.taille = taille;
    this.tailleImg = tailleImg;
    if (tailleImg == undefined) {
      this.tailleImg = this.taille;
    }
    this.isGif = false;
    this.isCut = false;
    this.color = undefined;
    this.background = undefined;
    this.objet = undefined;
    this.imageObj = undefined;
    this.isRepeat = false;
  }

  setIsRepeat(isRepeat) {
    this.isRepeat = isRepeat;
  }

  setBackground(background) {
    this.background = background;
  }
  setObjetDuplique(objet) {
    this.objet = objet;
  }
  typeGif() {
    this.isGif = true;
  }
  afficher(canvas) {
    //if (monCanvas.getContext) {
    let ctx = canvas.getContext("2d");
    /* nouvelle image */
    let img = new Image();
    /* définition de la source */
    img.src = this.src;
    /* tracé uniquement quand l'image sera chargée
        (quand l'événement onLoad sera déclenché, exécuter ctx.drawImage() */
    let classImgs = this;

    img.onload = function () {
      if (classImgs.isRepeat) {
        classImgs.repeatImage(ctx, img);
      } else if (classImgs.isCut) {
        classImgs.selectImag(img.width, img.height, img, ctx);
      } else {
        classImgs.uneImage(img, ctx);
      }
      //classImgs.transpImg(ctx);
      if (!classImgs.isRepeat) {
        if (classImgs.background != undefined) {
          classImgs.background.afficherContenue();
        }
      }
    };
  }

  getPosLeft() {
    return new Position(this.pos.x - this.background.taille.x, this.pos.y);
  }

  imgLeftVisible() {
    if (this.background != undefined) {
      return false;
    }
    let posLeft = this.getPosLeft();
    return (
        (pos.x > 0 && pos.x + this.tailleImg.x < this.background.taille.x) && 
        (posLeft.x + this.tailleImg.x > this.background.taille.x)
    );
  }

  getPosRight() {
    return new Position(this.pos.x + this.background.taille.x, this.pos.y);
  }

  imgRighttVisible() {
    if (this.background != undefined) {
      return false;
    }
    let posRight = this.getPosRight();
    return (
      (pos.x < 0 && posRight.x + this.tailleImg.x > 0)
    );
  }
  repeatImage(ctx, imageObj) {
    let imgComp = new Image();
    imgComp.src = this.compressImage(
      imageObj,
      this.tailleImg.y / imageObj.height
    );
    let classImgs = this;

    imgComp.onload = function () {
      let nbImg = Math.floor(classImgs.tailleImg.x / imgComp.width);
      for (let index = 0; index < nbImg; index++) {
        ctx.drawImage(
          imgComp,
          classImgs.pos.x + index * imgComp.width,
          classImgs.pos.y,
          imgComp.width,
          imgComp.height
        );
      }
      if (classImgs.background != undefined) {
        classImgs.background.afficherContenue();
      }
    };
  }
  imgGif(src) {}

  uneImage(img, ctx) {
    if (this.objet != undefined) {
      if (this.imgLeftVisible()) {
        let posLeft = this.getPosRight();
        ctx.drawImage(
          img,
          posLeft.x,
          posLeft.y,
          this.taille.x,
          this.taille.y
        );
      }
      if (this.imgRighttVisible) {
        let posLeft = this.getPosLeft();
        ctx.drawImage(
          img,
          posLeft.x,
          posLeft.y,
          this.taille.x,
          this.taille.y
        );
      }
    }
    return ctx.drawImage(
      img,
      this.pos.x,
      this.pos.y,
      this.taille.x,
      this.taille.y
    );
  }

  selectImag(width, height, img, ctx) {
    let imgPos = this.posSect(width, height);
    if (this.objet != undefined) {
      if (this.imgLeftVisible()) {
        let posLeft = this.getPosRight();
        ctx.drawImage(
          img,
          imgPos.x,
          imgPos.y,
          this.tailleImg.x,
          this.tailleImg.y,
          posLeft.x,
          posLeft.y,
          this.taille.x,
          this.taille.y
        );
      }
      if (this.imgRighttVisible()) {
        let posLeft = this.getPosLeft();
        ctx.drawImage(
          img,
          imgPos.x,
          imgPos.y,
          this.tailleImg.x,
          this.tailleImg.y,
          posLeft.x,
          posLeft.y,
          this.taille.x,
          this.taille.y
        );
      }
    }
    return ctx.drawImage(
      img,
      imgPos.x,
      imgPos.y,
      this.tailleImg.x,
      this.tailleImg.y,
      this.pos.x,
      this.pos.y,
      this.taille.x,
      this.taille.y
    );
  }

  posSect(width, height) {
    let nbX = width / this.tailleImg.x;
    let nbY = height / this.tailleImg.y;
    let compter = 0;
    for (let indexY = 0; indexY < nbY; indexY++) {
      for (let indexX = 0; indexX < nbX; indexX++) {
        if (compter == this.nbr) {
          return new Position(
            indexX * this.tailleImg.x,
            indexY * this.tailleImg.y
          );
        }
        compter++;
      }
    }
    return new Position(0, 0);
  }

  colorTransparance(color) {
    this.color = color;
  }

  compressImage(imgToCompress, resizingFactor) {
    // resizing the image
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    const originalWidth = imgToCompress.width;
    const originalHeight = imgToCompress.height;

    const canvasWidth = originalWidth * resizingFactor;
    const canvasHeight = originalHeight * resizingFactor;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    context.drawImage(
      imgToCompress,
      0,
      0,
      originalWidth * resizingFactor,
      originalHeight * resizingFactor
    );
    return canvas.toDataURL();
  }

  transpImg(ctx) {
    /*const imgData = ctx.getImageData(0,0,this.taille.x,this.taille.y);
        if(this.color != undefined) {
            let r = Number.parseInt(this.color.substring(1, 3), 16);
            let g = Number.parseInt(this.color.substring(3, 5), 16);
            let b = Number.parseInt(this.color.substring(5, 7), 16);
            for (let i = 0; i < imgData.data.length; i += 4) {
            if (
                imgData.data[i] == r &&
                imgData.data[i + 1] == g &&
                imgData.data[i + 2] == b
            ) {
                imgData.data[i + 3] = 0;
            }
            }
            return imgData;
        }*/
  }

  select(nbr) {
    this.isCut = true;
    this.nbr = nbr;
  }
}
