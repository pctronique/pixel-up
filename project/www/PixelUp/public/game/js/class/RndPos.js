class RndPos {
    
    constructor() {
        
        
        this.x = Math.round(Math.random());
        this.y = Math.round(Math.random());
    }
    minMaxX(min, max) {
        this.x = Math.round(Math.random()*(max - min) + min);         
    }

    minMaxY(min, max) {
        this.y = Math.round(Math.random()*(max - min) + min);        
    }
    
   getX() {
    return this.x;
    }

    getY()
    {
    return this.y;
    }
}
