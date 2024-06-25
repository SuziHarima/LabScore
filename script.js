// let notas = [7, 8, 10, 8];


// function calcularMedia (notas) {
//     somaNotas = 0;

//     for (var nota of notas) {
//         somaNotas += nota; 
//     }
//     var media = somaNotas / notas.length;
//     return media;
// }

// let mediaFunction = prompt("Digite uma nota")

// if (mediaFunction > 7) {
//     document.write("Parabéns vocês passou na média!")
// } else {
//     document.write("Infelizmente você está de recuperação.")
// }


// let studentName = ["Joaquina", "Kirara", "Salem", "Haley", "Luke"];

// studentName.forEach((Element) => {document.write("<br>" + Element)});

// let tabuada = 8;
// for (i=0; i<=10 ; i++){
//     document.write("<br>" + "8 x " + i + " = " + (tabuada*i));
// };


// let nome = prompt("Qual o nome do aluno?");
// let idade = prompt("Qual a idade do aluno?");
// let serie = prompt("Qual a série do aluno?");
// let escola = prompt("Qual o nome da escola?");
// let materiaFavorita = prompt("Qual a sua matéria favorita?")

// let confirmacao = window.confirm("Os dados estão certos?")

// if (confirmacao == true) {
//     document.write("<br>" + nome + "<br>" + idade + "<br>" + serie + "<br>" + escola + "<br>" + materiaFavorita)
// }



let nomeMateria = prompt("Digite o nome da matéria")
let arrayNotas = [];

while (arrayNotas.length <= 3){
    arrayNotas.push(parseInt(prompt("digite uma nota")));
}

document.write("<br>" + "Matéria: " + nomeMateria + "<br>" + "Notas: " + arrayNotas)

function mediaArrayNotas (arrayNotas) {
    debugger
    somaNotas = 0;

    for (var nota of arrayNotas) {
        somaNotas += nota; 
    }
    var media = somaNotas / arrayNotas.length;
    return media;
}

document.write("<br>" + "Média: " + mediaArrayNotas(arrayNotas))


// Crie uma função que recebe um array de números e retorna o maior número dentre eles;
//  para isso, utilize um qualquer laço de repetição.

function maiorNumero(arrayNotas) {
    let maiorNumero = -Infinity

    for (let i = 0; i < arrayNotas.length; i++) {
        if (arrayNotas[i] > maiorNumero) {
            maiorNumero = arrayNotas[i]
        }
    }
    return maiorNumero;
}

document.write("<br>" + "Maior Número: " + maiorNumero(arrayNotas))