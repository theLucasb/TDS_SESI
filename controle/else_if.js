// Desafio
let n1 = 2.5;
let n2 = 2.0;
let n3 = 2.0;
let media = (n1 + n2 + n3) / 3;

if (media >= 7.5) {
    console.log("Aprovado. Parabéns!");
} else if (media < 7.5 && media >= 5.0) {
    console.log("Em recuperação!");
} else {
    console.log("Reprovado. Estude mais!");
}

console.log(media);