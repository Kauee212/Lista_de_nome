const nomes = [];
const lista = document.getElementById("lista");
const formulario = document.getElementById("formulario");
const input = document.getElementById("nome");

function mostrarNomes() {
    lista.innerHTML = "";
    for (let nome of nomes) {
        lista.innerHTML += `<li>${nome}</li>`;
    }
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    let novoNome = input.value.trim();
    if (novoNome !== "") {
        nomes.push(novoNome);
        mostrarNomes();
        input.value = "";
    }
});