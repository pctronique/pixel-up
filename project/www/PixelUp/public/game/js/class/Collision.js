class Collision {
    constructor(personnage) {
        this.personnage = personnage;
        this.plateforme = undefined;
    }

    setPlateforme(plateforme) {
        this.plateforme = plateforme;
    }

    testCollision(persoAreteRectangle, ptfAreteRectangle, test = false) {//private
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

    getEnumCollision() {
        if(this.personnage == undefined) {
            return EnumCollision.NULL;
        }
        if(this.plateforme == undefined) {
            return EnumCollision.NULL;
        }
        let testCollision = this.testCollision(this.personnage.getAreteRectangle(), this.plateforme.getAreteRectangle(), this.plateforme.test());
        if(testCollision == EnumCollision.NULL) {
            testCollision = this.testCollision(this.personnage.getAreteRectangle(), this.plateforme.getAreteRectangleLeft());
        }
        if(testCollision == EnumCollision.NULL) {
            testCollision = this.testCollision(this.personnage.getAreteRectangle(), this.plateforme.getAreteRectangleRight());
        }
        if(testCollision == EnumCollision.NULL) {
            testCollision = this.testCollision(this.personnage.getAreteRectangleLeft(), this.plateforme.getAreteRectangle());
        }
        if(testCollision == EnumCollision.NULL) {
            testCollision = this.testCollision(this.personnage.getAreteRectangleLeft(), this.plateforme.getAreteRectangleLeft());
        }
        if(testCollision == EnumCollision.NULL) {
            testCollision = this.testCollision(this.personnage.getAreteRectangleLeft(), this.plateforme.getAreteRectangleRight());
        }
        if(testCollision == EnumCollision.NULL) {
            testCollision = this.testCollision(this.personnage.getAreteRectangleRight(), this.plateforme.getAreteRectangle());
        }
        if(testCollision == EnumCollision.NULL) {
            testCollision = this.testCollision(this.personnage.getAreteRectangleRight(), this.plateforme.getAreteRectangleLeft());
        }
        if(testCollision == EnumCollision.NULL) {
            testCollision = this.testCollision(this.personnage.getAreteRectangleRight(), this.plateforme.getAreteRectangleRight());
        }
        return testCollision;
    }
}