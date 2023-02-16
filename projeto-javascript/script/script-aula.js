// const imgs = document.querySelectorAll('img');
// console.log(imgs);
// const imagem = document.querySelectorAll('[src*=imagem]');
// console.log(imagem);
// const linksInternos = document.querySelectorAll('[href^="#"]');
// console.log(linksInternos);
// const titulinho = document.querySelector('.animais-descricao h2:first-child');
// console.log(titulinho);
// const ultimoP = document.querySelector('.footer p');
// console.log(ultimoP);
// const pS = document.querySelectorAll('p');
// console.log(pS[pS.length - 1]);
// const paragrafos = document.querySelectorAll('p');
// console.log(paragrafos);
// paragrafos.forEach((p) => {
//   console.log(p.innerText);
// });
// const menu = document.querySelectorAll('.menu ul li a');
// console.log(menu);
// menu.forEach((item) => {
//   item.classList.add('ativo');
// if(item.hasAttribute('alt')){
//   console.log('bunda')
// }else{
//   console.log('pinto')
// }
//   let itemHref = item.getAttribute('href');
//   if(!itemHref.includes('#')){
//     let item2 = item.getAttribute('href');
//     item.setAttribute('href', "https://www.google.com.br");
//   }
// }
// );
// console.log(menu.length);
// for(let i = 1; i< menu.length; i++){
//   let itemMenu = menu.item(i);
//   itemMenu.classList.remove('ativo');
// }

// function Pessoa(nome,idade){
//   this.nome = nome;
//   this.idade = idade;
//   this.andar = function(){
//     return console.log(this.nome + ' andou');
//   }
// }
// const maria = new Pessoa('Maria', 25);
// const thaís = new Pessoa('Thaís', 22);
// const gustavo = new Pessoa('Gustavo', 21);
// console.log(gustavo.andar(), gustavo.idade)

// function Pessoa(nome, sobrenome, idade){
//   this.nome = nome;
//   this.sobrenome = sobrenome;
//   this.idade = idade;
// }
// Pessoa.prototype.nomeCompleto = function(){
//   return this.nome + this.sobrenome
// }

const todosP = document.querySelectorAll("p");
const pCaracter = Array.from(todosP);
const teste = pCaracter.reduce((acumulador, item) => {
  return acumulador + item.innerText.length;
}, 0);
console.log(teste);
console.log(pCaracter);
console.log(todosP);

function criaElemento(tag, classe, conteudo) {
  const element = document.createElement(`${tag}`);
  classe ? element.classList.add(`${classe}`) : null;
  conteudo ? (element.innerText = conteudo) : null;
  return element;
}

const criarTitulo = criaElemento.bind(null, "h1", "titulo");
console.log(criarTitulo("curso de TS"));
