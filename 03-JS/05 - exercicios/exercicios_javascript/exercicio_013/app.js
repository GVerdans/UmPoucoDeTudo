/* ----------------------------------------------------------------------------

Exercício: 013
Enunciado:
    Ao clicar no botão "Adicionar", se o input de texto não estiver vazio, adicionar
    um parágrafo com esse texto por baixo do botão. O texto deve apresentar uma numeração
    sequencial e depois de inserido, o input deve ser limpo e receber o focus para
    nova inserção.
---------------------------------------------------------------------------- */

const inputText = document.querySelector("#text_post");
const posts = document.querySelector("#posts");
let ul = document.createElement("ul");
ul.style.listStyleType = "decimal";
posts.appendChild(ul);

document.querySelector("button").addEventListener("click", () => {

    if (inputText.value == ""){
        inputText.focus();
        return;
    } else {
        let li = document.createElement("li");
        li.innerHTML = `<p>${inputText.value}</p>`;
        ul.appendChild(li);
        inputText.value = "";
        inputText.focus();
    }
});
