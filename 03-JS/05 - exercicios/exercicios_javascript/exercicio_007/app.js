/* ----------------------------------------------------------------------------

Exercício: 006
Enunciado:
    O mesmo exercício do vídeo anterior, mas com código mais sintético.
---------------------------------------------------------------------------- */
document.querySelectorAll("[id^=info]").forEach((e) => {e.classList.add("d-none")});

document.querySelector("#info1").classList.remove("d-none");

document.querySelectorAll("[id^=tab]").forEach((btn) => {
    btn.addEventListener("click", (btn) => {
        document.querySelectorAll("[id^=info]").forEach((e) => {e.classList.add("d-none")});
        document.querySelector("#info" + btn.target.id.substring(3)).classList.remove("d-none")
    })
})