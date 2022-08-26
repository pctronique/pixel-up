class ImageGif extends Images {
    constructor(srcs, pos, taille, milliseconde = 500) {
        super(srcs, pos, taille);
        this.srcs = srcs;
        this.src = srcs[0];
        this.milliseconde = milliseconde;
        this.workerGif = undefined;
    }
    start() {
        let folderWorker0 = folderWorker;
        if(folderWorker0 == undefined) {
            folderWorker0 = "./js/worker/";
        }
        this.workerGif = new Worker(folderWorker0+"workerGif.js");
        let classGif = this;
        this.workerGif.onmessage = function (e) {
            classGif.src = classGif.srcs[e.data];
        }
        this.workerGif.postMessage([this.milliseconde, this.srcs.length, true]);
    }
    stop() {
        if(this.workerGif != undefined) {
            this.workerGif.postMessage([0, 0, false]);
            this.workerGif.terminate();
            this.workerGif = undefined;
        }
    }

}