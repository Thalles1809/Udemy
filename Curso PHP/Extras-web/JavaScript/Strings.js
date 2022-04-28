const escola = "cod3r"

console.log(escola.charAt(4)) //Letra no índice
console.log(escola.charAt(3))
console.log(escola.charCodeAt(3)) //Letra na tabela UniCode
console.log(escola.indexOf('r')) //Índice da Letra

console.log(escola.substring(1)) //Trás a string a partir do 1° índice
console.log(escola.substring(0, 3)) //Trás a string do índice 0 ao 3, mas sem o 3°

console.log('Escola '.concat(escola).concat("!")) //Concatena texto e constantes e variáveis
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) //Substitui o indicado pelo definido
console.log(escola.replace(/\d/, 'e')) //Usado em Regex, Substitui o indicado pelo definido
console.log(escola.replace(/\w/g, 'e')) //Usado em Regex, troca todos os Strings pela letra definida

console.log('Ana,Maria,Pedro'.split(',')) //Converte String em Array, utlizando um separador