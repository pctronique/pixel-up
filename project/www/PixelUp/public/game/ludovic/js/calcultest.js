let tab = [
    {
        TimgHeight : 2000,
        imgHeight : 1000,
        imgWidth : 1000,
        pos_joueur : 860,
        pos_joueur_img : 140,
        scrollTop : 2332,
        scrollHeight : 3552,
        scrollWidth : 1776,
        offsetHeight : 1220,
        offsetWidth : 1791,
        pos_ecran : 973,
        pos_joueur_ecran : 247,
    },
    {
        TimgHeight : 2000,
        imgHeight : 1000,
        imgWidth : 1000,
        pos_joueur : 860,
        pos_joueur_img : 140,
        scrollTop : 1842,
        scrollHeight : 3062,
        scrollWidth : 1531,
        offsetHeight : 1220,
        offsetWidth : 1546,
        pos_ecran : 1007,
        pos_joueur_ecran : 213,
    },
    {
        TimgHeight : 2000,
        imgHeight : 1000,
        imgWidth : 1000,
        pos_joueur : 860,
        pos_joueur_img : 140,
        scrollTop : 780,
        scrollHeight : 2000,
        scrollWidth : 1000,
        offsetHeight : 1220,
        offsetWidth : 1015,
        pos_ecran : 1080,
        pos_joueur_ecran : 140,
    },
    {
        TimgHeight : 2000,
        imgHeight : 1000,
        imgWidth : 1000,
        pos_joueur : 860,
        pos_joueur_img : 140,
        scrollTop : 150,
        scrollHeight : 1370,
        scrollWidth : 685,
        offsetHeight : 1220,
        offsetWidth : 700,
        pos_ecran : 1125,
        pos_joueur_ecran : 95,
    },
    {
        TimgHeight : 2000,
        imgHeight : 1000,
        imgWidth : 1000,
        pos_joueur : 860,
        pos_joueur_img : 140,
        scrollTop : 0,
        scrollHeight : 1220,
        scrollWidth : 610,
        offsetHeight : 1220,
        offsetWidth : 625,
        pos_ecran : 1133,
        pos_joueur_ecran : 87,
    },
];

function divTaille(hauteur, tabValue) {
    return hauteur/(tabValue.scrollHeight/2);
}

function posEcran(posImg, hauteur, tabValue) {
    return posImg/divTaille(hauteur, tabValue);
}

function moitierEcran(hauteurEcran, hauteur, tabValue) {
    return (hauteurEcran/2)*divTaille(hauteur, tabValue);
}

function unPixelEcran(unpixel, hauteur, tabValue) {
    return unpixel*divTaille(hauteur, tabValue);
}

tab.forEach(element => {
    console.log("val0 : "+divTaille(1000, element));
    console.log("val1 : "+posEcran(140, 1000, element));
    console.log("val2 : "+moitierEcran(1220, 1000, element));
    console.log("val3 : "+unPixelEcran(120, 1000, element));
    console.log("val4 : "+unPixelEcran(140, 1000, element));
});