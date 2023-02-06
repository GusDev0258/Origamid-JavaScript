function initTabNav() {
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
}
initTabNav();
function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  if (accordionList.length) {
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.add("ativo");
    function activeAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

function softScroll() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  function scrollToSection(event) {
    event.preventDefault();
    const getHREF = event.currentTarget.getAttribute("href");
    const getSection = document.querySelector(getHREF);
    //Another Way
    getSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    //One way
    //const getSectionTop = getSection.offsetTop;
    // window.scrollTo({
    //   top: getSectionTop,
    //   behavior: 'smooth',
    // })
  }
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
softScroll();
function animationOnScroll() {
  const getAllSections = document.querySelectorAll(".js-scroll");
  const getSixtyScreenHeight = window.innerHeight * 0.6;
  function animarScroll() {
    getAllSections.forEach((section) => {
      const getSectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = getSectionTop - getSixtyScreenHeight < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      } else {
        section.classList.remove("ativo");
      }
    });
  }
  animarScroll();
  window.addEventListener("scroll", animarScroll);
}
animationOnScroll();