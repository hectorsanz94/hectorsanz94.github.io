$(document).ready(function() {
    // Aquí pueden ir algunas interacciones básicas, como animaciones o manejo de eventos
});
$(document).ready(function() {
    // Animación para desvanecer las secciones al hacer scroll
    $(window).scroll(function() {
        $('.container').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 600) {
                $(this).addClass("fadeIn");
            }
        });
    });
});
