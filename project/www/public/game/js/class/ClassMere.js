class ClassMere {
    constructor(name) {
        this.name = name; // pour créer la variable de la classe
        this.description = "tintin et milou";
    }
   bonjour() {
       console.log("bonjour" + this.name);
       console.log(this.description);
    }
}
let classMere = new ClassMere("frederic");
classMere.bonjour()
