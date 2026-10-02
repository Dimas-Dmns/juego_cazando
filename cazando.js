
// ========================================
// VARIABLES DEL JUEGO
// ========================================

let gatoX = 0;
let gatoY = 0;

let comidaX = 0;
let comidaY = 0;

const ALTO_GATO = 50;
const ANCHO_GATO = 50;

const ALTO_COMIDA = 20;
const ANCHO_COMIDA = 20;

const TAMANO_CANVAS = 500;
const MOVIMIENTO = 10;

let contexto;

let puntos = 0;
let tiempo = 10;

let intervaloTiempo = null;
let juegoActivo = false;


// ========================================
// OBTENER CANVAS
// ========================================

function obtenerCanvas() {
    let canvas = document.getElementById("areaJuego");

    contexto = canvas.getContext("2d");

    return canvas;
}


// ========================================
// DIBUJAR FONDO
// ========================================

function dibujarFondo() {

    // Cielo
    contexto.fillStyle = "#8ed8f5";
    contexto.fillRect(0, 0, 500, 500);

    // Sol
    contexto.fillStyle = "#ffdf65";
    contexto.fillRect(390, 45, 55, 55);

    // Nubes pixeladas
    contexto.fillStyle = "#ffffff";

    contexto.fillRect(65, 65, 65, 18);
    contexto.fillRect(80, 48, 35, 18);
    contexto.fillRect(100, 65, 35, 18);

    contexto.fillRect(250, 110, 60, 18);
    contexto.fillRect(265, 93, 35, 18);

    // Montañas
    contexto.fillStyle = "#83bd85";

    contexto.fillRect(0, 280, 130, 60);
    contexto.fillRect(80, 245, 100, 95);
    contexto.fillRect(170, 290, 120, 50);
    contexto.fillRect(300, 255, 100, 85);
    contexto.fillRect(390, 280, 110, 60);

    // Tierra
    contexto.fillStyle = "#a87548";
    contexto.fillRect(0, 400, 500, 100);

    // Hierba
    contexto.fillStyle = "#70b957";
    contexto.fillRect(0, 390, 500, 18);

    // Bloques de tierra
    contexto.fillStyle = "#8b603c";

    for (let x = 0; x < 500; x += 50) {
        contexto.fillRect(x, 425, 25, 25);
        contexto.fillRect(x + 25, 475, 25, 25);
    }

    // Flores pequeñas
    contexto.fillStyle = "#fff1a3";

    contexto.fillRect(50, 380, 7, 7);
    contexto.fillRect(220, 370, 7, 7);
    contexto.fillRect(430, 380, 7, 7);

    contexto.fillStyle = "#ffffff";

    contexto.fillRect(54, 375, 7, 7);
    contexto.fillRect(224, 365, 7, 7);
    contexto.fillRect(434, 375, 7, 7);
}


// ========================================
// DIBUJAR GATO PIXELADO
// ========================================

function graficarGato() {

    // Cuerpo
    contexto.fillStyle = "#e7a04d";
    contexto.fillRect(gatoX + 5, gatoY + 15, 40, 30);

    // Cabeza
    contexto.fillStyle = "#f0b56b";
    contexto.fillRect(gatoX + 5, gatoY, 40, 30);

    // Orejas
    contexto.fillStyle = "#e7a04d";
    contexto.fillRect(gatoX + 5, gatoY - 5, 12, 12);
    contexto.fillRect(gatoX + 33, gatoY - 5, 12, 12);

    // Ojos
    contexto.fillStyle = "#273b2c";
    contexto.fillRect(gatoX + 14, gatoY + 12, 5, 5);
    contexto.fillRect(gatoX + 32, gatoY + 12, 5, 5);

    // Nariz
    contexto.fillStyle = "#d47a78";
    contexto.fillRect(gatoX + 23, gatoY + 20, 5, 4);

    // Patas
    contexto.fillStyle = "#bd793d";
    contexto.fillRect(gatoX + 7, gatoY + 42, 12, 8);
    contexto.fillRect(gatoX + 31, gatoY + 42, 12, 8);

    // Cola
    contexto.fillStyle = "#bd793d";
    contexto.fillRect(gatoX + 40, gatoY + 32, 10, 7);
}


// ========================================
// DIBUJAR COMIDA
// ========================================


let graficarComida = function() {
    // Cuerpo del ratón
    contexto.fillStyle = "#929292";
    contexto.fillRect(comidaX + 3, comidaY + 7, 14, 10);

    // Cabeza
    contexto.fillStyle = "#AFAFAF";
    contexto.fillRect(comidaX + 11, comidaY + 5, 7, 8);

    // Orejas
    contexto.fillStyle = "#929292";
    contexto.fillRect(comidaX + 12, comidaY + 2, 4, 5);
    contexto.fillRect(comidaX + 17, comidaY + 5, 3, 4);

    // Interior rosado de las orejas
    contexto.fillStyle = "#F3A6A6";
    contexto.fillRect(comidaX + 13, comidaY + 3, 2, 2);
    contexto.fillRect(comidaX + 18, comidaY + 6, 1, 2);

    // Patitas
    contexto.fillStyle = "#D8A0A0";
    contexto.fillRect(comidaX + 5, comidaY + 16, 4, 3);
    contexto.fillRect(comidaX + 13, comidaY + 16, 4, 3);

    // Ojo
    contexto.fillStyle = "#222222";
    contexto.fillRect(comidaX + 16, comidaY + 8, 2, 2);

    // Nariz
    contexto.fillStyle = "#E87979";
    contexto.fillRect(comidaX + 19, comidaY + 10, 1, 2);

    // Cola
    contexto.fillStyle = "#D8A0A0";
    contexto.fillRect(comidaX, comidaY + 10, 3, 2);
    contexto.fillRect(comidaX - 1, comidaY + 8, 2, 2);
};


// ========================================
// ACTUALIZAR PANTALLA
// ========================================

function actualizarPantalla() {

    dibujarFondo();
    graficarComida();
    graficarGato();

}


// ========================================
// GENERAR COMIDA ALEATORIA
// ========================================

function aparecerComida() {

    comidaX = Math.floor(
        Math.random() * (TAMANO_CANVAS - ANCHO_COMIDA)
    );

    comidaY = Math.floor(
        Math.random() * (390 - ALTO_COMIDA)
    );

}


// ========================================
// DETECTAR COLISIÓN
// ========================================

function detectarColision() {

    let colision =
        gatoX < comidaX + ANCHO_COMIDA &&
        gatoX + ANCHO_GATO > comidaX &&
        gatoY < comidaY + ALTO_COMIDA &&
        gatoY + ALTO_GATO > comidaY;

    if (colision) {

        puntos++;

        tiempo = 10;

        document.getElementById("puntos").textContent = puntos;
        document.getElementById("tiempo").textContent = tiempo;

        document.getElementById("mensaje").textContent =
            "¡Muy bien! ¡Has atrapado la comida!";

        aparecerComida();
        actualizarPantalla();

        if (puntos >= 10) {
    juegoActivo = false;
    document.getElementById("mensaje").innerHTML =
        "🏆 WINNER 🏆<br>¡El gato atrapó 10 ratones!";
    return;
}

    }

}


// ========================================
// MOVIMIENTO DEL GATO
// ========================================

function moverArriba() {

    if (!juegoActivo) return;

    gatoY -= MOVIMIENTO;

    if (gatoY < 0) gatoY = 0;

    comprobarMovimiento();

}


function moverAbajo() {

    if (!juegoActivo) return;

    gatoY += MOVIMIENTO;

    if (gatoY > 450) gatoY = 450;

    comprobarMovimiento();

}


function moverIzquierda() {

    if (!juegoActivo) return;

    gatoX -= MOVIMIENTO;

    if (gatoX < 0) gatoX = 0;

    comprobarMovimiento();

}


function moverDerecha() {

    if (!juegoActivo) return;

    gatoX += MOVIMIENTO;

    if (gatoX > 450) gatoX = 450;

    comprobarMovimiento();

}


// ========================================
// COMPROBAR MOVIMIENTO Y COLISIÓN
// ========================================

function comprobarMovimiento() {

    detectarColision();
    actualizarPantalla();

}


// ========================================
// TEMPORIZADOR
// ========================================

function iniciarTemporizador() {

    clearInterval(intervaloTiempo);

    intervaloTiempo = setInterval(function() {

        if (!juegoActivo) return;

        tiempo--;

        document.getElementById("tiempo").textContent = tiempo;

        if (tiempo <= 0) {

            terminarJuego();

        }

    }, 1000);

}


// ========================================
// TERMINAR JUEGO
// ========================================

function terminarJuego() {

    juegoActivo = false;

    clearInterval(intervaloTiempo);

    document.getElementById("mensaje").textContent =
        "¡Se acabó el tiempo! Conseguíste " + puntos + " puntos.";

}


// ========================================
// INICIAR O REINICIAR JUEGO
// ========================================

function iniciarJuego() {

    clearInterval(intervaloTiempo);

    puntos = 0;
    tiempo = 10;

    gatoX = (TAMANO_CANVAS - ANCHO_GATO) / 2;
    gatoY = (TAMANO_CANVAS - ALTO_GATO) / 2;

    document.getElementById("puntos").textContent = puntos;
    document.getElementById("tiempo").textContent = tiempo;

    document.getElementById("mensaje").textContent =
        "¡Atrapa la comida antes de que termine el tiempo!";

    aparecerComida();

    obtenerCanvas();

    juegoActivo = true;

    actualizarPantalla();

    iniciarTemporizador();

}


// ========================================
// CONTROLES DEL TECLADO
// ========================================

document.addEventListener("keydown", function(evento) {

    let tecla = evento.key.toLowerCase();

    if (
        ["arrowup", "arrowdown", "arrowleft", "arrowright"].includes(tecla)
    ) {
        evento.preventDefault();
    }

    if (tecla === "arrowup" || tecla === "w") {
        moverArriba();
    }

    if (tecla === "arrowdown" || tecla === "s") {
        moverAbajo();
    }

    if (tecla === "arrowleft" || tecla === "a") {
        moverIzquierda();
    }

    if (tecla === "arrowright" || tecla === "d") {
        moverDerecha();
    }

});

