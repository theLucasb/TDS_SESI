const aluno = {
    nome: "Lucas",
    idade: 24,
    curso: "Desenvolvimento de Sistemas"
}

console.log(aluno);
console.log(aluno.nome);
console.log(aluno["idade"]);

aluno.matricula = "2025A"; // adicionar
aluno.idade = 18; // alterar

delete aluno.curso; // remover

console.log(aluno);