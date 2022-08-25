class Personnage extends BlockRectange // implements InterfaceGravite
{
    constructor(taille=undefined) {
        super(taille);
        this.tabPlateforme = [];
        this.tabAutrePlateforme = [];
    }

    setTabPlateforme(plateformes) {
        this.tabPlateforme = plateformes;
    }

    setAutrePlateforme(plateformes) {
        this.tabAutrePlateforme = plateformes;
    }

    getEnumCollision() {
        for (let index = 0; index < this.tabAutrePlateforme.length; index++) {
            const element = this.tabAutrePlateforme[index];
            let collision = new Collision(this);
            collision.setPlateforme(element);
            let enumCollision = collision.getEnumCollision();
            if(enumCollision != EnumCollision.NULL && element.action(enumCollision) != EnumAction.TENUE) {
                return [enumCollision, index];
            }
        };
        for (let index = 0; index < this.tabPlateforme.length; index++) {
            const element = this.tabPlateforme[index];
            let collision = new Collision(this);
            collision.setPlateforme(element);
            let enumCollision = collision.getEnumCollision();
            //console.log(enumCollision);
            if(enumCollision != EnumCollision.NULL) {
                let enumAction = collision.plateforme.action(enumCollision);
                if (enumAction == EnumAction.STOP || enumAction == EnumAction.MORT) {
                    return {enumCollision:enumCollision, enumAction:enumAction, index:index};
                }
                /*let enumAction = enumCollision[1].action(enumCollision[0]);
                    if (enumAction == EnumAction.STOP || enumAction == EnumAction.MORT) {
                      return [enumAction, enumCollision[1]];
                    }
                  }
                  return [EnumAction.NULL, undefined];*/
            }
        };
        return {enumCollision:EnumCollision.NULL, enumAction:EnumAction.NULL, index:-1};
    }

    posBackground() {
        /*if(this.background != undefined) {
            this.background.posPersonnage(this.pos, this.taille);
        }*/
    }

    mourir(enumAction) {

    }

    deplacer() {

    }

    tirer() {

    }
}