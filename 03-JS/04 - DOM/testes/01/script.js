let btn = document.querySelector('button');
let box = document.querySelector('.box');

function changeBgc() {
    console.log('click');
    box.classList.add('bgc-box');
    btn.removeEventListener('click', changeBgc);
    btn.textContent = 'BGC Changed !';

}

btn.addEventListener('click', changeBgc);
