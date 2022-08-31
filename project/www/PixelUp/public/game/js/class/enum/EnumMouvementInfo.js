class EnumMouvementInfo {
    constructor(enumMouvement, name, description) {
        this.enumMouvement = enumMouvement;
        this.name = name;
        this.description = description;
    }

    getEnumMouvement() {
        return this.enumMouvement;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    static mouvementInfo() {
        return [
            new EnumMouvementInfo(EnumMouvement.NULL, "NULL", "NULL"),
            new EnumMouvementInfo(EnumMouvement.HAUT, "HAUT", "HAUT"),
            new EnumMouvementInfo(EnumMouvement.BAS, "BAS", "BAS"),
            new EnumMouvementInfo(EnumMouvement.GAUCHE, "GAUCHE", "GAUCHE"),
            new EnumMouvementInfo(EnumMouvement.DROITE, "DROITE", "DROITE"),
            new EnumMouvementInfo(EnumMouvement.SAUTER, "SAUTER", "SAUTER"),
            new EnumMouvementInfo(EnumMouvement.COUCOU, "COUCOU", "COUCOU"),
        ];
    }

    static mouvementInfoEnum(enumMouvement) {
        let TabEnum = EnumMouvementInfo.mouvementInfo();
        for (let index = 0; index < TabEnum.length; index++) {
            const element = TabEnum[index];
            if(element.getEnumMouvement() == enumMouvement) {
                return element;
            }
        }
    }
   
}