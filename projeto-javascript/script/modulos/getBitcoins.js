export default function initGetBitcoins() {
  const precoBtc = document.querySelector(".btc-preco");
  async function pegarPreco() {
    try{
    const preco = await fetch("https://blockchain.info/ticker");
    const precoJson = await preco.json();
    precoBtc.innerText = (1000 / precoJson.BRL.sell).toFixed(6);
  }catch(erro){
    console.log(erro);
  }
  }
  pegarPreco();
}
