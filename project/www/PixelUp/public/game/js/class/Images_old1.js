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
    //let ctx = canvas.getContext("2d");
    /* nouvelle image */
    let img = new Image();
    /* définition de la source */
    img.src = this.src;
    /* tracé uniquement quand l'image sera chargée
        (quand l'événement onLoad sera déclenché, exécuter ctx.drawImage() */
    let classImgs = this;

    img.onload = function () {
      /*if (classImgs.isRepeat) {
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
      }*/
      classImgs.drawImage(img, canvas, 0, 0, 0, 0);
    };
    
  }

  getPosLeft() {
    return new Position(this.pos.x - this.background.taille.x, this.pos.y);
  }

  imgLeftVisible() {
    if (this.background != undefined) {
      return false;
    }
    return (
      (this.pos.x > 0 &&
        this.pos.x < this.background.taille.x &&
        this.pos.x + this.tailleImg.x > this.background.taille.x) ||
      (!this.imgVisible() && this.pos.x > 0)
    );
  }

  getPosRight() {
    return new Position(this.pos.x + this.background.taille.x, this.pos.y);
  }

  imgRighttVisible() {
    if (this.background != undefined) {
      return false;
    }
    return (
      (this.pos.x < 0 &&
        this.pos.x + this.tailleImg.x > 0 &&
        this.pos.x + this.tailleImg.x < this.background.taille.x) ||
      (!this.imgVisible() && this.pos.x < 0)
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
      //if (this.imgLeftVisible()) {
      let posLeft = this.getPosLeft();
      ctx.drawImage(
        img,
        posLeft.x,
        posLeft.y,
        this.tailleImg.x,
        this.tailleImg.y
      );
      //} else if (this.imgRighttVisible) {
      let posRight = this.getPosRight();
      ctx.drawImage(
        img,
        posRight.x,
        posRight.y,
        this.tailleImg.x,
        this.tailleImg.y
      );
      //}
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
      //if (this.imgLeftVisible()) {
      let posRight = this.getPosRight();
      ctx.drawImage(
        img,
        imgPos.x,
        imgPos.y,
        this.tailleImg.x,
        this.tailleImg.y,
        posRight.x,
        posRight.y,
        this.taille.x,
        this.taille.y
      );
      //}
      //if (this.imgRighttVisible()) {
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
      //}
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

  // Unlike images, textures do not have a width and height associated
  // with them so we'll pass in the width and height of the texture
  drawImage(image, canvas, tex, dstX, dstY, texWidth, texHeight) {
    const BASE_VERTEX_SHADER = `
  attribute vec2 position;
  varying vec2 texCoords;

  void main() {
    texCoords = (position + 1.0) / 2.0;
    
    ///////////////////////////////////////////////
    // UNCOMMENT THE FOLLOWING TO FLIP THE IMAGE //
    ///////////////////////////////////////////////
    // texCoords.y = 1.0 - texCoords.y;
    
    gl_Position = vec4(position, 0, 1.0);
  }
`;

const BASE_FRAGMENT_SHADER = `
  precision highp float;
  
  varying vec2 texCoords;
  uniform sampler2D textureSampler;

  void main() {
    vec4 color = texture2D(textureSampler, texCoords);
    gl_FragColor = color;
  }
`;

    // Get our canvas
    const gl = canvas.getContext("webgl");
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

    // Create our vertex shader
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, BASE_VERTEX_SHADER);
    gl.compileShader(vertexShader);

    // Create our fragment shader
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, BASE_FRAGMENT_SHADER);
    gl.compileShader(fragmentShader);

    // Create our program
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    // Enable the program
    gl.useProgram(program);

    // Bind VERTICES as the active array buffer.
    const VERTICES = new Float32Array([
      -1,
      -1,
      -1,
      1,
      1,
      1,
      -1,
      -1,
      1,
      1,
      1,
      -1,
    ]);

    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, VERTICES, gl.STATIC_DRAW);

    // Set and enable our array buffer as the program's "position" variable
    const positionLocation = gl.getAttribLocation(program, "position");
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionLocation);

    // Create a texture
    const texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    // Draw our 6 VERTICES as 2 triangles
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }
}
