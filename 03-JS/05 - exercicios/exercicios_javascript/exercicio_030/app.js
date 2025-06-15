/* ----------------------------------------------------------------------------

Exercício: 030
Enunciado:
    No input de texto só podemos inserir números.
    Se clicarmos no botão "Calcular", devemos apresentar o resultado do valor
    inserido no input de texto a dividir por 3.
    Todos os resultados devem ser apresentados com uma casa decimal.
    Se o resultado de qualquer cálculo for incorreto, deve aparecer a mensagem
    "Valor inválido"
---------------------------------------------------------------------------- */

const inputTxt = document.querySelector("#text_valor");
const saidaTxt = document.querySelector("#resultado");

document.querySelector("button").addEventListener("click", () => {
    if(isNaN(inputTxt.value) || inputTxt.value.trim() == ""){
      saidaTxt.textContent = "Valor Inválido !"
} else {
      let divisao = inputTxt.value / 3;
      saidaTxt.textContent = divisao.toFixed(1);
  }
    
})