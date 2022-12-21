/* Declare variables below to save the different sections (divs) of your story*/
let oneButton = document.querySelector('.option-one');
let twoButton = document.querySelector('.option-two');
let threeButton = document.querySelector('.option-three');
let fourButton = document.querySelector('.option-four');
let fiveButton = document.querySelector('.option-five');
let sixButton = document.querySelector('.option-six');
let oneScreen = document.querySelector('.option-one-screen');
let twoScreen = document.querySelector('.option-two-screen');
let optiononeEnd = document.querySelector('.option-one-end');
let optiontwoEnd = document.querySelector('.option-two-end');
let storyOpening = document.querySelector('.story-opening');


// When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
//
oneButton.onclick = function() {
  storyOpening.style.display = 'none';
  oneScreen.style.display = 'block';
  fourButton.style.display = 'block';
};
//
//
twoButton.onclick = function() {
  storyOpening.style.display = 'none';
  twoScreen.style.display = 'block';
  threeButton.style.display = 'block';
};
//

//
threeButton.onclick = function() {
  storyOpening.style.display = 'none';
  optiontwoEnd.style.display = 'block';
};
//
//
fourButton.onclick = function() {
  storyOpening.style.display = 'none';
  optiontwoEnd.style.display = 'block';
};
//

//
fiveButton.onclick = function() {
  storyOpening.style.display = 'none';
  optiononeEnd.style.display = 'block';
};
//

//
sixButton.onclick = function() {
  storyOpening.style.display = 'none';
  optiononeEnd.style.display = 'block';
};
//

