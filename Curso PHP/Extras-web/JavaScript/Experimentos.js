let a = 3
global.b = 123
this.c = 456
this.d = false 
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)

// Criando uma variável maluca: sem VAR ou LET!
abc = 3 // Não faça isso em casa!!!
console.log(abc)
console.log(module.exports)