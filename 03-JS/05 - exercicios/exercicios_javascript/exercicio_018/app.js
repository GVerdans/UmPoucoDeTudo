/* ----------------------------------------------------------------------------

Exercício: 018
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão. 
   
    Cada texto inserido deve ser precedido da expressão "Eliminar" com cor vermelha
    e como efeito de um mouse hover.

    Se clicar em "Eliminar" apenas poderá ser removida a palavra ou frase
    correspondente.
---------------------------------------------------------------------------- */

const inputText = document.querySelector("#text_post");
let tasks = [];

document.querySelector("button").addEventListener("click", () => {
    if(inputText.value !== "") {
        let newP = document.createElement("p");
        
        let btnDelete = document.createElement("span");
        btnDelete.style.cursor = "pointer";
        btnDelete.classList.add("text-danger");
        btnDelete.textContent = "Delete";
        
        newP.appendChild(btnDelete);
        newP.append(` => ${inputText.value}`);
        document.querySelector("#posts").appendChild(newP);

        btnDelete.addEventListener("click", () => {
            btnDelete.parentNode.remove();
        })

        inputText.focus();
        inputText.value = "";

    }
})
