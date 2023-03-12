import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from "./age.js";

let age = new Age();

let handlerFunction = () => {
  event.preventDefault();
  let orgAge = document.querySelector("#orgAge").value;
  let ageDelta = document.querySelector("#ageDelta").value;
  age.age = orgAge;
  age.ageDelta = ageDelta;

  displayAnswers();
};

let displayAnswers = () => {
  let mercury = document.querySelector("#mercury");
  if (age.ageDelta > age.age) {
    mercury.innerText = "You are " + age.mercury() + " years old on Mercury. " + age.ageDeltaFuture + " years must pass on Mercury to be " + age.ageDelta + ".";
  } else if (age.ageDelta < age.age){
    mercury.innerText = "You are " + age.mercury() + " years old on Mercury. " + age.ageDeltaPast + " years on Mercury have passed since you were " + age.ageDelta;
  }

  let venus = document.querySelector("#venus");
  if (age.ageDelta > age.age) {
    venus.innerText = "You are " + age.venus() + " years old on Venus. " + age.ageDeltaFuture + " years must pass on Venus to be " + age.ageDelta + ".";
  } else if (age.ageDelta < age.age){
    venus.innerText = "You are " + age.venus() + " years old on Venus. " + age.ageDeltaPast + " years on Venus have passed since you were " + age.ageDelta;
  }

  let mars = document.querySelector("#mars");
  if (age.ageDelta > age.age) {
    mars.innerText = "You are " + age.mars() + " years old on Mars. " + age.ageDeltaFuture + " years must pass on Mars to be " + age.ageDelta + ".";
  } else if (age.ageDelta < age.age){
    mars.innerText = "You are " + age.mars() + " years old on Mars. " + age.ageDeltaPast + " years on Mars have passed since you were " + age.ageDelta;
  }

  let jupiter = document.querySelector("#jupiter");
  if (age.ageDelta > age.age) {
    jupiter.innerText = "You are " + age.jupiter() + " years old on Jupiter. " + age.ageDeltaFuture + " years must pass on Jupiter to be " + age.ageDelta + ".";
  } else if (age.ageDelta < age.age){
    jupiter.innerText = "You are " + age.jupiter() + " years old on Jupiter. " + age.ageDeltaPast + " years on Jupiter have passed since you were " + age.ageDelta;
  }
};

window.addEventListener("load", function() {
  let submit = document.querySelector("#submit");
  submit.addEventListener("click", handlerFunction);
});
