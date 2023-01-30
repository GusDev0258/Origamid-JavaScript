const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add("ativo");
  function activeTab(index) {
    tabContent.forEach((tabItem) => {
      tabItem.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  }
  tabMenu.forEach((menuItem, index) => {
    menuItem.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
