import TabelaVendas from "./TabelaVendas.js";
const conteudo = document.querySelector("[data-conteudo-principal]")

conteudo.innerHTML = 

`
<div class="container text-center">
<h1>Vendas filial São Luís</h1>
<table class="table table-hover tabela-vendas">
    <thead>
        <th>Dia</th>
        <th>Gasolina Comum</th>
        <th>Gasolina Aditivada</th>
        <th>S10 Comum</th>
        <th>S10 Aditivado</th>
        <th>S500 Comum</th>
        <th>S500 Aditivado</th>
        <th>Etanol Hidratado</th>
        <th>Total</th>
    </thead>
    <tbody data-tabela-vendas>

    </tbody>
`;


TabelaVendas.montaTabela(31);


export default conteudo;
