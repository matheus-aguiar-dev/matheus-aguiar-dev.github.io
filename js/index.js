let i = 0;
let textPosition = 0;
const txt = [
  "Sou um Desenvolvedor FullStack",
  "Machine Learning Entusiasta",
  "Amo Scripts e Automação",
];
let speed = 120;
let yOffset = -80;

let menutoggle = document.querySelector(".toggle");
let navitems = document.querySelector(".navigation-items");
let main = document.querySelector(".main");
let nav = document.querySelector("nav");
let icons = document.querySelectorAll(".icon");
const objectIcons = [
  {
    title: "HTML",
    context:
      " O HTML é o componente básico da web, ele permite inserir o conteúdo e estabelecer a estrutura básica de um website",
  },
  {
    title: "CSS",
    context:
      "CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML.",
  },
  {
    title: "JavaScript",
    context:
      "A linguagem de programação Javascript permite ao desenvolvedor implementar diversos itens de alto nível de complexidade em páginas web, como animações, mapas, gráficos ou informações que se atualizam em intervalos de tempo padrão.",
  },
  {
    title: "Sass",
    context:
      "O Sass(Syntactically awesome style sheets) é uma linguagem baseada no CSS, que depois de processada gera CSS.",
  },
  {
    title: "Vue",
    context:
      "É um framework JavaScript open source para a criação de aplicações web, criado por Evan You em 2014. O Vue.js possibilita criar aplicações de forma reativa. O Vue.js faz a utilização de um DOM virtual, o que faz com que seja extremamente performático na maioria das situações. Além disso, conta com uma arquitetura muito bem estruturada por meio da criação de componentes reusáveis.",
  },
  {
    title: "React",
    context:
      "O React é uma biblioteca JavaScript de Código Aberto com foco em criar interfaces de usuário em páginas web.",
  },
  {
    title: "Node",
    context:
      "O Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.",
  },
  {
    title: "Express",
    context:
      "Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web. ",
  },
  {
    title: "MongoDB",
    context:
      "MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.",
  },
  {
    title: "PHP",
    context:
      "PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web",
  },
  {
    title: "Laravel",
    context:
      "Laravel é um framework PHP livre e open-source criado por Taylor B. Otwell para o desenvolvimento de sistemas web que utilizam o padrão MVC.",
  },
  {
    title: "mySQL",
    context:
      "O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface.",
  },
  {
    title: "Apache",
    context:
      "O Apache é um servidor de código aberto e nome oficial é Apache HTTP Server, mantido pela Apache Software Foundation, e alimenta cerca de 46% de todos os sites hospedados na internet.",
  },
  {
    title: "Nginx",
    context:
      "O NGINX é um servidor web. Ele é um serviço, é um programa que roda e que serve para responder requisições web. ",
  },
  {
    title: "Python",
    context:
      "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.",
  },
  {
    title: "C",
    context:
      "C é uma linguagem de programação compilada de propósito geral, estruturada, imperativa, procedural, padronizada pela Organização Internacional para Padronização.",
  },
  {
    title: "C++",
    context:
      "C++ é uma linguagem de programação compilada multi-paradigma e de uso geral. Desde os anos 1990 é uma das linguagens comerciais mais populares.",
  },
  {
    title: "Java",
    context:
      "Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling.",
  },
];

icons.forEach((icon, index) => {
  icon.onclick = function () {
    document.querySelector(".skills-container-title").innerHTML =
      objectIcons[index].title;
    document.querySelector(".skills-container-context").innerHTML =
      objectIcons[index].context;

    const y =
      document
        .querySelector(".skills-container-context")
        .getBoundingClientRect().top +
      window.scrollY +
      -280;
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };
});

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
    deactivateToggle();
  }
});
typeWriter();
