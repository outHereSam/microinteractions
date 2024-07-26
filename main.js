const form = document.getElementById("form");
const input = document.getElementById("email");

const thankYouEL = document.getElementById("thank-you");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit");

  let email = input.value;
  if (!email) {
    input.classList.add("error");
    e.preventDefault();
  } else {
    form.classList.add("animate");
    setTimeout(() => {
      input.classList.remove("error");
      input.value = "";
      form.classList.add("hidden");
      thankYouEL.classList.remove("hidden");
      thankYouEL.classList.add("vissible");
    }, 3000);
  }
});

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

// Get references to elements
const loadBtn = document.querySelector('.loading-btn');
const loadSelect = document.getElementById('load-select');
const loadingDots = document.getElementById('loading-dots');
const bouncingDots = document.getElementById('bouncing-dots');
const spinner = document.getElementById('spinner');

// hide all loading indicators
hideAllIndicators();

// Event listener for when an option is selected
loadSelect.addEventListener('change', function() {
  // Fade out select
  loadSelect.style.opacity = '0';
  
  // Display load button
  loadBtn.classList.toggle('hidden')

  // Hide all indicators first
  hideAllIndicators();
});

// Event listener for when the load button is clicked
loadBtn.addEventListener('click', function() {
  // Hide button
  this.classList.toggle('hidden')


  // Show the loading indicator based on the selected value
  const selectedValue = loadSelect.value;
  if (selectedValue === 'loading-dots') {
    loadingDots.style.display = 'inline-block';
  } else if (selectedValue === 'bouncing-dots') {
    bouncingDots.style.display = 'inline-block';
  } else if (selectedValue === 'spinner') {
    spinner.style.display = 'inline-block';
  }
  
  // Simulate loading process 
  setTimeout(() => {
    // Show button again
    // this.style.display = 'inline-block';
    
    // Hide loading indicators
    hideAllIndicators();
    
    loadSelect.style.opacity = '1';
  }, 3000);
});

// Function to hide all loading indicators
function hideAllIndicators() {
  loadingDots.style.display = 'none';
  bouncingDots.style.display = 'none';
  spinner.style.display = 'none';
}

