"use strict";

// function clearBoxes() {
//   document.querySelectorAll(".box").forEach((box) => box.remove());
// }

// document.querySelector("#red_btn").addEventListener("click", () => {
//   clearBoxes();

//   for (let i = 0; i < 255; i += 10) {
//     let temp = document.createElement("div");
//     temp.classList.add("box");
//     temp.style.background = `rgb(${i}, 0, 0)`;
//     document.body.appendChild(temp);
//   }
// });

// document.querySelector("#green_btn").addEventListener("click", () => {
//   clearBoxes();
//   // if(flags.green === false){

//   for (let i = 0; i < 255; i += 10) {
//     let temp = document.createElement("div");
//     temp.classList.add("box");
//     temp.style.background = `rgb(0, ${i}, 0)`;
//     document.body.appendChild(temp);
//   }

//   // }
// });

// document.querySelector("#blue_btn").addEventListener("click", () => {
//   // if(flags.blue === false){

//   clearBoxes();
//   for (let i = 0; i < 255; i += 10) {
//     let temp = document.createElement("div");
//     temp.classList.add("box");
//     temp.style.background = `rgb(0, 0, ${i})`;
//     document.body.appendChild(temp);
//   }

//   // }
// });


// ***************************
// Aumentando a complexidade
// ****************************

function clearBoxes() {
  // Função para limpar as divs, quando for mudar de cor.
  document.querySelectorAll(".box").forEach((box) => box.remove());
}

function clearAll(){ // Função do botão Clear
    document.querySelector("button#clear_all").addEventListener('click', () => {
        document.querySelectorAll(".box").forEach((box) => box.remove());
    })

}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    clearBoxes();
    for (let i = 0; i < 250; i += 10) {
      let temp = document.createElement("div");
      temp.classList.add("box");
      document.body.appendChild(temp);
      let id = event.target.id;

      if (id === "red_btn") {
        temp.style.background = `rgb(${i}, 0, 0)`;
      } else if (id === "green_btn") {
        temp.style.background = `rgb(0, ${i}, 0)`;
      } else if (id === "blue_btn") {
        temp.style.background = `rgb(0, 0, ${i})`;
      }
    }
  });
});
