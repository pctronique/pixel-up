let scoreGame = document.getElementById("score");
let typeMort = document.getElementById("game_typeMort");

function data(data) {
  let text = "";
  for (var key in data) {
    text += key + "=" + data[key] + "&";
  }
  return text.trim("&");
}

function fetch_post(url, dataArray) {
  let dataObject = data(dataArray);
  return fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body:dataObject,
  })
    .then((response) => response.text())
    .catch((error) => console.error("Error:", error));
}



typeMort.addEventListener("change", function (e) {
  let value = parseInt(document.getElementById("game_typeMort").value);
  let mortInfo = EnumTypeMortInfo.typeMortInfoEnum(value);
  let message = mortInfo.getDescription();
  alert(message + "  " + scoreGame.innerText);

 
    let dataArray = { "scoreGame":scoreGame.innerText, "typeMort": typeMort };
    fetch_post('/score/result',dataArray).then(function (response) {
      console.log(response);
      alert(message + "Envoyer" + scoreGame.innerText);
    });



});