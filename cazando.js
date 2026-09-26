let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;

const ALTO_GATO = 50;
const ANCHO_GATO = 50;
const ALTO_COMIDA = 20;
const ANCHO_COMIDA = 20;

let contexto;

let graficarGato = function(){
    let canvas = document.getElementById("areaJuego");
    contexto = canvas.getContext("2d");
    
    gatoX = (500 - ANCHO_GATO) / 2;
    gatoY = (500 - ALTO_GATO) / 2;

    contexto.fillStyle = "orange";
    contexto.fillRect(gatoX, gatoY, ANCHO_GATO, ALTO_GATO);
}

let graficarComida = function(){
    contexto.fillStyle = "red";
    comidaX = 0;
    comidaY = 0;
    contexto.fillRect(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA);
}

let iniciarJuego = function(){
    graficarGato();
    graficarComida();
}