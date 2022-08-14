class EnumTypeMortCreate {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

class EnumTypeMort {
    constructor() {
        this.enum = [];
        this.enum["TOMBER"] = new EnumTypeDeathCreate(0, "tomber", "Vous êtes tombé.");
        this.enum["REQUIN"] = new EnumTypeDeathCreate(1, "requin", "Vous avez été mangé par un requin.");
        this.enum["AVION"] = new EnumTypeDeathCreate(2, "avion", "Vous avez été percuté par un avion.");
        this.enum["ASTEROIDE"] = new EnumTypeDeathCreate(3, "astéroïde", "Vous avez été percuté par un astéroïde.");
    }

    findEnumId(id) {
        for (const [key, value] of Object.entries(this.enum)) {
            if(value.id == id) {
                return value;
            }
        }
    }

    findEnumKey(keyEnum) {
        for (const [key, value] of Object.entries(this.enum)) {
            if(key == keyEnum) {
                return value;
            }
        }
    }

    findEnumName(name) {
        for (const [key, value] of Object.entries(this.enum)) {
            if(value.name == name) {
                return value;
            }
        }
    }
}
