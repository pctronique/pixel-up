let donnees = document.querySelectorAll("tr");

console.log(donnees);

donnees.forEach((index) => {

    console.log("donnees");
    let td = document.createElement('td');
    let tr = td.textContent = index;

    //td.appendChild(tr);

    
});