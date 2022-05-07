$(document).ready(
    function () {
        $("#formCadastro").submit(function (e) {
            e.preventDefault();
            Cadastrar();
        }
        );
    }
);

function Cadastrar() {
    let parametros = {
        Nome: $("#nome").val(),
        Email: $("#email").val(),
        Mensagem: $("#mensagem").val(),
    };

    $.post("/Home/Cadastrar", parametros)

    .done(function(data)
    {
        if (data.status == "OK") {
            $("#formCadastro").after("<h3>Cadastro efetuado com sucesso!</h3>");
            $("#formCadastro").hide();
        } else {
            $("#formCadastro").after("<h3>Erro no cadastro...</h3>");
            $("#formCadastro").hide();
        }
    })
    .fail(function()
    {
        alert("Erro no servidor, tente mais tarde");
    })
}
