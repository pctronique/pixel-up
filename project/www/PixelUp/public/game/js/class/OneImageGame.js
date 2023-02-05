class OneImageGame {
    constructor(name, src, maxHeight = -1, 
        image = undefined, dataScr = undefined) {
        this.name = name;
        this.src = src;
        this.maxHeight = maxHeight;
        this.image = image;
        this.data = dataScr;
    }

    setImage(image) {
        this.image = image;
    }

    setDataSrc(dataScr) {
        this.data = dataScr;
    }

    getName() {
        return this.name;
    }

    getSrc() {
        return this.src;
    }

    getMaxHeight() {
        return this.maxHeight;
    }

    getImage() {
        return this.image;
    }

    getDataSrc() {
        return this.data;
    }
}