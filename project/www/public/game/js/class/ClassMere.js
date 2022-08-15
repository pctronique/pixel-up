class ClassMere{     /*nom fichier*/
    constructor(name){/*name=variable*/
        this.name=name;   /* déclare la variable de la class*/
        this.description = "tintin et milou";
    } 
    bonjour(){    
        console.log('bonjour '+this.name);
        console.log(this.description);
    }   /*function*/
}

let classMere = new ClassMere('vanessa');  /*classMere = variable / pour objet de la class + recupère les valeurs des paramètres*/
classMere.bonjour(); /*appelle la fonction*/
