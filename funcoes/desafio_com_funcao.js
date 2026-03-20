/* 
Atalho comentário de várias linhas:
alt + shift + A

Desafio: 
Criar uma função que receba preço e desconto em %
e mostre o valor final com desconto.
Criar outra função que receba preço e quantidade
e mostre o valor total da compra.

*/

function calcularDesconto (preco, desconto) {
    const valorFinal = preco - (preco * (desconto / 100));
    console.log(`O valor final do produto foi de: ${valorFinal}`);
}

calcularDesconto(1000, 5);

function calcularTotal(preco, quantidade) {
    const valorTotal = preco * quantidade;
    console.log(`O valor total é de: ${valorTotal}`);
}

calcularTotal(100, 12);

