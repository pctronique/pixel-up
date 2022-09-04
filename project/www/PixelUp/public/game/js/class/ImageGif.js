class ImageGif extends Images {
    constructor(images, pos, taille, tailleImg = undefined, milliseconde = 500) {
        super(images, pos, taille, tailleImg);
        this.images = images;
        this.image = images[0];
        this.milliseconde = milliseconde;
        this.workerGif = undefined;
    }
    setTaille(taille) {
        this.taille = taille;
        this.tailleImg = taille;
    }
    start() {
        let folderWorker0 = folderWorker;
        if(folderWorker0 == undefined) {
            folderWorker0 = "./js/worker/";
        }
        this.workerGif = new Worker(folderWorker0+"workerGif.js");
        let classGif = this;
        this.workerGif.onmessage = function (e) {
            classGif.image = classGif.images[e.data];
        }
        this.workerGif.postMessage([this.milliseconde, this.images.length, true]);
    }
    stop() {
        if(this.workerGif != undefined) {
            this.workerGif.postMessage([0, 0, false]);
            this.workerGif.terminate();
            this.workerGif = undefined;
        }
    }

}