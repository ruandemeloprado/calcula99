const form = document.getElementById('envia');
const distancia = document.getElementById('distancia');
const tempo = document.getElementById('tempo');
const valor = document.getElementById('valor');
let distanciaCalculada = 0;
let tempoCalculado = 0;
let valorMinimo = 6.20;
let valorPorMinuto = 0.23;
let valorPorKm = 1.25;
let valorTempo = 0;
let valorDistancia = 0;
let valorCorrida = 0;

form.addEventListener('click', (e) =>{
    e.preventDefault();
    calculaValor();
    console.log(valorCorrida);
    valor.innerHTML = 'O valor final de sua corrida é: R$' + valorCorrida;
})


function calculaValor(){
    distanciaCalculada = parseFloat(distancia.value);
    tempoCalculado = parseFloat(tempo.value);
    valorTempo = tempoCalculado * valorPorMinuto;
    valorDistancia = distanciaCalculada * valorPorKm;
    valorCorrida = valorMinimo + valorDistancia + valorTempo;
    valorCorrida = parseFloat(valorCorrida).toFixed(2);
}   