const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

/* A cada 1 segundo vai ser executado essa função */
const relogio = setInterval(function time() {
    /* Obtém o momento em horas, minutos e segundos */
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    /* Formata os dados de tempo obtidos */
    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(s < 10) s = '0' + s;

    /* Renderiza o horário atual */
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
});