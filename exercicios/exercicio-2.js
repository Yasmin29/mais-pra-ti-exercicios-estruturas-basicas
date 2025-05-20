// Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

var idade = 200

if(idade <= 10){
    console.log('Uma pessoa com', idade, 'é uma criança')
} else if(idade < 18  ){
    console.log('Uma pessoa com ', idade, ' é adolescente')
} else if (idade >= 18 & idade < 60 ){
    console.log('Uma pessoa com ', idade, ' é adulto')
} else {
    console.log('Uma pessoa com ', idade, ' é idoso')
}