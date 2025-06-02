/* ----------------------------------------------------------------------------

Exercício: 005
Enunciado: TRÊS SLIDERS COM VALORES INDEPENDENTES - VERSÃO CÓDIGO REDUZIDO
    
    O exercício anterior, mas com quantidade de código JS reduzida.

---------------------------------------------------------------------------- */

// Exercicio da versao anterior -- Longa

// const range1 = document.querySelector("#range_1");
// range1.setAttribute("min", 0);
// range1.setAttribute("max", 100);
// range1.value = 0;

// range1.addEventListener("input", (e) => {
//     document.querySelector("#value_1").textContent = e.target.value;
// })


// Forma Curta

for (let i = 1; i <= 3; i++){
    const rangeX = document.querySelector(`#range_${i}`);
    rangeX.setAttribute("min", 0);
    rangeX.setAttribute("max", 100);
    rangeX.value = 0;

    rangeX.addEventListener("input", (e) => {
        document.querySelector(`#value_${i}`).textContent = e.target.value;
    });
}