const cep = document.querySelector("#cep");
const btn = document.querySelector(".btn");
const cidade = document.querySelector("#cidade");
const estado = document.querySelector("#estado");

function handleCEP(valor) {
  valor.preventDefault();
  const texto = cep.value;

  const acharCEP = fetch(`https://viacep.com.br/ws/${texto}/json/`);
  acharCEP.then((r) => {
    const responseJson = r.json();
    responseJson.then((or) => {
      cidade.innerText = or.localidade;
      estado.innerText = or.uf;
      cidade.value = or.localidade;
      estado.value = or.uf;
    });
  });
}
btn.addEventListener("click", handleCEP);
// const textoBitcoin = document.querySelector('.valorBitcoin');
// const intervalo = setInterval(() =>{
//   fetch("https://blockchain.info/ticker").then((r) =>{
//    return r.json().then((br) =>{
//     textoBitcoin.innerText ="R$" + br.BRL.buy + " reais";
//     })
//   })
// }, 50000);

// const piada = document.querySelector('.piada');
// const piadaBtn = document.querySelector('.piada-btn');

// function handlePiada(){
// const contarPiada = fetch("https://api.chucknorris.io/jokes/random").then((response) =>{
//   return response.json().then((r) =>{
//     piada.innerHTML = r.value;
//   })
// });
// };


// piadaBtn.addEventListener('click', handlePiada);





