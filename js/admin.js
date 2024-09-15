document.addEventListener("DOMContentLoaded", function () {
  const listaAgendamentos = document.getElementById("listaAgendamentos");

  // Verifica se o usuário está autenticado
  if (!sessionStorage.getItem("authenticated")) {
    window.location.href = "login.html";
  }

  // Carregar agendamentos do localStorage
  let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

  // Função para renderizar a lista de agendamentos
  function renderizarAgendamentos() {
    listaAgendamentos.innerHTML = "";

    if (agendamentos.length > 0) {
      agendamentos.forEach((agendamento, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                    <td>${agendamento.nome}</td>
<a href="https://wa.me/${agendamento.telefone.replace(
          /\D/g,
          ""
        )}" target="_blank">${
          agendamento.telefone
        }</a></td>                    <td>${agendamento.servico}</td>
                    <td>${agendamento.data}</td>
                    <td>${agendamento.hora}</td>
                    <td>${agendamento.pagamento}</td>
                    <td>
                        <button class="btn-acao btn-finalizado" onclick="finalizarAgendamento(${index})">Finalizado</button>
                        <button class="btn-acao btn-excluir" onclick="excluirAgendamento(${index})">Excluir</button>
                    </td>
                `;
        listaAgendamentos.appendChild(row);
      });
    } else {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td colspan="7" class="text-center">Nenhum agendamento disponível</td>
            `;
      listaAgendamentos.appendChild(row);
    }
  }

  // Função para finalizar (remover) um agendamento
  window.finalizarAgendamento = function (index) {
    if (confirm("Tem certeza que deseja remover este agendamento?")) {
      agendamentos.splice(index, 1); // Remove o agendamento da lista
      localStorage.setItem("agendamentos", JSON.stringify(agendamentos));
      renderizarAgendamentos();
    }
  };

  // Função para excluir um agendamento
  window.excluirAgendamento = function (index) {
    if (confirm("Tem certeza que deseja excluir este agendamento?")) {
      agendamentos.splice(index, 1); // Remove o agendamento da lista
      localStorage.setItem("agendamentos", JSON.stringify(agendamentos));
      renderizarAgendamentos();
    }
  };

  // Renderizar a lista inicialmente
  renderizarAgendamentos();
});
