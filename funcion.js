// Seleccionamos los elementos de texto
const frontendText = document.querySelector('.frontend');
const nombreText = document.querySelector('.nombre');
const carets = document.querySelectorAll('.caret');

// Función para cambiar las clases
function cambiarColor() {
    // Agregamos la clase 'selected' para cambiar de color
    frontendText.classList.add('selected');
    nombreText.classList.add('selected');

    // Oculta el cursor temporalmente
    carets.forEach(caret => caret.style.display = 'none');

    // Regresa el cursor después de 1 segundo
    setTimeout(() => {
        carets.forEach(caret => caret.style.display = 'inline');
    }, 100);

    // Elimina la clase 'selected' después de 3 segundos
    setTimeout(() => {
        frontendText.classList.remove('selected');
        nombreText.classList.remove('selected');
    }, 3000); // Cambia esto a 4000 para incluir el tiempo de parpadeo
}

// Ejecutamos la función de cambiar color cada 6 segundos
setInterval(cambiarColor, 6000);

// Llamamos a la función una vez al inicio
cambiarColor();



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
