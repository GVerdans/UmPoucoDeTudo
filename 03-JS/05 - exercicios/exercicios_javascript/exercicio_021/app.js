/* ----------------------------------------------------------------------------

Exercício: 021
Enunciado:
    Existem 4 inputs na página.
    1. Coloca o focus automaticamente no input acima e à esquerda.
    2. Sempre que pressionares a tecla Enter (return), o focus deverá
    passar para o input seguinte, mesmo que não tenhas escrito qualquer texto.
---------------------------------------------------------------------------- */

const inputs = document.querySelectorAll(".form-control");
inputs[0].focus();

inputs.forEach((input, index) => {
    input.addEventListener("keypress", (evt) => {
        if(evt.key === "Enter"){
            inputs[index + 1].focus();
        }
    })
})
