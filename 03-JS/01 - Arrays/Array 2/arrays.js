// Arrays

let nomes = ["Joao", "Ana", "Carlos"];

// ----------------------------
// Quantidade de Index no array
// ----------------------------

// console.log(nomes.length);


// -------------------------------------
// Inserindo elemento no FINAL do array
// -------------------------------------

// nomes.push("Marcelo");
// console.table(nomes);


// -------------------------------------
// Inserindo elemento no INICIO do array
// -------------------------------------

// nomes.unshift("Rachel");
// console.table(nomes);


// -------------------------------------
// Removendo elemento no INICIO do array
// -------------------------------------

// nomes.shift();
// console.table(nomes);


// -------------------------------------
// Removendo elemento no FIM do array
// -------------------------------------

// nomes.pop();
// console.table(nomes);


// -------------------------------------
// Remover ou adicionar elementos
// -------------------------------------

// console.table(nomes);

// //          iniciador, qtd removidos, adicionado, adicionado.
// //                     (pode ser 0)
// nomes.splice(1, 2, "Cazuza", "Frejat");

// console.table(nomes);


// -------------------------------------
// Ver Eliminados
// -------------------------------------

console.log('\n\nNomes Iniciais');
console.table(nomes);
let eliminados = nomes.splice(1, 1, "Markus", "Mc Rebeca", "L. Inutilismo");

console.log('\nNomes após splice.');
console.table(nomes);

console.log('\nNomes Eliminados.');
console.table(eliminados);
