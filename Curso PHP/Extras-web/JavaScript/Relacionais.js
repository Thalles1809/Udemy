console.log('01)', '1' == 1) // Comparativo de valor
console.log('02)', '1' === 1) // Comparativo de valor e tipo, pode ser lido como extritamente igual
console.log('03)', '3' != 3) // Comparativo de valor
console.log('04)', '3' == 3) // Comparativo de valor e tipo, pode ser lido como extritamente diferente

console.log('05)', 3 < 2 ) // Menor que
console.log('06)', 3 > 2 ) // Maior que
console.log('07)', 3 <= 2) // Menor que ou igual
console.log('08)', 3 >= 2) // Maior que ou igual

const d1 = new Date(0)
const d2 = new Date(0)
console.log(d1)
console.log('09)', d1 == d2) // Comparando os locais na memória
console.log('10)', d1 === d2) // Local na memória e tipo
console.log('11)', d1.getTime() === d2.getTime()) // Os valores e tipos são iguais

console.log('12)', undefined == null)
console.log('13)', undefined === null)