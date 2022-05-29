function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40])) // Inverte os valores min e max
console.log(rand([30,40])) // Apresenta um valor aletário
console.log(rand([990])) // Define um novo max
console.log(rand([, 10])) // Define um novo min
console.log(rand([])) // APresenta um valor aleatório entre os parametros da função
console.log(rand()) // Erro undefined