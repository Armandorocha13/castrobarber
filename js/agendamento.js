document.getElementById('formAgendamento').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const pagamento = document.getElementById('pagamento').value;

    const agendamento = {
        nome,
        telefone,
        servico,
        data,
        hora,
        pagamento
    };

    // Salvar agendamento no localStorage
    let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    agendamentos.push(agendamento);
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));

    // Exibir confirmação
    document.getElementById('confirmacaoAgendamento').classList.remove('oculto');
});


document.getElementById('formAgendamento').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const confirmacao = document.getElementById('confirmacaoAgendamento');
    confirmacao.classList.remove('oculto');
    confirmacao.classList.add('ativo');

    setTimeout(function() {
        confirmacao.classList.remove('ativo');
        confirmacao.classList.add('oculto');
    }, 3000);
});
