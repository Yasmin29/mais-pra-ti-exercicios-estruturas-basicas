// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.
//70 / (1,75 * 1,75) 
// 18,5 é considerado baixo peso, 
// entre 18,5 e 24,9 é peso normal, 
// 25 a 29,9 é sobrepeso, 
// e 30 ou mais indica obesidade. 

 prompt = require('prompt-sync')()
 var altura = parseFloat(prompt('Digite a sua altura:'))
 var peso = parseFloat(prompt('Digite o seu peso: '))
 var imc = peso / (altura * altura)

 if(imc < 18.5){
    console.log('Seu iMC é: ', imc, '.Você está abaixo do peso')
 } else if(imc <= 24.9){
    console.log('Seu iMC é: ', imc, '.Você está com o peso normal')
 } else if(imc >= 25 & imc <= 29.9){
    console.log('Seu iMC é: ', imc, '.Você está com o sobrepeso ')
 } else {
    console.log('Seu iMC é: ', imc, '.Você está obeso')
 }