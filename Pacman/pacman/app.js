document.addEventListener("DOMContentLoaded", () => {

    // Seleciona os elementos de pontuação e grid do DOM
    const scoreDisplay = document.querySelector("#score"); 
    const grid = document.querySelector("#grid");
    const width = 28; // Largura do grid
    const squares = [];  // Array para armazenar os quadrados do grid
    let score = 0;  // Pontuação inicial

// Layout do grid (0: pac-dot, 1: wall, 2: ghost-lair, 3: power-pellet, 4: empty)
    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
        1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
        0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
        1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
        0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1,
        1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0,
        0, 0, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2,
        2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1,
        1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1,
        1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0,
        0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ];

    /* legenda
    0 - pac-dot
    1 - wall
    2 - ghost-lair
    3 - power-pellet
    4 - empty
    */

    // Cria o tabuleiro do jogo
    function createBoard() {
        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement("div");
            grid.appendChild(square);
            squares.push(square);

              // Adiciona classes aos quadrados de acordo com o layout
            switch (layout[i]) {
                case 0:
                    squares[i].classList.add("pac-dot");
                    break;
                case 1:
                    squares[i].classList.add("wall");
                    break;
                case 2:
                    squares[i].classList.add("ghost-lair");
                    break;
                case 3:
                    squares[i].classList.add("power-pellet");
                    break;
            }
        }
    }

    createBoard();

    // criar os personagens
    // colocar o PACMAN, o herói!!     // Posiciona Pacman no tabuleiro
    let pacmanCurrentIndex = 490;
    squares[pacmanCurrentIndex].classList.add("pac-man");

    // Movimento de Pacman
    function movePacman(e) {
        squares[pacmanCurrentIndex].classList.remove("pac-man");
        let pacmanMoved = false;

        switch (e.key) {
            // TECLA ESQUERDA
            case "ArrowLeft":
                if (
                    pacmanCurrentIndex % width !== 0 &&
                    !squares[pacmanCurrentIndex - 1].classList.contains(
                        "wall"
                    ) &&
                    !squares[pacmanCurrentIndex - 1].classList.contains(
                        "ghost-lair"
                    )
                ) {
                    pacmanCurrentIndex -= 1;
                    pacmanMoved = true;
                }

                if (!pacmanMoved && pacmanCurrentIndex - 1 === 363) {
                    pacmanCurrentIndex = 391;
                }

                break;

            // TECLA DIREITA
            case "ArrowRight":
                if (
                    pacmanCurrentIndex % width < width - 1 &&
                    !squares[pacmanCurrentIndex + 1].classList.contains(
                        "wall"
                    ) &&
                    !squares[pacmanCurrentIndex + 1].classList.contains(
                        "ghost-lair"
                    )
                ) {
                    pacmanCurrentIndex += 1;
                    pacmanMoved = true;
                }

                if (!pacmanMoved && pacmanCurrentIndex + 1 === 392) {
                    pacmanCurrentIndex = 364;
                }

                break;

            // TECLA CIMA
            case "ArrowUp":
                if (
                    pacmanCurrentIndex - width >= 0 &&
                    !squares[pacmanCurrentIndex - width].classList.contains(
                        "wall"
                    ) &&
                    !squares[pacmanCurrentIndex - width].classList.contains(
                        "ghost-lair"
                    )
                ) {
                    pacmanCurrentIndex -= width;
                }

                break;

            // TECLA BAIXO
            case "ArrowDown":
                if (
                    pacmanCurrentIndex + width <= width * width &&
                    !squares[pacmanCurrentIndex + width].classList.contains(
                        "wall"
                    ) &&
                    !squares[pacmanCurrentIndex + width].classList.contains(
                        "ghost-lair"
                    )
                ) {
                    pacmanCurrentIndex += width;
                }

                break;
        } // FECHA O SWITCH da tecla

        squares[pacmanCurrentIndex].classList.add("pac-man");

        pacDotEaten();
        powerPelletEaten();
        checkForGameOver();
        checkForWin();
    }

    // O QUE ACONTECE QUANDO O PACMAN COME UM PONTO
    // Função para comer pac-dots
    function pacDotEaten() {
        if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
            score++; // PONTOS: +1
            scoreDisplay.innerHTML = score;
            squares[pacmanCurrentIndex].classList.remove("pac-dot");
        }
    }

    // O QUE ACONTECE QUANDO O PACMAN COME UM POWER PELLET
    // Função para comer power-pellets
    function powerPelletEaten() {
        if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
            score += 10; // PONTOS: +10
            scoreDisplay.innerHTML = score;
            ghosts.forEach((ghost) => (ghost.isScared = true));
            setTimeout(unScareGhosts, 10000);
            squares[pacmanCurrentIndex].classList.remove("power-pellet");
        }
    }

  // Função para desfazer o estado de medo dos fantasmas
    function unScareGhosts() {
        ghosts.forEach((ghost) => {
            ghost.isScared = false;
        });
    }

    // CRIAR FANTASMAS com um CONSTRUCTOR
     // Cria a classe Ghost
    class Ghost {
        constructor(className, startIndex, speed) {
            this.className = className;
            this.startIndex = startIndex;
            this.speed = speed;
            this.currentIndex = startIndex;
            this.isScared = false;
            this.timerId = NaN;
        }
    }

    // CRIAR FANTASMAS
    // Inicializa os fantasmas
    ghosts = [
        new Ghost("blinky", 349, 250),
        new Ghost("pinky", 377, 400),
        new Ghost("inky", 350, 300),
        new Ghost("clyde", 378, 500),
    ];

    // DESENHAR OS FANTASMAS!!!
 
    ghosts.forEach((ghost) => {
        squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
    });

     // Movimento dos fantasmas
    ghosts.forEach((ghost) => moveGhost(ghost));

    function moveGhost(ghost) {
        const directions = [-1, 1, width, -width];
        let direction =
            directions[Math.floor(Math.random() * directions.length)];

        ghost.timerId = setInterval(() => {
            // SE ESTIVER NO GHOST LAIR É OBRIGADO A IR PARA CIMA
            if (squares[ghost.currentIndex].classList.contains("ghost-lair")) {
                direction = -width;
            }

            if (
                !squares[ghost.currentIndex + direction].classList.contains(
                    "wall"
                ) &&
                !squares[ghost.currentIndex + direction].classList.contains(
                    "ghost"
                )
            ) {
                squares[ghost.currentIndex].classList.remove(
                    ghost.className,
                    "ghost",
                    "scared-ghost"
                );
                ghost.currentIndex += direction;
                squares[ghost.currentIndex].classList.add(
                    ghost.className,
                    "ghost"
                );
            } else {
                direction =
                    directions[Math.floor(Math.random() * directions.length)];
            }

            if (ghost.isScared) {
                squares[ghost.currentIndex].classList.add("scared-ghost");
            }

            if (
                ghost.isScared &&
                squares[ghost.currentIndex].classList.contains("pac-man")
            ) {
                squares[ghost.currentIndex].classList.remove(
                    ghost.className,
                    "ghost",
                    "scared-ghost"
                );
                ghost.currentIndex = ghost.startIndex;
                score += 100;
                scoreDisplay.innerHTML = score;
                squares[ghost.currentIndex].classList.add(
                    ghost.className,
                    "ghost"
                );
            }
            checkForGameOver();
        }, ghost.speed);
    }

     // Verifica se o jogo acabou
    function checkForGameOver() {
        if (
            squares[pacmanCurrentIndex].classList.contains("ghost") &&
            !squares[pacmanCurrentIndex].classList.contains("scared-ghost")
        ) {
            ghosts.forEach((ghost) => clearInterval(ghost.timerId));
            document.removeEventListener("keyup", movePacman);
            setTimeout(function () {
                alert("Game Over");
            }, 500);
        }
    }

       // Verifica se o jogador ganhou
    function checkForWin() {
        const total = document.querySelectorAll(
            ".pac-dot, .power-pellet"
        ).length;

        if (total === 0) {
            ghosts.forEach((ghost) => clearInterval(ghost.timerId));
            document.removeEventListener("keyup", movePacman);
            setTimeout(function () {
                alert("Ganhaste !!");
            }, 500);
        }
    }

    document.addEventListener("keyup", movePacman);
});
