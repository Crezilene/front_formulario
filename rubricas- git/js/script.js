$(function () {

    // HEADER
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            if (!$('.main_header').hasClass('fixed')) {
                $('.main_header').stop().addClass('fixed').css('top', '-100px').animate(
                    {
                        'top': '0px'
                    }, 500);
            }
        } else {
            $('.main_header').removeClass('fixed');
        }
    });

    // Monitora o campo "Rubrica" para exibir os campos opcionais
    const rubricaInput = document.getElementById("rubrica");
    const optionalFields = document.querySelectorAll(".optional-field");

    // Função para ocultar os campos opcionais
    function toggleOptionalFields() {
        if (rubricaInput.value.trim() !== "") {
            // Exibe os campos opcionais
            optionalFields.forEach(function (field) {
                field.style.display = "block";
            });
        } else {
            // Oculta os campos opcionais
            optionalFields.forEach(function (field) {
                field.style.display = "none";
            });
        }
    }

    // Inicialmente ocultar os campos opcionais
    toggleOptionalFields();

    // Adicionar evento de escuta para quando o usuário digitar no campo Rubrica
    rubricaInput.addEventListener("input", toggleOptionalFields);

});
