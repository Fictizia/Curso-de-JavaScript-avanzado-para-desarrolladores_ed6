//1.--


//2.Crear una función que reciba un número entero positivo y devuelva true si dicho número es par o false en caso contrario.

function esPar(numero) {
    return numero % 2 === 0 ? true : false;
}
esPar(3)



//3.Crear una función que recibe dos números y un operador (su nombre como string) y que devuelve el resultado de aplicar dicha operación a los dos números proporcionados.

function calculadora(num1, num2, operador) {    

    switch(num1, num2, operador) {        
        case 'sumar':            
            return num1 + num2;

        case 'restar':
            return num1 - num2;

        case 'multiplicar':
            return num1 * num2;

        case 'dividir':
            return num1 / num2;

        default:
            return 'Prueba sumar, restar, multiplicar o dividir';

    }   
}
calculadora(1, 2, 'sumar')


//4.--


//5.--


//6.
function aquiHayOdio(dia, numero) {
   switch(numero, dia) {
       case 'lunes':
           return numero === 12 ? 'Los lunes odio el 12' : `OK ${dia}`;         
           
       case "martes":
           return numero > 95 ? 'Los martes odio los números mayores de 95' : `OK ${dia}`;
           
       case "miércoles":
           return numero === 34 ? 'Los miércoles odio el 34' : `OK ${dia}`;
           
       case "jueves":
           return numero === 0 ? 'Aborrezco el 0 en jueves' : `OK ${dia}`;
           
       case "viernes":
           return numero % 2 === 0 ? 'En viernes odio los números pares.' : `OK ${dia}`;
           
       case "sábado":
           return numero === 56 ? 'Ni me hables del 56 en sábado' : `OK ${dia}`;
           
       case "domingo":
           return numero === 666 || numero === -666 ? 'El día del señor detesto a su enemigo en cualquiera de sus formas (666 y -666)' : `OK ${dia}`;
           
       default:
           return 'Ese día de la semana no existe'
   }
}
aquiHayOdio('martes', 100)