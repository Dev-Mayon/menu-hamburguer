$(document).ready(function() {
    // Inicializa o carousel de imagens com autoplay
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    // Menu hamburguer para abrir/fechar o menu de navegação
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    });

    // Aplica máscara ao campo de telefone
    $('#telefone').mask('(00) 00000-0000');

    // Validação do formulário
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor insira o seu nome'
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos);
            alert(`Existem ${camposIncorretos} campos incorretos`);
        }
    }); // Fechamento do $('form').validate

    // Adiciona ação ao clicar nos botões dos veículos
    $('.lista-veiculos button').click(function() {
        // Captura o nome do veículo a partir do elemento <h3>
        const nomeVeiculo = $(this).parent().find('h3').text();

        // Coloca o nome do veículo no campo "Veículo de interesse"
        $('#veiculoDeInteresse').val(nomeVeiculo); // Corrigido o seletor do campo

        // Faz a página rolar até o formulário de contato
        $('html, body').animate({
            scrollTop: $('form').offset().top // Faz scroll para o formulário de contato
        }, 1000);
    });

}); // Fechamento do $(document).ready
