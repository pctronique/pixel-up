class AllImage {
  constructor(game=undefined) {
    this.nb = 0;
    this.game = game;
    this.tabImg = [
        new OneImageGame("bkg_ciel_avions", "./img/background_CIEL_AVIONS.png"),
        new OneImageGame("bkg_ciel_nuages", "./img/background_CIEL_NUAGES.png"),
        new OneImageGame("bkg_asteroides", "./img/background_ASTEROIDES.png"),
        new OneImageGame("bkg_satellites", "./img/background_SATELLITES.png"),
        new OneImageGame("bkg_vaisseaux", "./img/background_VAISSEAUX.png"),
        new OneImageGame("bkg_sous_mer", "./img/background_SOUS_MER.png"),
        new OneImageGame("bkg_sous_terre", "./img/background_SOUS_TERRE.png"),
        new OneImageGame("bkg_ville", "./img/background_VILLE.png"),
        new OneImageGame("plft_avion", "./img/avion_pixel-remove1.png"),
        new OneImageGame("plft_flamme_1", "./img/flamme-1.png"),
        new OneImageGame("plft_flamme_2", "./img/flamme-2.png"),
        new OneImageGame("plft_helico_3", "./img/helico3.png", 60),
        new OneImageGame("plft_helico_6", "./img/helico6.png", 60),
        new OneImageGame("plft_lave", "./img/Lave.png"),
        new OneImageGame("plft_lave_1", "./img/Lave1.png"),
        new OneImageGame("plft_meduse_3", "./img/meduse3.png", 80),
        new OneImageGame("plft_meduse_6", "./img/meduse6.png", 80),
        new OneImageGame("plft_meteorite_4", "./img/meteorite4.png", 55),
        new OneImageGame("plft_meteorite_5", "./img/meteorite5.png", 55),
        new OneImageGame("plft_asteroide", "./img/asteroide.png"),
        new OneImageGame("plft_poisson", "./img/posson.png"),
        new OneImageGame("plft_requin_2", "./img/requin2.png"),
        new OneImageGame("plft_satellite", "./img/satellite.png"),
        new OneImageGame("plft_nacelle", "./img/nacelle.png"),
        new OneImageGame("plft_nuage_3", "./img/nuage3.png"),
        new OneImageGame("plft_oiseau_1", "./img/oiseau copy 01.png"),
        new OneImageGame("plft_oiseau_2", "./img/oiseau copy 02.png"),
        new OneImageGame("plft_nacelle_piege", "./img/nacelle_piege.png"),
        new OneImageGame("plft_nuage_gris", "./img/nuage_gris.png"),
        new OneImageGame("plft_radFish", "./img/RadFish.png"),
        new OneImageGame("plft_pierre", "./img/pierreBackground.png"),
        new OneImageGame("plft_nacelleTenue", "./img/nacelleTenue.png"),
        new OneImageGame("plft_arcEnCiel", "./img/arcenciel.png"),
        new OneImageGame("plft_pierreTenue_2", "./img/pierreTenue2.png"),
        new OneImageGame("plft_nenuphar_3", "./img/nenuphar3.png"),
        new OneImageGame("plft_vaisseau_2", "./img/vaisseau2.png"),
        new OneImageGame("plft_vaisseau_jaune", "./img/vaisseau_jaune.png"),
        new OneImageGame("boite_wing_suit", "./img/boiteWingsuit.png"),
        new OneImageGame("boite_cosmo_casque", "./img/boiteCosmoCasque.png"),
        new OneImageGame("boite_tuba", "./img/boiteTuba.png"),
        new OneImageGame("boite_casquette", "./img/boiteCasquette.png"),
        new OneImageGame("tenue_mineur", "./img/tenues_personnage/MINEUR (1).png"),
        new OneImageGame("tenue_plongeur", "./img/tenues_personnage/PLONGEUR (1).png"),
        new OneImageGame("tenue_normal", "./img/tenues_personnage/JOUEUR_NORMAL (1).png"),
        new OneImageGame("tenue_homme_volant", "./img/tenues_personnage/HOMME_VOLANT (1).png"),
        new OneImageGame("tenue_cosmonaute", "./img/tenues_personnage/COSMONAUTE (1).png"),
    ];
    this.loadImg(this.tabImg[0]);
  }

  recupImg(name) {
    for (let index = 0; index < this.tabImg.length; index++) {
      const element = this.tabImg[index];
      if(name == element.getName()) {
        return element.getImage();
      }
    }
    return undefined;
  }

  recupImgData(name) {
    for (let index = 0; index < this.tabImg.length; index++) {
      const element = this.tabImg[index];
      if(name == element.getName()) {
        return element.getDataSrc();
      }
    }
    return "";
  }

  loadImg(oneImageGame) {// private
    let img = new Image();
    img.src = oneImageGame.src;
    let classImgs = this;

    img.onload = function () {
      if(oneImageGame.maxHeight == -1) {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        context.drawImage(
            img,
            0,
            0,
            img.width,
            img.height
        );
        oneImageGame.setDataSrc(canvas.toDataURL());
        oneImageGame.setImage(img);
        classImgs.nb++;
        if(classImgs.nb < classImgs.tabImg.length) {
            classImgs.loadImg(classImgs.tabImg[classImgs.nb]);
        } else {
            classImgs.endLoadImg();
        }
      } else {
        classImgs.redimImg(oneImageGame, img);
      }
    }
  }

  redimImg(oneImageGame, imageObj) {
    let img = new Image();
    img.src = this.compressImage(
      imageObj,
      oneImageGame.maxHeight / imageObj.height
    );
    let classImgs = this;

    img.onload = function () {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      context.drawImage(
          img,
          0,
          0,
          img.width,
          img.height
      );
      oneImageGame.setDataSrc(canvas.toDataURL());
      oneImageGame.setImage(img);
      classImgs.nb++;
      if(classImgs.nb < classImgs.tabImg.length) {
          classImgs.loadImg(classImgs.tabImg[classImgs.nb]);
      } else {
          classImgs.endLoadImg();
      }
    };
  }

  endLoadImg() {
    if(this.game != undefined) {
        this.game.endLoadImg();
    }
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
}
//endLoadImg()