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
