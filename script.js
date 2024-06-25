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

// Utilizando estrutura de repetição for, realize a tabuada do número 8 e exibe em tela da seguinte forma

let tabuada = 8;
for (i=0; i<=10 ; i++){
    document.write("<br>" + "8 x " + i + " = " + (tabuada*i));
};