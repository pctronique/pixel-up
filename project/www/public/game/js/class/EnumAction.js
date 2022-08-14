class EnumCollisionCreate {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

class EnumCollision{
    constructor() {
        this.enum = [];
        this.enum["NULL"] = new EnumCollisionCreate(-1, "null", "");
        this.enum["HAUT"] = new EnumCollisionCreate(0, "haut", "Collision en haut");
        this.enum["BAS"] = new EnumCollisionCreate(1, "bas", "Collision en bas.");
        this.enum["GAUCHE"] = new EnumCollisionCreate(2, "gauche", "Collision à gauche.");
        this.enum["DROITE"] = new EnumCollisionCreate(3, "droite", "Collision à droite");
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
