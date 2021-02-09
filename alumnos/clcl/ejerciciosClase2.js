//### Ejercicios

//1. Crear una función que reciba un array de números enteros positivos desordenados y devuelva otro array con los números ordenados.
function ordenar(arr) {
  //????????????
}

//2. Crear una función que reciba un número entero positivo y devuelva true si dicho número es par o false en caso contrario.
function esPar(numero) {
  if (numero % 2 === 0) {
    return "es par";
  } else {
    return "es impar";
  }
}
console.log(esPar());

//3. Crear una función que recibe dos números y un operador (su nombre como string) y que devuelve el resultado de aplicar dicha operación a los dos números proporcionados.
function calculadora(num1, num2, operador) {
  switch (operador) {
    case "suma":
      return num1 + num2;
    case "resta":
      return num1 - num2;
    case "division  ":
      return num1 / num2;
    case "producto":
      return num1 * num2;
    case "potencia":
      return num1 ** num2;
    case "modulo":
      return num1 % num2;
    default:
      alert("operador no reconocido");
  }
}
console.log(calculadora(2, 3, "producto"));

//4. Crear una función que reciba un `divisor` y un `limite` y devuelva el mayor número divisible por `divisor` menor que `limite`. Ambos valores serán siempre enteros positivos.
function maximoDivisible(divisor, limite) {
  let max;
  for (let i = 1; i < limite; i++) {
    if (i % divisor === 0) {
      max = i;
    }
  }
}
console.log(maximoDivisible(7, 15));

//5. Cada día una planta crece en metros según su `velocidadCrecimiento`. Cada noche, dicha planta decrece en metros en base a su `velocidadDecrecimiento` debido a la falta de sol.
// Cuando nace, mide exactamente 0 metros. Queremos saber los días que tardará una planta en alcanzar cierta `alturaDeseada`.
// Crear una función que reciba `velocidadCrecimiento`, `velocidadDecrecimiento` y `alturaDeseada` como números enteros positivos y devuelva el número de días que tardará la planta en medir la `alturaDeseada`.
function calcularDiasCrecimiento(
  velocidadCrecimiento,
  velocidadDecrecimiento,
  alturaDeseada
) {
  let dias = 0;
  let noches = 0;
  let diaOnoche = true;
  let crecimiento = 0;

  do {
    if (diaOnoche) {
      dias++;
      crecimiento += velocidadCrecimiento;
    } else {
      noches++;
      crecimiento -= velocidadDecrecimiento;
    }
    diaOnoche = !diaOnoche;
  } while (crecimiento >= alturaDeseada);
  return dias;
}

console.log(calcularDiasCrecimiento(2, 5, 30));

// 6. Tengo algunos traumitas con los números. No muchos, pero los tengo. Pero no acaba ahí, depende del día de la semana mi trauma cambia:
// - Los lunes odio el 12.
// - Los martes odio los números mayores de 95.
// - Los miércoles odio el 34.
// - Aborrezco el 0 en jueves.
// - En viernes odio los números pares.
// - Ni me hables del 56 en sábado.
// - El día del señor detesto a su enemigo en cualquiera de sus formas (666 y -666)

// Escribir una función que reciba el día de la semana como cadena de texto y un número y me recuerde si hoy odio ese número o no

function aquiHayOdio(dia, numero) {
  if (dia === "lunes" && numero === 12) {
    return `hoy ${dia}, odio este número`;
  } else if (dia === "martes" && numero > 95) {
    return `hoy ${dia}, odio este número`;
  } else if (dia === "miércoles" && numero === 34) {
    return `hoy ${dia}, odio este número`;
  } else if (dia === "jueves" && numero === 0) {
    return `hoy ${dia}, odio este número`;
  } else if (dia === "viernes" && numero % 2 === 0) {
    return `hoy ${dia}, odio este número`;
  } else if (dia === "sábado" && numero === 56) {
    return `hoy ${dia}, odio este número`;
  } else if ((dia === "domingo" && numero === 666) || numero === -666) {
    return `hoy ${dia}, odio este número`;
  }
  return `hoy ${dia}, no odio este número`;
}
console.log(aquiHayOdio("lunes", 12));
