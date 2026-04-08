let valorCarrinho = 120.00;

// Se o valor for > 100, subtrai 10% (multiplica por 0.9). Caso contrário, mantém o valor.
let precoFinal = valorCarrinho > 100 ? valorCarrinho * 0.9 : valorCarrinho;

console.log(`Preço final: R$ ${precoFinal.toFixed(2)}`);