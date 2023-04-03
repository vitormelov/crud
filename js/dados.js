let id = 0

function calcularIdade(ano_aniversario, mes_aniversario, dia_aniversario) {
    var d = new Date,

    ano_atual = d.getFullYear(),
    mes_atual = d.getMonth() + 1,
    dia_atual = d.getDate(),    

    quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }

    return quantos_anos < 0 ? 0 : quantos_anos;
}

function atualizarTabela() {

    event.preventDefault(); //evitar o envio do formulario
    
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let email = document.getElementById("email").value;
    let cpf = document.getElementById("cpf").value;
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let ano = document.getElementById("ano").value;
    let idade = calcularIdade(ano, mes, dia);
    let genero = document.getElementById("genero").value;
    id = ++id;
    if (id <= 9) {
        id = "0" + id
    };
    let dataConsulta = document.getElementById("dataConsulta").value.split("-").reverse().join("/")
    let motivo = document.getElementById("motivo").value;
    
    document.getElementById('tabela-dados').innerHTML += `
        <tr>
            <td>${id}</td>
            <td>${nome}</td>
            <td>${telefone}</td>
            <td>${dia + "/" + mes + "/" + ano}</td>
            <td>${idade}</td>
            <td>${genero}</td>
            <td>
                <button class="btn btn-outline-success btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal+${id}">Ver</button>
                <button class="btn btn-outline-warning btn-sm">Editar</button>
                <button class="btn btn-outline-danger btn-sm">Excluir</button>
            </td>
        </tr>

        <div class="modal fade" id="exampleModal+${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"><strong>${nome}</strong></h5>
                    </div>
                    
                    <div class="modal-body" id="explicacao">
                        <h6><strong>Dados pessoais</strong></h6>
                        <p>Email: ${email}</p>
                        <p>CPF: ${cpf}</p>
                        <h6><strong>Última consulta</strong></h6>
                        <p>Data da consulta: ${dataConsulta}</p>
                        <p>Motivo da consulta: ${motivo}</p>
                    </div>
                
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

