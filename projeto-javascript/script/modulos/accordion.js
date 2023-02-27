export default class Accordion {
  constructor(lista) {
    this.accordionList = document.querySelectorAll(lista);
  }
  activeAccordion(item) {
    item.classList.toggle("ativo");
    item.nextElementSibling.classList.toggle("ativo");
  }
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", (item) => {
        this.activeAccordion(item);
      });
    });
  }
  init() {
    if (this.accordionList.length) {
      this.activeAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
