

alert('insérer')

newdiv = document.createElement('div')
newdiv.id = 'NewDiv'
document.body.appendChild(newdiv)
newdiv.innerHTML = "vous passez au niveau supérieur ++"
document.getElementById(newdiv.id).style.border = 'solid 5px red'
document.getElementById(newdiv.id).style.width = 'auto'
document.getElementById(newdiv.id).style.height = '250px'
document.getElementById(newdiv.id).style.background ='red' 
document.getElementById(newdiv.id).style.fontSize = '40px'
document.getElementById(newdiv.id).style.textAlign = 'center'




element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({block: "end"});
element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});


// alert('insérer')
// newdiv = document.createElement('div')
// newdiv.id = 'NewDiv1'
// document.body.appendChild(newdiv)
// newdiv.innerHTML = "vous passez au niveau inférieur --"
// document.getElementById(newdiv.id).style.border = 'solid 5px yellow'
// document.getElementById(newdiv.id).style.width = 'auto'
// document.getElementById(newdiv.id).style.height = '250px'
// document.getElementById(newdiv.id).style.background ='black' 
// document.getElementById(newdiv.id).style.fontSize = '40px'
// document.getElementById(newdiv.id).style.textAlign = 'center'


// alert('supprimer')
// noeud_parent = newdiv.parentNode
// noeud_parent.removeChild(newdiv)
// tmp = pnode.offsetTop


