// Arrays 2.1

let nomes = ["Joao", "Ana", "Carlos"];

//-------------------------------------------------
// Extrair parte de um array. Retorna um novo Array
//-------------------------------------------------

console.log('\nArray Original');
console.table(nomes);
//                              cortar a partir do indice 
//                              '0', 2 elementos
console.log('\nArray com slice a partir do indice "0", corta 2 elemtos');
let nomesExtraidos = nomes.slice(0,2);
console.table(nomesExtraidos);
console.log('O slice não destroi o array Original, ele cria outro\n Esse é o "nomes"');
console.table(nomes);

//-------------------------------------------------
// Juntar Arrays
//-------------------------------------------------

// console.table(nomes);

// let nomes2 = ["Joaquim", "Carla", "Manel"];
// nomes = nomes.concat(nomes2);
// console.table(nomes);

//-------------------------------------------------
// Procurar Itens num Array - Boolean
//-------------------------------------------------

// console.log(nomes.includes("Carlos")); // Retorna TRUE

//-------------------------------------------------
// Procura a POSIÇÃO no Array
//-------------------------------------------------

// console.table(nomes);
// console.log(nomes.indexOf("Ana")); // retorna '1'.


//-------------------------------------------------
// Converter ARRAY em STRING
//-------------------------------------------------

// let todosOsNomes = nomes.join(", ");
// console.log(todosOsNomes);
// console.log(typeof(todosOsNomes));