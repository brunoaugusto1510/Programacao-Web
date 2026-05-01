const botaoBuscar = document.querySelector('.botaoBuscar');
const campoCep = document.querySelector('.cepInput');

const spanRua = document.querySelector('#rua');
const spanNumero = document.querySelector('#numero');
const spanBairro = document.querySelector('#bairro');
const spanCidade = document.querySelector('#cidade');
const spanEstado = document.querySelector('#estado');
const spanCep = document.querySelector('#cep');

const buscarCep = async () => {
    const cep = campoCep.value;

    if (!cep || cep.length !== 8) {
        alert("Por favor, insira um CEP válido (8 dígitos).");
        return;
    }

    try {

    const chamadaViaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const resposta = await chamadaViaCep.json();

    if (resposta.erro) {
        throw new Error("CEP não encontrado.");
    }

    spanRua.textContent = resposta.logradouro;
    spanNumero.textContent = resposta.numero;
    spanBairro.textContent = resposta.bairro;
    spanCidade.textContent = resposta.localidade;
    spanEstado.textContent = resposta.uf;
    spanCep.textContent = resposta.cep;

    } catch (error) {
        alert(error.message);
    }
}
botaoBuscar.addEventListener("click", buscarCep)