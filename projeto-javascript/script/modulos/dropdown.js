import outsideClick from "./outsideClick.js";

export default function initDropdownMenu() {
  const subMenus = document.querySelectorAll("[data-dropdown]");
  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    outsideClick(this, () => {
      this.classList.remove("active");
    });
  }
  subMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
