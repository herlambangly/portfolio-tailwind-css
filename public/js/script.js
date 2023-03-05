// Title

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Form Submit to Google Sheets
const scriptURL = "https://script.google.com/macros/s/AKfycbykQ6NoxNb6vV8_AFqs8u401taFmgSsyD_zh4nL-e9pR3fImudUQqoyOGclO92zRx7axA/exec";
const form = document.forms["submit-to-google-sheet"];
const submit = document.querySelector("#submit");
const loading = document.querySelector("#loading");
const alertBox = document.querySelector("#alertBox");
const closeBtn = document.querySelector("#closeBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alertBox.classList.remove("hidden");
  loading.classList.toggle("hidden");
  submit.classList.toggle("hidden");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      loading.classList.toggle("hidden");
      submit.classList.toggle("hidden");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

closeBtn.addEventListener("click", function () {
  alertBox.classList.add("hidden");
});
