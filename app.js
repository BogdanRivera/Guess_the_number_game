var elem1 = document.getElementById("respuesta1");
var elem2 = document.getElementById("respuesta2"); 
var imagen = document.getElementById("imagenResultado");

let opcion = 1; 

while(opcion==1){
let nivelDificultad = prompt("Ingresa un nivel de dificultad: \n 1.Fácil (del 1 al 10)\n 2.Medio (del 1 al 100)\n 3.Dificil (del 1 al 1000) \n");
let numeroDificultad = 10; 
let nIntentos = 4; 

if(nivelDificultad==1){
    numeroDificultad = 10;
}else if(nivelDificultad==2){
    numeroDificultad = 100; 
    nIntentos = 7; 
}else{
    numeroDificultad=1000;
    nIntentos = 11; 
}

// Genera un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo)
let numeroAleatorioDecimal = Math.random();

// Escala el número para que esté en el rango de 1 a 10
let numeroAleatorioEnRango = Math.floor(numeroAleatorioDecimal * numeroDificultad) + 1;
let numeroSecreto = numeroAleatorioEnRango;


let cuentaIntentos = 1; 
let palabra = 'vez'; 
while(cuentaIntentos!= numeroSecreto){
    let numeroUsuario = prompt(`Indícame un número del 1 al ${numeroDificultad}`);
    if(numeroUsuario == numeroSecreto){
        alert(`Acertaste, el número es ${numeroUsuario}!. Lo hiciste en ${cuentaIntentos} ${cuentaIntentos==1 ? 'vez':'veces'}`);
        elem1.innerHTML = "Correcto!";
        elem2.innerHTML = "Descubriste el número secreto";
        imagen.src = "./img/trophy.png";
        break;
    }else{
        if(numeroUsuario>numeroSecreto){
            alert("El número secreto es menor"); 
        }else{
            alert("El número secreto es mayor"); 
        }
        cuentaIntentos += 1; 
        palabra = 'veces'; 
        if(cuentaIntentos==nIntentos){
            alert(`Lo siento, no acertaste, has llegado al máximo de intentos(${nIntentos-1}) el número secreto era ${numeroSecreto} y tu pusiste ${numeroUsuario}`);
            elem1.innerHTML = "Incorrecto!";
            elem2.innerHTML = "No descubriste el número secreto";
            imagen.src = "./img/sad.png";
            break;
        }
        //alert(`Lo siento, no acertaste, el número secreto era ${numeroSecreto} y tu pusiste ${numeroUsuario}`);
    }
} 


opcion = prompt("Quieres volver a jugar?\n1. Si\n2. No");
}
