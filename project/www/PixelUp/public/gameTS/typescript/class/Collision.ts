import { Personnage } from "./Personnage";
import { Plateforme } from "./Plateforme";
import { EnumCollision } from "./EnumCollision";

export class Collision {


    private personnage: Personnage|null;
    private plateforme: Plateforme|null;

    constructor(personnage: Personnage|null) {
        this.personnage = personnage;
    }

    public setPlateforme(plateforme:Plateforme|null):void {
        this.plateforme = plateforme;
    }

    public getEnumCollision(): EnumCollision {
        if(this.personnage == null) {
            return EnumCollision.NULL;
        }
        if(this.plateforme == null) {
            return EnumCollision.NULL;
        }
        let persoAreteRectangle = this.personnage.setAreteRectangle();
        let ptfAreteRectangle = this.plateforme.setAreteRectangle();

        if(persoAreteRectangle == null) {
            return EnumCollision.NULL;
        }
        if(ptfAreteRectangle == null) {
            return EnumCollision.NULL;
        }
        if(persoAreteRectangle.bas().pos == ptfAreteRectangle.haut().pos || persoAreteRectangle.haut().pos == ptfAreteRectangle.bas().pos) {
            if(persoAreteRectangle.bas().debut >= persoAreteRectangle.bas().debut && persoAreteRectangle.bas().debut < persoAreteRectangle.bas().fin || 
            persoAreteRectangle.bas().fin >= persoAreteRectangle.bas().fin && persoAreteRectangle.bas().fin > persoAreteRectangle.bas().debut) {
                if(persoAreteRectangle.bas().pos == ptfAreteRectangle.haut().pos) {
                    return EnumCollision.HAUT;
                }
                return EnumCollision.BAS;
            }
        } else if(persoAreteRectangle.gauche().pos == ptfAreteRectangle.droite().pos || persoAreteRectangle.droite().pos == ptfAreteRectangle.gauche().pos) {
            if(persoAreteRectangle.gauche().debut >= persoAreteRectangle.gauche().debut && persoAreteRectangle.gauche().debut < persoAreteRectangle.gauche().fin || 
            persoAreteRectangle.gauche().fin >= persoAreteRectangle.gauche().fin && persoAreteRectangle.gauche().fin > persoAreteRectangle.gauche().debut) {
                if(persoAreteRectangle.gauche().pos == ptfAreteRectangle.gauche().pos) {
                    return EnumCollision.GAUCHE;
                }
                return EnumCollision.DROITE;
            }
        }
        return EnumCollision.NULL;
    }
}