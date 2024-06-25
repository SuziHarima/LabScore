let notas = [7, 8, 10, 8];


function calcularMedia (notas) {
    somaNotas = 0;

    for (var nota of notas) {
        somaNotas += nota; 
    }
    var media = somaNotas / notas.length;
    return media;
}

let mediaFunction = prompt("Digite uma nota")

if (mediaFunction > 7) {
    document.write("Parabéns vocês passou na média!")
} else {
    document.write("Infelizmente você está de recuperação.")
}


let studentName = ["Joaquina", "Kirara", "Salem", "Haley", "Luke"];

studentName.forEach((Element) => {document.write("<br>" + Element)});

let tabuada = 8;
for (i=0; i<=10 ; i++){
    document.write("<br>" + "8 x " + i + " = " + (tabuada*i));
};


// Desenvolva um código JavaScript que faça o seguinte:

// 1- Faça as seguintes 5 perguntas ao usuário:

// Qual o nome do aluno?
// Qual a idade do aluno?
// Qual a série do aluno?
// Qual o nome da escola?
// Qual a sua matéria favorita?
// 2- Utilize o método confirm() do JavaScript para perguntar ao usuário se ele confirma os dados inseridos
//  (isso apenas ao final das 5 perguntas).

// 4- Se o usuário confirmar, exiba todas as informações do aluno na tela utilizando o método document.write().

// 5- Caso ele não aceite o programa, deve ser encerrado e nada deve ser feito. 
// apenas mostre uma mensagem de que os dados não foram confirmado.


let nome = prompt("Qual o nome do aluno?");
let idade = prompt("Qual a idade do aluno?");
let serie = prompt("Qual a série do aluno?");
let escola = prompt("Qual o nome da escola?");
let materiaFavorita = prompt("Qual a sua matéria favorita?")

let confirmacao = window.confirm("Os dados estão certos?")

if (confirmacao == true) {
    document.write("<br>" + nome + "<br>" + idade + "<br>" + serie + "<br>" + escola + "<br>" + materiaFavorita)
}