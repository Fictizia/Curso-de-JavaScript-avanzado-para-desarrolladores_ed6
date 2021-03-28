//EJERCICIO 2:
//Forma novata
function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
   return false;
  }
};
esPar(5);

// Forma fucker
function esPar(numero) {
  return (numero % 2 === 0) ? true : false;
}
esPar(4);

//EJERCICIO 3:
function calculadora(num1, num2, operador) {
  switch(operador) {
    case 'sumar':
      return num1 + num2;
    case 'restar':
      return num1 - num2;
    case 'multiplicar':
      return num1 * num2;
    case 'dividir':
      return num1 / num2;
    default: 
      alert("Inválido");
  }
}
calculadora(2, 8, 'restar');

//EJERCICIO 4:
function maximoDivisible(divisor, limite) {
  let n = limite - 1;
  while (n % divisor !== 0) {
    n--
  }
  return n;
}


//EJERCICIO 5:
// Forma 1
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
// Forma 2
function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
  let altura = 0;
  let dias = 0;
  while (true) {
    dias++;
    altura += velocidadCrecimiento;
   if (altura >= alturaDeseada) {
     return dias;      
   }
    altura -= velocidadDecrecimiento;   
   }
  }


//EJERCIIO 6
function hoyOdio(dia, numero) {
  switch(dia) {
    case "lunes":
      return numero === 12;
    case "martes":
      return numero > 95;
    case "miercoles":
      return numero === 34;
    case "jueves":
      return numero === 0;
    case "viernes":
      return numero % 2 === 0;
    case "sabaado":
      return numero === 56;
    case "domingo":
      return numero = 666;
      break;
    default: 
      return "hola";
  }
  
}

