a = (function () {


    var buttonAud;

    function buttonAudio() {

        this.className += 'onmouseover';
        buttonAud.removeEventListener('onmouseover', buttonAudio);

        var click = new Audio('./son_menu/Touche.mp3');

        click.preload = true;
        click.volume = .2;
        click.play();
    }

    function init() {

    buttonAud = document.querySelectorAll('a')[0];
    buttonAud.addEventListener('mouseover', buttonAudio);

}



document.addEventListener("DOMContentLoaded", init);

}) ();