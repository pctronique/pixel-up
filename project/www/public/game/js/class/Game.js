class Game {

    constructor(pause = false) {
        this.classPause = undefined;
        if(pause) {
            this.classPause = new Pause();
        }
        let joueur = new Joueur();

    }
}