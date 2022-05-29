// Operador Ternário formado de 3 partes, 1° a expressão True ou False, após colocoar '?', 2° parte a resposta se True e 3° parte a resposta se False
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // Faz o comparativo quando é True imprime a 1° resposta, se é False imprime a 2° resposta

console.log(resultado(8))
console.log(resultado(6))