/* ----------------------------------------------------------------------------

Exercício: 026
Enunciado:
    Existem 4 inputs de texto, cada um com um id diferente.
    Cada input só pode receber um caracter.
    O focus deve iniciar no primeiro input.
    Ao digitar um algarismo, o focus deve ir para o próximo input.
    Ao digitar o último algarismo, o focus deve ir para o primeiro input.
    Se todos os inputs estiverem preenchidos, o sistema deve verificar se o
    número constituído pela concatenacao dos 4 algarismos é igual a 1234.
    Se for igual, deve aparecer uma mensagem de sucesso, caso contrário,
    a mensagem de sucesso deve estar escondida.
---------------------------------------------------------------------------- */

const inputs = document.querySelectorAll(".form-control");
const txtSuccess = document.querySelector(".text-success");

inputs[0].focus();
txtSuccess.style.display = "none";

inputs.forEach((input, index) => {
    input.setAttribute("maxlength", 1);
    input.addEventListener("input", () => {
       if(input.value !== ""){
        let nxtIndex = (index + 1) % inputs.length;
        inputs[nxtIndex].focus();
       }
        verificaInputs();
    })
})

function verificaInputs(){
    let num = "";
    inputs.forEach(input => {
        num += input.value;
    })

   txtSuccess.style.display = (num === "1234") ? "block" : "none";
}