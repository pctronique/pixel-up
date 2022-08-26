class Audio {
    constructor(source,volume=0.5,loop=false)
    { 
    
        this.audio=document.createElement("audio");

        let son=audio.createElement("source");
            son.src=source;
            this.count = 1;
            audio.loop = loop;
            audio.volume = volume;
       
    }
    start()
    {
        this.audio.play();
       /* if(count == 0){
            count = 1;
            audio.play();
        }else{
            count = 0;
            audio.pause();
        }*/
    }
    stop()
    {
       /* playPause()
        audio.pause();
        audio.currentTime = 0;*/
    }
    
}