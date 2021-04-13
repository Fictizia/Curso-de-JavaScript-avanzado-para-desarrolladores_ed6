// Crear una función que reciba un array de números enteros positivos desordenados y 
// devuelva otro array con los números ordenados.
// Lo que nos gustaría
const arrayNumbers = [1, 5, 8, 2, 4, 3, 6, 7];
function ordenar(arrayNumbers) {
        // WIP??
        // Dijimos qu evolveríamos sobre ello
}

// Crear una función que reciba un número entero positivo y 
// devuelva true si dicho número es par o false en caso contrario

function esPar (numero) {
    // if(numero % 2 === 0 ) {
    //   return true;  
    // } else {
    //     return false
    // }
    return (numero % 2 === 0);
}

// Crear una función que recibe dos números y 
// un operador (su nombre como string) y 
// que devuelve el resultado de aplicar dicha operación a los dos números proporcionados.

function calculadora(num1, num2, operador) {
    switch(operador) {
    case 'suma':
        return num1+num2;
    case 'resta':
        return num1-num2;
    case 'multipicacion':
        return num1*num2;
    default:
        alert("Inválido")
    }
}

// Crear una función que reciba un divisor y un limite y 
// devuelva el mayor número divisible por divisor menor que limite. 
// Ambos valores serán siempre enteros positivos.

    
function maximoDivisible(divisor, limite) { 
    let max;
    for (let i = 1; i < limite; i++) { 
        if (i % divisor === 0) { 
            max = i 
        } 
    } 
    return max;
}

// function maximoDivisible (divisor, limite) {
//     let n = limite - 1;
//     while (n % divisor !== 0) {
//         n--;
//     }
//     return n;
// } 

// function maximoDivisible (divisor, limite) {
//     return limite - (limite % divisor);
// } 


// Cada día una planta crece en metros según su velocidadCrecimiento. 
// Cada noche, dicha planta decrece en metros en base a su velocidadDecrecimiento debido a la falta de sol. 
// Cuando nace, mide exactamente 0 metros. Queremos saber los días que tardará una planta en alcanzar cierta alturaDeseada. 
// Crear una función que reciba velocidadCrecimiento, velocidadDecrecimiento y alturaDeseada como números enteros positivos y 
// devuelva el número de días que tardará la planta en medir la alturaDeseada.

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

//Tengo algunos traumitas con los números. No muchos, pero los tengo. Pero no acaba ahí, depende del día de la semana mi trauma cambia:
// Los lunes odio el 12.
// Los martes odio los números mayores de 95.
// Los miércoles odio el 34.
// Aborrezco el 0 en jueves.
// En viernes odio los números pares.
// Ni me hables del 56 en sábado.
// El día del señor detesto a su enemigo en cualquiera de sus formas (666 y -666)
// Escribir una función que reciba el día de la semana como cadena de texto y un número y me recuerde si hoy odio ese número o no

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

const hateNumbers = (day, number) => {
    const killHuman = 'Kill human';
    const peaceDay = 'Peace day';
    const daysOfWeek = {
      friday: () => number % 2 === 0 ? killHuman : peaceDay,
      saturday: () => number === 56 ? killHuman : peaceDay,
      sunday: () => number === 666 || number === -666 ? killHuman : peaceDay,
      monday: () => number === 12 ? killHuman : peaceDay,
      tuesday: () => number > 95 ? killHuman : peaceDay,
      wednesday: () => number === 34 ? killHuman : peaceDay,
      thursday: () => number === 0 ? killHuman : peaceDay,
    }
    return daysOfWeek[day] ? daysOfWeek[day]() : 'This day not exist';
}