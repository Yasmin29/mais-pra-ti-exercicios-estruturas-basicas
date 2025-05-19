// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

prompt = require('prompt-sync')()
var macas = Number(prompt('Digite a quantidade de maças desejada: '))

if(macas < 12){
    total = 0.30 * macas
    console.log('Valor Total: ', total.toFixed(2))
} else {
    total = 0.25 * macas
    console.log('Valor Total: ', total.toFixed(2))
}