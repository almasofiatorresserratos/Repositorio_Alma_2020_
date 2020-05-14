function crecer () {
  let imagen = document.getElementById("imagen");

  if(imagen.width <= 1000) {
    imagen.width += 10;
  }
}

function encoger () {
  let imagen = document.getElementById("imagen");

  if(imagen.width > 300) {
    imagen.width -= 10;
  }
}
