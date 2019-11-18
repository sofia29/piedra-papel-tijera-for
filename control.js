//Piedra, papel o tijera


let ganadorUno = "Ganó el Usuario 1"
let ganadorDos = "Ganó el Usuario 2"
let sinGanador = "Empataron"
let invalida = "No ingresaste una opción válida. Se acabó el juego "
let puntajeGanadorUno = 0
let puntajeGanadorDos = 0

for (i = 0; i = puntajeGanadorUno < 2 && puntajeGanadorDos < 2; i++) {

let respuestaPrimerUsuario = prompt("Usuario 1: ¿Piedra, papel o tijera?");

if (respuestaPrimerUsuario === "piedra") {
    let respuestaSegundoUsuario = prompt("Usuario 2: ¿Piedra, papel o tijera?");
    if (respuestaSegundoUsuario === "piedra") {
        alert(sinGanador)
    }
    else if (respuestaSegundoUsuario === "papel") {
        alert(ganadorDos)
        puntajeGanadorDos++
    }   
    else if (respuestaSegundoUsuario === "tijera") {
        alert(ganadorUno)
        puntajeGanadorUno++
    }
    else {
        alert("No ingresaste una opcion valida")
    }
}

else if (respuestaPrimerUsuario === "tijera") {
    let respuestaSegundoUsuario = prompt("Usuario 2: ¿Piedra, papel o tijera?");
    if (respuestaSegundoUsuario === "piedra") {
        alert(ganadorDos)
        puntajeGanadorDos++
    }
    else if (respuestaSegundoUsuario === "papel") {
        alert(ganadorUno)
        puntajeGanadorUno++
    }   
    else if (respuestaSegundoUsuario === "tijera") {
        alert(sinGanador)
    }
    else {
        alert("No ingresaste una opcion valida")
    }
}

else if (respuestaPrimerUsuario === "papel") {
    let respuestaSegundoUsuario = prompt("Usuario 2: ¿Piedra, papel o tijera?");
    if (respuestaSegundoUsuario === "piedra") {
        alert(ganadorUno)
        puntajeGanadorUno++
    }
    else if (respuestaSegundoUsuario === "papel") {
        alert(sinGanador)
    }   
    else if (respuestaSegundoUsuario === "tijera") {
        alert(ganadorDos)
        puntajeGanadorDos++
    }
    else {
        alert("No ingresaste una opcion valida")
    }
}

else {
    alert("No ingresaste una opcion valida")
}
}