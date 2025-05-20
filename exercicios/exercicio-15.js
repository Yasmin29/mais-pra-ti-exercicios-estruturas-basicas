// Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let fibonacci = [0,1]
for(i = 0; fibonacci.length < 10; i++){
    total = fibonacci[i] + fibonacci[i+1]
    fibonacci.push(total)
}

console.log(fibonacci)
