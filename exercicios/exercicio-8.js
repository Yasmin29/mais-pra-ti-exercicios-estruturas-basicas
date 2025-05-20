// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')()
var valorUm = Number(prompt('Digite o primeiro valor: '))
var valorDois = Number(prompt('Digite o segundo valor: '))

if(valorUm < valorDois){

    console.log('Ordem crescente dos números inseridos: \n', valorUm, '\n', valorDois)

} else if(valorDois < valorUm){

    console.log('Ordem crescente dos números inseridos: \n', valorDois, '\n', valorUm)

} else {

    console.log('Os valores inseridos são iguais')

}
