import AnimarNumeros from "./numeros.js";

export default function initAnimaisFetch() {
  async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const responseJSON = await animaisResponse.json();
    const numerosGrid = document.querySelector(".numeros-grid");
    function createAnimal(animal) {
      const div = document.createElement("div");
      div.classList.add("numero-animal");
      div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
      return div;
    }
    responseJSON.forEach((animal) => {
      const divAnimal = createAnimal(animal);
      numerosGrid.appendChild(divAnimal);
    });
    const animaNumeros = new AnimarNumeros("[data-numero]","ativo",".numeros");
    animaNumeros.init();
  }
  fetchAnimais(
    "http://127.0.0.1:5500/projeto-javascript/script/modulos/animaisapi.json"
  );
}
