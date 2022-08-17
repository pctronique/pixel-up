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
        let persoAreteRectangle = this.personnage.setAreteRectangle();
        let ptfAreteRectangle = this.plateforme.setAreteRectangle();
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