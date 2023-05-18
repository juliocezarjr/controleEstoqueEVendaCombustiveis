import produtos from "../produtos/cadastroProdutos.js";

class TabelaVendas {
    static montaTabela(qtdDias){
        const tabela = document.querySelector("[data-tabela-vendas]");
        tabela.classList = "tabela-vendas";
        

        for (let i = 1; i <= qtdDias; i++) {
            let somaVolumes = 0;
            const novaLinha = document.createElement("tr");
            novaLinha.dataset.dia = i;
            const diaDaVenda = document.createElement('td');
            diaDaVenda.innerText = i;
            novaLinha.appendChild(diaDaVenda);
            tabela.appendChild(novaLinha);
            
            produtos.forEach(produto => {
                const vendaPorProduto = document.createElement('td');
                novaLinha.appendChild(vendaPorProduto);
                const inputForm = document.createElement('input');
                inputForm.type = "text";
                inputForm.pattern = "[0-9]*";
                inputForm.classList.add("fomrulario-venda");
                inputForm.addEventListener("change", evento => {
                    const valorDigitado = evento.target.value
                    somaVolumes += parseFloat(valorDigitado);
                    console.log(somaVolumes);
                    somaDaLinha.innerText = parseFloat(somaVolumes);
                })
                vendaPorProduto.appendChild(inputForm);
                vendaPorProduto.dataset.dia = i;
                vendaPorProduto.dataset.produto = produto;
                
            });
            let somaDaLinha = document.createElement("td");
            novaLinha.appendChild(somaDaLinha);
            console.log((parseFloat(somaVolumes)).toLocaleString('pt-BR'));
            
        }

    }

}

export default TabelaVendas;