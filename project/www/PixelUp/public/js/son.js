let selectAllA = document.querySelectorAll('a, button');/*('onmouseover="document.getElementById("myaudio").play()"');*/
let newP = document.innerHTML = ('onmouseover');

selectAllA.forEach(element => {
    element.setAttribute('onmouseover', 'document.getElementById("myaudio").play()');
});


/*var click = new Audio('./son_menu/Touche.mp3');

    function EvalSound(click) {
        try {
            click.Play(); //Quicktime, Windows Media Player, etc.
        }
        catch (e) {
            click.DoPlay(); //Real Player
        }
    }*/



/*a = (function () {


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

    buttonAud = document.querySelectorAll('.a');
    buttonAud.addEventListener('mouseover', buttonAudio);

}



document.addEventListener("DOMContentLoaded", init);

}) ();*/