class ImageTenue {

    constructor(enumTenues, src, pos) {
        this.enumTenues = enumTenues;
        this.src = src;
        this.pos = pos;
    }

    static tabImage() {
        return [
            new ImageTenue(EnumTenues.NULL, "", new Position(0, 0)),
            new ImageTenue(EnumTenues.NORMAL, "MINEUR (1).png", new Position(-43, -20)),
            new ImageTenue(EnumTenues.MER, "PLONGEUR (1).png", new Position(-40, -28)),
            new ImageTenue(EnumTenues.TERRE, "JOUEUR_NORMAL (1).png", new Position(-40, -19)),
            new ImageTenue(EnumTenues.CIEL, "HOMME_VOLANT (1).png", new Position(-40, -19)),
            new ImageTenue(EnumTenues.ESPACE, "COSMONAUTE (1).png", new Position(-40, -20)),
        ];
    }

    static recupTenue(enumTenue) {
        let tabEnum = ImageTenue.tabImage();
        for (let i = 0; i < tabEnum.length; i ++) {
            if (tabEnum[i].enumTenues == enumTenue) {
                return tabEnum[i].src;
            }
        }
        return "MINEUR.png";
    }

    static recupPos(enumTenue) {
        let tabEnum = ImageTenue.tabImage();
        for (let i = 0; i < tabEnum.length; i ++) {
            if (tabEnum[i].enumTenues == enumTenue) {
                return tabEnum[i].pos;
            }
        }
        return new Position(0, 0);
    }
}


