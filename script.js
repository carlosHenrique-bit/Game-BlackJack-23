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
const zap = 0;
const coringa = 0;
const bomba = 0;
const corrente = 0;
const escudo = 0;
const reset = 0;
// Baralho Fim

// Mecanica do jogo
function turnoUm() {
  let baralhoComun = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let baralhoEfeito = [zap, coringa, bomba, corrente, escudo, reset];
  if (turnos == 1) {
    console.log("Function esta funcionando");
    jogadorUm.maoJogadorUm = [
      baralhoComun[Math.floor(Math.random() * baralhoComun.length)],
      baralhoEfeito[Math.floor(Math.random() * baralhoEfeito.length)],
    ];
    jogadorDois.maoJogadorDois = [
      baralhoComun[Math.floor(Math.random() * baralhoComun.length)],
      baralhoEfeito[Math.floor(Math.random() * baralhoEfeito.length)],
    ];
  }
}

function pontuacao() {
  if (jogadorUm.pontos == 23 && jogadorDois.pontos == 23) {
    return console.log("Empate");
  } else if (jogadorDois.pontos == 23 || jogadorUm.pontos > 23) {
    return console.log("Jogador Dois Ganhou");
  } else if (jogadorUm.pontos == 23 || jogadorDois.pontos > 23) {
    return console.log("Jogador Um Ganhou");
  }
}
pontuacao();
// Mecanica do jogo Fim
