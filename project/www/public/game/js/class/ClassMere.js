class ClassMere {
    constructor(name) {
        this.name = name;
        this.description = "tintin et milou";
    }

    bonjour() {
        console.log("bonjour "+this.name);
        console.log(this.description);
    }
}

let classMere = new ClassMere("ludovic");
classMere.bonjour();