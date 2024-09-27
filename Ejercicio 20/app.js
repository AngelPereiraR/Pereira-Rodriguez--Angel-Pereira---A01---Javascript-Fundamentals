const message = prompt("Introduce una cadena de texto").toLowerCase().trim().split(" ").join("")

if (Number.parseInt(message) >= 0 || Number.parseInt(message) < 0) {
  console.log("Se ha introducido un valor que no es de tipo string");
} else {
  if (message == message.split("").reverse().join("")) {
    console.log("La cadena es un palíndromo");
  } else {
    console.log("La cadena no es un palíndromo");
  }
}