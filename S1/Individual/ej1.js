// Verificar dada una edad
//si es mayor o menor.

var edad = prompt("Ingrese su edad", "");

if (edad >= 18) {
  document.write("Es mayor");
} else {
  document.write("Es menor de edad");
}

//---------------------------
// Verificar dada una edad
// si es adulto, menor o adulto mayor

var edad = parseInt(prompt("Ingresá tu edad:"));

if (edad < 18) {
  document.write("Es menor de edad");
} else if (edad < 60) {
  document.write("Es adulto");
} else {
  document.write("Es adulto mayor");
}

//-------------------------
// Verificar dada un nÃºmero
// si es positivo, negativo o cero.

var numero = parseFloat(prompt("Ingrese un número:", ""));

if (numero > 0) {
  document.write("El número es positivo");
} else if (numero < 0) {
  document.write("El número es negativo");
} else {
  document.write("El número es cero");
}

// Usar el operador ternario para evaluar si un nÃºmero es mayor o menor
// evaluaciÃ³n del nÃºmero, crear una variable y almacenar la definiciÃ³n ternaria
// (condiciÃ³n ? si se cumple la condiciÃ³n : sino se cumple la condiciÃ³n)
// Mostrar en consola el resultado

var numero = parseFloat(prompt("Ingrese un número:", ""));

var resultado = (numero > 0) ? "El número es mayor que cero" : "El número es menor o igual a cero";

console.log(resultado);