function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // Comparativo de OR
    const comprarTv50 = trabalho1 && trabalho2 // Comparativo de AND
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // Comparativo de XOR
    const manterSaudavel = !comprarSorvete // Operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))