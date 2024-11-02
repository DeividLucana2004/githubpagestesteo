// Submenu de enlace
function toggleSubmenu(){
    const submenu = document.getElementById("submenu");
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}




// Seleccionamos los elementos de texto Del MENU
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

/* Radiarlo*/
function cambiarImagen() {
    const imagen = document.querySelector('.Radiarlo img');
    if (imagen.src.includes('Noche.jpg')) {
        imagen.src = 'img/OtraImagen.jpg'; // Cambia a otra imagen
    } else {
        imagen.src = 'img/Noche.jpg'; // Cambia de vuelta a la original
    }
}

