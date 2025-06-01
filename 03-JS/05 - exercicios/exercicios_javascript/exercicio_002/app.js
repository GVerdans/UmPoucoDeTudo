/* ----------------------------------------------------------------------------

Exercício: 002
Enunciado: CONTADOR COM INTERVALO DE VALORES
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    O valor nunca poderá ser inferior a -10 ou superior a 10.

---------------------------------------------------------------------------- */

let contador = 0;

const btnIncremento = document.querySelector("#btn_incremento");
const btnDecremento = document.querySelector("#btn_decremento");
const contadorTela = document.querySelector("#valor");

btnIncremento.addEventListener("click", () => {
    if(contador == 10) return;
    document.querySelector("#valor").textContent = ++contador;
})

btnDecremento.addEventListener("click", () => {
    if(contador == -10) return;
    document.querySelector("#valor").textContent = --contador;
})
