//Array predefinido de palavras
const listaPalavras = ['amigo','abelha','beijo','bela','casa','cometa','dentes','dados','escola', 'escrivaninha','feira', 'fantasma','gaita', 'goteiras','granjas','justo', 'jornalista', 'leitura','limosine', 'losângulo','montanha', 'morango', 'navio', 'nordestino','ovo','omelete','ovários','pato','penteados','queijo', 'quaresma','romantismo','ratoreira','saturno','salamandra','sol','torneira','total', 'humilde', 'humano','ìndio', 'iogurte'];

let palavraEscolhida;
let exibicaoPalavra;
let letrasChutadas;
let tentativasRestantes;
let numeroErros;

//FUNÇÃO PARA INICIAR O JOGO
function iniciarJogo() {

    document.getElementById('botao-reiniciar').style.display = 'none';
    document.getElementById('entrada-letra').disabled = false;
   

    //ESCOLHER UMA PALAVRA ALEATORIA DA LISTA
    palavraEscolhida = listaPalavras[Math.floor(Math.random() * listaPalavras.length)];
    console.log(palavraEscolhida)
    //INICIALIZAR A EXIBIÇÃO COM UNDERSCORES "_"
    exibicaoPalavra = Array(palavraEscolhida.length).fill('_');
    console.log(exibicaoPalavra);

    //INICIALIZAR A LISTA DE PALAVRAS CHUTADAS
    letrasChutadas = [];

    //DEFINIR O NUMERO MAXIMO DE TENTATIVAS
    tentativasRestantes = 7;

    //INICIALIZA O NUMERO DE ERROS
    numeroErros = 0;

    // document.getElementById('categoria')=  'none';

    atualizarExibicao();

}

function atualizarExibicao() {
    document.getElementById("exibicao-palavra").innerText =  exibicaoPalavra.join(' ');
    document.getElementById("letras-chutadas").innerText = `${letrasChutadas.join(', ')}`;
   // document.getElementById("categoria").innerText = listaPalavras;

    document.getElementById('mensagem').innerText = '';
    document.getElementById("imagem").src = `img/forca${numeroErros}.png`;

    //VERIFICAR SE O JOGO TERMINOU
    if (tentativasRestantes === 0) {
        encerrarJogo('VOCÊ MORREU!');
    } else if (!exibicaoPalavra.includes('_')) {
        encerrarJogo('Parabéns! Você venceu!');
    }

}

function chutarLetra() {
    const entradaLetra = document.getElementById('entrada-letra');
    const letra = entradaLetra.value.toLowerCase();

    if (!letra.match(/[a-zà-ùç]/i)) {
        alert('Por favor, insira uma letra válida.');
        return;
    }

    if (letrasChutadas.includes(letra)) {
        alert('Você já tentou esta letra. Tente outra.');
        return;
    }

    letrasChutadas.push(letra);

    if (palavraEscolhida.includes(letra)) {
        for (let i = 0; i < palavraEscolhida.length; i++) {
            if (palavraEscolhida[i] === letra) {
                exibicaoPalavra[i] = letra;
            }
        }
    } else {
        tentativasRestantes--;
        numeroErros++;
    }

    entradaLetra.value = '';

    atualizarExibicao();

}

function encerrarJogo(mensagem) {
    //DESABILITAR O CAMPO DE DIGITACAO
    document.getElementById('entrada-letra').disabled = true;

    //EXIBIR A MENSAGEM
    document.getElementById('mensagem').style.display = 'block';
    document.getElementById('mensagem').innerText = mensagem;

    //EXIBIR O BOTÃO REINICIAR
    document.getElementById('botao-reiniciar').style.display = 'block';

}

window.load = iniciarJogo();