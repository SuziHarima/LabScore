
function buscaCep (e){
    e.preventDefault();
    let campoCep = document.getElementById("formCep");
    let url = 'https://viacep.com.br/ws/' + campoCep.value + "/json/";
    // console.log(url);

    fetch(url)
    .then((response)=>{
        // console.log(response);
        return response.json();
    })
    .then((data)=>{
        let rua = document.getElementById("formRua");
        let cidade = document.getElementById("formCidade");
        let estado = document.getElementById("formEstado");

        rua.value = data.logradouro;
        cidade.value = data.localidade;
        estado.value = data.uf;

    })
    .catch((err)=>{
        console.error(err);
    })
}


function sendLocalStorage(e){
    e.preventDefault();

    let nome = document.getElementById('formNome');
    let idade = document.getElementById('formIdade');
    let serie = document.getElementById('formSerie');
    let escola = document.getElementById('formEscola');
    let materiaFavorita = document.getElementById('formMateriaFavorita');
    let cep = document.getElementById('formCep');
    let rua = document.getElementById('formRua');
    let cidade = document.getElementById('formCidade');
    let estado = document.getElementById('formEstado');

    let cadastro = {
        nome: nome.value,
        idade: idade.value,
        serie: serie.value,
        escola: escola.value,
        materiaFavorita: materiaFavorita.value,
        cep: cep.value,
        rua: rua.value,
        cidade: cidade.value,
        estado: estado.value
    }

    localStorage.setItem("cadastro", JSON.stringify(cadastro));

}

