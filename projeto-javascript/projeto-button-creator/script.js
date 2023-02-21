const controles = document.querySelector("#controles");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");

controles.addEventListener("change", handleChange);

const handleStyle = {
  element: btn,
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "rem";
  },
};

function handleChange(event) {
  const target = event.target;
  const name = target.name;
  const value = target.value;

  handleStyle[name](value);
  saveStorage(name, value);
  showCss();
  console.log(name, value);
}

function saveStorage(name, value) {
  localStorage[name] = value;
}
function setValues() {
  const propriedades = Object.keys(localStorage);
  propriedades.forEach((propriedade) => {
    handleStyle[propriedade](localStorage[propriedade]);
    controles.elements[propriedade] = localStorage[propriedade];
  });
  showCss();
}
setValues();

function showCss() {
  cssText.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}
