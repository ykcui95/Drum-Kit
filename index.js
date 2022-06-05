var buttonSet = document.querySelectorAll(".drum");

for (var i = 0; i < buttonSet.length; i++) {
  buttonSet[i].addEventListener("click", function() {
    var buttonText = this.textContent;
    makesound(buttonText);
    buttonAnimation(buttonText);
  });
}

document.addEventListener("keydown", function(event) {
  makesound(event.key);
  buttonAnimation(event.key);
});

function makesound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      break;

    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      break;

    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      break;

    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      break;

    case "j":
      var audio = new Audio("./sounds/snare.mp3");
      break;

    case "k":
      var audio = new Audio("./sounds/crash.mp3");
      break;

    case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      break;

    default:
  }
  audio.play();
}

function buttonAnimation(key) {
  var currentButton = document.querySelector("." + key);
  currentButton.classList.add("pressed");
  setTimeout(function() {
    currentButton.classList.remove("pressed");
  }, 100);
}


// function clickHandler() {
//   console.log(this.contentText);
//   var audio = new Audio("./sounds/tom-1.mp3");
//   audio.play();
// }
