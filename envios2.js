
$(document).ready(() => {
    ShippingContainer = $("#envio");
    btnConfirm = $('#calcular');
    btnConfirm.click(function(event){
        console.log('click');

    })
    
    $(function () {

    $("input[name=lugar]:radio").click(function () {
        if ($('input[name=lugar]:checked').val() == "CABA_o_GBA") {
            $('#costo-display').html("$450");
            $('#lugar-display').html("Envío a CABA o GBA");
            $('#tiempo-display').html("Entrega en 48 hs");
            $('#empresa-display').html("Mensajería Privada");

        } if ($('input[name=lugar]:checked').val() == "Buenos_Aires") {
            $('#costo-display').html("$500");
            $('#lugar-display').html("Envío a otras localidades de Buenos Aires");
            $('#tiempo-display').html("Entrega entre 48 a 72 hs");
            $('#empresa-display').html("OCA Correos");


        } else if ($('input[name=lugar]:checked').val() == "Otra_provincia") {
            $('#costo-display').html("$600");
            $('#lugar-display').html("Envío al resto del país");
            $('#tiempo-display').html("Entrega de 3 a 5 días");
            $('#empresa-display').html("Oca Correos");
        }
        
    });
        
});
    
})

