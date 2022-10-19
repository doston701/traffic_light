const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const lightRed = document.querySelector(".light__red");
const lightYellow = document.querySelector(".light__yellow");
const lightGreen = document.querySelector(".light__green");

btn1.addEventListener("click", () => {
  lightRed.classList.toggle("lightred");
  lightYellow.classList.remove("lightyellow");
  lightGreen.classList.remove("lightgreen");
});

btn2.addEventListener("click", () => {
  lightYellow.classList.toggle("lightyellow");
  lightRed.classList.remove("lightred");
  lightGreen.classList.remove("lightgreen");
});

btn3.addEventListener("click", () => {
  lightGreen.classList.toggle("lightgreen");
  lightRed.classList.remove("lightred");
  lightYellow.classList.remove("lightyellow");
});

btn4.addEventListener("click", () => {
  lightGreen.classList.remove("lightgreen");
  lightRed.classList.remove("lightred");
  lightYellow.classList.remove("lightyellow");
});
