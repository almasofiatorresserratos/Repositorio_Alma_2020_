let respuestas = ['c', 'b', 'a', 'c', 'a', 'c', 'b', 'c', 'a', 'c'];
let puntaje = 0;


function jugar(position, respuesta) {
  console.log(position);
  console.log(respuesta);
  if (respuestas[position] == respuesta) {
    console.log('correcto')
    puntaje += 1;
    document.getElementById("points").innerText = puntaje;
  }
  else {
    console.log('incorrecto');
  }
  document.getElementById("preg"+position+"-a").disabled = "true";
  document.getElementById("preg"+position+"-b").disabled = "true";
  document.getElementById("preg"+position+"-c").disabled = "true";
}


// When the user clicks on the button, open the modal
function mostrar() {
 let modal = document.getElementById("myModal");
 modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function ocultar() {
 let modal = document.getElementById("myModal");
 modal.style.display = "none";
}

// When the user clicks on the button, open the modal
function mostrar2() {
 let modal = document.getElementById("myModal2");
 modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function ocultar2() {
 let modal = document.getElementById("myModal2");
 modal.style.display = "none";
}

// When the user clicks on the button, open the modal
function mostrar3() {
 let modal = document.getElementById("myModal3");
 modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function ocultar3() {
 let modal = document.getElementById("myModal3");
 modal.style.display = "none";
}

// When the user clicks on the button, open the modal
function mostrar4() {
 let modal = document.getElementById("myModal4");
 modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function ocultar4() {
 let modal = document.getElementById("myModal4");
 modal.style.display = "none";
}

// When the user clicks on the button, open the modal
function mostrar5() {
 let modal = document.getElementById("myModal5");
 modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function ocultar5() {
 let modal = document.getElementById("myModal5");
 modal.style.display = "none";
}

// When the user clicks on the button, open the modal
function mostrar6() {
 let modal = document.getElementById("myModal6");
 modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function ocultar6() {
 let modal = document.getElementById("myModal6");
 modal.style.display = "none";
}


// When the user clicks on the button, open the modal
function mostrar7() {
 let modal = document.getElementById("myModal7");
 modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function ocultar7() {
 let modal = document.getElementById("myModal7");
 modal.style.display = "none";
}


// When the user clicks on the button, open the modal
function mostrar8() {
 let modal = document.getElementById("myModal8");
 modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function ocultar8() {
 let modal = document.getElementById("myModal8");
 modal.style.display = "none";
}


// When the user clicks on the button, open the modal
function mostrar9() {
 let modal = document.getElementById("myModal9");
 modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function ocultar9() {
 let modal = document.getElementById("myModal9");
 modal.style.display = "none";
}



// When the user clicks on the button, open the modal
function mostrar10() {
  puntaje = 0
  document.getElementById("points").innerText = puntaje;
  let modal = document.getElementById("myModal10");
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function ocultar10() {
 let modal = document.getElementById("myModal10");
 modal.style.display = "none";
}



function rei() {
  
}
