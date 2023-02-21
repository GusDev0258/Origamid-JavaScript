export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horariosSemana = funcionamento.dataset.horario.split(",").map(Number);
  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = +dataAgora.getHours();
  const isAbertoDia = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto =
    horarioAgora >= horariosSemana[0] && horarioAgora < horariosSemana[1];
  if (isAbertoDia && horarioAberto) {
    funcionamento.classList.add("aberto");
  } else {
    funcionamento.classList.add("fechado");
  }
}
