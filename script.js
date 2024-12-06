let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function adivinhar() {
    const palpite = document.getElementById('palpite').value;
    tentativas++;
    if (palpite == numeroAleatorio) {
        document.getElementById('resultado').innerText = `Parabéns! Você acertou em ${tentativas} tentativas.`;
    } else if (palpite < numeroAleatorio) {
        document.getElementById('resultado').innerText = 'Muito baixo! Tente novamente.';
    } else {
        document.getElementById('resultado').innerText = 'Muito alto! Tente novamente.';
    }
}

function reiniciar() {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    document.getElementById('resultado').innerText = '';
    document.getElementById('palpite').value = '';
}
