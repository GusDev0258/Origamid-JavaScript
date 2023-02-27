export default class ToolTip {
  constructor(toolTip) {
    this.toolTip = document.querySelectorAll(toolTip);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseMove(event) {
    this.tooltipBox.style.top = event.pageY + 20 + "px";
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = event.pageX - 180 + "px";
    } else {
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    }
  }
  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    event.currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }
  onMouseOver(event) {
    this.createToolTip(event.currentTarget);
    event.currentTarget.addEventListener("mouseleave", this.onMouseLeave);
    event.currentTarget.addEventListener("mousemove", this.onMouseMove);
  }
  createToolTip(element) {
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tooltip");
    const text = element.getAttribute("aria-label");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }
  addTooltipsEvent() {
    this.toolTip.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }
  init() {
    if (this.toolTip.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
