export default function GetBitcoins(url, target) {
  const precoBtc = document.querySelector(target);
  async function pegarPreco() {
    try {
      const preco = await fetch(url);
      const precoJson = await preco.json();
      precoBtc.innerText = (1000 / precoJson.BRL.sell).toFixed(6);
    } catch (erro) {
      console.log(erro);
    }
  }
  pegarPreco();
}
