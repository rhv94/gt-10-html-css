//uma lista de modelos de carros

const modelos = ["ranger", "kwid", "uno", "toro", "fusca"]

console.log(modelos)

// adicionar um modelo no final da lista

modelos.push("palio")

console.log(modelos)

//contagem 
console.log(modelos.length)

modelos.push("mercedes")

//remover o ultimo modelo

modelos.pop() //mercedes

console.log(modelos.length)

// remover um modelo específico

modelos.splice(1, 1)

console.log(modelos)


