class Background {
    constructor(imgBack, imgBas) {
        this.imgBack = imgBack;
        this.imgBas = imgBas;
    }

    deplacement() {
        var lastScrollTop = 0;
        element.addEventListener("scroll", function () {
            var st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                // downscroll code
            } else {
                // upscroll code
            }
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        }, false);
    }

    screenBottom() {

        let canvas = document.getElementById('ecran_joueur');
        if (canvas.getContext) {
            canvas.width = 700;
            canvas.height=700;
            screenGame.appendChild(canvas);
            let ctx = canvas.getContext("2d");

            ctx.fillStyle = 'rgb(255, 165, 0)';
            ctx.fillRect();

        }



    }
    setPlateformeFixe() {

    }
    setPlateFormeMobile() {

    }
}