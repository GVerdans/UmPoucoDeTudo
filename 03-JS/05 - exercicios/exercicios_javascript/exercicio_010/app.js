/* ----------------------------------------------------------------------------

Exercício: 010
Enunciado:
    Existem 4 áreas a cinza.
    Ao clicar numa das áreas a área clicada deve ficar com fundo
    amarelo e as restantes a vermelho.
---------------------------------------------------------------------------- */


document.querySelectorAll('.box').forEach((boxes) => {
    boxes.addEventListener("click", (e) => {
        document.querySelectorAll('.box').forEach(box => {
            box.style.background = 'red';
        })
        e.target.style.background = 'yellow';
        // console.log(e);
    })
})