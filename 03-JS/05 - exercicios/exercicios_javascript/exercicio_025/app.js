/* ----------------------------------------------------------------------------

Exercício: 025
Enunciado:
    O input number text_numero é o multiplicando. O seu valor só pode variar
    entre 1 e 20. Ao alterar o valor, deve ser apresentada a tabuada do número definido
    no div cujo id = resultados.
---------------------------------------------------------------------------- */

const inputNum = document.querySelector("#text_numero");
const resultado = document.querySelector("#resultados");
inputNum.setAttribute("min", 1);
inputNum.setAttribute("max", 20);

inputNum.addEventListener("change", () => {
    resultado.innerHTML = "";
    fazAsContas(inputNum.value)
    // for ( let i = 0; i < 11; i++){
    //     resultado.innerHTML += `${i} x ${inputNum.value} = ${inputNum.value * i} <br>`;
    // }
})

function fazAsContas(num){
    for (let i = 0; i < 11; i++){
        let mult = `${i} x ${num} = ${num * i}<br>`;
        resultado.innerHTML += mult;
    }
}