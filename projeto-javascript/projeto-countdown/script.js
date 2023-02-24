import Countdown from "./modules/countdown.js";
const timeToChristmas = new Countdown("25 December 2023 12:30:00");

const tempoDias = document.querySelector(".time-days");
const tempoHoras = document.querySelector(".time-hours");
const tempoMinutos = document.querySelector(".time-minutes");
const tempoSegundos = document.querySelector(".time-seconds");

function setarTempo() {
  setInterval(() => {
    tempoDias.innerHTML = timeToChristmas._remainingTotalTime.days;
    tempoHoras.innerHTML = timeToChristmas._remainingTotalTime.hours;
    tempoMinutos.innerHTML = timeToChristmas._remainingTotalTime.minutes;
    tempoSegundos.innerHTML = timeToChristmas._remainingTotalTime.seconds;
  }, 1000);
}
setarTempo();
