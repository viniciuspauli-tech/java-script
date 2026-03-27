function OrdenarValoresInteiros() {
    let numeros = [];

    for (let i = 1; i < 5; i++) {
        numeros.push (Number(prompt("Informe o valor " + i)));
       
    }
    numeros.sort((a, b) => b - a);
    alert("os numeros em ordem decrecente são: +" + numeros.join(", "));
}
