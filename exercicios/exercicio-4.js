// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')()
var opcao = prompt('1 - Hamburguer \n2 - MilkShake \n3 - Batata frita \nDigite o número do que você deseja: ')

switch(opcao){
    case '1': 
        console.log('O seu hamburguer está sendo realizado')
        break
    case '2':
        console.log('O milkshake está sendo realizado')
        break
    case '3':
        console.log('A sua batata frita está sendo realizada')
        break
}