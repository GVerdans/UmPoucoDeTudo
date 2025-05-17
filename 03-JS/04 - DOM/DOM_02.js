// Event Handlers
// Funções que da pra jogar no HTML

onclick(); // O nome é sugestivo.
oncontextmenu(); // Dispara com right Click. 
onmouseenter(); // Quando o mouse entra numa area/elemento;
onmousemove(); // Quando o mouse se move numa area/elemento;
onmouseleave(); // Quando o mouse sai de uma area/elemento;


// Event Listeners

let button = document.querySelector('button');
button.addEventListener('click', function(){ // aqui pode entrar Arrow Function
    console.log('Event Listeners !');
})

// Exemplos com Arrow Function
button.addEventListener('click', () => console.log('isso ai'));


document.querySelector("button").addEventListener('click', (e) => {
    console.log('Banana');
})