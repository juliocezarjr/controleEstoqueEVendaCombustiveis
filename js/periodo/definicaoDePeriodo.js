import Periodo from "./Periodo.js";


const todoConteudo = document.querySelector(".todo-conteudo");
const botaoPeriodo = document.querySelector("[data-periodo]");
const janelaDefinicaoPeriodo = document.querySelector("[data-form-periodo]")
const botaoCancelar = document.querySelector("[data-cancelar]");
const botaoOk = document.querySelector("[data-ok]");
const anoDoFormulario = document.querySelector("[data-periodo-selecionado-ano]").value;
const mesDoFormulario = document.querySelector("[data-periodo-selecionado-mes]").value;



botaoPeriodo.addEventListener("click", (event) => {
    console.log("Botao apertado")

    janelaDefinicaoPeriodo.classList.add("aparecer")
    todoConteudo.classList.add("desfocar");


    Periodo.define(1, mesDoFormulario, anoDoFormulario);
    
})

botaoCancelar.addEventListener("click", (event) => {
    janelaDefinicaoPeriodo.classList.remove("aparecer")
    todoConteudo.classList.remove("desfocar");
})

botaoOk.addEventListener("click", event => {
    event.preventDefault();
    janelaDefinicaoPeriodo.classList.remove("aparecer")
    todoConteudo.classList.remove("desfocar");
    
    Periodo.define(1, mesDoFormulario, anoDoFormulario)

})

export default botaoPeriodo;