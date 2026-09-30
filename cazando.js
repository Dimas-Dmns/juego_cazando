let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;
const ALTO_GATO = 50;
const ANCHO_GATO = 50;
const ALTO_COMIDA = 20;
const ANCHO_COMIDA = 20;
let contexto;

let graficarRectangulo = function(x, y, ancho, alto, color){
    contexto.fillStyle = color;
    contexto.fillRect(x, y, ancho, alto);
}

let graficarGato = function(){
    let canvas = document.getElementById("areaJuego");
    contexto = canvas.getContext("2d");
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "orange");
}

let graficarComida = function(){
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "red");
}

let iniciarJuego = function(){
    gatoX = (500 - ANCHO_GATO) / 2;
    gatoY = (500 - ALTO_GATO) / 2;
    comidaX = 500 - ANCHO_COMIDA;
    comidaY = 500 - ALTO_COMIDA;
    graficarGato();
    graficarComida();
}

let limpiarCanva = function(){
    contexto.clearRect(0, 0, 500, 500);
}

let moverIzquierda = function(){
    gatoX = gatoX - 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

let moverDerecha = function(){
    gatoX = gatoX + 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

let moverArriba = function(){
    gatoY = gatoY - 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

let moverAbajo = function(){
    gatoY = gatoY + 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();

}

let detectarColision = function(){
    if(
        gatoX < comidaX + ANCHO_COMIDA &&
        gatoX + ANCHO_GATO > comidaX &&
        gatoY < comidaY + ALTO_COMIDA &&
        gatoY + ALTO_GATO > comidaY
    ){
        alert("¡El gato comió!");
    }
}


