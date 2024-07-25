const form = document.getElementById("form");
const input = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit");
  let email = input.value;
  if (!email) {
    input.classList.add("error");
    e.preventDefault(); // Prevent form submission
  } else {
    input.classList.remove("error");
    input.value = "";
  }
});
