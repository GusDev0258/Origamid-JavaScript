export default class softScroll {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = {
        behavior: "smooth",
        block: "start",
      };
    } else {
      this.options = options;
    }
  }
  scrollToSection(event) {
    event.preventDefault();
    const getHREF = event.currentTarget.getAttribute("href");
    const getSection = document.querySelector(getHREF);
    getSection.scrollIntoView(this.options);
  }
  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", (event) => {
        this.scrollToSection(event);
      });
    });
  }
  init() {
    if (this.linksInternos.legth) {
      this.addLinkEvent();
    }
    return this;
  }
}
