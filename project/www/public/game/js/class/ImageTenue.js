class ImageTenue {

    constructor() {


        this.tabTenue = [];
        this.tabImage = [];
        this.tabTenue.push(EnumTenues.NULL);
        this.tabImage.push('black');
        this.tabTenue.push(EnumTenues.NORMAL);
        this.tabImage.push('yellow');
        this.tabTenue.push(EnumTenues.MER);
        this.tabImage.push('green');
        this.tabTenue.push(EnumTenues.TERRE);
        this.tabImage.push('blue');
        this.tabTenue.push(EnumTenues.CIEL);
        this.tabImage.push('red');
        this.tabTenue.push(EnumTenues.ESPACE);
        this.tabImage.push('pink');

    }

    recupTenue(enumTenue) {
        for (let i = 0; i < this.tabTenue.length; i += 4) {
            if (this.tabTenue[i] == enumTenue) {
                return this.tabImage[i];
            }
        }
    }
}


