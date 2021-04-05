function ordenar(arr) {
    for (let i = 0; i < arr.length; ++i) {
        let min = arr[i];
        let k = i;
        for (let j = i; j < arr.length; ++j) {
            if (arr[j] < min) {
                min = arr[j];
                k = j;
            }
        }
        let x = arr[i];
        arr[i] = arr[k];
        arr[k] = x;
    }
    return arr;
}

function ordenar2(arr) {
    for (let i = 1; i < arr.length; ++i) {
        let j = i;
        let k = i - 1;
        while (k >= 0 && arr[j] < arr[k]) {
            let x = arr[j];
            arr[j] = arr[k];
            arr[k] = x;
            j = k;
            k--;
        }
    }
    return arr;
}

function esPar(numero) {
    return numero%2 === 0;
}

function calculadora(num1, num2, operador) {
    let resultado;
    switch (operador) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        case "**":
            resultado = num1 ** num2;
            break;
        case "%":
            resultado = num1 % num2;
            break;
        default:
            resultado = NaN;
    }
    return resultado;
}

function maximoDivisible (divisor, limite) {
    let n = limite - 1;
    while (n % divisor !== 0) {
        n--;
    }
    return n;
}

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

function aquiHayOdio(dia, numero) {
    switch (dia) {
        case "lunes":
            return numero === 12;
        case "martes":
            return numero > 95;
        case "miércoles":
            return numero === 34;
        case "jueves":
            return numero === 0;
        case "viernes":
            return numero % 2 === 0;
        case "sábado":
            return numero === 56;
        case "domingo":
            return numero === 666 || numero === -666;
        default:
            return false;
    }
}