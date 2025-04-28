var miAuto = new Object()
miAuto.marca = "Ford"
miAuto.tipo = "Mustang"
miAuto.modelo = "2020"

console.log("Marca: " + miAuto.marca + ", Tipo: " + miAuto.tipo + ", Modelo: " + miAuto.modelo)

console.log(miAuto)

var miCamioneta = {
    marca: "Ford",
    tipo: "Ranger Raptor",
    modelo: "2025"
}

console.log(miCamioneta)

var perro = {
    nombre: "Bailey",
    edad: 3,
    vivo: true,
    quienSoy() { return "Soy " + this.nombre },
    ladrar() { return this.nombre + " dice guau!" }
}

console.log(perro.nombre, "tiene", perro.edad, "años")

console.log(perro.quienSoy())

if (perro.vivo) {
    console.log(perro.ladrar())
}

class Perro {
    constructor(nombre, edad, vivo) {
        this.nombre = nombre
        this.edad = edad
        this.vivo = vivo
    }
}

var perro1 = new Perro("Mulan", 4, true)
var perro2 = new Perro("Frida", 6, false)

console.log(perro1);
console.log(perro2);

function Auto(marca, tipo, modelo) {
    this.marca = marca
    this.tipo = tipo
    this.modelo = modelo
}

var miFurgon = new Auto('Renault', 'Traffic', 2010)

console.log(miFurgon)

var texto = "Bailey es mi perrihija"

console.log(texto)
console.log(texto.length)
console.log(texto.charAt(2))
console.log(texto.concat(perro1.nombre))
console.log(texto.indexOf("mi"))
console.log(texto.lastIndexOf("es"))

console.log("Bailey ".repeat(3))

var cad = "Aprendiendo JavaScript "
document.write(cad.repeat(3))

var cad = "Aprendiendo JavaScript "
document.write(cad.toLowerCase())
document.write(cad.toUpperCase())

var cad2 = "    Texto de ejemplo"
//alert(cad2.trim())

var cad = "Aprendiendo JavaScript"
document.write(cad.replace("JavaScript", "Python"))

Math.abs(-5); // 5
Math.sign(-5); // -1
Math.exp(1); // e, o sea, 2.718281828459045
Math.expm1(1); // 1.718281828459045
Math.max(1, 40, 5, 15); // 40
Math.min(5, 10, -2, 0); // -2
Math.pow(2, 10); // 1024
Math.sqrt(2); // 1.4142135623730951
Math.cbrt(2); // 1.2599210498948732
Math.imul(0xffffffff, 7); // -7

function cambiarTexto() {
    var x = document.getElementsByClassName("ejemplo");
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML = x[i].innerHTML + " UTN " + (i + 1);
    }
}

