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
  loadBtn.classList.add('show');

  // Hide all indicators first
  hideAllIndicators();
});

// Event listener for when the load button is clicked
loadBtn.addEventListener('click', function() {
  // Hide button
  this.style.display = 'none';

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
    this.style.display = 'inline-block';
    
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
