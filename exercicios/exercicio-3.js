// Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
// Notas menores que 5 serão reprovados, igual à 5 e 6 estará em recuperação e maiores aprovados

var nota = 4

if(nota < 5){
    console.log('Sua nota é ', nota,'Você foi reprovado.')
} else if(nota >= 7 ){
    console.log('Sua nota é ', nota,'Você foi aprovado!')
} else {
    console.log('Sua nota é ', nota,'Você precisa de recuperação.')
}