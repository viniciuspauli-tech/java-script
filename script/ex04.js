function OrdenarValoresInteiros() {
    let vet = [];

    for (let i = 1; i <= 4; i++) {
        let valor = parseFloat(prompt("Informe o valor " + i));
        vet.push(valor);
    }

    console.log(vet);
}
