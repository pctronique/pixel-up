let folderWorker = "./../js/worker/";
if (window.Worker) {
    //déclaration des variables que l'on a besoin
    let screenGame = document.getElementById("screenGame_0");
    let ajouter = document.getElementById("ajouter");
    let nombre = 0;
    let game = new Game("screenGame_0");
    let backgroundTaille = new Taille(1000, 5000);
    game.scoreId("score");
    game.setIdTypeMort("game_typeMort");
    game.addBackground(backgroundTaille.x, backgroundTaille.y, 100, 100);
    game.addBackground(backgroundTaille.x, backgroundTaille.y, 100, 100);
    game.setPosInitJoueur(backgroundTaille.x / 2, backgroundTaille.y - 101);
    //game.getJoueur().addListenerPos("joueur-pos-x", "joueur-pos-y");
    game.afficher();

    
    screenGame.scrollTop = screenGame.scrollHeight;

    // game.start();

    // fonction mathématique écoute évènement au scroll par rapport à la taille de screenGame 
    screenGame.addEventListener("scroll", function () {
        let calcul0 = ((screenGame.scrollHeight - screenGame.scrollWidth) + (screenGame.scrollWidth - screenGame.offsetHeight) - screenGame.scrollTop);
        let calcul4 = (screenGame.scrollHeight / 2) / backgroundTaille.y;
        let st = -1 * (game.backgrounds[0].scrollMove.placeBas() / game.backgrounds[0].scrollMove.taillePixel());
        console.log(calcul4);
        game.screenBottom(st);
        //game.afficher();
        let scrollHaut = game.backgrounds[0].scrollMove.changeBackground();
        if (screenGame.scrollTop < scrollHaut) {
            game.addBackground(backgroundTaille.x, backgroundTaille.y);
        }
    }, false);

    // getRandom();
    // screenGame.scrollTop = screenGame.scrollHeight;

     function startGame(e) {
        /************************************************************************************** */
            let musique=new Musique("son/man-is-he-mega-glbml-22045.mp3",100,true);
            musique.start();
            //musique.stop();
            //musique.start();
            //musique.init(100,false);
            //musique.remove();
            game.start();
            //game.startDev();
          }
        } else {
        console.log("Your browser doesn't support web workers.");
        }


        /*function stopGame(e) {
        game.stop();
        }*/
        document.getElementById("start").addEventListener("click", startGame);

        /***************************************************************************************************** */
        // var fileUrl = './son/man-is-he-mega-glbml-22045.mp3';

        // window.AudioContext = window.AudioContext || window.webkitAudioContext;
        // var audioContext = null;
        // var audioSource = null;

        // var loopTime = 31;

        // function play() {
  
        //     //Create Audio context
        //     if (!audioContext) {
        //         audioContext = new AudioContext();
        //     }
  
  
        //     //Create Buffer source and connect it to "standard" audio destination ("speaker")
        //     audioSource = audioContext.createBufferSource();
        //     audioSource.connect(audioContext.destination);
  

        //     //Load file
        //     var request = new XMLHttpRequest();
        //     request.open('GET', fileUrl, true);
        //     request.responseType = 'arraybuffer';
        //     request.onload = function () {
        //         //Decode arrayBuffer as AudioData
        //         audioContext.decodeAudioData(request.response, function (audioData) {
        //             audioSource.buffer = audioData;
        //             audioSource.loop = true;
        //             audioSource.loopEnd = loopTime;
        //             //Play "file"
        //             audioSource.start(0);
        //         }, function () { console.error('The request failed.'); });
        //     }
        //     request.send();
        // }

        // function stop() {
        //     audioSource.stop(0);
        // }
    



    //document.getElementById("stop").addEventListener("click", stopGame);
    /*
    Pour intégrer musique
    */

    /*var audio = document.getElementById('audio');
                var count = 1;
                audio.loop = true;
                audio.volume = 0.5;
    
    
    function playPause() {
                        if(count == 0){
                            count = 1;
                            audio.play();
                        }else{
                            count = 0;
                            audio.pause();
                        }
                    }
    
    function stop() {
                        playPause()
                        audio.pause();
                        audio.currentTime = 0;
    
                    }
    */


    /* pour class Musique si besoin
    
    var musique=new Sound("son/man-is-he-mega-glbml-22045.mp3",100,true);
    musique.start();
    musique.stop();
    musique.start();
    musique.init(100,false);
    musique.remove();
    //Here you you cannot start musique any more
    function Sound(source,volume,loop)
    {
        this.source=source;
        this.volume=volume;
        this.loop=loop;
        var son;
        this.son=son;
        this.finish=false;
        this.stop=function()
        {
            document.body.removeChild(this.son);
        }
        this.start=function()
        {
            if(this.finish)return false;
            this.son=document.createElement("embed");
            this.son.setAttribute("src",this.source);
            this.son.setAttribute("hidden","true");
            this.son.setAttribute("volume",this.volume);
            this.son.setAttribute("autostart","true");
            this.son.setAttribute("loop",this.loop);
            document.body.appendChild(this.son);
        }
        this.remove=function()
        {
            document.body.removeChild(this.son);
            this.finish=true;
        }
        this.init=function(volume,loop)
        {
            this.finish=false;
            this.volume=volume;
            this.loop=loop;
        }
    }*/


