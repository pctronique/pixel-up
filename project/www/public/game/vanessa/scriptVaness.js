let screenGame = document.getElementById("screenGame");

let canvas = document.createElement('canvas');

canvas.width = 700;
canvas.height = 20;
screenGame.appendChild(canvas);
let ctx = canvas.getContext("2d");

ctx.fillStyle = 'rgb(255, 165, 0)';
ctx.fillRect(0, 0, 700, 20);

var lastScrollTop = 0;
screenGame.scrollTop = screenGame.scrollHeight;
screenGame.addEventListener("scroll", function () {
    var st = -20*screenGame.scrollTop;
    console.log(st);
    canvas.style.marginTop = st+'px';
    if (st > lastScrollTop) {
        
    } else {
        // upscroll code
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);




