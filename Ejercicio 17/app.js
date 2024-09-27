let numbersGreaterThanOrEqual18 = 0

for (let i = 1; i <= 5; i++) {
  let number = prompt(`Introduce el número nº ${i}`)
  if (number >= 18) {
    numbersGreaterThanOrEqual18++
  }
}

console.log(`Se han introducido ${numbersGreaterThanOrEqual18} números mayores o iguales a 18`);