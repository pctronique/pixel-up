let folderWorker = "./../js/worker/";

if (window.Worker) {
    /*let score = new Score("score");
    score.start();*/
    let game = new Game("screenGame_0");
    let backgroundTaille = new Taille(1000, 5000);
    game.scoreId("score");
    game.setIdTypeMort("game_typeMort");
    game.addBackground(backgroundTaille.x, backgroundTaille.y, 100, 100);
    game.addBackground(backgroundTaille.x, backgroundTaille.y, 100, 100);
    game.setPosInitJoueur(backgroundTaille.x / 2, backgroundTaille.y - 101);
    //game.getJoueur().addListenerPos("joueur-pos-x", "joueur-pos-y");
    game.afficher();

    let screenGame = document.getElementById("screenGame_0");
    screenGame.scrollTop = screenGame.scrollHeight;

    //game.start();


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
    /*let idScore = document.getElementById("score");
    idScore.addEventListener("change", function (e) {
        if(parseInt(idScore.innerHTML) == 100) {
            score.stop();
        }
    })*/
    function startGame(e) {
        
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


