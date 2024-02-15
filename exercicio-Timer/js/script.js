const bi = document.querySelector(".button-i");
const bp = document.querySelector(".button-p");
const br = document.querySelector(".button-r");
const crono = document.querySelector(".timer");

let segundos = 0;
let timer;

function formatarSegundosParaHora(segundos) {
  let data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}

function iniciaRelogio() {
  if (timer) {
    clearInterval(timer);
  }
  timer = setInterval(() => {
    segundos++;
    crono.innerHTML = formatarSegundosParaHora(segundos);
  }, 1000);
}

bi.addEventListener("click", (e) => {
  e.preventDefault();
  crono.classList.remove("colorPause");
  crono.classList.add("colorInicia");
  clearInterval(timer);
  iniciaRelogio();
});

bp.addEventListener("click", (e) => {
  e.preventDefault();
  clearInterval(timer);
  crono.classList.remove("colorInicia");
  crono.classList.add("colorPause");
});

br.addEventListener("click", (e) => {
  e.preventDefault();
  crono.classList.remove("colorInicia");
  crono.classList.remove("colorPause");
  clearInterval(timer);
  crono.innerHTML = "00:00:00";
  segundos = 0;
});
