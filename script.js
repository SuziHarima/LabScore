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
    


// Crie uma função a qual recebe um valor numérico como parâmetro que irá ser a média; 
// caso a média seja maior que 7, retorne em um document.write() a seguinte mensagem “Parabéns você passou na média !”, já, 
// caso a média seja menor que 7, deve escrever em um document.write() a mensagem “Infelizmente você está de recuperação.”
