/* ----------------------------------------------------------------------------

Exercício: 016
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão. 
    Não importa a ordem das palavras e frases.
    Quando clicar em "Limpar", todas as palavras e frases devem desaparecer
    e o input deve ficar limpo e receber o focus.

    NOTA: O HTML não pode ser alterado.
---------------------------------------------------------------------------- */

const inputText = document.querySelector("#text_post");

document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.textContent === "Adicionar") {
            let newP = document.createElement("p");
            document.querySelector("#posts").appendChild(newP);
            newP.textContent = inputText.value;
            inputText.value = "";
            inputText.focus();
        }

        if (btn.textContent === "Limpar") {
            document.querySelector("#posts").innerHTML = "";
            inputText.focus();
        }
    })
    
})