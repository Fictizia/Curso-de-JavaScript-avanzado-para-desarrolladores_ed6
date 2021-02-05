/* 1.- Crear una función que reciba un array de números enteros positivos
 desordenados y devuelva otro array con los números ordenados.*/

function ordenar(arr) {}


/*2.- Crear una función que reciba un número entero positivo y 
devuelva true si dicho número es par o false en caso contrario */

function esPar(numero) {
  return (numero % 2 === 0);
}

esPar(4)

/*3.- Crear una función que recibe dos números y un operador 
(su nombre como string) y que devuelve el resultado de aplicar 
dicha operación a los dos números proporcionados. */

function calculadora(num1, num2, operador) {
  switch (operador) {
    case "suma":
      return num1 + num2
    case "resta":
      return num1 - num2
    case "multiplicacion":
      return num1 * num2
    case "division":
      return num1 / num2
    case "potencia":
      return num1 ** num2
    default:
      return 'Operación no permitida'
  }
}

calculadora(2, 3, 'suma')
calculadora(6, 3, 'resta')
calculadora(2, 2, 'raiz cuadrada')

/*4.- Crear una función que reciba un divisor y un limite 
y devuelva el mayor número divisible por divisor menor que limite. 
Ambos valores serán siempre enteros positivos. */

function maximoDivisible(divisor, limite) {
  let n = limite - 1;
  while (n % divisor !== 0) {
    n--;
  }
  return n;
}

maximoDivisible(7, 15);

/*5.- Cada día una planta crece en metros según su 
velocidadCrecimiento. Cada noche, dicha planta decrece en metros 
en base a su velocidadDecrecimiento debido a la falta de sol. 
Cuando nace, mide exactamente 0 metros. Queremos saber los días 
que tardará una planta en alcanzar cierta alturaDeseada. 
Crear una función que reciba velocidadCrecimiento, 
velocidadDecrecimiento y alturaDeseada como números enteros positivos 
y devuelva el número de días que tardará la planta en medir 
la alturaDeseada. */

function calcularDiasCrecimiento(crecimiento, disminución, alturaDeseada) {
  let altura = 0;
  let dias = 0;

  while (altura < alturaDeseada) {
    altura += crecimiento;

    if (altura < alturaDeseada) {
      altura -= disminución;
    };
    dias += 1;
  };
  return dias
}

calcularDiasCrecimiento(10, 9, 4) //1
calcularDiasCrecimiento(3, 1, 10)

/*6.- 
Tengo algunos traumitas con los números. No muchos, pero los tengo. Pero no acaba ahí, 
depende del día de la semana mi trauma cambia:
-Los lunes odio el 12.
-Los martes odio los números mayores de 95.
-Los miércoles odio el 34.
-Aborrezco el 0 en jueves.
-En viernes odio los números pares.
-Ni me hables del 56 en sábado.
-El día del señor detesto a su enemigo en cualquiera de sus formas (666 y -666)

Escribir una función que reciba el día de la semana como cadena de texto y un número y me recuerde si hoy odio ese número o no*/

function aquiHayOdio(dia, numero) {
  switch (dia) {
    case 'lunes':
      return (numero === 12)
    case 'martes':
      return (numero > 95)
    case 'miercoles':
    case 'miércoles':
      return (numero === 34)
    case 'jueves':
      return (numero === 0)
    case 'viernes':
      return (numero % 2 === 0)
    case 'sabado':
      return (numero === 56)
    case 'domingo':
      return (numero === 666 || numero === -666)
    default:
      return 'NO HATE TODAY';
  };
}

aquiHayOdio('lunes', 12) //HATE
aquiHayOdio('lunes', 55) //NO HATE
