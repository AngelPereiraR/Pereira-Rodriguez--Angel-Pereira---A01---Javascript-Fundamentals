let edad = prompt("Introduce una edad")

if (edad >= 18 && edad <= 25) {
  console.log("Es mayor de edad y la edad se encuentra entre 18 y 25 años");
} else if (edad > 25) {
  console.log("Es mayor de edad");
} else if (edad < 18) {
  console.log("Es menor de edad");
} else {
  console.log("El valor introducido no es correcto");
}