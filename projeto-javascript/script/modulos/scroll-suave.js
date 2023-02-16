export default function softScroll() {
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
