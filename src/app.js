/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let excuse = document.getElementById("excuse");

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function getRandomWho(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomAction(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomWhat(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomWhen(max) {
    return Math.floor(Math.random() * max);
  }

  let randomWho = getRandomWho(who.length);
  let randomAction = getRandomAction(action.length);
  let randomWhat = getRandomWhat(what.length);
  let randomWhen = getRandomWhen(when.length);

  excuse.innerHTML = who[randomWho] + " " + action[randomAction] + " " + what[randomWhat] + " " + when[randomWhen];
};
