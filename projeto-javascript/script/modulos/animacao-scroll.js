export default class animationOnScroll {
  constructor(section) {
    this.getAllSections = document.querySelectorAll(section);
    this.getSixtyScreenHeight = window.innerHeight * 0.6;
    this.animarScroll = this.animarScroll.bind(this);
  }

  animarScroll() {
    this.getAllSections.forEach((section) => {
      const getSectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = getSectionTop - this.getSixtyScreenHeight < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }
  addEventAoWindow() {
    window.addEventListener("scroll", this.animarScroll);
  }
  init() {
    if (this.getAllSections.length) {
      this.animarScroll();
      this.addEventAoWindow();
    }
  }
}
