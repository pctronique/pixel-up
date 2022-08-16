let screenGame = document.getElementById("screenGame");

let canvas = document.createElement('canvas');
canvas.id = "canvas";

let joueur = document.createElement('canvas');
joueur.id = "ecran_joueur";

joueur.width = 700;
joueur.height = 1000;
screenGame.appendChild(joueur);
let ctx0 = joueur.getContext("2d");

ctx0.fillStyle = '#017472';
ctx0.fillRect(0, 0, 700, 1000);

canvas.width = 700;
canvas.height = 20;
screenGame.appendChild(canvas);
let ctx = canvas.getContext("2d");

ctx.fillStyle = 'rgb(255, 165, 0)';
ctx.fillRect(0, 0, 700, 20);

var lastScrollTop = 0;
screenGame.scrollTop = screenGame.scrollHeight;
screenGame.addEventListener("scroll", function () {
    let st = -1*((screenGame.scrollHeight-screenGame.scrollWidth)+(screenGame.scrollWidth-screenGame.offsetHeight)-screenGame.scrollTop+20);
    canvas.style.marginTop = st+'px';
    /*var st = -20*screenGame.scrollTop;
    console.log(st);
    canvas.style.marginTop = st+'px';
    if (st > lastScrollTop) {
        
    } else {
        // upscroll code
    }
    lastScrollTop = st <= 0 ? 0 : st;*/
}, false);




