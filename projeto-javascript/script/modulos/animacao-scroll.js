export default function animationOnScroll() {
  const getAllSections = document.querySelectorAll(".js-scroll");
  const getSixtyScreenHeight = window.innerHeight * 0.6;
  function animarScroll() {
    getAllSections.forEach((section) => {
      const getSectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = getSectionTop - getSixtyScreenHeight < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }
  animarScroll();
  window.addEventListener("scroll", animarScroll);
}
