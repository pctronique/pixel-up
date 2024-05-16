let modalBtns = [...document.querySelectorAll(".button")];
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});
let closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.closest(".modal");
    modal.style.display = "none";
  };
});
window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
};
let valider = document.querySelector("#valider");

valider.onclick = function () {
  let modal = valider.closest(".modal");
  modal.style.display = "none";
};

let valider2 = document.querySelector("#validerConfig");

valider2.onclick = function () {
  let modal = valider2.closest(".modal");
  modal.style.display = "none";
};

let valider3 = document.querySelector("#validerConfigBackground");

valider3.onclick = function () {
  let modal = valider3.closest(".modal");
  modal.style.display = "none";
};

let valider4 = document.querySelector("#validerConfigGameMoveBackground");

valider4.onclick = function () {
  let modal = valider4.closest(".modal");
  modal.style.display = "none";
};


