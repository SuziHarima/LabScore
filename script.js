let notas = [7, 8, 10, 8];


function calcularMedia (notas) {
    somaNotas = 0;

    for (var nota of notas) {
        somaNotas += nota; 
    }
    var media = somaNotas / notas.length;
    return media;
}

