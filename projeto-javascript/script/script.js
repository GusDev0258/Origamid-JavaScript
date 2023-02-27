import softScroll from "./modulos/scroll-suave.js";
import animationOnScroll from "./modulos/animacao-scroll.js";
import Accordion from "./modulos/accordion.js";
import TabNav from "./modulos/tabNav.js";
import Modal from "./modulos/modal.js";
import ToolTip from "./modulos/tooltip.js";
import initDropdownMenu from "./modulos/dropdown.js";
import initMenuMobile from "./modulos/menu-hamburger.js";
import initFuncionamento from "./modulos/funcionamento.js";
import fetchAnimais from "./modulos/animaisfetch.js";
import initGetBitcoins from "./modulos/getBitcoins.js";

const scrollSuave = new softScroll('.js-menu a[href^="#"]');
scrollSuave.init();
const accordionList = new Accordion(".js-accordion dt");
accordionList.init();
const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();
const toolTip = new ToolTip("[data-tooltip]");
toolTip.init();

fetchAnimais(
  "http://127.0.0.1:5500/projeto-javascript/script/modulos/animaisapi.json",
  ".numeros-grid"
);

animationOnScroll();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initGetBitcoins();
