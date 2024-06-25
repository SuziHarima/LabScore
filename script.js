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

// Pensando em um sistema de notas online, crie um código que irá capturar o nome da matéria e as suas quatro notas;
//  deve ser usado um prompt dentro de uma laço while, para capturar apenas as notas. 
// A ideia é que, a cada valor digitado no prompt, 
// ele seja adicionado a um array e este irá ser o valor de uma propriedade de um objeto.

// Exemplo: Digito o nome da matéria -> Digito as 4 notas -> montar o seguinte objeto:

// {
//   nomeMateria: “Matemática”,
//   notas: [10,6,8,9],
// }

// Após isso, crie um laço “for” que irá calcular a média de todos os itens da propriedade notas; 
// pode ser utilizado o método criado no exercício 01, o resultado será o retorno dessa função.


let nomeMateria = prompt("Digite o nome da matéria")
let arreyNotas = [];

while (arreyNotas.length <= 3){
    arreyNotas.push(parseInt(prompt("digite uma nota")));
}

document.write("<br>" + "Matéria: " + nomeMateria + "<br>" + "Notas: " + arreyNotas)

function mediaArreyNotas (arreyNotas) {
    debugger
    somaNotas = 0;

    for (var nota of arreyNotas) {
        somaNotas += nota; 
    }
    var media = somaNotas / arreyNotas.length;
    return media;
}

document.write("<br>" + "Média: " + mediaArreyNotas(arreyNotas))