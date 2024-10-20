document.addEventListener("DOMContentLoaded", function() {
    const juntarlo = document.querySelector('.juntarlo');

    // Asegúrate de que el contenedor sea visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                juntarlo.style.display = 'flex'; // Muestra el contenedor
            } else {
                juntarlo.style.display = 'none'; // Oculta el contenedor
            }
        });
    });

    observer.observe(juntarlo);
});


function toggleRespuesta(index) {
    const respuestas = document.querySelectorAll('.respuesta');
    const flechas = document.querySelectorAll('.flecha');
    
    if (respuestas[index].style.display === "none") {
        respuestas[index].style.display = "block";
        flechas[index].innerHTML = "&#9650;";
    } else {
        respuestas[index].style.display = "none";
        flechas[index].innerHTML = "&#9660;";
    }
}
