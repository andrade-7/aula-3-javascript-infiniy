// const numero1 = Number(prompt("Digite o primeiro número: "))
// const numero2 = Number(prompt("Digite o segundo número: "))
// const numero3 = Number(prompt("Digite o terceiro número: "))

// if(numero1 > numero2 || numero1){
//     alert("numero 1 é maior")
// }


// const email = prompt("Digite seu email: ")
// const senha = prompt("Digite sua senha: ")

// const email_correto = "joao@email.com"
// const senha_correta = "123456J@"

// if(email.toLowerCase() === email_correto){
//     if(senha === senha_correta){
//         alert("Login efetuado com sucesso")
//     }else{
//         alert("Senha errada")
//     }
// }else{
//     alert("Email errado")
// }

// console.log(senha.length)

// const letra = prompt("Digite uma letra: ")

// if(letra in 'aeiou'){
//     alert("Vogal")
// }
// alert("aeiouAEIOU".indexOf(prompt("Insira uma letra")) !== -1 ? "A letra é vogal" : "A letra é consoante");

// let contador = 100
// while(contador >= 100 && contador <= 200){
//     console.log(contador)
//     contador++
// }

// let contador = 1
// while(contador <= 50){
//     if(contador % 2 === 0){
//         console.log(contador)
//     }
//     contador++
// }







// while(true){
//     const numero = Number(prompt("Digite um numero: "))
//     if(numero === 0){
//         alert("Adeus!")
//         break
//     }else{
//         alert(`Você digitou o numero ${numero}`)
//     }
// }


while(true){
    const numero = Number(prompt("Digite um número: "))
    if(numero === 0){
        break
    }
    if(numero > 0){
        alert("O número é positivo")
    }else if(numero < 0){
        alert("O numero é negativo")
    }
}
