/* ----------------------------------------------------------------------------

Exercício: 020
Enunciado:
    Existem 4 inputs na página.
    Sempre que o focus de um input for alterado, a cor de fundo do input
    deve ficar amarela, indicando que o input está ativo. 
    Os inativos devem ficar a branco.
---------------------------------------------------------------------------- */

// Esse eu fiz

document.querySelectorAll(".form-control").forEach((input) => {
    input.addEventListener("focus", (evt) => {
        document.querySelectorAll(".form-control").forEach((element) => {
            element.style.background = "white"
            evt.target.style.background = "yellow";
        })
    })
})

// Esse é o Gabarito '-'

// document.querySelectorAll(".form-control").forEach(e => {
//     e.addEventListener("focus", () => {
//         e.style.background = "yellow"
//     })

//     e.addEventListener("blur", () => {
//         e.style.background = "white"
//     })
// })