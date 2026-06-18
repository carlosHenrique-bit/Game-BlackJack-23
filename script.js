// Jogadores
let jogadorUm = {
  username: "Carlos",
  maoJogadorUm: "",
  pontos: 0,
};

let jogadorDois = {
  username: "Silvano",
  maoJogadorDois: "",
  pontos: 0,
};

let turnos = 1;
// Jogadores Fim

// Baralho
const baralho = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let zap = 0;
let coringa = 0;
let bomba = 0;
let corrente = 0;
let escudo = 0;
let reset = 0;
let baralhoEfeito = [zap, coringa, bomba, corrente, escudo, reset];
let baralhoFull = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  zap,
  coringa,
  bomba,
  corrente,
  escudo,
  reset,
];
let cartaComun = 0;
// Baralho Fim

// Mecanica do jogo
function turnoUm() {
  let baralhoComun = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (turnos == 1) {
    jogadorUm.maoJogadorUm = [
      baralhoComun[Math.floor(Math.random() * baralhoComun.length)],
      baralhoEfeito[Math.floor(Math.random() * baralhoEfeito.length)],
    ];
    jogadorDois.maoJogadorDois = [
      baralhoComun[Math.floor(Math.random() * baralhoComun.length)],
      baralhoEfeito[Math.floor(Math.random() * baralhoEfeito.length)],
    ];
    turnos++;
  }
}

/*
  Criar um Botão, que funcione como um contador, para que cada jogador click quando terminar a jogada
  quando o contador for 2 execute a função para aumentar o numero de turnos, distribuir as cartasComuns na mesa
  e nas mão dos jogadores.
  
function distribuirCartas() {
  if (finalizarVez == 2) {
    for (let i = 1; i < turnos; i++) {
      turnos++;
      cartaComun = [Math.floor(Math.random() * baralhoComun.length)];
      jogadorUm.maoJogadorUm = [Math.floor(Math.random() * baralhoFull.length)];
      jogadorDois.maoJogadorDois = [
        Math.floor(Math.random() * baralhoFull.length),
      ];
    }
  }
}
setInterval(distribuirCartas(), 1000);
*/
function pontuacao() {
  if (jogadorUm.pontos == 23 && jogadorDois.pontos == 23) {
    return console.log("Empate");
  } else if (jogadorDois.pontos == 23 || jogadorUm.pontos > 23) {
    return console.log("Jogador Dois Ganhou");
  } else if (jogadorUm.pontos == 23 || jogadorDois.pontos > 23) {
    return console.log("Jogador Um Ganhou");
  }
}
setInterval(pontuacao(), 1000);
// Mecanica do jogo Fim
