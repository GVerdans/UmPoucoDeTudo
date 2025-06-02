/* ----------------------------------------------------------------------------

Exercício: 004
Enunciado: TRÊS SLIDERS COM VALORES INDEPENDENTES
    
    Estão disponíveis três input ranges e respetivas áreas de apresentação dos valores.
    Criar os mecanismos que permitem visualizar os valores dos sliders.
    Todos os sliders devem variar entre 0 e 100. Essas propriedades devem ser
    definidas através do JavaScript.

---------------------------------------------------------------------------- */

const range1 = document.querySelector("#range_1");
range1.setAttribute("min", 0);
range1.setAttribute("max", 100);
range1.value = 0;

range1.addEventListener("input", (e) => {
    document.querySelector("#value_1").textContent = e.target.value;
})

const range2 = document.querySelector("#range_2");
range2.setAttribute("min", 0);
range2.setAttribute("max", 100);
range2.value = 0;

range2.addEventListener("input", (e) => {
    document.querySelector("#value_2").textContent = e.target.value;
})

const range3 = document.querySelector("#range_3");
range3.setAttribute("min", 0);
range3.setAttribute("max", 100);
range3.value = 0;

range3.addEventListener("input", (e) => {
    document.querySelector("#value_3").textContent = e.target.value;
})