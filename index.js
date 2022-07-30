let i = 0;
let textPosition = 0;
const txt = [
  "Sou um Desenvolvedor FullStack",
  "Machine Learning Entusiasta",
  "Amo Scripts e Automação",
]; /* The text */
let speed = 90; /* The speed/duration of the effect in milliseconds */

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

typeWriter();
