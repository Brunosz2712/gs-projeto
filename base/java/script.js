function criarConta(event) {
    event.preventDefault(); // Evita o envio do formulário

    let nomeCompleto = document.getElementById('nome-completo').value.trim();
    let email = document.getElementById('email').value.trim();
    let senha = document.getElementById('senha').value.trim();
    let confirmarSenha = document.getElementById('confirmar-senha').value.trim();
    let mensagemElement = document.getElementById('mensagem');

    if (nomeCompleto === '' || email === '' || senha === '' || confirmarSenha === '') {
        mensagemElement.textContent = "Preencha todos os campos!";
        return false;
    }

    if (senha !== confirmarSenha) {
        mensagemElement.textContent = "As senhas não coincidem! Tente novamente.";
        return false;
    }

    // Salvar o email e a senha em variáveis globais ou localStorage para simular o banco de dados
    window.localStorage.setItem('email', email);
    window.localStorage.setItem('senha', senha);
    mensagemElement.textContent = "Conta Criada com Sucesso! Redirecionando para a página de login...";

    setTimeout(function() {
        window.location.href = './login.html';
    }, 2000); // Ajustei o tempo para 2 segundos para uma resposta mais rápida

    return true;
}

function fazerLogin(event) {
    event.preventDefault(); // Evita o envio do formulário

    let emailInput = document.getElementById('email').value.trim();
    let senhaInput = document.getElementById('senha').value.trim();
    let mensagemElement = document.getElementById('mensagem');

    let emailSalvo = window.localStorage.getItem('email');
    let senhaSalva = window.localStorage.getItem('senha');

    if (emailInput === emailSalvo && senhaInput === senhaSalva) {
        mensagemElement.textContent = "Sucesso! Voltando para a página inicial!";
        setTimeout(function() {
            window.location.href = './index.html';
        }, 2000); // Ajustei o tempo para 2 segundos para uma resposta mais rápida
    } else {
        mensagemElement.textContent = "Email ou senha inválidos! Tente novamente.";
    }
}

function toggleText() {
    var moreText = document.getElementById("more-text");
    var btnText = document.getElementById("toggle-btn");

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        btnText.innerHTML = "Ocultar Texto";
    } else {
        moreText.style.display = "none";
        btnText.innerHTML = "Mostrar Texto Completo";
    }
}

document.getElementById("toggle-btn").addEventListener("click", toggleText);