/* ----------------------------------------------------------------------------

Exercício: 014
Enunciado:
    Ao clicar no botão "Adicionar", se o input de texto não estiver vazio, adicionar
    um parágrafo com esse texto por baixo do botão. 
    Depois da inserção com sucesso, o input deve ser limpo e receber o focus para
    nova inserção.
    Não são permitidas as palavras "teste", "obrigado" e "hoje"
---------------------------------------------------------------------------- */
const probidos = ["teste", "obrigado", "hoje", ""];
const inputText = document.querySelector("#text_post");

document.querySelector("button").addEventListener("click", () => {
    if (probidos.includes(inputText.value)){
        inputText.focus();
        return;
    } else {
        let p = document.createElement("p");
        document.querySelector('#posts').appendChild(p);
        p.textContent = inputText.value;
        inputText.value = "";
        inputText.focus();
    }
})

