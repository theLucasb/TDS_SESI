// 1. Dados Iniciais
let estoque = ["SSD 1TB", "RTX 4060", "Ryzen 7", "Water Cooler", "Mouse Gamer"];
estoque.push("Teclado Mecânico");

let clienteNome = "Mariana";
let clienteIdade = 19;
let possuiCupom = true;

// 2. Função de Processamento
function processarVenda(valorTotal, cupomAtivo) {
    // Regra: Desconto de 15% se valor > 500 ou se tiver cupom
    let valorFinal = (valorTotal > 500 || cupomAtivo) ? valorTotal * 0.85 : valorTotal;
    return valorFinal.toFixed(2);
}

// 3. Execução e Validação
if (clienteIdade >= 16) {
    console.log(`Venda autorizada para ${clienteNome}.`);
    
    let totalPedido = processarVenda(600, possuiCupom);

    // 4. Loop de Estoque
    for (let i = 0; i < estoque.length; i++) {
        console.log(`Despachando item: ${estoque[i]}... OK!`);
    }

    estoque.shift(); // Remove o primeiro item despachado

    // 5. Relatório Final
    console.log(`---`);
    console.log(`Relatório da Loja: Cliente ${clienteNome} processou um pedido de R$ ${totalPedido}. Itens restantes no estoque: ${estoque.length}.`);

} else {
    console.log("Venda bloqueada: Idade insuficiente.");
}