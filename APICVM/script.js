// Função para obter parâmetros da URL
function obterParametrosURL() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return {
        valor: urlParams.get('valor') || '',
        nomecompleto: urlParams.get('nomecompleto') || '',
        nascimento: urlParams.get('nascimento') || '',
        cpf: urlParams.get('cpf') || ''

    };
}

// Função para preencher os dados na página
function preencherDados() {
    const { valor, nomecompleto, nascimento, cpf } = obterParametrosURL();

    document.getElementById('valor').textContent = valor;
    document.getElementById('nomecompleto').textContent = nomecompleto;
    document.getElementById('nascimento').textContent = nascimento;
    document.getElementById('cpf').textContent = cpf;

}

// Chamada da função ao carregar a página
window.onload = preencherDados;
