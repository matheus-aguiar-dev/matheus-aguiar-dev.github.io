let i = 0;
let textPosition = 0;
const txt = [
  "Sou um Desenvolvedor FullStack",
  "Machine Learning Entusiasta",
  "Amo Scripts e Automação",
];
let speed = 120;

let menutoggle = document.querySelector(".toggle");
let navitems = document.querySelector(".navigation-items");
let main = document.querySelector(".main");
let nav = document.querySelector("nav");

menutoggle.onclick = function () {
  menutoggle.classList.toggle("active");
  navitems.classList.toggle("active");
  main.classList.toggle("active");
};

function deactivateToggle() {
  menutoggle.classList.remove("active");
  navitems.classList.remove("active");
  main.classList.remove("active");
}
function typeWriter() {
  if (i < txt[textPosition].length) {
    document.getElementById("typewriter").innerHTML +=
      txt[textPosition].charAt(i);
    i++;
    if (i == txt[textPosition].length) {
      setTimeout(() => {
        document.getElementById("typewriter").innerHTML = "";
        textPosition++;
        if (textPosition == 3) {
          textPosition = 0;
        }
        i = 0;
        typeWriter();
      }, 1000);
    }
    setTimeout(typeWriter, speed);
  }
}

function scrollToTop(element) {
  let scroll = document.querySelector(element);
  let yOffset = -80;
  const y = scroll.getBoundingClientRect().top + window.scrollY + yOffset;
  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
  deactivateToggle();
}
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    nav.style.height = "64px";
    nav.style.backgroundColor = "rgba(0, 0, 0, 1)";

    nav.style.padding = "5px 40px";
  }
  if (window.scrollY <= 80) {
    nav.style.height = "80px";
    nav.style.backgroundColor = "rgba(12, 12, 12, 0.8)";

    nav.style.padding = "15px 40px";
  }
});
window.addEventListener("resize", () => {
  if (window.screen.width >= 860) {
    console.log(screen.width);
    deactivateToggle();
  }
});
typeWriter();
