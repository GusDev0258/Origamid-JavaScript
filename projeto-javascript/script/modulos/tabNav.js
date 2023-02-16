export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
    function activeTab(index) {
      tabContent.forEach((tabItem) => {
        tabItem.classList.remove("ativo");
      });
      const direcao = tabContent[index].dataset.anima;
      tabContent[index].classList.add("ativo", direcao);
    }
    tabMenu.forEach((menuItem, index) => {
      menuItem.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}