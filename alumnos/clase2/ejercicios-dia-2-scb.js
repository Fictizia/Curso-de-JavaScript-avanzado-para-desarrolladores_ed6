// 1. Crear una función que reciba un array de números enteros positivos desordenados
//    y devuelva otro array con los números ordenados.

function ordenar(arr){
  for(let i = 1; i < arr.length; i++){
    for(let j = i - 1; j > -1; j--){

      if(arr[j+1] < arr[j]){
        [arr[j + 1]. arr[j]] = [arr[j], arr[j + 1]]
      }
    }
  }
  return arr;
}

ordenar([1, 5, 9, 7]);


// 2. Crear una función que reciba un número entero positivo y devuelva true si dicho número
//    es par o false en caso contrario.

function esPar(número) {
  return número % 2 === 0;
}

esPar(1);


// 3. Crear una función que recibe dos números y un operador (su nombre como string) y que
//    devuelve el resultado de aplicar dicha operación a los dos números proporcionados.

function calculadora(num1, num2, operador) {
  operador === '+'
  ? num1 + num2
  : operador === '-'
  ? num1 - num2
  : operador === '*'
  ? num1 * num2
  : operador === '/'
  ? num1 /num2
  : 'please enter a number'
}

calculadora(2, 3, '-');


// 4. Crear una función que reciba un divisor y un limite y devuelva el mayor número divisible
//    por divisor menor que limite. Ambos valores serán siempre enteros positivos.

function maximoDivisible (divisor, limite) {
  let max;
    for(let i = 1; i < limite; i++){
      if(i % divisor === 0){
        max = i;
      }
    }
    return max;
}

maximoDivisible(5, 24)



// 5. Cada día una planta crece en metros según su velocidadCrecimiento. Cada noche, dicha planta
//    decrece en metros en base a su velocidadDecrecimiento debido a la falta de sol. Cuando nace,
//    mide exactamente 0 metros. Queremos saber los días que tardará una planta en alcanzar cierta
//    alturaDeseada. Crear una función que reciba velocidadCrecimiento, velocidadDecrecimiento y
//    alturaDeseada como números enteros positivos y devuelva el número de días que tardará la planta
//    en medir la alturaDeseada.

function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada){
  let dias = 0;
  let altura = 0;

  while(altura < alturaDeseada) {
    altura += velocidadCrecimiento;
    dias++;

    if(altura < alturaDeseada) {
      altura -= velocidadDecrecimiento;
    };
    dias += 0;
  };
  return dias;
}

calcularDiasCrecimiento(10, 9, 4);

// 4. Tengo algunos traumitas con los números.
//    No muchos, pero los tengo. Pero no acaba ahí,
//    depende del día de la semana mi trauma cambia:


function aquiHayOdio(dia, número) {
  const diaMinúscula = dia.toLowerCase();
  switch(diaMinúscula){
    case 'lunes':
      return número === 12;
    case 'martes':
      return número >= 95;
    case 'miércoles':
      return número === 34;
    case 'jueves':
      return número === 0;
    case 'viernes':
      return número % 2 === 0;
    case 'sábado':
      return número === 56;
    case 'domingo':
      return número === 666 || -666;
    default:
      return 'Escribe un día de la semana';
  }
}

aquiHayOdio('martes', 98)