
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