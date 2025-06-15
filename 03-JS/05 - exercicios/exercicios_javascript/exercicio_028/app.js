/* ----------------------------------------------------------------------------

Exercício: 028
Enunciado:
    Existe um botão o qual, ao ser clicado, cria 20 números aleatórios entre 1 e 1000.
    Esses números devem ser apresentados cada um em sua própria linha dentro do elemento
    cujo id é igual a "numeros".
---------------------------------------------------------------------------- */
 const saida = document.querySelector("#numeros");
 
 document.querySelector("button").addEventListener("click", (e) => {
     saida.innerHTML = "";
    for(let i = 0; i < 20; i++){
        saida.innerHTML += `${Math.floor(Math.random() * 1000) + 1}<br>`;
    }
 })