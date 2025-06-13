/* ----------------------------------------------------------------------------

Exercício: 024
Enunciado:
    Existem 8 checkboxes referentes a um conjunto de permissões de usuário.
    Cada uma delas pode ser checkada individualmente.
    Por baixo, existe um select com 3 perfis de usuário: administrador, coordenador
    e operador.
    Ao selecionar um perfil, as checkboxes devem ser checkadas de acordo com o
    perfil selecionado.

    Administrador: 
        Todas as permissões

    Coordenador: 
        Coordenação dos trabalhos
        Gestão de calendário
        Utilização das máquinas
        Utilização das ferramentas

    Operador:
        Utilização das máquinas
        Utilização das ferramentas

    NOTA: sem perfil, todas as checkboxes devem estar descheckadas.

---------------------------------------------------------------------------- */

const allCB = document.querySelectorAll("input[type='checkbox']");
const select = document.querySelector("#select_perfil");

// allCB.forEach(cb => {
//     cb.checked = false;
// })

    select.addEventListener("change", () => {
        if (select.value == "administrador") {
            allCB.forEach(cb => {
                cb.checked = true;
            })

        } else if (select.value == "") {
            allCB.forEach(cb => {
                cb.checked = false;
            })

        } else if (select.value == "coordenador") {
            allCB[4].checked = true;
            allCB[5].checked = true;
            allCB[6].checked = true;
            allCB[7].checked = true;

        } else if (select.value == "operador") {
            allCB[6].checked = true;
            allCB[7].checked = true;
        }
    })