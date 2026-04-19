// AJUSTE 1: Removido o 'require' (não existe no navegador)
// AJUSTE 2: Removido o loop 'do...while' (o site não pode travar esperando input)

let estoque = [];

// Função para imprimir no "console" do site
const imprimir = (texto) => {
    const log = document.getElementById("log");
    log.innerHTML += texto.replace(/\n/g, "<br>") + "<br>";
    log.scrollTop = log.scrollHeight; // Faz o scroll automático
};

imprimir("Biblioteca Digital Conectada");

// Suas funções originais (Mantidas quase idênticas)
const cadastrarLivro = (novoLivro) => {
    estoque.push(novoLivro);
    imprimir(`Livro "${novoLivro.nome}" cadastrado!`);
};

const listarLivros = () => {
    imprimir("\n--- Estoque de Livros ---");
    if (estoque.length === 0) {
        imprimir("Estoque vazio.");
    } else {
        estoque.forEach((livro, index) => {
            imprimir(`${index + 1}. [Cód: ${livro.codigo}] - ${livro.nome} (Autor: ${livro.autores}, Págs: ${livro.paginas})`);
        });
    }
};

const buscarLivro = (codigo) => {
    const livro = estoque.find(l => l.codigo === codigo);
    if (livro) {
        imprimir("\n--- Livro Encontrado ---");
        imprimir(`Cód: ${livro.codigo} | Título: ${livro.nome} | Autor: ${livro.autores} | Págs: ${livro.paginas}`);
    } else {
        imprimir(`Livro com código ${codigo} não encontrado.`);
    }
};

const removerProduto = (codigo) => {
    const estoqueInicial = estoque.length;
    estoque = estoque.filter(p => p.codigo !== codigo);
    if (estoque.length < estoqueInicial) {
        imprimir(`Código livro ${codigo} removido com sucesso!`);
    } else {
        imprimir(`Código Livro ${codigo} não encontrado.`);
    }
};

// AJUSTE 3: Novas funções para pegar dados dos Inputs do HTML
const btnCadastrar = () => {
    const codigo = Number(document.getElementById("inpCodigo").value);
    const nome = document.getElementById("inpNome").value;
    const autores = document.getElementById("inpAutor").value;
    const paginas = Number(document.getElementById("inpPaginas").value);

    if(!nome || !codigo) return imprimir("Erro: Preencha pelo menos Nome e Código!");

    cadastrarLivro({ codigo, nome, autores, paginas });
    
    // Limpar campos após cadastrar
    document.getElementById("inpCodigo").value = "";
    document.getElementById("inpNome").value = "";
    document.getElementById("inpAutor").value = "";
    document.getElementById("inpPaginas").value = "";
};

const btnRemover = () => {
    const cod = Number(document.getElementById("inpCodigo").value);
    if(!cod) return imprimir("Digite o código no primeiro campo para remover.");
    removerProduto(cod);
};

const btnListar = () => listarLivros();

const btnBuscar = () => {
    const cod = Number(document.getElementById("inpCodigo").value);
    if(!cod) return imprimir("Digite o código no primeiro campo para buscar.");
    buscarLivro(cod);
};
