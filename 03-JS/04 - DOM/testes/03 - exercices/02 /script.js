// Desativando função Nativa.

document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault(); // Desativa a função DEFAULT do elemento.
});

// Desativa o Submit do FORM

document.querySelector('input[type="submit"]').addEventListener('click', (event) => {
    console.log(event);
    event.preventDefault();
    event.stopPropagation();

});

// CUIDADO COM A PROPAGATION.

document.querySelector('.box').addEventListener('click', (e) => {
    console.log('DIV')
})