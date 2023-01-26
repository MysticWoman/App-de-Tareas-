
// function mode(){
//     const theme = document.body;
//     theme.classList.toggle("dark-mode");

// }

// const $buttonDarkMode = document.querySelector(".darkMode")
// const $body = document.querySelector("body")

// $buttonDarkMode.addEventListener("click", (e) => {
//     $body.classList.toggle("dark")
// })
// ----------------------------------------

// Dark mode button //

const $buttonDark = document.querySelector(".dark");
const $body = document.querySelector("body");

$buttonDark.addEventListener("clickonce", (e) => {
  $body.classList.toggle("dark");
});

// const $buttonLight = document.querySelector(".light");
// const $body2 = document.querySelector("body");

// $buttonLight.addEventListener("click", (e) => {
//   $body2.classList.toggle("light");
// });

const bdark = document.querySelector("#bdark");
const body = document.querySelector("body");

load();

bdark.addEventListener("click", (e) => {
  body.classList.toggle("darkmode");
  store(body.classList.contains("darkmode"));
});
function load() {
  const darkmode = localStorage.getItem("darkmode");
  if (!darkmode) {
    store("false");
  } else if (darkmode == "true") {
    body.classList.add("darkmode");
  }
}
function store(value) {
  localStorage.setItem("darkmode", value);
}
