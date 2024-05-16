import { Taille } from "./Taille";
import { Images } from "./Images";

export class Background {

    private taille: Taille|null;
    private imgBack: Images|null;
    private imgBas: Images|null;

    constructor(taille: Taille|null = null, imgBack:Images|null = null, imgBas: Images|null = null){
        this.taille = taille;
        this.imgBack = imgBack;
        this.imgBas = imgBas;
    }

    public deplacement(){

    }

    public screenBottom(){

    }

    public addPlateforme(plateforme) {

    }
}