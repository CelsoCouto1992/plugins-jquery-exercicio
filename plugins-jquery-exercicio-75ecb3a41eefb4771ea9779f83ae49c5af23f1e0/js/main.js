$(document).ready(function () {
    $('.carousel-imagens').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false
    });

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('#form-compra').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: {
                required: 'Por favor, informe seu nome completo',
                minlength: 'O nome deve ter pelo menos 3 caracteres'
            },
            email: {
                required: 'Por favor, informe seu e-mail',
                email: 'Por favor, informe um e-mail válido'
            },
            telefone: {
                required: 'Por favor, informe seu telefone'
            },
            cpf: {
                required: 'Por favor, informe seu CPF'
            },
            endereco: {
                required: 'Por favor, informe seu endereço'
            },
            cep: {
                required: 'Por favor, informe seu CEP'
            }
        },
        submitHandler: function(form) {
            alert('Formulário enviado com sucesso!');
            form.reset();
        },
        invalidHandler: function() {
            alert('Por favor, preencha os campos corretamente.');
        }
    });
});
