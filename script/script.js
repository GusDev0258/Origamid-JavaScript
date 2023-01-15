const botao = document.getElementById("botao");
const titulo = document.querySelector(".titulo");
const imgMimi = document.querySelector(".mimi");
botao.addEventListener("click", () => {
  if ((titulo.style.color = "black")) {
    titulo.style.color = "blue";
    imgMimi.classList.toggle("aparece");
  }
});
titulo.addEventListener("mouseover", () => {
  titulo.style.cursor = "pointer";
});
titulo.addEventListener("click", () => {
  titulo.style.color = "black";
});
