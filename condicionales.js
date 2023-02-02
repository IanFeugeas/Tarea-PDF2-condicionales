// 1)

// let numero1;
// let numero2;

// function numeroMayor(numero1, numero2) {
//   if (numero1 > numero2) {
//     return "El numero mayor es " + numero1;
//   } else {
//     return "El primer numero no es el mayor";
//   }
// }
// console.log(numeroMayor(1, 3));

// 2)

// function numerosIguales(numero1, numero2) {
//   if (numero1 === numero2) {
//     return "Los numeros son iguales";
//   } else {
//     return "Los numeros son diferentes";
//   }
// }
// console.log(numerosIguales(6, 7));
//

// 3)

// function numeroMasGrande(numero1, numero2) {
//   if (numero1 > numero2) {
//     return "El mayor es: " + numero1;
//   } else if (numero1 < numero2) {
//     return "El mayor es: " + numero2;
//   } else {
//     return "Los numeros son iguales";
//   }
// }
// console.log(numeroMasGrande(10, 10));

// 4)
// function numeroMasChico(numero1, numero2, numero3) {
//   if (numero1 < numero2 && numero1 < numero3) {
//     return numero1 + " es el numero menor";
//   } else if (numero2 < numero1 && numero2 < numero3) {
//     return numero2 + " es el numero menor";
//   } else {
//     return numero3 + " es el numero menor";
//   }
// }
// console.log(numeroMasChico(10, 20, 15));

// 5)

// const persona1 = {
//   nombre: "Ian",
//   edad: 25,
//   altura: 178,
// };
// const persona2 = {
//   nombre: "Juan",
//   edad: 27,
//   altura: 160,
// };
// if (persona1.edad < persona2.edad) {
//   alert(persona2.nombre + " es mayor");
// } else {
//   alert(persona1.nombre + "es mayor");
// }
// if (persona1.altura < persona2.altura) {
//   alert(persona2.nombre + " es mas alto/a");
// } else {
//   alert(persona1.nombre + " es mas alto/a");
// }

// 6)

// let nombre = prompt("Ingrese su nombre");
// let edad = parseInt(prompt("Ingrese su edad"));
// let altura = parseInt(prompt("Ingrese su altura"));
// let vision = parseInt(prompt("Ingrese rango de vision"));

// if (edad >= 18 && altura > 150 && vision >= 8) {
//   alert("Puede conducir");
// } else {
//   alert("No puede conducir");
// }

// 7)
// let nombre = prompt("Ingrese su nombre");
// let pase = prompt("¿tiene pase VIP o Normal?");
// let entrada = prompt("¿Posee entrada?");

// if (nombre === "Ian" || pase === "VIP") {
//   alert("Puede pasar, bienvenido!");
// } else if (entrada == "si" || entrada == "s" || entrada == "true") {
//   let tieneEntrada = prompt("¿Desea utilizarla?");
//   if (tieneEntrada == "si" || tieneEntrada == "s" || tieneEntrada == "true") {
//     alert("Puede pasar, bienvenido!");
//   } else {
//     alert("No puede pasar");
//   }
// } else if (
//   nombre !== "Ian" ||
//   pase === "Normal" ||
//   entrada == "no" ||
//   entrada == "n" ||
//   entrada == "false"
// ) {
//   let comprarEntrada = prompt("¿Desea comprar la entrada?");
//   if (
//     comprarEntrada == "si" ||
//     comprarEntrada == "s" ||
//     comprarEntrada == "true"
//   ) {
//     let dineroDisponible = parseInt(
//       prompt("Ingrese dinero disponible (sin el signo $)")
//     );
//     if (dineroDisponible >= 1000) {
//       alert("Su entrada fue adquirida, bienvenido!");
//     } else {
//       alert("Dinero insuficiente");
//     }
//   } else {
//     alert("No puede ingresar, hasta pronto!");
//   }
// }

// 8)

// let numeroIncognita = 7;
// for (let intentos = 3; intentos > 0; intentos--) {
//   let numeroIngresado = prompt(
//     "Adivina el numero del 1 al 10 , tienes " + intentos + " intentos"
//   );
//   if (numeroIngresado == numeroIncognita) {
//     alert("Ganaste, haz adivinado el numero");
//     break;
//   } else if (numeroIngresado > numeroIncognita) {
//     alert("el numero que ingresaste es mayor");
//   } else if (numeroIngresado < numeroIncognita) {
//     alert("el numero que ingresaste en menor");
//   }
//   if (intentos === 1) {
//     alert("te quedaste sin posibilidades, gracias por participar ");
//   }
// }

// 9)

// let edad;
// edad = parseInt(prompt("Ingrese su edad"));

// if (edad <= 12) {
//   alert("Eres un infante");
// } else if (edad > 12 && edad <= 18) {
//   alert("Eres adolescente");
// } else if (edad > 18 && edad <= 45) {
//   alert("Eres mayor joven");
// } else if (edad > 45 && edad < 100) {
//   alert("Eres anciano");
// } else {
//   prompt("¿Realmente tienes esa edad?");
// }

// 10)

// let jugador1 = prompt("Elige el jugador1: piedra, papel o tijera");
// let jugador2 = prompt("Elige el jugador2: piedra, papel o tijera");

// if (
//   (jugador1 === "piedra" && jugador2 === "tijera") ||
//   (jugador1 === "tijera" && jugador2 === "papel") ||
//   (jugador1 === "papel" && jugador2 === "piedra")
// ) {
//   alert("Jugador 1 gana!");
// } else if (
//   (jugador2 === "piedra" && jugador1 === "tijera") ||
//   (jugador2 === "tijera" && jugador1 === "papel") ||
//   (jugador2 === "papel" && jugador1 === "piedra")
// ) {
//   alert("Jugador 2 gana!");
// } else if (
//   (jugador2 === "piedra" && jugador1 === "piedra") ||
//   (jugador2 === "tijera" && jugador1 === "tijera") ||
//   (jugador2 === "papel" && jugador1 === "papel")
// ) {
//   alert("Empate!");
// }
// else {
//   alert("Uno de los jugadores hizo trampa!");
// }

// 11)

// let color;
// color = prompt("Ingrese un color");
// switch (color) {
//   case "Blanco o negro":
//     alert("Falta de color");
//     break;

//   case "Verde":
//     alert("El color de la naturaleza");
//     break;

//   case "Azul":
//     alert("El color del agua");
//     break;

//   case "Amarillo":
//     alert("El color del sol");
//     break;

//   case "Rojo":
//     alert("El color del fuego");
//     break;

//   case "Marron":
//     alert("El color de la tierra");
//     break;

//   default:
//     alert("Excelente eleccion, no lo teniamos pensado.");
// }

// 12)

// let numero1;
// numero1 = parseInt(prompt("Ingrese el primer numero"));
// let operacion;
// operacion = prompt("Ingrese la operacion que desea realizar");
// let numero2;
// numero2 = parseInt(prompt("Ingrese el segundo numero"));

// if (operacion === "Suma") {
//   let resultado = numero1 + numero2;
//   alert(`El resultado de la operacion es: ${resultado}`);
// } else if (operacion === "Resta") {
//   let resultado = numero1 - numero2;
//   alert(`El resultado de la operacion es: ${resultado}`);
// } else if (operacion === "Multiplicacion") {
//   let resultado = numero1 * numero2;
//   alert(`El resultado de la operacion es: ${resultado}`);
// } else if (operacion === "Division") {
//   let resultado = numero1 / numero2;
//   if (numero1 === 0 || numero2 === 0) {
//     alert("Error, no se puede realizar la operacion");
//   }
//   alert(`El resultado de la operacion es: ${resultado}`);
// }

// 13)

let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");
let genero = prompt("Ingresa tu genero");
let nacionalidad = prompt("Ingresa tu nacionalidad");
let fechaNacimiento = prompt("Ingresa tu fecha de nacimiento");
let numeroDocumento = prompt("Ingresa tu numero de documento");

const dni = {
  nombre,
  apellido,
  genero,
  nacionalidad,
  fechaNacimiento,
  numeroDocumento,
};

alert(
  `Los datos ingresados son: ${nombre}, ${apellido}, ${genero}, ${nacionalidad}, ${fechaNacimiento}, ${numeroDocumento} `
);
let confirmacion = prompt("¿Los datos ingresados son correctos?");

if (confirmacion === "si") {
  alert("Registro exitoso, verifique los datos en consola");
  console.table(dni);
} else {
  alert("Vuelve a intentarlo en 1 mes");
}
