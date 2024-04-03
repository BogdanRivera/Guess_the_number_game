let numeroSecreto = 0;
let intentos = 0; 
let valorMaximo = 10; 
let maxIntentos = 3; 

let estado = 0; //Reutilizar el elemento del formulario para determinar la selección de dificultad o juego

let dificultad = 1; //1 = Fácil, 2 = Medio, 3 = Dificil 

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; //Una buena práctica es retornar aunque no sea nada
}

function verificar(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    switch (estado){
        case 0: 
        if(numeroUsuario===2){
            valorMaximo = 100; 
            estado = 1; 
            maxIntentos = 7; 
        }else if(numeroUsuario==3){
            valorMaximo = 1000; 
            estado = 1;
            maxIntentos = 11;  
        }else{
            valorMaximo = 10; 
            estado = 1
            maxIntentos = 4;
        }
        condicionesInicialesJuego();
        console.log(intentos); 
        break; 

        case 1:
            console.log(intentos); 
            if(intentos < maxIntentos){
            if(numeroUsuario<numeroSecreto){
                asignarTextoElemento('p',`The secret number is greater <br/>(${intentos} out of ${maxIntentos-1} attempts) `);
            }else if(numeroUsuario>numeroSecreto){
                asignarTextoElemento('p',`The secret number is less <br/>(${intentos} out of ${maxIntentos-1} ${intentos===1 ? "attempt":"attempts"}) `);
            }else if(numeroUsuario===numeroSecreto){
                asignarTextoElemento('p',`You guessed the number in ${intentos} ${(intentos === 1) ? 'attempt':'attempts'}!`);
                document.getElementById('reiniciar').removeAttribute('disabled');
                estado = 0;
                document.getElementById('botonOpcion').setAttribute('disabled',true); 
                return; 
            }else{
                asignarTextoElemento('p','Enter a value');
            }
            intentos ++; 
            limpiarCaja();
        }
        if(intentos==maxIntentos){
        asignarTextoElemento('p',`You didn't guess it, the number was ${numeroSecreto} <br/> (${intentos - 1} out of ${maxIntentos-1} attempts)`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('botonOpcion').setAttribute('disabled',true);
        estado = 0;  
        }
        break; 
    }
    return;    
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''; 

}

function generarNumeroSecreto(){
    let numeroSecreto = Math.floor(Math.random()*valorMaximo)+1; 
    return numeroSecreto; 
}

function condicionesInicialesDificultad(){
    let form = document.getElementById("valorUsuario");
    let boton = document.getElementById('botonOpcion'); 
    asignarTextoElemento('h1','Guess the number game!');
    asignarTextoElemento('p',"Indicate a difficulty level: </br> 1. Easy (1 to 10) </br> 2. Medium (1 to 100) </br> 3. Hard (1 to 1000)");
    document.getElementById('reiniciar').setAttribute('disabled',true);
    boton.innerHTML = "Select difficulty";
    form.setAttribute('max',3); 
    intentos = 1;
    boton.removeAttribute('disabled'); 
}

function condicionesInicialesJuego(){
    asignarTextoElemento('p',`Indicates a number from 1 to ${valorMaximo}`);
    limpiarCaja();
    numeroSecreto = generarNumeroSecreto();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    document.getElementById('botonOpcion').innerHTML = "Enter number"; 
    document.getElementById('valorUsuario').setAttribute('max',valorMaximo); 
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalos de números
    condicionesInicialesDificultad();
    //Generar el número aleatorio 
    //Inicializar el número de intentos
    //Deshabilitar el botón de intentos
}

condicionesInicialesDificultad();

alert("Welcome to my game \n\nHow to play? At the beginning, you will be asked to choose a difficulty level (from 1 to 3). If you choose a difficulty level outside of that range, it will default to easy. You must guess the number chosen by the computer. If the number you entered is lower, the game will let you know, as well as if it's higher. Enjoy the game!");



