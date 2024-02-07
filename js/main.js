let button = document.querySelector(".button");
let hello = document.querySelector(".hello");
let modal = false;
button.addEventListener("click", () => {
  if (modal) {
    hello.style.opacity = "5";
  } else {
    hello.style.opacity = "0";
  }
  modal = !modal;
});
