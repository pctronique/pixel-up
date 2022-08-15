const first = document.querySelector('#number1');
const second = document.querySelector('#number2');

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
/*
  const myWorker = new Worker("worker.js");

  


  myWorker.addEventListener("message", function(e) {
    result.textContent = e.data;
    console.log('Message received from worker');
  });*/

let test = new Test();
test.eventListener();
first.addEventListener('change', function(e) {
  test.change(e.target.value);
});