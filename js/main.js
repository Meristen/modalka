// ?1
// let button = document.querySelector(".button");
// let hello = document.querySelector(".hello");
// let modal = false;
// button.addEventListener("click", () => {
//   if (modal) {
//     hello.style.opacity = "5";
//   } else {
//     hello.style.opacity = "0";
//   }
//   modal = !modal;
// });
// ?2
// let button = document.querySelector(".button");
// let hello = document.querySelector("#demo");
// button.addEventListener("click", () => {
//   hello.innerText = new Date();
// });
// ?3
// let change = document.querySelector(".change");
// change.addEventListener("click", () => {
//   let randomColor =
//     "rgb(" +
//     Math.floor(Math.random() * 256) +
//     "," +
//     Math.floor(Math.random() * 256) +
//     "," +
//     Math.floor(Math.random() * 256) +
//     ")";
//   document.body.style.backgroundColor = randomColor;
// });
// ?4
// let inp = document.querySelector("#password");
// let password = inp.value;
// console.log(password);
// inp.addEventListener("change", (e) => {
//   if (password.length < 5) {
//     e.inp.style.color = "red";
//   } else {
//     e.inp.style.color = "blue";
//   }
// });
// ?7
// let button = document.querySelector("#btn-add");
// let ul = document.querySelector("#ul");
// button.addEventListener("click", () => {
//   let newItem = document.createElement("li");
//   newItem.innerText = `пункт`;
//   ul.append(newItem);
// });
