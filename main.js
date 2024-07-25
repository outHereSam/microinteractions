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
