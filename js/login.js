document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    // Credenciais fixas para o exemplo
    const usuarioValido = 'admin';
    const senhaValida = '123456';

    const mensagemErro = document.getElementById('mensagemErro');

    if (usuario === usuarioValido && senha === senhaValida) {
        // Redirecionar para admin.html
        window.location.href = 'admin.html';
    } else {
        // Exibir mensagem de erro
        mensagemErro.style.display = 'block';
    }
});

