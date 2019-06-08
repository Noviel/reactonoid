import message from "./message";

console.log(message, "!!!!");

window.addEventListener("load", evt => {
  document.getElementById("app").innerHTML = `<div class="hui">121233<div/>`;
  console.log("onload");
});
