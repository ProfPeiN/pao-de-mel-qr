async function carregarProduto() {

    const resposta = await fetch("produto.json");

    const produto = await resposta.json();

    document.getElementById("nomeProduto").textContent =
        produto.nome;

    document.getElementById("descricaoProduto").textContent =
        produto.descricao;

    document.getElementById("peso").textContent =
        produto.peso;

    document.getElementById("lote").textContent =
        produto.lote;

    document.getElementById("fabricacao").textContent =
        produto.fabricacao;

    document.getElementById("validade").textContent =
        produto.validade;

    document.getElementById("ingredientes").textContent =
        produto.ingredientes;

    document.getElementById("conservacao").textContent =
        produto.conservacao;

    document.getElementById("empresa").textContent =
        produto.empresa.nome;

    document.getElementById("cnpj").textContent =
        produto.empresa.cnpj;

    document.getElementById("cidade").textContent =
        produto.empresa.cidade;

    document.getElementById("telefone").textContent =
        produto.empresa.telefone;

    document.getElementById("email").textContent =
        produto.empresa.email;

}

carregarProduto();