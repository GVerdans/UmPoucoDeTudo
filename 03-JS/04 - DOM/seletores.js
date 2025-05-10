// Seletores JS

document.getElementById(id); // #
document.getElementsByClassName(Class) // .
document.getElementsByName(name) // Esse name é a tag do HTML
document.getElementsByTagName(Tag) // Esse aqui são as tags do HTML tambem, tipo div, a, p.

elemento.innerHTML // Aqui retorna o conteudo HTML COMPLETO, incluindo texto, tags e tal. Aqui dá pra injetar HTML também.
elemento.innerText // Aqui só retorna o texto 
elemento.textContent // Mesma coisa do innerText

// QuerySelector

document.querySelector(); // Posso pegar qualquer coisa. Mas apenas uma.
document.querySelectorAll('p'); // Pega todos os 'p' do documento.

// atribbute Selector

document.querySelector('[name]'); // todos os elementos que contem o atributo NAME
document.querySelectorAll('p[name]'); // todos os elementos P que contem atributo NAME
document.querySelectorAll('[name = "texto"]'); // todos os elementos que contem atributo NAME cujo value seja texto.
document.querySelectorAll('div, p, h1'); // Dá pra agrupar elementos.


// Em resumo, todos os seletores CSS se aplicam aos querySelector.