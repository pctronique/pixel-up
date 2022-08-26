class Score extends Pause {
    constructor(idScore, milliseconde = 500) {
        super();
        this.idScore = idScore;
        this.milliseconde = milliseconde;
        this.isStop = false;
        this.workerScore = undefined;
    }

    eventScore() {
        let score = this;
        this.workerJoueurTomber.onmessage = function (e) {
            if(!score.isStop) {
                document.getElementById(score.idScore).innerText = e.data;
                document.getElementById(score.idScore).dispatchEvent(new Event("change"));
            }
        }
    }

    start() {
        let folderWorker0 = folderWorker;
        if(folderWorker0 == undefined) {
            folderWorker0 = "./js/worker/";
        }
        this.isStop = false;
        this.workerJoueurTomber = new Worker(folderWorker0+"workerScore.js");
        this.eventScore();
        this.workerJoueurTomber.postMessage(this.milliseconde);
    }

    stop() {
        this.isStop = true;
        if(this.workerScore != undefined) {
            this.workerScore.terminate();
        }
    }
    
    getScore() {

    }
}