// Toggle Animations
const toggleComponent = document.querySelector(".toggle-component");
const checkBox = document.querySelector(".checkbox");
const label = document.querySelector(".switch");

checkBox.addEventListener("click", () => {
  if (checkBox.checked) {
    toggleComponent.style.backgroundColor = "#0d0d18";
  } else {
    toggleComponent.style.backgroundColor = "rgb(238, 238, 238)";
  }
});


//Refresh Animations
const rfCircle = document.querySelector(".rf-circle");
const rfQuote = document.querySelector(".rf-quote");
const rfSpeaker = document.querySelector(".rf-span");
const rfButton = document.querySelector(".rf-refresh-btn")
let index = 0;

const quotes = [
  "A word to the wise is in the North",
  "Lol, its actually in the South",
  "Or so they say",
];

const speakers = [
  "~ Sun Tsu",
  "~ Also Sun Tsu",
  "~ Original Sun Tsu",
];


rfCircle.addEventListener('click', ()=> {
  rfButton.classList.add('togglerefreshanimation');

  setTimeout(() => {
    if(index <= quotes.length-1) {
      rfQuote.textContent = quotes[index];
      rfSpeaker.textContent = speakers[index];
      rfQuote.classList.add('fadeinQuote');
      rfSpeaker.classList.add('fadeinQuote');

      index = index + 1;
  
      if(index > quotes.length-1) {
        index = 0;
      }

      setTimeout(() => {
        rfQuote.classList.remove('fadeinQuote');
        rfSpeaker.classList.remove('fadeinQuote');
        rfButton.classList.remove('togglerefreshanimation');
      }, 500);
    }


  }, 500);
})

