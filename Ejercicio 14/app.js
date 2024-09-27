const number = prompt("Introduce un número")

if (!(number >= 0 || number < 0)) {
  alert("El valor introducido no es un número entero válido")
} else if (number % 2 == 0) {
  console.log(`El número ${number} es par`);
} else {
  console.log(`El número ${number} es impar`);
}