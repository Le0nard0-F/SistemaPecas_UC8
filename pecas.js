// Atividade encontro-1 UC08
let pesoPeca = 101

if(pesoPeca > 100) {
    console.log("Peso maior que 100g, cadastro aceito.")
} else {
    console.log("Peso insuficiente, cadastro negado.")
}

let numeroPecas = 11

if (numeroPecas < 10) {
    console.log("Caixa com espaço disponivél")
} else{
    console.log("Caixa sem espaço disponivel.")
}

let nomePeca = "Retrovisor"

console.log("O comprimento do nome da peça é:", nomePeca.length)
if (nomePeca.length < 3) {
    console.log("Não é possivel cadastrar, nome inválido.")
} else{
    console.log("Cadastro feito.")
}