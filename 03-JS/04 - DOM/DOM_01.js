// Manipulação de Atributos do DOM

// Alterando o conteúdo de um elemento
objeto.getAttribute('atriibuto', 'valor');
objeto.setAttribute('href', 'http://google.com');

// Removendo Atributos

objeto.removeAtribbute('href');


//Criando Elementos

let new_element = document.createElement('p');

new_element.innerText = 'New Text';

// Adicionando ao HTML
document.body.appendChild(new_element); // Nesse caso vai ao final do código.

// Pode ser usado:
elemento.before('elemento Que Será Inserido =)');
elemento.prepend('elemento que sera inserido');
elemento.after('elemento que sera inserido');


elemento.insertAdjacentHTML('beforebegin', elemento_novo);
elemento.insertAdjacentHTML('afterbegin', elemento_novo);
elemento.insertAdjacentHTML('beforeend', elemento_novo);
elemento.insertAdjacentHTML('afterend', elemento_novo);

// Remover elementos do HTML

elemento.remove();