/* ----------------------------------------------------------------------------

Exercício: 009
Enunciado:
    Exercício simples: O texto é branco e o elemento range vai servir para
    alterar a transparência do texto. Do valor mais opaco à esquerda, até
    à transparência total à direita.

    NOTA: Deves definir os valores do range.
---------------------------------------------------------------------------- */

const range = document.querySelector('#range');
const texto = document.querySelector('h3');

range.setAttribute('min', 0);
range.setAttribute('max', 100);
range.setAttribute('step', 0.1);

let rangeValue = 0;


// range.addEventListener('input', (e) => {
//     rangeValue = e.target.value;
//     const aplha = 1 - (rangeValue/100);
//     texto.style.color = `rgba(255, 255, 255, ${aplha})`;
// });


// DAVA PRA FAZER ASSIM TAMBÉM

range.addEventListener('input', (e) => {
    texto.style.opacity = 1 - e.target.value / 100; 
});
