export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
  }
  activeTab(index) {
    this.tabContent.forEach((tabItem) => {
      tabItem.classList.remove("ativo");
    });
    const direcao = this.tabContent[index].dataset.anima;
    this.tabContent[index].classList.add("ativo", direcao);
  }
  addEvent() {
    this.tabMenu.forEach((menuItem, index) => {
      menuItem.addEventListener("click", () => {
        this.activeTab(index);
      });
    });
  }
  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addEvent();
    }
  }
}
