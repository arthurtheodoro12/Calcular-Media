let estudantes = [
    {nome: "Arthur", primeiraNota: 10, segundaNota: 9},
    {nome: "Carlos", primeiraNota: 5, segundaNota: 8},
    {nome: "João", primeiraNota: 4, segundaNota: 3},
]

function calcularMediaAluno(primeiraNota, segundaNota, nome) {
        let media = (primeiraNota + segundaNota)/2
        if(media >= 7) {
            alert("A média do(a) aluno(a) " + nome + " é: " + media + "\n" +
            "Parabéns, " + nome + "! Você foi aprovado(a) no concurso!" )
        }
        else {
            alert("A média do(a) aluno(a) " + nome + " é: " + media + "\n" +
            "Não foi dessa vez, " + nome + "! Tente novamente!" )
        }
}

for(let i=0; i<estudantes.length; i++) {
    calcularMediaAluno(estudantes[i].primeiraNota, estudantes[i].segundaNota, estudantes[i].nome)
}

