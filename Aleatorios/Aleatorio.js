function inicio() {
  console.log('Hola, soy Alma');
  let numeroAleatorio = Math.floor(Math.random() * 10);
  // Math.floor(x) 5.3 => 5 5.9=> 5
  // Math.random() * 10 = 0...9
  console.log(numeroAleatorio)

  let intento = prompt("Ingresa un número entre 0 y 9")
  console.log(intento)

  if (intento == numeroAleatorio)
    alert('¡Le atinaste!')
  else
    alert('Nooooo, perdiste :(')
}
