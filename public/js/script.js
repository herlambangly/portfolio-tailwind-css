// Title

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
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
  submit.classList.toggle("hidden");
  loading.classList.toggle("hidden");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      loading.classList.toggle("hidden");
      submit.classList.toggle("hidden");
      alertBox.classList.toggle("hidden");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

closeBtn.addEventListener("click", function () {
  alertBox.classList.add("hidden");
});

// Click Inside Hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Dark Mode Toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// Move Toggle according to toggle
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
