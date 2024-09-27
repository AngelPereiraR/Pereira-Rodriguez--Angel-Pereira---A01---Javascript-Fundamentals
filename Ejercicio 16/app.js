// let edad = prompt("Introduce una edad")
// let nacionalidad = prompt("Introduce tu nacionalidad")

// if (edad >= 18) {
//   if (nacionalidad === "española") {
//     console.log("Puedes votar");
//   } else if (Number.parseInt(nacionalidad) >= 0 || Number.parseInt(nacionalidad) < 0) {
//     console.log("Nacionalidad no es un tipo de valor string");
//   } else {
//     console.log("No puedes votar");
//   }
// } else if (!(edad >= 0 || edad < 0) && (Number.parseInt(nacionalidad) >= 0 || Number.parseInt(nacionalidad) < 0)) {
//   console.log("Edad no es un tipo de valor number y Nacionalidad no es un tipo de valor string");
// } else if (!(edad >= 0 || edad < 0)) {
//   console.log("Edad no es un tipo de valor number");
// } else if (Number.parseInt(nacionalidad) >= 0 || Number.parseInt(nacionalidad) < 0) {
//   console.log("Nacionalidad no es un tipo de valor string");
// } else {
//   console.log("No puedes votar");
// }

console.log("Prueba nº 1");

let edad = 21
let nacionalidad = "española"

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

// El resultado esperado de la prueba nº 1 es "Puedes votar", ya que edad cumple con la condición de ser un número mayor o igual a 18 y la nacionalidad cumple con la condición de ser una cadena con el valor "española"

console.log("Prueba nº 2");

edad = "sad"
nacionalidad = 213

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

// El resultado esperado de la prueba nº 2 es "Edad no es un tipo de valor number y Nacionalidad no es un tipo de valor string", ya que edad no cumple con la condición de ser un número y la nacionalidad no cumple con la condición de ser una cadena

console.log("Prueba nº 3");

edad = "sad"
nacionalidad = "española"

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

// El resultado esperado de la prueba nº 3 es "Edad no es un tipo de valor number", ya que edad no cumple con la condición de ser un número, pero la nacionalidad cumple con la condición de ser una cadena

console.log("Prueba nº 4");

edad = 24
nacionalidad = 213

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

// El resultado esperado de la prueba nº 4 es "Nacionalidad no es un tipo de valor string", ya que edad cumple con la condición de ser un número y a su vez mayor o igual a 18, pero la nacionalidad no cumple con la condición de ser una cadena

console.log("Prueba nº 5");

edad = 32
nacionalidad = "asds"

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

// El resultado esperado de la prueba nº 5 es "No puedes votar", ya que edad cumple con la condición de ser un número mayor o igual a 18, pero la nacionalidad no cumple con la condición de ser una cadena con el valor "española"

console.log("Prueba nº 6");

edad = 2
nacionalidad = "asds"

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

// El resultado esperado de la prueba nº 6 es "No puedes votar", ya que edad no cumple con la condición de ser un número mayor o igual a 18