// 16. VARIABLES Y CONSTANTES
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;

const ALTO_GATO = 50;
const ANCHO_GATO = 50;
const ALTO_COMIDA = 20;
const ANCHO_COMIDA = 20;

let contexto;

let graficarComida = function(){
    // Ya no ponemos 0, usamos las variables
    contexto.fillStyle = "red";
    contexto.fillRect(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA);
}

let iniciarJuego = function(){
    // Gato centrado
    gatoX = (500 - ANCHO_GATO) / 2;
    gatoY = (500 - ALTO_GATO) / 2;

    // Comida en esquina inferior derecha
    comidaX = 500 - ANCHO_COMIDA;
    comidaY = 500 - ALTO_COMIDA;

    graficarGato();
    graficarComida();
}

let graficarGato = function(){
    let canvas = document.getElementById("areaJuego");
    contexto = canvas.getContext("2d");
    contexto.fillStyle = "orange";
    contexto.fillRect(gatoX, gatoY, ANCHO_GATO, ALTO_GATO);
}