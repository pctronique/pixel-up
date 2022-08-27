let scoreGame = document.getElementById("score");
let typeMort = document.getElementById("game_typeMort");

typeMort.addEventListener("change", function (e) {
  let value = parseInt(document.getElementById("game_typeMort").value);
  let mortInfo = EnumTypeMortInfo.typeMortInfoEnum(value);
  let message = mortInfo.getDescription();
  alert(message);
});
