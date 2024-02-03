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
                asignarTextoElemento('p',`El número secreto es mayor <br/>(${intentos} de ${maxIntentos-1})`);
            }else if(numeroUsuario>numeroSecreto){
                asignarTextoElemento('p',`El número secreto es menor <br/>(${intentos} de ${maxIntentos-1})`);
            }else if(numeroUsuario===numeroSecreto){
                asignarTextoElemento('p',`¡Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez':'veces'}!`);
                document.getElementById('reiniciar').removeAttribute('disabled');
                estado = 0;
                document.getElementById('botonOpcion').setAttribute('disabled',true); 
                return; 
            }else{
                asignarTextoElemento('p','Ingresa un valor');
            }
            intentos ++; 
            limpiarCaja();
        }
        if(intentos==maxIntentos){
        asignarTextoElemento('p',`No acertaste, el número era ${numeroSecreto} <br/> (${intentos - 1} de ${maxIntentos-1})`);
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
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p','Indica un nivel de dificultad: </br> 1. Facil (1 al 10) 2. Medio (1 al 100) </br> 3. Dificil (1 al 1000)');
    document.getElementById('reiniciar').setAttribute('disabled',true);
    boton.innerHTML = "Selecciona dificultad";
    form.setAttribute('max',3); 
    intentos = 1;
    boton.removeAttribute('disabled'); 
}

function condicionesInicialesJuego(){
    asignarTextoElemento('p',`Indica un número del 1 al ${valorMaximo}`);
    limpiarCaja();
    numeroSecreto = generarNumeroSecreto();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    document.getElementById('botonOpcion').innerHTML = "Ingresa número"; 
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




