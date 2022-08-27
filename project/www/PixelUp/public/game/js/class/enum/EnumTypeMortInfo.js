class EnumTypeMortInfo {
    constructor(enumTypeMort, name, description) {
        this.enumTypeMort = enumTypeMort;
        this.name = name;
        this.description = description;
    }

    getEnumTypeMort() {
        return this.enumTypeMort;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    static typeMortInfo() {
        return [
            new EnumTypeMortInfo(EnumTypeMort.NULL, "NULL", "null"),
            new EnumTypeMortInfo(EnumTypeMort.TOMBER, "TOMBER", "Vous êtes tombé."),
            new EnumTypeMortInfo(EnumTypeMort.REQUIN, "REQUIN", "Vous avez été mangé par un requin."),
            new EnumTypeMortInfo(EnumTypeMort.AVION, "AVION", "Vous avez été percuté par un avion."),
            new EnumTypeMortInfo(EnumTypeMort.ASTEROIDE, "ASTEROIDE", "Vous avez été percuté par un astéroïde."),
            new EnumTypeMortInfo(EnumTypeMort.FEU, "FEU", "Vous avez été brûlé par le feu."),
            new EnumTypeMortInfo(EnumTypeMort.HELICOPTERE, "HELICOPTERE", "Vous avez été percuté par un hélicoptère."),
            new EnumTypeMortInfo(EnumTypeMort.LAVE, "LAVE", "Vous avez été brûlé par la lave."),
            new EnumTypeMortInfo(EnumTypeMort.MEDUSE, "MEDUSE", "Vous avez été piqué par une méduse."),
            new EnumTypeMortInfo(EnumTypeMort.METEORITEFEU, "METEORITEFEU", "Vous avez été brûlé par une météorite en feu."),
            new EnumTypeMortInfo(EnumTypeMort.POISSON, "POISSON", "Vous avez été percuté par un poisson."),
            new EnumTypeMortInfo(EnumTypeMort.SATELLITE, "SATELLITE", "Vous avez été percuté par un satellite."),
            new EnumTypeMortInfo(EnumTypeMort.NACELLE, "NACELLE", "Vous avez percuté une plateforme."),
            new EnumTypeMortInfo(EnumTypeMort.NUAGE, "NUAGE", "Vous avez été percuté par un nuage."),
            new EnumTypeMortInfo(EnumTypeMort.OISEAU, "OISEAU", "Vous avez été percuté par un oiseau."),
            new EnumTypeMortInfo(EnumTypeMort.PIERRE, "PIERRE", "Vous avez percuté une pierre."),
            new EnumTypeMortInfo(EnumTypeMort.VAISSEAU, "VAISSEAU", "Vous avez été percuté par un vaisseau."),
            new EnumTypeMortInfo(EnumTypeMort.VAISSEAUJAUNE, "VAISSEAUJAUNE", "Vous avez été percuté par un vaisseau."),
            new EnumTypeMortInfo(EnumTypeMort.RADFISH, "RADFISH", "Vous avez été tué par un poisson radioactif."),
            new EnumTypeMortInfo(EnumTypeMort.NUAGEGRIS, "NUAGEGRIS", "Vous avez été tué par un nuage orageux."),
            new EnumTypeMortInfo(EnumTypeMort.NACELLECASSEE, "NACELLECASSEE", "Vous êtes tombé dans le vide."),
        ];
    }

    static typeMortInfoEnum(enumTypeMort) {
        console.log(EnumTypeMortInfo.typeMortInfo());
        let TabEnum = EnumTypeMortInfo.typeMortInfo();
        for (let index = 0; index < TabEnum.length; index++) {
            const element = TabEnum[index];
            if(element.getEnumTypeMort() == enumTypeMort) {
                return element;
            }
        }
    }
   
}