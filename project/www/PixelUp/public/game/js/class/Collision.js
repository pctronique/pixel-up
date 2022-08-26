class Collision {
    constructor(personnage) {
        this.personnage = personnage;
        this.plateforme = undefined;
    }

    setPlateforme(plateforme) {
        this.plateforme = plateforme;
    }

    getEnumCollision() {
        if(this.personnage == undefined) {
            return EnumCollision.NULL;
        }
        if(this.plateforme == undefined) {
            return EnumCollision.NULL;
        }
        let persoAreteRectangle = this.personnage.getAreteRectangle();
        let ptfAreteRectangle = this.plateforme.getAreteRectangle();
        if(persoAreteRectangle.gauche().pos == ptfAreteRectangle.droite().pos || persoAreteRectangle.droite().pos == ptfAreteRectangle.gauche().pos) {
            if(
                persoAreteRectangle.gauche().debut >= ptfAreteRectangle.gauche().debut && 
                persoAreteRectangle.gauche().debut < ptfAreteRectangle.gauche().fin || 
                persoAreteRectangle.gauche().fin >= ptfAreteRectangle.gauche().fin && 
                persoAreteRectangle.gauche().debut < ptfAreteRectangle.gauche().debut || 
                ptfAreteRectangle.gauche().fin >= persoAreteRectangle.gauche().fin && 
                ptfAreteRectangle.gauche().debut < persoAreteRectangle.gauche().fin) {
                    if(persoAreteRectangle.droite().pos == ptfAreteRectangle.gauche().pos) {
                        return EnumCollision.GAUCHE;
                    }
                    return EnumCollision.DROITE;
            }
        }
        if(persoAreteRectangle.bas().pos == ptfAreteRectangle.haut().pos || persoAreteRectangle.haut().pos == ptfAreteRectangle.bas().pos) {
            if(
                persoAreteRectangle.bas().debut >= ptfAreteRectangle.bas().debut && 
                persoAreteRectangle.bas().debut < ptfAreteRectangle.bas().fin || 
                persoAreteRectangle.bas().fin >= ptfAreteRectangle.bas().fin && 
                persoAreteRectangle.bas().debut < ptfAreteRectangle.bas().debut || 
                ptfAreteRectangle.bas().fin >= persoAreteRectangle.bas().fin && 
                ptfAreteRectangle.bas().debut < persoAreteRectangle.bas().fin) {
                    if(persoAreteRectangle.bas().pos == ptfAreteRectangle.haut().pos) {
                        return EnumCollision.HAUT;
                    }
                    return EnumCollision.BAS;
            }
        }
        return EnumCollision.NULL;
    }
}