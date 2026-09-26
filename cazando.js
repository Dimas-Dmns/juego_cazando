let contexto;

let graficarGato = function(){
    let canvas = document.getElementById("areaJuego");
    contexto = canvas.getContext("2d");
    
    let tamano = 50;
    let x = (500 - tamano) / 2;
    let y = (500 - tamano) / 2;

    contexto.fillStyle = "orange";
    contexto.fillRect(x, y, tamano, tamano);
}