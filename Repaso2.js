function jugar(opUsuario) {
  console.log(opUsuario);
  let opCPU = Math.floor(Math.random() * 3) + 1;
  console.log(opCPU);
}
//Revisar si gana el jugador o el CPU:
function revPuntos() {
  if (
      (opUsuario == opCPU)
      )  {
        document.getElementById(em);
  }

  if (
    (opUsuario[1] && opCPU[2]) ||
    (opUsuario[2] && opCPU[3]) ||
    (opUsuario[3] && opCPU[1])
    ) {
      document.getElementById(gcpu);
  }

  if (
    (opUsuario[1] && opCPU[3]) ||
    (opUsuario[2] && opCPU[1]) ||
    (opUsuario[3] && opCPU[2])
  ) {
    document.getElementById(gjug);
  }
}
