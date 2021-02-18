'use strict';
//Selecting the classes form HTML
const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const butnclose = document.querySelector('.close-modal');
const butnOpen = document.querySelectorAll('.show-modal');

let open = function () {
  //removing the hidden class
  // so we can see out content when we press any of three buttons
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//we have three buttons so we need loop
for (let i = 0; i < butnOpen.length; i++) {
  butnOpen[i].addEventListener('click', open);
}

//To close the window when we click "X" button and overlay
let close = function () {
  //again we are adding the hidden class to hide the content
  // on pressing the button or overlay
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

//calling the function close
butnclose.addEventListener('click', close);
overlay.addEventListener('click', close);

//close the content with Esc key on key board
document.addEventListener('keydown', function (e) {
  let press = e.key;
  if (press === 'Escape' && !model.classList.contains('.hidden')) {
    close();
  }
});
