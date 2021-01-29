### Ejercicios

1. Crear una función que reciba un array de números enteros positivos desordenados y devuelva otro array con los números ordenados.

```javascript
// Lo que nos gustaría
function ordenar(arr) {
  let copyArr = [...arr];
  let menor = arr[0];

  for (let i = 0; i < copyArr.length; i++) {
    if (copyArr[i] < menor) {
      menor = copyArr[i];
    } else {
      copyArr[i] = menor;
    }
  }
}
```

2. Crear una función que reciba un número entero positivo y devuelva true si dicho número es par o false en caso contrario.

```javascript
function esPar(numero) {
  return numero % 2 === 0;
}
```

3. Crear una función que recibe dos números y un operador (su nombre como string) y que devuelve el resultado de aplicar dicha operación a los dos números proporcionados.

```javascript
function calculadora(num1, num2, operador) {
  switch (operador) {
    case "suma":
      return num1 + num2;
    case "resta":
      return num1 - num2;
    case "multiplicacion":
    case "multiplicación":
      return num1 * num2;
    case "division":
    case "división":
      return num1 / num2;
  }
}
```

4. Crear una función que reciba un `divisor` y un `limite` y devuelva el mayor número divisible por `divisor` menor que `limite`. Ambos valores serán siempre enteros positivos.

```javascript
// Cómo lo haría yo
function maximoDivisible(divisor, limite) {
  for (let i = limite; i > 0; i--) {
    if (i % divisor === 0) return i;
  }
}
```

5. Cada día una planta crece en metros según su `velocidadCrecimiento`. Cada noche, dicha planta decrece en metros en base a su `velocidadDecrecimiento` debido a la falta de sol. Cuando nace, mide exactamente 0 metros. Queremos saber los días que tardará una planta en alcanzar cierta `alturaDeseada`. Crear una función que reciba `velocidadCrecimiento`, `velocidadDecrecimiento` y `alturaDeseada` como números enteros positivos y devuelva el número de días que tardará la planta en medir la `alturaDeseada`.

```javascript
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
```

6. Tengo algunos traumitas con los números. No muchos, pero los tengo. Pero no acaba ahí, depende del día de la semana mi trauma cambia:

- Los lunes odio el 12.
- Los martes odio los números mayores de 95.
- Los miércoles odio el 34.
- Aborrezco el 0 en jueves.
- En viernes odio los números pares.
- Ni me hables del 56 en sábado.
- El día del señor detesto a su enemigo en cualquiera de sus formas (666 y -666)

Escribir una función que reciba el día de la semana como cadena de texto y un número y me recuerde si hoy odio ese número o no

```javascript
function aquiHayOdio(dia, numero) {
  switch (dia) {
    case "lunes":
      return numero === 12;
    case "martes":
      return numero > 95;
    case "miercoles":
    case "miércoles":
      return numero === 34;
    case "jueves":
      return numero === 0;
    case "viernes":
      return numero % 2 === 0;
    case "sabado":
    case "sábado":
      return numero === 56;
    case "domingo":
      return abs(numero) === 666;
  }
}
```
