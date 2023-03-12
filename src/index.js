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
  mercury.innerText = "Your age would be " + age.mercury();
}

window.addEventListener("load", function() {
  let submit = document.querySelector("#submit");
  submit.addEventListener("click", handlerFunction);
})
