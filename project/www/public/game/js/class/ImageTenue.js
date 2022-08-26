class ImageTenue {

    constructor() {


        this.tabTenue = [];
        this.tabImage = [];
        this.tabTenue.push(EnumTenues.NULL);
        this.tabImage.push('');
        this.tabTenue.push(EnumTenues.NORMAL);
        this.tabImage.push('MINEUR.png');
        this.tabTenue.push(EnumTenues.MER);
        this.tabImage.push('PLONGEUR.png');
        this.tabTenue.push(EnumTenues.TERRE);
        this.tabImage.push('JOUEUR_NORMAL.png');
        this.tabTenue.push(EnumTenues.CIEL);
        this.tabImage.push('HOMME_VOLANT.png');
        this.tabTenue.push(EnumTenues.ESPACE);
        this.tabImage.push('COSMONAUTE.png');

    }

    recupTenue(enumTenue) {
        for (let i = 0; i < this.tabTenue.length; i += 4) {
            if (this.tabTenue[i] == enumTenue) {
                return this.tabImage[i];
            }
        }
    }
}


