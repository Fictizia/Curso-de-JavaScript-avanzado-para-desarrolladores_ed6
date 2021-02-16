// --- Crear una función que reciba un array de números enteros positivos desordenados y devuelva otro array con los números ordenados.


const numbers = [3,1,5,7,4];


function ordenar(array) {

  let arr = [...array];
  let newArray = [];
  let higherNum = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    for (j=0;j< arr.length;j++) {

      if (arr[j] > higherNum) {
        higherNum = arr[j];
      }
    }
    newArray[i] = higherNum

    // *** WIP: Delete higherNum ***
  }
  return newArray
  console.info("newArray", newArray)
}
ordenar(numbers)



// --- Crear una función que reciba un número entero positivo y devuelva true si dicho número es par o false en caso contrario.


function esPar(numero) {
  return (numero % 2 === 0)
}

esPar(4) //true


// --- Crear una función que recibe dos números y un operador (su nombre como string) y que devuelve el resultado de aplicar dicha operación a los dos números proporcionados.

function calculadora(num1, num2, operador) {
  switch(operador) {
  case 'suma':
  case '+':
      return num1+num2;
  case 'resta':
  case '-':
      return num1-num2;
  case 'multipicación':
  case 'multipicacion':
      return num1*num2;
  case 'división':
  case 'division':
        return num1*num2;
  default:
      alert("operador no válido")
  }
}

calculadora(1, 2, "suma") // 3


// --- Crear una función que reciba un divisor y un limite y devuelva el mayor número divisible por divisor menor que limite. Ambos valores serán siempre enteros positivos.


function maximoDivisible (divisor, limite) {
  let n = limite - 1;
  while (n % divisor !== 0) {
      n--;
  }
  return n;
}
maximoDivisible(2,15)



function maximoDivisible2 (divisor, limite) {
  return limite - (limite %  divisor);
}

maximoDivisible2(2,15)



function maximoDivisible3 (divisor, limite) {
  let max
  for ( let i = 1; i < limite; i++) {
    if (i % divisor === 0) {
      max = 1
    }
  }
  return max;
}

maximoDivisible3(2,15)


/* Cada día una planta crece en metros según su
velocidadCrecimiento. Cada noche,
dicha planta decrece en metros en base a su
velocidadDecrecimiento debido a la falta de sol.
Cuando nace, mide exactamente 0 metros.
Queremos saber los días que tardará una planta en
alcanzar cierta alturaDeseada. Crear una función
que reciba velocidadCrecimiento, velocidadDecrecimiento y
alturaDeseada como números enteros positivos y devuelva el número de días que tardará la planta en medir la alturaDeseada.
*/

function calcularDiasCrecimiento(crecimiento, disminución, alturaDeseada) {
  let altura = 0;
  let dias = 0;

  while (altura < alturaDeseada) {
    altura += crecimiento;

      if (altura >= alturaDeseada) {
        return dias
      } else {
        altura -= disminución;
      }
    dias += 1;
  };
  return dias
}


// -- 6.	Tengo algunos traumitas con los números. No muchos, pero los tengo. Pero no acaba ahí, depende del día de la semana mi trauma cambia:

function aquiHayOdio(dia, numero) {
  const diaMinuscula = dia.toLowerCase();
  switch(diaMinuscula){
      case "lunes":
          return numero === 12;
      case "martes":
          return numero > 95;
      case "miércoles":
      case "miercoles":
          return numero === 34;
      case "jueves":
          return numero === 0;
      case "viernes":
          return numero % 2 === 0;
      case "sábado":
      case "sabado":
          return numero === 56;
      case "domingo":
          return numero === 666 || numero === -666;
      default:
          return "Escribe un dia de la semana";
  }
}

aquiHayOdio(dia, numero)


