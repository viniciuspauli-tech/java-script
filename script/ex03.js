
function salario() {

    let gastot = 0;
    let gasto = 0;
    let soma = 0;
    let ganho = 0;
    let saldo = 0;

    for (let i = 1; i <= 12; i++) {

        let ganho = parseFloat(prompt("Informe o seus ganhos no mês " + i));
        if (!isNaN(ganho)) {
            soma += ganho;

            let gasto = parseFloat(prompt("Informe os seus gastos do mês " + i));
            gastot += gasto;


        } else {
            alert("Digite um número válido.");
        }

        console.log(soma);
        console.log(gastot);

    }

    saldo = soma - gastot;
    prompt("O seu saldo ao final do ano é de " + saldo);

    if (saldo < 0){
        prompt("Você ficou no prejuízo!");
    }else{
        prompt("Você obteve lucro!");
    }

}