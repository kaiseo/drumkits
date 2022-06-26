function checkButton(key) {

  switch (key) {
    case 'w':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case 'a':
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case 's':
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case 'd':
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case 'j':
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case 'k':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case 'l':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default: console.log(buttonInnerHTML);
      break;
  }
}
for (let index = 0; index < document.querySelectorAll("button").length; index++) {
  document.querySelectorAll("button")[index].addEventListener("click",
    function () {
      var buttonInnerHTML = this.innerHTML;

      checkButton(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    }

  )

  document.querySelectorAll("button")[index].addEventListener("keydown", function (event) {
    checkButton(event.key);
    buttonAnimation(event.key);
  })
};


function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey)
  activeButton.classList.add('pressed');

  setTimeout(function () {
    activeButton.classList.remove('pressed');
  }, 100);
}