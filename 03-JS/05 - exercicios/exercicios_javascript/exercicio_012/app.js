/* ----------------------------------------------------------------------------

Exercício: 012
Enunciado:
    Ao clicar no botão "Adicionar", se o input de texto não estiver vazio, adicionar
    um parágrafo com esse texto por baixo do botão.
---------------------------------------------------------------------------- */

const inputText = document.querySelector("#text_post");

document.querySelector(".btn").addEventListener("click", () => {
    // createElement("ul", )
    if (inputText.value == ""){
        return;
    } else {
        document.querySelector("#posts").innerHTML += `<p>${inputText.value}</p>`;
    }
    inputText.value = "" ;
});