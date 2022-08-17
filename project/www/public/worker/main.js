const first = document.querySelector('#number1');
const second = document.querySelector('#number2');
const score = document.querySelector('#score');

const result = document.querySelector('.result');

class Test {
  constructor() {
    this.myWorker = new Worker("./worker.js");
  }

  eventListener() {
    this.myWorker.addEventListener("message", function(e) {
      result.textContent = e.data;
      console.log('Message received from worker');
    });
  }

  change(value) {
    this.myWorker.postMessage(value);
      console.log('Message posted to worker');
  }
}

let myWorkerScore = new Worker("./score.js");
score.addEventListener('change', function(e) {
  /*setTimeout(() => {
    console.log("Retardée d'une seconde.");
  }, 1000);*/
  myWorkerScore.postMessage(e.target.value);
});
myWorkerScore.addEventListener("message", function(e) {
  if(score.value != e.data) {
    score.value = e.data;
    score.dispatchEvent(new Event("change"));
    console.log('Message received from worker');
  }
});
score.dispatchEvent(new Event("change"));

function afficherDate() 
{
    let cejour = new Date();
    let options = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
    let date = cejour.toLocaleDateString("fr-FR", options);
    let heure = ("0" + cejour.getHours()).slice(-2) + ":" + ("0" + cejour.getMinutes()).slice(-2) + ":" + ("0" + cejour.getSeconds()).slice(-2);
    let dateheure = date + " " + heure;
    dateheure = dateheure.replace(/(^\w{1})|(\s+\w{1})/g, lettre => lettre.toUpperCase());
    document.getElementById('dateheure').innerHTML = dateheure;
}
setInterval(afficherDate, 1000);
/*
  const myWorker = new Worker("worker.js");

  
score

  myWorker.addEventListener("message", function(e) {
    result.textContent = e.data;
    console.log('Message received from worker');
  });*/

let test = new Test();
test.eventListener();
first.addEventListener('change', function(e) {
  test.change(e.target.value);
});