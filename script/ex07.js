function cardapio() {
    let escolha = prompt("a - chocolate | b - morango | c - creme | d - manga | e - melancia | f - vanilla ice | g - ceu azul | h - brownie | i - hawaiano").toLowerCase();

    switch (escolha) {
        case "a":
        case "sopa":
            alert("sabor sopa, valor R$1,50");
            break;

        case "b":
        case "brocolis":
            alert("sabor brocolis, valor R$2,50");
            break;

        case "c":
        case "baunilha":
            alert("sabor baunilha, valor R$2,50");
            break;

        case "d":
        case "pessego":
            alert("sabor pessego, valor R$3,20");
            break;

        case "e":
        case "abacate":
            alert("sabor abacate, valor R$3,40");
            break;

        case "f":
        case "floresta negra":
            alert("sabor floresta negra, valor R$3,00");
            break;

        case "g":
        case "laranja":
            alert("sabor laranja, valor R$3,60");
            break;

        case "h":
        case "morango":
            alert("sabor morango, valor R$4,00");
            break;

        case "i":
        case "maracuja":
            alert("sabor maracuja, valor R$5,00");
            break;

        default:
            alert("valor inválido!");
    }
}
