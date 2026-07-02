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

let turnos = 0;
//let finalizarTurno = document.getElementById("finalizarTurno");
// Jogadores Fim

// Baralho
let mesa = document.querySelector(".cartasComun");
let baralhoComun = ["./assets/As.jfif"];
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

function addCartasMesa() {
  let tagImagem = document.createElement("img");
  tagImagem.style.width = "80px";
  tagImagem.style.height = "120px";
  if (turnos > 0) {
    tagImagem.src = baralhoComun[0];
    mesa.appendChild(tagImagem);
  }
}

function turnoUm() {
  if (turnos == 1) {
    jogadorUm.maoJogadorUm = [
      baralhoComun[Math.floor(Math.random() * baralhoComun.length)],
      baralhoEfeito[Math.floor(Math.random() * baralhoEfeito.length)],
    ];
    jogadorDois.maoJogadorDois = [
      baralhoComun[Math.floor(Math.random() * baralhoComun.length)],
      baralhoEfeito[Math.floor(Math.random() * baralhoEfeito.length)],
    ];
    console.log(`Jogador Um: ${jogadorUm.maoJogadorUm[0]}`);
    console.log(`Jogador Um: ${jogadorUm.maoJogadorUm[1]}`);
    console.log(`Jogador Dois: ${jogadorDois.maoJogadorDois[0]}`);
    console.log(`Jogador Dois: ${jogadorDois.maoJogadorDois[1]}`);
  }
}

function distribuirCartas() {
  jogadorUm.maoJogadorUm += [
    baralhoFull[Math.floor(Math.random() * baralhoFull.length)],
  ];

  jogadorDois.maoJogadorDois += [
    baralhoFull[Math.floor(Math.random() * baralhoFull.length)],
  ];
  console.log(`Jogador Um: ${jogadorUm.maoJogadorUm}`);
  console.log(`Jogador Dois: ${jogadorDois.maoJogadorDois}`);
}

function atualizarTurno() {
  turnos++;
  console.log(`Turno: ${turnos}`);
  turnoUm();
  addCartasMesa();
  if (turnos > 1) {
    distribuirCartas();
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
setInterval(pontuacao(), 1000);

function somarPontosJogadorUm() {
  let j = 1;
  for (let i = 0; i < jogadorUm.maoJogadorUm.length; i++) {
    jogadorUm.pontos = jogadorUm.maoJogadorUm[i] + jogadorUm.maoJogadorUm[j];
    j++;
  }
  console.log(jogadorUm.pontos);
  console.log(jogadorDois.pontos);
}

// Mecanica do jogo Fim
