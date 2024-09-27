const number = prompt("Introduce un número entero")

if (!(Number.parseInt(number) >= 0 || Number.parseInt(number) < 0) || !(number == Number.parseInt(number))) {
  console.log("Se ha introducido un valor que no es de tipo number");
} else {
  let totalSumByDigits = 0
  for (let i = 0; i < number.toString().length; i++) {
    totalSumByDigits += Number.parseInt(number.toString().charAt(i))
  }
  console.log(`La suma de los dígitos del número ${number} es: ${totalSumByDigits}`);
}