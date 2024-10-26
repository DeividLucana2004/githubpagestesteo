// MENUS DE ENLACES
function toggleMenu() {
    const submenu = document.querySelector('.submenu');
    submenu.style.display = submenu.style.display === 'none' || submenu.style.display === '' ? 'block' : 'none';
}





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
