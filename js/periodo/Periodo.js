import mesDoAno from "./mesesDoAno.js"

class Periodo {
    
    static quantidadeDeDiasDoMes (mes, ano){
        return new Date(ano, mes + 1, 0).getDate();
    }

    static define(dia, mes, ano){
        const novaData = new Date(ano, mes);
        const periodoAno = document.querySelector("[data-periodo-ano]");
        const periodoMes = document.querySelector("[data-periodo-mes]");
        periodoAno.textContent = novaData.getFullYear();
        periodoMes.textContent = mesDoAno[novaData.getMonth()];
        
    }

    
}

export default Periodo;