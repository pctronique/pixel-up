let screenGame = document.getElementById("screenGame");

var lastScrollTop = 0;
screenGame.addEventListener("scroll", function () {
    var st = screenGame.pageYOffset || document.documentElement.scrollTop;
    console.log(st);
    if (st > lastScrollTop) {
        // downscroll code
    } else {
        // upscroll code
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);


let canvas = document.createElement('canvas');
canvas.width = 700;
canvas.height = 20;
screenGame.appendChild(canvas);
let ctx = canvas.getContext("2d");

ctx.fillStyle = 'rgb(255, 165, 0)';
ctx.fillRect(0, 0, 700, 20);

