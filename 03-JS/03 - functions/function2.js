// FUNCTION EXPRESSIONS

// function escrever1() {
//     console.log("Escrevi !");
// }

// let escrever2 = function() {
//     console.log("Escrevi denovo");
// }

// escrever1();
// escrever2();

//----------------------
// Arrow Function *************************
//----------------------

// let funcao1 = function() {
//     console.log("Função 1");
// }

// let funcao2 = () => {
//     console.log("Arrow Function");
// }

// funcao1();
// funcao2();

// --------------------------
// Arrow Function com parametros
// -------------------------------

// let Arrow = (a, b) => {
//     return a + b;
// }

// console.log(Arrow(10, 20));

// // ou

// let adicao = (a, b) => a + b;
// console.log(adicao(10, 20));


// Se tiver APENAS UM paramentro fica assm:

let escrever = mensagem => console.log(mensagem);
escrever("\nÉ isso ai");
escrever("JS é lecal");