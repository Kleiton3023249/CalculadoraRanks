
let jogadores = [
    { vitorias: 5, derrotas: 3 },   
    { vitorias: 15, derrotas: 10 }, 
    { vitorias: 55, derrotas: 20 }, 
    { vitorias: 90, derrotas: 45 }, 
    { vitorias: 105, derrotas: 50 } 
];


function calculadoraRankeadas(vitorias, derrotas) {

    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

for (let i = 0; i < jogadores.length; i++) {
    let jogador = jogadores[i]; 
    let resultado = calculadoraRankeadas(jogador.vitorias, jogador.derrotas); 

    console.log(`Jogador ${i + 1} tem saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`);
}
