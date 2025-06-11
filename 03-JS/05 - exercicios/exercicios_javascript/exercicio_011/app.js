/* ----------------------------------------------------------------------------

Exercício: 011
Enunciado:
    A grelha inicial contém dezasseis imgs sem souce.
    Quando clicamos numa das imgs, vamos apresentar o símbolo X (imagem)
    No clique seguinte, que só pode acontecer numa img que não tenha símbolo,
    vamos apresentar o símbolo 'O'.
---------------------------------------------------------------------------- */
let xJoga = true;

const divs = document.querySelectorAll('[id^=img]');

divs.forEach((div) => {
    div.addEventListener("click", (e) => {

        if (!e.target.style.backgroundImage){
            if(xJoga){
                e.target.style.backgroundImage = "url('x.png')"
            } else {
                e.target.style.backgroundImage = "url('o.png')"
            }

            xJoga = !xJoga;
        }
    })
});