/* ----------------------------------------------------------------------------

Exercício: 023
Enunciado:
    Existem 4 checkboxes referentes a um conjunto de permissões de usuário.
    Cada checkbox pode ser checkada individualmente.
    Por baixo existem duas opções: todas e nenhuma.
    Ao clicar em todas, todas as checkboxes devem ser checkadas.
    Ao clicar em nenhuma, todas as checkboxes devem ser descheckadas.
---------------------------------------------------------------------------- */

const btnTodos = document.querySelector("#all");
const btnNenhum = document.querySelector("#none");

btnTodos.addEventListener("click", () => {
    document.querySelectorAll("input[type='checkbox']").forEach(cb => {
        cb.checked = true;
    })
})

btnNenhum.addEventListener("click", () => {
    document.querySelectorAll("input[type='checkbox']").forEach(cb => {
        cb.checked = false;
    })
})