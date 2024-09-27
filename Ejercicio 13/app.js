let number = "a"

while (!(number >= 0 || number < 0)) {
  number = prompt("Introduce un número")
  if (!(number >= 0 || number < 0)) {
    alert("El valor introducido no es un número")
    number = "a"
  }
}