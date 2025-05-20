// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')()
var valor = Number(prompt('Digite um valor para ser repetido 10 vezes no terminal:'))

for(i = 1; i <= 10; i++){
    console.log(valor)
}