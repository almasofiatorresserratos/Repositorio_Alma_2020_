let coloreado = false
let subrayado = false

function cambiarColor() {
  let etiqueta = document.getElementById("aqui")
  etiqueta.classList.add("letrasAqua")
  if (coloreado == false) {
    texto.classList.add("letrasAqua")
    coloreado = true
  } else {
    texto.classList.renove("letrasAqua")
    coloreado = false
  }
}
function Subrayar() {
  let etiqueta = document.getElementById("aqui")
  etiqueta.classList.add("subrayar")
  if (subrayado == false) {
      texto.classList.add("subrayar")
      subrayado = true
    } else {
      texto.classList.renove("subrayar")
      subrayado = false
}
function pedirNombre() {
  let nombre = prompt ("¿Que quieres escribir?");
  document.getElementById("aqui")
}
