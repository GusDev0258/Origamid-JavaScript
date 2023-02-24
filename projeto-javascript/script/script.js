import softScroll from "./modulos/scroll-suave.js";
import animationOnScroll from "./modulos/animacao-scroll.js";
import Accordion from "./modulos/accordion.js";
import initTabNav from "./modulos/tabNav.js";
import initModal from "./modulos/modal.js";
import initToolTip from "./modulos/tooltip.js";
import initDropdownMenu from "./modulos/dropdown.js";
import initMenuMobile from "./modulos/menu-hamburger.js";
import initFuncionamento from "./modulos/funcionamento.js";
import initAnimaisFetch from "./modulos/animaisfetch.js";
import initGetBitcoins from "./modulos/getBitcoins.js";

const scrollSuave = new softScroll('.js-menu a[href^="#"]');
scrollSuave.init();
const accordionList = new Accordion(".js-accordion dt");
accordionList.init();

animationOnScroll();
initTabNav();
initModal();
initToolTip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initAnimaisFetch();
initGetBitcoins();
