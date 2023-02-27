import AnimarNumeros from "./numeros.js";

export default function fetchAnimais(url, target) {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }
  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const responseJSON = await animaisResponse.json();
      responseJSON.forEach((animal) => {
        preencherAnimais(animal);
      });
      const animaNumeros = new AnimarNumeros(
        "[data-numero]",
        "ativo",
        ".numeros"
      );
      animaNumeros.init();
    } catch (error) {
      console.log(error);
    }
  }
  return criarAnimais();
}

// fetchAnimais(
//   "http://127.0.0.1:5500/projeto-javascript/script/modulos/animaisapi.json"
// );
