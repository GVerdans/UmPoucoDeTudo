'use strict'
/*
let section = document.querySelector("section");
let article = document.querySelector("article");
let div = document.querySelector("div");

section.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('section');
});

article.addEventListener('click', (event) => {
    event.stopPropagation(); // Para a propagação dos events listeners.
    console.log('article');
});

div.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('div');
});
*/

let elements = document.querySelectorAll('section, article, div');

elements.forEach((event) => {
    event.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log(e.target.tagName);
    })
})