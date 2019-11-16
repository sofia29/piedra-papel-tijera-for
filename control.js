//Piedra, papel o tijera


let ganadorUno = "Ganó el Usuario 1"
let ganadorDos = "Ganó el Usuario 2"
let sinGanador = "Empataron"
let invalida = "No ingresaste una opción válida. Se acabó el juego "

for (let i = 0; i < 5; i++) {

let respuestaPrimerUsuario = prompt("Usuario 1: ¿Piedra, papel o tijera?");

if (respuestaPrimerUsuario === "piedra") {
    let respuestaSegundoUsuario = prompt("Usuario 2: ¿Piedra, papel o tijera?");
    if (respuestaSegundoUsuario === "piedra") {
        alert(sinGanador)
    }
    else if (respuestaSegundoUsuario === "papel") {
        alert(ganadorDos)
    }   
    else if (respuestaSegundoUsuario === "tijera") {
        alert(ganadorUno)
    }
    else {
        alert("No ingresaste una opcion valida")
    }
}

else if (respuestaPrimerUsuario === "tijera") {
    let respuestaSegundoUsuario = prompt("Usuario 2: ¿Piedra, papel o tijera?");
    if (respuestaSegundoUsuario === "piedra") {
        alert(ganadorDos)
    }
    else if (respuestaSegundoUsuario === "papel") {
        alert(ganadorUno)
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
    }
    else if (respuestaSegundoUsuario === "papel") {
        alert(sinGanador)
    }   
    else if (respuestaSegundoUsuario === "tijera") {
        alert(ganadorDos)
    }
    else {
        alert("No ingresaste una opcion valida")
    }
}

else {
    alert("No ingresaste una opcion valida")
}
}