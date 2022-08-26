let scoreGame = document.getElementById("score");
let typeMort = document.getElementById("game_typeMort");

typeMort.addEventListener("change", function (e) {
  let value = parseInt(document.getElementById("game_typeMort").value);
  let message = "";
  if (value == EnumTypeMort.TOMBER) {
    message = "TOMBER";
  } else if (value == EnumTypeMort.REQUIN) {
    message = "REQUIN";
  } else if (value == EnumTypeMort.AVION) {
    message = "AVION";
  } else if (value == EnumTypeMort.ASTEROIDE) {
    message = "ASTEROIDE";
  }
  alert(message);
});
