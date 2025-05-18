"use strict";

document.querySelector('input[name="user"]').addEventListener('keyup', () => {
    if (document.querySelector('input[name="user"] + span') !== null) {
        document.querySelector('input[name="user"] + span').remove();
    }
});

document.querySelector('input[name="password"]').addEventListener('keyup', () => {
    if (document.querySelector('input[name="password"] + span') !== null) {
        document.querySelector('input[name="password"] + span').remove();
    }
});


document.form_login.addEventListener("submit", (event) => {
  // Esses são os names do HTML
  let user = event.target.user.value;
  let password = event.target.password.value;
  let submit = true;


  document.querySelectorAll('.error').forEach(e => e.remove());

  if (user === "") {
    submit = false;

    let temp = document.querySelector('input[name="user"]');
    let span = document.createElement("span");
    span.className = "error";
    span.textContent = "User Obrigatório !";
    temp.insertAdjacentElement("afterend", span);
  }

  if (password === "") {
    submit = false;

    let temp = document.querySelector('input[name="password"]');
    let span = document.createElement("span");
    span.className = "error";
    span.textContent = "Senha Obrigatória !";
    temp.insertAdjacentElement("afterend", span);
  }

  if (!submit) {
    event.preventDefault();

    // setTimeout(() => {
    //     document.querySelectorAll('.error').forEach(e => e.remove());
    // }, 2000)
  }
});
