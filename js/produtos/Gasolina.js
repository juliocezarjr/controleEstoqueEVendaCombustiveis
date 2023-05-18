export default class Gasolina {
    abertura = 0;
    composicao = 0.73;

    venda(volume){
        this.abertura -= volume;
        return this.abertura;
    }
}

