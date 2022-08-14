let screenGame = document.getElementById("screenGame");
let ajouter = document.getElementById("ajouter");
let elementEnfant = document.getElementById("childElement");
let backgroundYellow = document.getElementById("backgroundYellow");
backgroundYellow.width = 700;
backgroundYellow.height = 1000;
let ctxBackgroundYellow = backgroundYellow.getContext("2d");
ctxBackgroundYellow.fillStyle = "yellow";
ctxBackgroundYellow.fillRect(0, 0, 700, 1000);
let nombre = 0;

//var lastScrollTop = 0;
screenGame.scrollTop = screenGame.scrollHeight;

let scrollChangement = 0;
	
function ajouterBackground() {
	let newcanvas = document.createElement('canvas');
	
	newcanvas.width = 700;
	newcanvas.height = 1000;
	screenGame.appendChild(newcanvas);
	let ctx = newcanvas.getContext("2d");
	
	let parentDiv = elementEnfant.parentNode
	parentDiv.insertBefore(newcanvas, elementEnfant.nextSibling)
	if (nombre == 0) {
		ctx.fillStyle = "red";
		ctx.fillRect(0, 0, 700, 1000);
		
	} else if (nombre == 1) {
		ctx.fillStyle = "blue";
		ctx.fillRect(0, 0, 700, 1000);

		
	} else if (nombre == 2) {
		ctx.fillStyle = "green";
		ctx.fillRect(0, 0, 700, 1000);
		nombre = -1;
		
	}
	nombre++;
	scrollChangement = nombre*526;
}
// ajouter.addEventListener("click", function () {
// ajouterBackground();
	
// }
	
// );


screenGame.onscroll = function () {
	console.log(screenGame.scrollTop);
	console.log(scrollChangement);

	if (screenGame.scrollTop > scrollChangement -10 && screenGame.scrollTop < scrollChangement +10 ) {
		ajouterBackground();	
	}
	
	// if (screenGame.scroll(500, ajouterBackground(document.querySelector('#screenGame').scrollIntoView({
	//  	behavior: 'smooth'
	//   }))));
	
	// if (window.scroll(500, ajouterBackground(document.getElementById("screenGame"))));
		
	// let currentScrollPos = window.pageYOffset;
	  
	// if(screenGame.scrollTop > 500) {
	// 	screenGame.style.display = 'none';
	// 	}
	// 	hideScroll = currentScrollPos;
}

ajouterBackground();

// alert('supprimer')
// noeud_parent = newdiv.parentNode
// noeud_parent.removeChild(newdiv)
// tmp = pnode.offsetTop


