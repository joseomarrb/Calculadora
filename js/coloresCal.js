const contenedor = document.querySelector(".contenedor");
const btnIgual = document.querySelector("#igual");

//cambiar color
btnIgual.addEventListener("click", cambiarColor);

function generarColor() {
    let digitos = "0123456789ABCDE  F";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random() * 16);
        color += digitos[indiceAleatorio];
    }
    return color;
}

function cambiarColor() {
    let numero = generarColor();
    contenedor.style.backgroundColor = numero;
} 