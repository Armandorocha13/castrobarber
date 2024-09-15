document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verificação das credenciais
        if (username === 'admin' && password === '123456') {
            // Marca o usuário como autenticado
            sessionStorage.setItem('authenticated', 'true');
            // Redireciona para a página de administração
            window.location.href = 'admin.html';
        } else {
            loginMessage.textContent = 'Usuário ou senha incorretos.';
            loginMessage.classList.add('text-danger');
        }
    });
});
