const number = prompt("Introduce un número entero")

if (!(Number.parseInt(number) >= 0 || Number.parseInt(number) < 0) || !(number == Number.parseInt(number))) {
  console.log("Se ha introducido un valor que no es de tipo number");
} else {
  let total = 1
  for (let i = 1; i <= number; i++) {
    total *= i
  }
  console.log(`El factorial del número ${number} es ${total}`);
}