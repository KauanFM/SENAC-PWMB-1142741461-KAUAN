var email = document.getElementById('email')
var senha = document.getElementById('senha')


function logar() {
    if (email == "admin123" && senha == "admin123") {
        alert('logado com sucesso')
        location.href="index.html";
    } else {
        alert('falha')
    }
}