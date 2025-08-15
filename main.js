const form = document.getElementById('formulario');
const inputNomeContato = document.getElementById('nome-contato');
const inputTelefoneContato = document.getElementById('telefone-contato');
let linhas = '';
const telefones = [];

form.addEventListener('submit', function(e){
    e.preventDefault();

    adcionarLinha();
    atualizarTabela();
});

function adcionarLinha(){
    if(telefones.includes(inputTelefoneContato.value)){
        alert(`Este telefone: ${inputTelefoneContato.value} já está vinculado a um contato!!`);
        inputTelefoneContato.value = '';
    } else{
        telefones.push(inputTelefoneContato.value);
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += '</tr>'
        linhas += linha;
        limparCampos();
    }
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
function limparCampos(){
    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}