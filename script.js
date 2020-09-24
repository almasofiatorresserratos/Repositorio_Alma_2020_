console.log("hola")
let turnoJugador = true
let copiarTablero = []
let seguirJugando = true;
let nojugadores = 2;

function marcar(numero) {
  let casilla = document.getElementById("casilla" + numero);
  let conAlgo = ocupada(casilla)

if (seguirJugando) {
  if(!conAlgo){
    if (turnoJugador) {
      casilla.classList.add("casillaX");
      casilla.classList.remove("casillaO");
      casilla.childNodes[0].innerText= "X";
      copiarTablero[numero - 1] = "X";
      turnoJugador = false
      document.getElementById("turnoJugador").innerText = 2;
  }
  else {
    casilla.classList.add("casillaO")
    casilla.classList.remove("casillaX");
    casilla.childNodes[0].innerText = "0";
    copiarTablero[numero-1] = "0";
    turnoJugador = true;
    document.getElementById("turnoJugador").innerText = 1;
      }
    if (revisarGanar()) {
      console.log("¡Ya hay ganador!");
      seguirJugando = false;
      document.getElementById("felicidades").style.display = "inline-block";
    }
    }
}
//console.log(copiarTablero);
}
function revisarGanar() {
  if (
      (copiarTablero[0] && copiarTablero[0] == copiarTablero[3] && copiarTablero[0] == copiarTablero [6]) ||
      (copiarTablero[1] && copiarTablero[1] == copiarTablero[4] && copiarTablero[1] == copiarTablero [7]) ||
      (copiarTablero[2] && copiarTablero[2] == copiarTablero[5] && copiarTablero[2] == copiarTablero [8])
      )  {
  //console.log("Vertical");
  return true;
  }

  if (
    (copiarTablero[0] && copiarTablero[0] == copiarTablero[1] && copiarTablero[0] == copiarTablero [2]) ||
    (copiarTablero[3] && copiarTablero[3] == copiarTablero[4] && copiarTablero[3] == copiarTablero [5]) ||
    (copiarTablero[6] && copiarTablero[6] == copiarTablero[7] && copiarTablero[6] == copiarTablero [8])
    ) {
      //console.log("Horizontal");
      return true;
  }

  if (
    (copiarTablero[0] && copiarTablero[0] == copiarTablero[4] && copiarTablero[0] == copiarTablero [8]) ||
    (copiarTablero[2] && copiarTablero[2] == copiarTablero[4] && copiarTablero[2] == copiarTablero [6])
  ) {
    //console.log("Diagonal")
    return true;
  }
}


function ocupada(casilla) {
  if (casilla.childNodes[0].innerText){
    //console.log("sí hay algo");
    return true;
  }
  else {
    //console.log("no hay nada")
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
  copiarTablero = []
  seguirJugando = true;
  turnoJugador = true;
  document.getElementById("felicidades").style.display = "none";
  document.getElementById("turnoJugador").innerText = 1;
}
function limpiarCasilla(numero) {
  let casilla = document.getElementById ("casilla" + numero);
  casilla.childNodes[0].innerText = "";
  casilla.classList.remove ("casillaX");
  casilla.classList.remove ("casillaO");
}

function vs() {
  if (nojugadores === 2)  {
    document.getElementById("modoJugar").innerText = "Vs Player";
    nojugadores = 1;
  } else {
    document.getElementById("modoJugar").innerText = "Vs CPU";
    nojugadores = 2;
  }
  rei();
}
