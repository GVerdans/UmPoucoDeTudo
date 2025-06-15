/* ----------------------------------------------------------------------------

Exercício: 029
Enunciado:
    Começando pelo exercício 28, mas agora queremos apresentar os números numa
    sequência de quatro por cada linha. Deve aparecer com fundo branco e texto 
    de cor verde. Deve ter uma distribuição consistente da informação. 
---------------------------------------------------------------------------- */
const saida = document.querySelector("#numeros");
const div_row = document.createElement("div");
div_row.classList.add("row");

document.querySelector('button').addEventListener("click", () => {
    div_row.innerHTML = "";

    for(let i = 0; i < 20; i++){
        const numeros = Math.floor(Math.random() * 1000) + 1;
        const div_col = document.createElement("div");
        div_col.classList.add("col-3", "text-center");
        div_col.style.background = "white"
        div_col.style.color = "green"
        div_col.style.padding = "10px"
        div_col.textContent = numeros;
        div_row.appendChild(div_col)

    }
    saida.appendChild(div_row);
})