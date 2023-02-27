export default class Modal {
  constructor(btnAbrir, btnFechar, container) {
    this.botaoAbrir = document.querySelector(btnAbrir);
    this.botaoFechar = document.querySelector(btnFechar);
    this.containerModal = document.querySelector(container);
    //bind do this ao callback para fazer referência ao objeto(padrão)
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.foraModal = this.foraModal.bind(this);
  }
  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }
  foraModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }
  addModalEvent() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.foraModal);
  }
  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
