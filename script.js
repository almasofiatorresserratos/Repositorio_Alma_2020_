console.log("hola")
let turnoJugador = true

function marcar(numero) {
  let casilla = document.getElementById("casilla" + numero);

let conAlgo = ocupada(casilla)

if(!conAlgo){
  if(turnoJugador){
    casilla.classList.add("casillaX");
    casilla.classList.remove("casillaO");
    casilla.childNodes[0].innerText= "X";
    turnoJugador = false
}
else {
  casilla.classList.add("casillaO")
  casilla.classList.remove("casillaX");
  casilla.childNodes[0].innerText = "0";
  turnoJugador = true
}
}
}


function ocupada(casilla) {
  if (casilla.childNodes[0].innerText){
    console.log("sí hay algo");
    return true;
  }
  else {
    console.log("no hay nada")
    return false;
  }
}

function rei() {
  limpiarCasilla (1);
  limpiarCasilla (2);
  limpiarCasilla (3);
  limpiarCasilla (4);
  limpiarCasilla (5);
  limpiarCasilla (6);
  limpiarCasilla (7);
  limpiarCasilla (8);
  limpiarCasilla (9);
}
function limpiarCasilla(numero) {
  let casilla = document.getElementById ("casilla" + numero);
  casilla.childNodes[0].innerText = "";
  casilla.classList.remove ("casillaX");
  casilla.classList.remove ("casillaO");
}
