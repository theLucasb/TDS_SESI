function calcularTotal (preco1, preco2) {
    return preco1 + preco2;
}

let resultado = calcularTotal(30, 50); // Somar

// Desafio: Imprimir concatenando e com template string

console.log("O total da compra é: " + resultado); // Concatenando
console.log(`O total da compra é: ${resultado}`); // Template string