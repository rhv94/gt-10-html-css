const user = {
    nome: "Rebeca",
    altura: 1.68,
    peso: 60
}



//criar uma função que receba o objeto user e calcule o imc
// imc = peso / (altura * altura)

function calcularImc(user){
    const IMC = user.peso / (user.altura * user.altura)
        if(IMC < 18.5){
            return console.log("Abaixo do normal")
        } 
        if(IMC >= 18.6 && IMC <= 24.9){
           return console.log("normal")
        } 
        if(IMC >= 25 && IMC <= 29.9){
            return console.log("sobrepeso")
        } 
        if(IMC >= 30 && IMC <= 34.9){
            return console.log("obesidade grau I")
        } 
        if(IMC >= 35 && IMC <= 39.9){
           return console.log("obesidade grau II")
        } 
        if(IMC >= 40){
            return console.log("obesidade grau III")
        }

}

calcularImc(user)


