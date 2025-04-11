const nome = "Rebeca" //texto - string
const idade = 30 //número - number
const altura = 1.80 //número - number
const maiorDeIdade = true //booleano - boolean

console.log("Olá seu nome é " + nome) //concatenação
console.log("Olá seu nome é " + nome +", você tem " + idade +" anos e sua altura é " + altura)

console.log("Olá você é maior de idade? " + maiorDeIdade)

// template string ou string dinâmico
const frase = `Olá seu nome é ${nome}` 
console.log(frase)

console.log("1" + 10)