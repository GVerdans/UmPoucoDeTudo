/* ----------------------------------------------------------------------------

Exercício: 001
Enunciado: CONTADOR
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento. Ao clicar em cada
    um dos botões, o utilizador irá aumentar ou diminuir o valor em uma unidade.

---------------------------------------------------------------------------- */

let contador = 0;

// function attScreen(){
//     document.querySelector("#valor").innerHTML = contador;
// }

const btnIncrementa = document.querySelector("#btn_incremento").addEventListener("click", () => {
    document.querySelector("#valor").innerHTML = ++contador;
    // attScreen();
})

const btnDecrementa = document.querySelector("#btn_decremento").addEventListener("click", () => {
    document.querySelector("#valor").textContent = --contador;
    // attScreen();
})


