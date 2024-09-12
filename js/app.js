//Variables:
const inputPantalla = document.querySelector("#pantalla");
const botones = document.querySelectorAll(".btn");

//querySAll nos da un arreglo y nos permite recorrer los botones
botones.forEach( boton => {
    
    boton.addEventListener("click", () => {

        const botonApretado = boton.textContent;

        if (boton.id === "ac") {
            inputPantalla.textContent = "0";
            return;
        }


        if (boton.id === "borrar") {
            if (inputPantalla.textContent.length === 1 || inputPantalla.textContent === "ERROR") {
                inputPantalla.textContent = "0";
            } else {
                inputPantalla.textContent = inputPantalla.textContent.slice(0, -1);
            }
            return;
        }


        if (boton.id === "igual") {
            try {
                inputPantalla.textContent = eval(inputPantalla.textContent);
            } catch {
                inputPantalla.textContent = "ERROR";
            }
            return;
        }


        if (inputPantalla.textContent === "0" || inputPantalla.textContent === "ERROR") {
            inputPantalla.textContent = botonApretado;
        } else {
            inputPantalla.textContent += botonApretado;
        }


    })

})