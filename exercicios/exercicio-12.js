// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

prompt = require('prompt-sync')()
var multiplicando = Number(prompt('Dígite o número multiplicado:'))
var total = null
for(i = 1; i <=10; i++){
    total = i * multiplicando
    console.log(multiplicando, 'X', i, ' = ', total)
}