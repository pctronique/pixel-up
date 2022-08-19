class RndPos {
    
    constructor(x = 0, y = 0) {
        
        this.defX = x;
        this.defY = y;
        this.x = Math.round(Math.random())+this.defX;
        this.y = Math.round(Math.random())+this.defY;
    }
    minMax(min, max) {
        this.x = Math.round(Math.random()*(max - min) + min);
        this.y = Math.round(Math.random()*(max - min) + min);
        console.log("this.x = " + this.x);
        console.log("this.y = " + this.y);
        this.x += this.defX;
        this.y += this.defY;
        console.log("this.x2 = " + this.x);
        console.log("this.y2 = " + this.y);
        
    }
   getX() {
    return this.x;
    }
    getY()
    {
    return this.y;
    }
}
