// Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

prompt = require('prompt-sync')()
var valor = null
var total = null

for(i=1; i <=5; i++){
    valor = Number(prompt('Digite o valor a ser somado: '))
    total += valor 
}

console.log(total)