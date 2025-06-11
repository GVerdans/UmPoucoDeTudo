/* ----------------------------------------------------------------------------

Exercício: 015
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão.

    As palavras e frases mais recentes devem ficar no topo.
---------------------------------------------------------------------------- */

const inputText = document.querySelector("#text_post");

document.querySelector("button").addEventListener("click", () => {
    if (inputText.value == ""){
        inputText.focus();
        return;
    } else {
        let p = document.createElement("p");
        p.textContent = inputText.value;
        document.querySelector("#posts").prepend(p);
        inputText.value = "";
        inputText.focus();
    }

    
})