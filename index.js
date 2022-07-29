let i = 0;
let textPosition = 0;
const txt = [
  "I'm a FullStack Developer",
  "Machine Learning Enthusiast",
  "I Love Scripting and Automation",
]; /* The text */
let speed = 110; /* The speed/duration of the effect in milliseconds */

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
