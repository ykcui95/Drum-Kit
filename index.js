
var buttonSet = document.querySelectorAll(".drum");

for(var i = 0; i < buttonSet.length; i++) {
  buttonSet[i].addEventListener("click", clickHandler);
}

function clickHandler() {
  alert("click!");
}
