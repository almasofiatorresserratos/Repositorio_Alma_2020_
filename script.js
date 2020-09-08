//console.log("hola")
//function marcar() {
  //let casilla = document.getElementById("casilla1");
  //casilla.classList.add("casillaX");
  //casilla.childNodes[0].innerText = "X"
  //let JugadorUnoTurno = true
//}
 //else{
  //   casilla.classList.add("casillaO")
    // casilla.classList.remove("casillaJade");
     //casilla.childNodes[0].innerText = "0";
     //JugadorUnoTurno = true
 //}
//}


console.log("hola")
function marcar() {
  let casilla = document.getElementById("casilla1");
  casilla.classList.add("casillaMorada");
  casilla.childNodes[0].innerText = "X"
console.log("Adhara Elven")
let JugadorUnoTurno = true

function colorear(numero) {
  let casilla = document.getElementById("casilla" + numero);
  casilla.classList.add("casillaJade");
  casilla.classList.remove("casillaDorada");
  if(JugadorUnoTurno){casilla.childNodes[0].innerText = "X";
  JugadorUnoTurno = false
}
  else{
      casilla.classList.add("casillaDorada")
      casilla.classList.remove("casillaJade");
      casilla.childNodes[0].innerText = "0";
      JugadorUnoTurno = true
  }
}
