let numeroDeAlunos = 10

let contador = 1

do {

    if (contador === 0) {
        console.log("o número atual é ZERO")
    } else if (contador % 2 == 1) {
        console.log("o número é ÍMPAR")
    } else {
        console.log("o número é PAR")
    }

    contador++

} while (contador <= numeroDeAlunos);

// while (contador <= numeroDeAlunos) {
//     if (contador === 0) {
//         console.log("o número atual é ZERO")
//     } else if (contador % 2 == 1) {
//         console.log("o número é ÍMPAR")
//     } else {
//         console.log("o número é PAR")
//     }

//     //console.log(contador)

//     contador++
// }

// for (let contador = 0; contador <= numeroDeAlunos; contador++) {
//     //console.log(contador)

//     if (contador === 0) {
//         console.log("O número atual é zero")
//     } else if (contador % 2 == 0) {
//         console.log("o número " + contador + " é PAR")
//     } else {
//         console.log("o número " + contador + " é ÍMPAR")
//     }
// }

//let listaDeAlunos = ["Marcelo", "Juh", "Kleber", "Aurison", "Joelma", "Neto"]
// for (const aluno of listaDeAlunos) {
//     console.log ("aluno")
// }

// listaDeAlunos.forEach(aluno => {
//     console.log(aluno)
// });