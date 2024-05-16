import { BlockRectange } from "./BlockRectange";
import { EnumCollision } from "./EnumCollision";
import { Plateforme } from "./Plateforme";
import { Collision } from "./Collision";
import { Taille } from "./Taille";
import { InterfaceGravite } from "./InterfaceGravite";

export class Personnage extends BlockRectange implements InterfaceGravite {

    private tabPlateforme:Plateforme[]|null;

    constructor(taille: Taille|null = null) {
        super(taille);
        console.log("Personnage");
    }

    public setTabPlateforme(plateformes:Plateforme[]|null):void {
        this.tabPlateforme = plateformes;
    }

    public setEnumCollision():EnumCollision {
        if(this.tabPlateforme == null) {
            return EnumCollision.NULL;
        }
        this.tabPlateforme.forEach(element => {
            let collision = new Collision(this);
            collision.setPlateforme(element);
            let enumCollision = collision.getEnumCollision();
            if(enumCollision != EnumCollision.NULL) {
                console.log(enumCollision);
                return enumCollision;
            }
        });
        return EnumCollision.NULL;
    }

    public mourir() {

    }

    public deplacer() {

    }

    public tirer() {

    }

    public setGravite(gravite) {

    }

    public getGravite() {

    }
}