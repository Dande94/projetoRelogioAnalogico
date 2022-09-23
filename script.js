//selecionar os elementos que vamos manipular;
let digitalElemnt = document.querySelector('.digital');//relogio dgital
let sElement = document.querySelector('.p_s');//ponteiro segundos
let mElement = document.querySelector('.p_m');//ponteiro minutos
let hElement = document.querySelector('.p_h');//ponteiro horas

function updateClock(){//atualizar relogio
    let now =  new Date(); //classe para manipualçao de data e horarios;
    let hour = now.getHours();//capturou a hora;
    let minute = now.getMinutes();//capturou os minutos;
    let second = now.getSeconds();//capturou os segundos;

    digitalElemnt.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`; // estrutura do relógio digital;

    let sDeg = ((360 / 60) * second) - 90;//cálculo para saber quantos os graus equivalem em segundos e vezes a quatidade de segundos capturada no getSeconds, o -90 é para corrigir o eixo dos graus por conta da localição do CSS;
    let mDeg = ((360 / 60) * minute ) - 90;//mesma lógica do segundos
    let hDeg = ((360 / 12) * hour ) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;//manipulação da posição do ponteiro segundos (DOM);
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;


}

function fixZero(time){//função para adicionar 0 nos numeros menores que 10, assim todos ficam com 2 digitos sem quebra a estrutura;
        return time < 10 ? `0${time}`: time;//if ternário para simplificar;
}

setInterval(updateClock,1000);
updateClock();