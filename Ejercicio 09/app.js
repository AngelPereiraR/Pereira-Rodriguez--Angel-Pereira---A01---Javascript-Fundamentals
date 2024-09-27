let edad = prompt("Introduce una edad")
let nacionalidad = prompt("Introduce tu nacionalidad")

if (edad >= 18) {
  if (nacionalidad === "española") {
    console.log("Puedes votar");
  } else if (Number.parseInt(nacionalidad) >= 0 || Number.parseInt(nacionalidad) < 0) {
    console.log("Nacionalidad no es un tipo de valor string");
  } else {
    console.log("No puedes votar");
  }
} else if (!(edad >= 0 || edad < 0) && (Number.parseInt(nacionalidad) >= 0 || Number.parseInt(nacionalidad) < 0)) {
  console.log("Edad no es un tipo de valor number y Nacionalidad no es un tipo de valor string");
} else if (!(edad >= 0 || edad < 0)) {
  console.log("Edad no es un tipo de valor number");
} else if (Number.parseInt(nacionalidad) >= 0 || Number.parseInt(nacionalidad) < 0) {
  console.log("Nacionalidad no es un tipo de valor string");
} else {
  console.log("No puedes votar");
}