/* ----------------------------------------------------------------------------

Exercício: 025
Enunciado:
    O input number text_numero é o multiplicando. O seu valor só pode variar
    entre 1 e 20. Ao alterar o valor, deve ser apresentada a tabuada do número definido
    no div cujo id = resultados.
---------------------------------------------------------------------------- */

const inputNum = document.querySelector("#text_numero");
inputNum.setAttribute("min", 1);
inputNum.setAttribute("max", 20);

inputNum.addEventListener("change", () => {
    document.querySelector("#resultados").innerHTML = "";
    for ( let i = 0; i < 11; i++){
        document.querySelector("#resultados").innerHTML += `${i} x ${inputNum.value} = ${inputNum.value * i} <br>`;
    }
})