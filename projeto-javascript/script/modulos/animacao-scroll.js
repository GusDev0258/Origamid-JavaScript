export default class animationOnScroll {
  constructor(section) {
    this.getAllSections = document.querySelectorAll(section);
    this.getSixtyScreenHeight = window.innerHeight * 0.6;
    this.checkDistance = this.checkDistance.bind(this);
  }
  getSectionsDistance() {
    this.distance = [...this.getAllSections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.round(offset - this.getSixtyScreenHeight),
      };
    });
  }
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.scrollY > item.offset) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }
  init() {
    if (this.getAllSections.length) {
      this.getSectionsDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }
  stopAnimations() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
