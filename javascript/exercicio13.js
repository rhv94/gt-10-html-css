//crie uma função que pegue uma idade, genero e cidade de um usuario
//se o usuario for do sexo masculino e tiver mais de 18 anos
//exibir precisa se alistar
//se o usuario for do sexo masculino e tiver menos de 18 anos
//exibir não pode se alistar

const user = {
    nome: "Samuel",
    idade: 24,
    genero: "masculino",
    cidade: "Fortaleza"
}

function verificarAlistamento(user){
    if(user.idade >= 18 && user.genero == "masculino"){
        console.log("precisa se alistar")
    } else {
        console.log("não pode se alistar")
    }
}

verificarAlistamento(user)