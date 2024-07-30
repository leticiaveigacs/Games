//Array predefinido de palavras

// Definição das categorias e suas palavras correspondentes
const categorias = {
    Animais: ['abelha', 'pato', 'salamandra','tartaruga', 'vaca','passaro'],
    Objetos: ['escrivaninha','torneira', 'ratoeira','dados', 'caneta'],
    Lugares: ['escola', 'montanha', ,'casa'],
    Comidas: ['queijo', 'omelete', 'morango','iogurte', 'sopa', 'peixada', 'chocolate'],
    Transporte:['navio','carro', 'caminhão','trem','metrô'],
    Profissoes:['jornalista', 'dentista', 'engenheiro', 'modelo', 'pescador'],
    Musica: ['gaita','violão', 'bateria', 'cantora','piano'],
    Astrológico:['sol', 'lua','cometa','saturno','estrelas', 'planeta'],
    Formas_Geometricas:['losângulo','circulo','triângulo', 'quadrado', 'retângulo']
   

};

   // Diversos:['amigo','beijo','bela','dentes','feira','fantasma','goteiras','granjas','justo', 'leitura','limosine', 'nordestino','ovários','penteados','quaresma','romantismo','total', 'humilde', 'humano','ìndio']
   


let palavraEscolhida; // Palavra a ser adivinhada
let categoriaEscolhida; // Categoria da palavra escolhida
let exibicaoPalavra; // Representação da palavra com underscores
let letrasChutadas; // Letras chutadas pelo jogador
let tentativasRestantes; // Tentativas restantes do jogador
let numeroErros; // Número de erros cometidos pelo jogador

// Função para iniciar o jogo
function iniciarJogo() {
    // Ocultar o botão de reiniciar e habilitar a entrada de letras
    document.getElementById('botao-reiniciar').style.display = 'none';
    document.getElementById('entrada-letra').disabled = false;
    document.getElementById('mensagem').style.display = 'none';

    // Escolher uma categoria aleatória
    const categoriasKeys = Object.keys(categorias);
    categoriaEscolhida = categoriasKeys[Math.floor(Math.random() * categoriasKeys.length)];

    // Escolher uma palavra aleatória da categoria escolhida
    const palavras = categorias[categoriaEscolhida];
    palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];

    // Inicializar a exibição da palavra com underscores
    exibicaoPalavra = Array(palavraEscolhida.length).fill('_');
    letrasChutadas = []; // Inicializar a lista de letras chutadas
    tentativasRestantes = 7; // Definir o número máximo de tentativas
    numeroErros = 0; // Inicializar o número de erros

    // Exibir a categoria escolhida
    document.getElementById('categoria').innerText = categoriaEscolhida;

    // Atualizar a exibição inicial do jogo
    atualizarExibicao();
}

// Função para atualizar a exibição do jogo
function atualizarExibicao() {
    // Atualizar a palavra exibida
    document.getElementById("exibicao-palavra").innerText = exibicaoPalavra.join(' ');

    // Atualizar as letras chutadas
    document.getElementById("letras-chutadas").innerText = letrasChutadas.join(', ');

    // Atualizar a imagem da forca com base no número de erros
    document.getElementById("imagem").src = `img/forca${numeroErros}.png`;

    // Verificar se o jogo terminou
    if (tentativasRestantes === 0) {
        encerrarJogo('VOCÊ MORREU!');
    } else if (!exibicaoPalavra.includes('_')) {
        encerrarJogo('Parabéns! Você venceu!');
    }
}

// Função para processar uma letra chutada pelo jogador
function chutarLetra() {
    const entradaLetra = document.getElementById('entrada-letra');
    const letra = entradaLetra.value.toLowerCase();

    // Validar a letra entrada
    if (!letra.match(/[a-zà-ùç]/i)) {
        alert('Por favor, insira uma letra válida.');
        return;
    }

    // Verificar se a letra já foi chutada
    if (letrasChutadas.includes(letra)) {
        alert('Você já tentou esta letra. Tente outra.');
        return;
    }

    // Adicionar a letra chutada à lista de letras chutadas
    letrasChutadas.push(letra);

    // Verificar se a letra está na palavra escolhida
    if (palavraEscolhida.includes(letra)) {
        // Atualizar a exibição da palavra com a letra correta
        for (let i = 0; i < palavraEscolhida.length; i++) {
            if (palavraEscolhida[i] === letra) {
                exibicaoPalavra[i] = letra;
            }
        }
    } else {
        // Reduzir o número de tentativas restantes e aumentar o número de erros
        tentativasRestantes--;
        numeroErros++;
    }

    // Limpar o campo de entrada de letra
    entradaLetra.value = '';

    // Atualizar a exibição do jogo
    atualizarExibicao();
}

// Função para encerrar o jogo
function encerrarJogo(mensagem) {
    // Desabilitar o campo de entrada de letra
    document.getElementById('entrada-letra').disabled = true;

    // Exibir a mensagem de fim de jogo
    document.getElementById('mensagem').style.display = 'block';
    document.getElementById('mensagem').innerText = mensagem;

    // Exibir o botão de reiniciar
    document.getElementById('botao-reiniciar').style.display = 'block';
}

// Iniciar o jogo quando a página for carregada
window.onload = iniciarJogo;
