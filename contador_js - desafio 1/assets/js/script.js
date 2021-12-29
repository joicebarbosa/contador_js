var numeroAtualWhapper = document.getElementById ('numeroAtual');
var numeroAtual = 0;

var botaoSubtrai = document.querySelector("#subtrai");
botaoSubtrai.addEventListener("click", function(event) {
  event.preventDefault();

    numeroAtual =  numeroAtual - 1;
    numeroAtualWhapper.innerHTML = numeroAtual;
})

var botaoSoma = document.querySelector("#soma");
botaoSoma.addEventListener("click", function(event) {
  event.preventDefault();

    numeroAtual =  numeroAtual + 1;
    numeroAtualWhapper.innerHTML = numeroAtual;
})

