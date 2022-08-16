let screenGame = document.getElementById("screenGame");

let canvasBackground = document.createElement('canvas');
canvasBackground.width = 700;
canvasBackground.height = 1000;
screenGame.appendChild(canvasBackground);
let ctxBg = canvasBackground.getContext("2d");

ctxBg.fillStyle = '#017472';
ctxBg.fillRect(0, 0, 700, 1000);

let canvas = document.createElement('canvas');
canvas.id = "canvas";
canvas.width = 700;
canvas.height = 20;
screenGame.appendChild(canvas);
let ctx = canvas.getContext("2d");

ctx.fillStyle = 'rgb(255, 165, 0)';
ctx.fillRect(0, 0, 700, 20);

var lastScrollTop = 0;
screenGame.scrollTop = screenGame.scrollHeight;
screenGame.addEventListener("scroll", function () {
    st = -1*((screenGame.scrollHeight-screenGame.scrollWidth)+(screenGame.offsetHeight-screenGame.scrollTop));
    canvas.style.marginTop = st+'px';
    if (st > lastScrollTop) {
        
    } else {
        // upscroll code
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);




