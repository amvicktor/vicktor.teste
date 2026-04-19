
// 1. Mapear os elementos do HTML para variáveis no JS
const botao = document.getElementById("botaoExecutar");
const input = document.getElementById("entradaUsuario");
const painel = document.getElementById("painelResultado");

// 2. Criar a função que processa a lógica
function minhaLogica() {
    // Pega o valor que você digitou no campo
    let valorDigitado = input.value;

    if (valorDigitado === "") {
        painel.innerText = "Por favor, digite algo primeiro!";
        return;
    }

    // Exemplo de lógica crua: transformar em MAIÚSCULO
    let resultado = "Você digitou: " + valorDigitado.toUpperCase();

    // 3. EXIBIR NA TELA (O substituto real do alert)
    painel.innerText = resultado;
    
    // Também limpa o campo para a próxima vez
    input.value = "";
}

// 4. Ligar o botão à função (Ouvinte de evento)
botao.addEventListener("click", minhaLogica);
