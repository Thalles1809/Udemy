function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40} // Define novo min e max
console.log(rand(obj))
console.log(rand({min: 955})) // Define novo min
console.log(rand({max: 100})) // Define novo max
console.log(rand({})) // Numero aleatório com os valores padrões