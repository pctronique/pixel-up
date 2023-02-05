class CollisionPlateforme {
    
    constructor(id, haut, bas, gauche, droite) {
      this.id = id;
      this.haut = haut;
      this.bas = bas;
      this.gauche = gauche;
      this.droite = droite;
    }
  
    getId() {
      return this.id;
    }
  
    getHaut() {
      return this.haut;
    }
  
    getBas() {
      return this.bas;
    }
  
    getGauche() {
      return this.gauche;
    }
  
    getDroite() {
      return this.droite;
    }
  
}