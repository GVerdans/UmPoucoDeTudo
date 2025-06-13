/* ----------------------------------------------------------------------------

Exercício: 022
Enunciado:
    Está disponível um elemento select com 3 opções.
    Por baixo existem 4 checkboxes.
    Quando é selecionada a opção 3 no select, as checkboxes devem ficar ativas.
    Qualquer outra opção, devem desativar as checkboxes.
---------------------------------------------------------------------------- */

const select = document.querySelector("select");

// document.querySelectorAll("input[type='checkbox']").forEach(cb => {
//     cb.disabled = true;

select.addEventListener("change", () => {

    if (select.value === "3") {
        document.querySelectorAll("input[type='checkbox']").forEach(cb => {
            cb.disabled = false;
        })
    } else {
        document.querySelectorAll("input[type='checkbox']").forEach(cb => {
            cb.disabled = true;
        })
    }

})
