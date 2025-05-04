// OBJETOS

 let pessoa = {

    //propriedades
    nome: "Gabriel",
    apelido: "Verdan",
    idade: 27,
    genero: "Masculino",

    //metodos
    apresentar_nome: function() {
        return this.nome + " " + this.apelido
    },

    apresentar_idade: function() {
        return this.idade + " Anos de idade"
    },

 // array

 hobbies: [
    'Programação',
    'Correr',
    'Imaginar o Toguro tomando um pau pra mestra Genkai'
 ]

}

//------------------------------------------
// APRESENTAÇÃO DOS DADOS DE UM OBJETOS
//------------------------------------------

// console.log("\n#################");
// console.log(pessoa.nome);
// console.log("#################");
// console.log(pessoa['genero']);
// console.log("#################");
// console.log(pessoa.apresentar_nome());
// console.log("#################");
// console.log(pessoa.apresentar_idade());
// console.log("#################");
// console.table(pessoa.hobbies);


//------------------------------------------
// LISTAR TODAS AS PROPRIEDADES DE UM OBJETO
//------------------------------------------

// for (let propriedades in pessoa) {
//     console.log(pessoa[propriedades]);
// }


//--------------------------------
// INJETAR PROPRIEDADES AO AOBJETO
//--------------------------------

// pessoa.email = "tahoriemverdan@gmail.com";
// pessoa['mobile'] = "123456789";

// console.log(pessoa.email);
// console.log(pessoa.mobile);

//--------------------------------
// ELIMINAR PROPRIEDADES DO AOBJETO
//--------------------------------

// delete pessoa.idade;
// console.log(pessoa.idade);


// -------------------------------------------------------------------------------
// Copiar as propriedades de um objeto para outro, sem alterar o objeto principal
// -------------------------------------------------------------------------------

let transporte = {
    tipo: "automovel",
    ano: 2030,
    marca: "audi"
};

// SPREAD Operator

let transporte2 = {...transporte} // Peguei todas as propriedades do transporte
transporte.marca = "tesla";
console.table(transporte);
console.table(transporte2);