let pusu = 0
let pcom = 0
function jugar(opUsuario) {
  console.log(opUsuario);
  let opCPU = Math.floor(Math.random() * 3) + 1;
  console.log(opCPU);
  revPuntos(opUsuario, opCPU)
}
//Revisar si gana el jugador o el CPU:
function revPuntos(opUsuario, opCPU) {
  if (
      opUsuario == opCPU
      )  {
        document.getElementById("em").style.display = "block";
        document.getElementById("gcpu").style.display = "none";
        document.getElementById("gjug").style.display = "none";



  }

  if (
    (opUsuario == 1 && opCPU == 2) ||
    (opUsuario == 2 && opCPU == 3) ||
    (opUsuario == 3 && opCPU == 1)
    ) {
      document.getElementById("gcpu").style.display = "block";
      document.getElementById("em").style.display = "none";
      document.getElementById("gjug").style.display = "none";
      document.getElementById("pc").innerText = pcom += 1;

  }

  if (
    (opUsuario == 1 && opCPU == 3) ||
    (opUsuario == 2 && opCPU == 1) ||
    (opUsuario == 3 && opCPU == 2)
  ) {
    document.getElementById("gjug").style.display = "block";
    document.getElementById("gcpu").style.display = "none";
    document.getElementById("em").style.display = "none";
    document.getElementById("pj").innerText = pusu += 1;
  }
}
