
  /* // 4 VARIAVEIS GLOBAIS
  var jogador_um, jogador_dois, fundo, bola;

 
//DECLARACAO
  jogador_um = document.getElementById("jogador_um");
  jogador_dois = document.getElementById("jogador_dois");
  fundo = document.getElementById("fundo");
  bola = document.getElementById("bola");
  var wtecla, stecla;
  wtecla = false;
  stecla = false;

   // pontuaçao
var pt_um, pt_dois, resultado;
pt_um = document.getElementById("pt_um");
pt_dois = document.getElementById("pt_dois");
resultado = document.getElementById("resultado");

//Evento do botao

document.addEventListener("keydown", tecla_pressionada);
document.addEventListener("keyup", tecla_despressionada);
 

function tecla_pressionada(event) {
    if (event.key == 'w') {
        wtecla = true;
        //document.write("z apert");
       
    }
    else if (event.key == 's') {
        stecla = true;
        //document.write("x apert");
        
    }
}

function tecla_despressionada(event) {
    if (event.key == 'w') {
        wtecla = false;
       // document.write("z solt");
        
    }
    else if (event.key == 's') {
        stecla = false;
      //  document.write("x solt");
        
    }
}


// velocidade
 var Vx, Vy, V;
 Vx = 5;
 Vy = -2;
 V = Math.sqrt(Math.pow(Vx, 2) + Math.pow(Vy, 2));

//reiniciar a bola no centro
function reset() {
    bola.style.left = "50%";
    bola.style.top = "50%";
    Vx = 5;
    Vy = -2;
    V = Math.sqrt(Math.pow(Vx, 2) + Math.pow(Vy, 2));
}

//collisao
function colisao(jogando) {
    //bola
    var bola_top = bola.offsetTop;
    var bola_bottom = bola.offsetTop + bola.offsetHeight;
    var bola_left = bola.offsetLeft;
    var bola_right = bola.offsetLeft + bola.offsetWidth;

    //jogador
    var jogadortop = jogando.offsetTop;
    var jogadorbottom = jogando.offsetTop + jogando.offsetHeight;
    var jogadorleft = jogando.offsetLeft;
    var jogadorright = jogando.offsetLeft + jogando.offsetWidth;

  

    if (
        bola_bottom  > jogadortop && bola_top < jogadorbottom &&
        bola_right > jogadorleft &&
        bola_left  < jogadorright
    ) {
     
        return true;
    }

    else {
        return false;
    }
}


//funcao loop
function atualiza() {
 
   // Função para mostrar o resultado na tela
   function mostrarResultado(resultado) {
    var resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerText = resultado;
}

    // Verifica se algum jogador atingiu a pontuação máxima
    if (parseInt(pt_um.innerHTML) >= 4) {
        mostrarResultado("Jogador 1 ganhou!");
        return;
    } else if (parseInt(pt_dois.innerHTML) >= 4) {
        mostrarResultado("Jogador 2 ganhou!");
        return;
    }

   

    if (bola.offsetLeft < 0) {
        pt_dois.innerHTML = parseInt(pt_dois.innerHTML) + 1;
           reset();
            // Vx = -Vx;
     
    }
    if (bola.offsetLeft > fundo.offsetWidth - bola.offsetWidth) {
        pt_um.innerHTML = parseInt(pt_um.innerHTML) + 1;
        reset();
         // Vx = -Vx;
      
    }
    if (bola.offsetTop < 0) {
        Vy = -Vy;
    }
    if (bola.offsetTop > fundo.offsetHeight - bola.offsetHeight) {
        Vy = -Vy;
    }
   
    
    var controlador;
    if (bola.offsetLeft < fundo.offsetWidth / 2) {
        controlador = jogador_um;
    } else {
        controlador = jogador_dois;
    }
      
    //var controlador = bola.offsetLeft < fundo.offsetWidth / 2 ? jogador_um : jogador_dois;

    var bola_centerY = bola.offsetTop + bola.offsetHeight / 2;
    var controlador_centerY = controlador.offsetTop + controlador.offsetHeight / 2;

    var angulo = 0;

    if (colisao(controlador)) {
        if (controlador == jogador_um) {
            if (bola_centerY < controlador_centerY) {
                angulo  = -Math.PI / 4;
            }
            else if (bola_centerY > controlador_centerY) {
                angulo  = Math.PI / 4;
            }
            else {
                angulo  = 0;
            }
        }
        else if (controlador == jogador_dois) {
            if (bola_centerY < controlador_centerY) {
                angulo  = -3 * Math.PI / 4;
            }
            else if (bola_centerY > controlador_centerY) {
                angulo  = 3 * Math.PI / 4;
            }
            else {
                angulo  = 0;
            }
        }
        V = V + 1;
        Vx = V * Math.cos(angulo);
        Vy = V * Math.sin(angulo);
    }

    //atraso jogador 2
    var atraso = 0.8;

    //Atualiza a posição do jogador 2
    jogador_dois.style.top =
    jogador_dois.offsetTop + (bola.offsetTop - jogador_dois.offsetTop - jogador_dois.offsetHeight / 2) * atraso + "px";

    //Atualiza a posição da bola
    bola.style.left = bola.offsetLeft + Vx + "px";
    bola.style.top = bola.offsetTop + Vy + "px";

    if (wtecla && jogador_um.offsetTop > 55) {
        jogador_um.style.top = jogador_um.offsetTop - 5 + "px";
    }
    if (stecla && jogador_um.offsetTop < fundo.offsetHeight
        - jogador_um.offsetHeight + 35
    ) {
        jogador_um.style.top = jogador_um.offsetTop + 5 + "px";
    }
    requestAnimationFrame(atualiza);

   
}
atualiza();  */





 // 4 VARIAVEIS GLOBAIS
var jogador_um, jogador_dois, fundo, bola;

// DECLARAÇÃO
jogador_um = document.getElementById("jogador_um");
jogador_dois = document.getElementById("jogador_dois");
fundo = document.getElementById("fundo");
bola = document.getElementById("bola");
var wtecla, stecla;
wtecla = false;
stecla = false;

// pontuação
var pt_um, pt_dois, resultado;
pt_um = document.getElementById("pt_um");
pt_dois = document.getElementById("pt_dois");
resultado = document.getElementById("resultado");

// Evento do botao
document.addEventListener("keydown", tecla_pressionada);
document.addEventListener("keyup", tecla_despressionada);

function tecla_pressionada(event) {
    if (event.key == 'w') {
        wtecla = true;
    } else if (event.key == 's') {
        stecla = true;
    }
}

function tecla_despressionada(event) {
    if (event.key == 'w') {
        wtecla = false;
    } else if (event.key == 's') {
        stecla = false;
    }
}

// velocidade
var Vx, Vy, V;
Vx = 5;
Vy = -2;
V = Math.sqrt(Math.pow(Vx, 2) + Math.pow(Vy, 2));

// reiniciar a bola no centro
function reset() {
    bola.style.left = "50%";
    bola.style.top = "50%";
    Vx = 5;
    Vy = -2;
    V = Math.sqrt(Math.pow(Vx, 2) + Math.pow(Vy, 2));
}

// colisao
function colisao(jogando) {
    // bola
    var bola_top = bola.offsetTop;
    var bola_bottom = bola.offsetTop + bola.offsetHeight;
    var bola_left = bola.offsetLeft;
    var bola_right = bola.offsetLeft + bola.offsetWidth;

    // jogador
    var jogadortop = jogando.offsetTop;
    var jogadorbottom = jogando.offsetTop + jogando.offsetHeight;
    var jogadorleft = jogando.offsetLeft;
    var jogadorright = jogando.offsetLeft + jogando.offsetWidth;

    if (
        bola_bottom > jogadortop && bola_top < jogadorbottom &&
        bola_right > jogadorleft &&
        bola_left < jogadorright
    ) {
        return true;
    } else {
        return false;
    }
}

// funcao loop
function atualiza() {
    // Função para mostrar o resultado na tela
    function mostrarResultado(resultado) {
        var resultadoElemento = document.getElementById("resultado");
        resultadoElemento.innerText = resultado;
    }

    // Verifica se algum jogador atingiu a pontuação máxima
    if (parseInt(pt_um.innerHTML) >= 4) {
        mostrarResultado("Jogador 1 ganhou!");
        return;
    } else if (parseInt(pt_dois.innerHTML) >= 4) {
        mostrarResultado("Jogador 2 ganhou!");
        return;
    }

    if (bola.offsetLeft < 0) {
        pt_dois.innerHTML = parseInt(pt_dois.innerHTML) + 1;
        reset();
    }
    if (bola.offsetLeft > fundo.offsetWidth - bola.offsetWidth) {
        pt_um.innerHTML = parseInt(pt_um.innerHTML) + 1;
        reset();
    }
    if (bola.offsetTop < 0) {
        Vy = -Vy;
    }
    if (bola.offsetTop > fundo.offsetHeight - bola.offsetHeight) {
        Vy = -Vy;
    }

    var controlador;
    if (bola.offsetLeft < fundo.offsetWidth / 2) {
        controlador = jogador_um;
    } else {
        controlador = jogador_dois;
    }

    var bola_centerY = bola.offsetTop + bola.offsetHeight / 2;
    var controlador_centerY = controlador.offsetTop + controlador.offsetHeight / 2;

    var angulo = 0;

    if (colisao(controlador)) {
        if (controlador == jogador_um) {
            if (bola_centerY < controlador_centerY) {
                angulo = -Math.PI / 4;
            } else if (bola_centerY > controlador_centerY) {
                angulo = Math.PI / 4;
            } else {
                angulo = 0;
            }
        } else if (controlador == jogador_dois) {
            if (bola_centerY < controlador_centerY) {
                angulo = -3 * Math.PI / 4;
            } else if (bola_centerY > controlador_centerY) {
                angulo = 3 * Math.PI / 4;
            } else {
                angulo = 0;
            }
        }
        V = V + 1;
        Vx = V * Math.cos(angulo);
        Vy = V * Math.sin(angulo);
    }

    // atraso jogador 2
    var atraso = 0.8;

    // Altura do jogador dois
    var alturaJogadorDois = jogador_dois.offsetHeight;

    // Nova posição vertical do jogador dois
    var novaPosicaoJogadorDois =
        jogador_dois.offsetTop + (bola.offsetTop - jogador_dois.offsetTop - alturaJogadorDois / 2) * atraso;

    // Limites do contêiner #fundo
    var limiteSuperior = 50; // Limite superior da tela
    var limiteInferior = fundo.offsetHeight - alturaJogadorDois; // Limite inferior da tela

    // Verifica se a nova posição ultrapassa os limites do contêiner
    if (novaPosicaoJogadorDois < limiteSuperior) {
        // Se a nova posição ultrapassa o limite superior, ajusta para o limite superior
        jogador_dois.style.top = limiteSuperior + "px";
    } else if (novaPosicaoJogadorDois > limiteInferior) {
        // Se a nova posição ultrapassa o limite inferior, ajusta para o limite inferior
        jogador_dois.style.top = limiteInferior + "px";
    } else {
        // Caso contrário, atualiza a posição normalmente
        jogador_dois.style.top = novaPosicaoJogadorDois + "px";
    }

    // Atualiza a posição da bola
    bola.style.left = bola.offsetLeft + Vx + "px";
    bola.style.top = bola.offsetTop + Vy + "px";

    if (wtecla && jogador_um.offsetTop > 55) {
        jogador_um.style.top = jogador_um.offsetTop - 5 + "px";
    }
    if (stecla && jogador_um.offsetTop < fundo.offsetHeight - jogador_um.offsetHeight + 35) {
        jogador_um.style.top = jogador_um.offsetTop + 5 + "px";
    }

    requestAnimationFrame(atualiza);
}

atualiza();
 