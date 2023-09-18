let cadastro = document.getElementById('button');

var email = document.getElementById('emailCadastro');
var confEmail = document.getElementById('confEmail');
var senha = document.getElementById('senhaCadastro');
var confSenha = document.getElementById('confSenha');


function cadastro() {
    if (email == confEmail && senha == confSenha) {
        alert('cadastrado com sucesso');
        location.href = "login.html"
    } else {
        alert('Email ou senha não coincide')
    }
}

