// MENUS DE ENLACES
function toggleMenu(event) {
    const submenu = document.querySelector('.submenu');
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    event.stopPropagation(); // Evitar que el clic se propague
}

document.addEventListener('click', () => {
    const submenu = document.querySelector('.submenu');
    submenu.style.display = 'none'; // Ocultar menú si se hace clic fuera
});

// Añadir el evento mouseenter y mouseleave para el menú
document.querySelector('.enlaces[href="#Cursos"]').addEventListener('mouseenter', toggleMenu);
document.querySelector('.enlaces[href="#Cursos"]').addEventListener('mouseleave', () => {
    document.querySelector('.submenu').style.display = 'none'; // Ocultar menú al salir
});



// Seleccionamos los elementos de texto
const frontendText = document.querySelector('.frontend');
const nombreText = document.querySelector('.nombre');
const carets = document.querySelectorAll('.caret');

function cambiarColor() {
    frontendText.classList.add('selected');
    nombreText.classList.add('selected');
    carets.forEach(caret => caret.style.display = 'none');
    setTimeout(() => {
        carets.forEach(caret => caret.style.display = 'inline');
    }, 100);
    setTimeout(() => {
        frontendText.classList.remove('selected');
        nombreText.classList.remove('selected');
    }, 3000); 
}
setInterval(cambiarColor, 6000);
cambiarColor();

// Campo 2
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
