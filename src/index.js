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
}

let displayAnswers = () => {
  let mercury = document.querySelector("#mercury");
  if (age.ageDelta > age.age) {
    mercury.innerText = "You are " + age.mercury() + " years old on Mercury. " + age.ageDeltaFuture + " must pass to be " + age.ageDelta + " on Mercury.";
  } else if (age.ageDelta < age.age){
    mercury.innerText = "You are " + age.mercury() + " years old on Mercury. " + age.ageDeltaPast + " years on Mercury have passed since you were " + age.ageDelta;
  }
}

window.addEventListener("load", function() {
  let submit = document.querySelector("#submit");
  submit.addEventListener("click", handlerFunction);
})
