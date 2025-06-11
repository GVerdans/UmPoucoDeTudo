/* ----------------------------------------------------------------------------

Exercício: 017
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão. 
   
    Não pode ser adicionada uma palavra ou frase repetida.
---------------------------------------------------------------------------- */

const inputText = document.querySelector("#text_post");
let lista = [];

document.querySelector("button").addEventListener("click", () => {

    if (!inputText.value == ""){
        if (!lista.includes(inputText.value)){
            let newP = document.createElement("p");
            document.querySelector("#posts").appendChild(newP);
            newP.textContent = inputText.value;
            
            
            lista.push(inputText.value); // para fazer as validaçoes !
            inputText.value = "";
            inputText.focus();
        };
    };
});