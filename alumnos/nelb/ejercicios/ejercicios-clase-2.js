// Lo que nos gustaría
const numbers = [3,5,9,4,2,8,6,1,7];

function ordenar(arr) {
 //POCO TIEMPO PARA HACERLO
}

function esPar (numero) {
  return numero % 2 === 0;
}

function calculadora(num1, num2, operador) {
  switch (operador) {
    case ('+'):
      return num1 + num2;
    case ('-'):
      return num1 - num2;
    case ('*'):
      return num1 * num2;
    case ('/'):
      return num1 / num2;
    default:
      break;
  }
}
calculadora(1,2,'+');

// Cómo lo haría yo
function maximoDivisible (divisor, limite) {
  let num = 0;
  let numBuscado;
  do {
    if(num % divisor === 0){
      numBuscado = num;
    }
    num++;
  }while (num < limite )
   return numBuscado
}
maximoDivisible(2,11);
maximoDivisible(7,15);

function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
  let altura = 0;
  let dias = 0
  while (altura < alturaDeseada){
    altura += velocidadCrecimiento;
    if (altura < alturaDeseada) {
      altura -= velocidadDecrecimiento;
    }
    dias++;
  }
  return dias;
}

calcularDiasCrecimiento(3,1,10);

let dias = {
  'lunes': (num) => num === 12,
  'martes': (num) => num === 95,
  'miercoles': (num) => num === 34,
  'jueves': (num) => num === 0,
  'viernes': (num) => num % 2 === 0,
  'sabado': (num) => num === 56,
  'domingo': (num) => num === 666 || num === -666,
}
function aquiHayOdio(dia, numero) {
  return dias[dia](numero) ? 'TODO MI ODIO' : 'Hoy va ser un dia tranqui';
}

aquiHayOdio('lunes',12);

