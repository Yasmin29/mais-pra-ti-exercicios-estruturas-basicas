// Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')()
let valor = Number(prompt('Digite o número para calular o fatorial:')) 
let total = valor

for(i = valor; i >= 2; i--){
    console.log(total, 'x', i-1, '=')
    total = total * (i - 1) 
    console.log('total:',total)
    
}