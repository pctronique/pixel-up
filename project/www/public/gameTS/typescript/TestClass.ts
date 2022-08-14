export class ClassMere{

    private name:string|null;
    private description:string|null;

    constructor(name:string|null){
        this.name=name;
        this.description = "tintin et milou";
    } 
    bonjour(){    
        console.log('bonjour '+this.name);
        console.log(this.description);
    }   /*function*/
}