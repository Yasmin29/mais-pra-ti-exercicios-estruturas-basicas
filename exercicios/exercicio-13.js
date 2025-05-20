// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')()

let listaNumeros = []
let somaTotal = 0
let valorEntrada = null

while(valorEntrada != 0){
    valorEntrada = parseFloat(prompt('Digite o valor: '))
    if (valorEntrada != 0){
        listaNumeros.push(valorEntrada)
        somaTotal += valorEntrada
    }    
}

let media = somaTotal / listaNumeros.length
console.log('Média:', media)