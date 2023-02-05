class ImageTenue {

    constructor(enumTenues, src, pos) {
        this.enumTenues = enumTenues;
        this.src = src;
        this.pos = pos;
    }

    static tabImage(allImage) {
        return [
            new ImageTenue(EnumTenues.NULL, undefined, new Position(0, 0)),
            new ImageTenue(EnumTenues.NORMAL, allImage.recupImg("tenue_mineur"), new Position(-43, -20)),
            new ImageTenue(EnumTenues.MER, allImage.recupImg("tenue_plongeur"), new Position(-40, -28)),
            new ImageTenue(EnumTenues.TERRE, allImage.recupImg("tenue_normal"), new Position(-40, -19)),
            new ImageTenue(EnumTenues.CIEL, allImage.recupImg("tenue_homme_volant"), new Position(-40, -19)),
            new ImageTenue(EnumTenues.ESPACE, allImage.recupImg("tenue_cosmonaute"), new Position(-40, -20)),
        ];
    }

    static recupTenue(allImage, enumTenue) {
        let tabEnum = ImageTenue.tabImage(allImage);
        for (let i = 0; i < tabEnum.length; i ++) {
            if (tabEnum[i].enumTenues == enumTenue) {
                return tabEnum[i].src;
            }
        }
        return this.allImage.recupImgData("tenue_mineur");
    }

    static recupPos(allImage, enumTenue) {
        let tabEnum = ImageTenue.tabImage(allImage);
        for (let i = 0; i < tabEnum.length; i ++) {
            if (tabEnum[i].enumTenues == enumTenue) {
                return tabEnum[i].pos;
            }
        }
        return new Position(0, 0);
    }
}


