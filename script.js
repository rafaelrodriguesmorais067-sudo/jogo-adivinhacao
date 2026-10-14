
let numeroSecreto = 0;
let limite = 0;
let totalTentativas = 0;
let jogoAtivo = false;

function iniciarJogo(nivel) {
    limite = nivel;
    numeroSecreto = Math.floor(Math.random() * limite) + 1;
    totalTentativas = 0;
    jogoAtivo = true;

    document.getElementById("mensagem").textContent =
        `Descubra o número entre 1 e ${limite}.`;

    document.getElementById("resultado").textContent = "";
    document.getElementById("tentativas").textContent =
        "Tentativas: 0";

    const campo = document.getElementById("palpite");
    campo.value = "";
    campo.min = 1;
    campo.max = limite;
    campo.focus();
}

function verificarPalpite() {
    const campo = document.getElementById("palpite");
    const resultado = document.getElementById("resultado");

    if (!jogoAtivo) {
        resultado.textContent = "Escolha uma dificuldade primeiro!";
        return;
    }

    if (campo.value.trim() === "") {
        resultado.textContent = "Digite um número!";
        return;
    }

    const palpite = Number(campo.value);

    if (!Number.isInteger(palpite) || palpite < 1 || palpite > limite) {
        resultado.textContent =
            `Digite um número inteiro de 1 a ${limite}.`;
        return;
    }

    totalTentativas++;

    if (palpite === numeroSecreto) {
        resultado.textContent =
            `🎉 Parabéns! Você acertou em ${totalTentativas} tentativa(s)!`;

        document.getElementById("mensagem").textContent =
            "Você encontrou o número secreto!";

        jogoAtivo = false;
    } else if (palpite < numeroSecreto) {
        resultado.textContent = "⬆️ Tente um número maior!";
    } else {
        resultado.textContent = "⬇️ Tente um número menor!";
    }

    document.getElementById("tentativas").textContent =
        `Tentativas: ${totalTentativas}`;

    campo.value = "";

    if (jogoAtivo) {
        campo.focus();
    }
}

function reiniciarJogo() {
    numeroSecreto = 0;
    limite = 0;
    totalTentativas = 0;
    jogoAtivo = false;

    document.getElementById("mensagem").textContent =
        "Escolha uma dificuldade para começar.";

    document.getElementById("resultado").textContent = "";
    document.getElementById("tentativas").textContent = "Tentativas: 0";
    document.getElementById("palpite").value = "";
}

