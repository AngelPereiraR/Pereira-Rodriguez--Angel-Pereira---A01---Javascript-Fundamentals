let number = 1
while (number > 0) {
  number = prompt("Introduce un número entero")
  if (number < 0) {
    alert("El número introducido es negativo")
  }
  if (!(number >= 0 || number < 0)) {
    alert("El valor introducido no es ningún número existente")
    number = 1
  }
}