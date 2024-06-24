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


let professores = [
    {
      nome:"Rayane",
      especialidade:"Java"
    },
    {
      nome:"Eduardo",
      especialidade:"Angular"
    },
    {
      nome:"Julia",
      especialidade:"Javascript"
    }
  ]
  
  professores.forEach((item, indice, array)=>{
    console.log(item.nome);
    console.log(indice);
})



// Agora, crie uma função javascript que irá receber uma variável como parâmetro; 
// ela será um array de nomes de alguns alunos (pode ser nomes aleatórios). 
// Através do método de array forEach(), imprima em tela (com document.write) todos os nomes do array, um abaixo do outro.
