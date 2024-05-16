import { Pause } from "./Pause";
import { Position } from "./Position";
import { Images } from "./Images";
import { Taille } from "./Taille";
import { AreteRectangle } from "./AreteRectangle";
import { Background } from "./Background";

export class BlockRectange extends Pause {

    protected taille: Taille|null;
    protected img: Images|null;
    protected pos: Position|null;
    protected areteRectangle: AreteRectangle|null;
    protected background: Background | null;
    /**
    * 
    * @param {*} taille sa taille
    */
   constructor(taille: Taille|null = new Taille()) {
        super();
       this.taille = taille;
       this.img = null;
       this.pos = null;
       this.background = null;
       if(this.taille === null) {
           this.taille = new Taille();
       }
       if(this.pos === null) {
           this.pos = new Position();
       }
       this.areteRectangle = new AreteRectangle(this.pos, this.taille);
   }

   public setBackground(background: Background | null) {
        this.background = background;
   }

   public setPosition(pos:Position):void {
       this.pos = pos;
       if(this.pos === undefined) {
           this.pos = new Position();
       }
       this.areteRectangle = new AreteRectangle(this.pos, this.taille);
   }

   public setAreteRectangle():AreteRectangle|null {
       return this.areteRectangle;
   }

   public getPosition(): Position|null {
       return this.pos;
   }

   public getTaille(): Taille|null {
       return this.taille;
   }

   public setImage(img: Images|null):void {
        this.img = img;
   }

   public afficher() {

   }
}