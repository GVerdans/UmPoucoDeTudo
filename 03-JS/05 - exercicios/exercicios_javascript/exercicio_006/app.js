/* ----------------------------------------------------------------------------

Exercício: 006
Enunciado:
    Existem 3 botões no layout. Cada botão está associado a uma área de
    informação. O objetivo é criar a lógica que permite apresentar cada
    uma das áreas de acordo com o botão clicado.
    A área de informação um deve estar visível por padrão.

    NOTA: quando uma área é apresentada, as outras devem ficar escondidas
---------------------------------------------------------------------------- */

function hideAll(){
document.querySelectorAll("[id^='info']").forEach((el) => { el.classList.add("d-none")}
)}

function showAll(id){
    document.querySelector(`#info${id}`).classList.remove("d-none");
}

document.querySelectorAll("[id^='tab']").forEach((btn) => {
    btn.addEventListener("click", (btn) => {
        hideAll();
        showAll(btn.target.id.substring(3))
    })
})

hideAll();
showAll(1);

