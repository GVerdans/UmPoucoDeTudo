/* ----------------------------------------------------------------------------

Exercício: 003
Enunciado: CONTADOR COM CORES PARA NEGATIVOS, ZERO E POSITIVOS
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    No caso do valor ser zero o texto deve ser branco.
    No caso do valor ser negativo o texto deve ser vermelho puro.
    No caso do valor ser positivo o texto deve ser verde puro.

---------------------------------------------------------------------------- */

let contador = 0;
const contadorTela = document.querySelector("#valor");

document.querySelector("#btn_incremento").addEventListener("click", () => {
  document.querySelector("#valor").textContent = ++contador;
  setarValor();
});

document.querySelector("#btn_decremento").addEventListener("click", () => {
  document.querySelector("#valor").textContent = --contador;
  setarValor();
});

function setarValor() {
  contadorTela.innerHTML = contador;
  if (contador == 0) contadorTela.style.color = "white";
  else if (contador > 0) contadorTela.style.color = "green";
  else contadorTela.style.color = "red";
}
