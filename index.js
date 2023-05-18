var readline = require('readline-sync')
var fileiraA = ""
var fileiraB = ""
var lugar = ""
var nome = ""
var sobrenome = ""  
var idade = ""
var origem = ""
var destino = ""

var contador = 0
while (contador == 0) {
    console.clear()
    console.log("Passagens Aéreas")
    console.log("1 - Comprar Passagens")
    console.log("2 - Consultar Voos")
    console.log("3 - Mapa de assentos")
    console.log("4 - Emitir Ticket")
    console.log("0 - Encerrar programa")
    var decisao = readline.question('Escolha aqui:')
    switch (decisao) {
        case "1":
        nome = readline.question('Nome:');
        sobrenome = readline.question('Sobrenome:');
        idade = readline.question('Idade:');
        lugar = readline.question('Assento:');

        fileiraA = ""
        fileiraB = ""
        var validacao = false

        while (validacao == false) {

            for (let num = 1; num < 13; num++) {
                fileiraA = "A" + num
                fileiraB = "B" + num

                if (fileiraA == lugar || fileiraB == lugar) {
                    validacao = true
                }
            }

            if (validacao == false) {
                console.log("Lugar Inválido")
                lugar = readline.question('Lugar:');
            }

        }




        origem = readline.question('Origem:');
        destino = readline.question('Destino:');
        console.log("\n Pressione enter para voltar")


        var sla = readline.question('')
        if (sla == "S") {
            console.log("\n Você está em ---> Resumo da compra \n Nome = " + nome + " " + sobrenome + "\n Idade= " + idade + "\n Assento= " + assento + "\n Origem/Destino= " + origem + "/" + destino + "\n Valor = 3500 R$")

            console.log("\n Pressione enter para confirmar")
        }
        else {

        }
            break;
        case "2":
            console.log("Opções de viagens")
            console.log("Prudente > Maceió")
            console.log("Prudente > Londrina")
            console.log("Prudente > Campinas")
            var sla = readline.question('Escreva enter pra continuar:')
            break
        case "3":
            fileiraA = ""
            fileiraB = ""
            for (let num = 1; num < 13; num++) {            
                
                if(lugar ==  "A"+num ){
                    fileiraA += " X "
                    fileiraB += "B"+num+" "
                   
                }
                else if( lugar ==  "B"+num){
                    fileiraB += " X "
                    fileiraA +=  "A"+num+" "
                }
                else{
                    fileiraA +=  "A"+num+" "
                    fileiraB += "B"+num+" "
                }
            }
            
            console.log(fileiraA)
            console.log(fileiraB)
            console.log("Pressione enter para voltar")
            var voltar1 = readline.question('')
            if (voltar1 == "v") {
                escolha == "0"
                console.clear(  )
            }
            break
        case "4":
            console.log("Ticket  ");
            console.log("Obrigado por viajar conosco!    ");
            console.log("Cliente: " + nome + " " + sobrenome);
            console.log("Idade: " + idade);
            console.log("Assento: " + lugar);
            console.log("Origem/Destino: " + origem + " > " + destino);
            sla = readline.question("Pressione enter")
        break;
        case "0":
            contador = 1
            break;
    }
}

