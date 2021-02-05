### Ejercicios

**1 -** Crea una función que devuelva el perímetro de un círculo a partir de su radios:

```javascript
// 2PIr
function perimetroCirculo(r) {
  return 2 * Math.PI * r;
}

console.assert(perimetroCirculo(3) === 18.84955592153876);
console.assert(perimetroCirculo(6) === 37.69911184307752);
```

**2 -** Crea una función que devuelva el area de un círculo a partir de su radio:

```javascript
function areaCirculo(r) {
  return Math.PI * r ** 2;
  // πr^2
}

console.assert(areaCirculo(2) === 12.566370614359172);
console.assert(areaCirculo(8) === 201.06192982974676);
```

**3 -** Crea una función que devuelva la hipotenusa de un triángulo a partir de sus catetos (Teorema de Pitágoras).

```javascript
// h^2 = c1^2 + c2^2
function hipotenusa(c1, c2) {
  return Math.sqrt(c1 ** 2 + c2 ** 2);
}

console.assert(hipotenusa(1, 2) === 2.23606797749979);
```

**4 -** Escribe una función que simula el lanzamiento de una moneda al aire y devuelva si ha salido cara o cruz.

```javascript
function azarMoneda() {
  return Math.floor(2 * Math.random());
}

azarMoneda();
```

**5 -** Escribe una función que simule cien tiradas de dos dados y devuelva las veces que entre los dos suman 10.

```javascript
function azarDados() {
  let tiradas = 0;
  let sumenDiez = 0;
  const tirarDado = () => Math.floor(6 * Math.random()) + 1;
  while (tiradas < 100) {
    tiradas++;
    if (tirarDado() + tirarDado() === 10) {
      sumenDiez++;
    }
  }
  return sumenDiez;
}

azarDados();
```

##### Ejercicios

4. Crea una función que reciba un string y un número n y devuelva el string repetido n veces:

```javascript
function repite(str, n) {
  return str.repeat(n);
}

console.assert(repeat("Batman ", 3) === "Batman Batman Batman ");
```

5. Crea una función que reciba una frase como string y devuelva la palabra más larga:

```javascript
function palabraMasLarga(str) {
  const arrayWords = str.split(" ");
  let max = 0;
  let index = 0;
  arrayWords.forEach((word, i) => {
    if (max < word.length) {
      max = word.length;
      index = i;
    }
  });
  return arrayWords[index];
}

function palabraMasLarga(str) {
  const arrayWords = str.split(" ");
  let max = 0;
  let index = 0;
  for (let i = 0; i < arrayWords.length; i++) {
    if (max < arrayWords[i].length) {
      max = arrayWords[i].length;
      index = i;
    }
  }
  return arrayWords[index];
}

console.assert(palabraMasLarga("Erase una vez que se era") === "Erase");
```

6. Crea una función que reciba un string y lo devuelva con todas las palabras con su primera letra mayúscula.

```javascript
function ponPrimeraMayuscula(str) {
  let nuevoStr = "";
  for (let palabra of str.split(" ")) {
    nuevoStr += palabra[0].toUpperCase() + palabra.slice(1) + " ";
  }
  return nuevoStr.trimEnd();
}

console.assert(
  ponPrimeraMayuscula(
    "En un lugar de la Mancha de cuyo nombre no quiero acordarme"
  ) === "En Un Lugar De La Mancha De Cuyo Nombre No Quiero Acordarme"
);
```

7. Crea una función que reciba un string y lo devuelva en camelCase

```javascript
function camelize(str) {
  const formatWords = str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase());
  const concatWords = "".concat(...formatWords);
  return `${concatWords[0].toLowerCase()}${concatWords.slice(1)}`;
}

console.assert(camelize("Hola a todos que tal") === "holaATodosQueTal");
```

8. Crea una función que reciba un número y devuelva un string con formato ordinal inglés. Esto es:

- acaba en 1 --> `301st`

- acaba en 2 --> `302nd`

- acaba en 3 --> `303rd`

- cualquier otra cosa --> `300th`

```javascript
function formatoIngles(num) {
  let str = "";
  switch (num.toString().slice(-2)) {
    case "01":
      str = "st";
      break;
    case "02":
      str = "nd";
      break;
    case "03":
      str = "rd";
      break;
    case "11":
      str = "th";
      break;
    case "12":
      str = "rd";
      break;
    case "13":
      str = "rd";
      break;
    default:
      str = "th";
      break;
  }

  return `${num}${str}`;
}
```

9. Vamos a emular una "posible" pandemia. El mundo se representará como un string como el siguiente: `01000000X000X011X0X`
   Donde los valores representan lo siguiente:

- '0': no contagiado
- '1': contagiado
- 'X': océano

Tenemos que calcular el porcentaje de personas contagiadas en el mundo. Para ello tenemos que tener en cuenta lo siguiente:

- El virus no se puede propagar por el océano.
- Si una persona se contagia en un continente todas las personas se contagian en ese continente.
- Los continentes no están conectados por los extremos

Casos de prueba:

- Input: '01000000X000X011X0X' Output: ~73.33333

- Input: '01X000X010X011XX' Output: ~72.72727272727273

- Input: 'XXXXX' Output: 0

- Input: '0000000010' Output: 100

- Input: 'X00X000000X10X0100' Output: ~42.857142857142854

```javascript
function porcentajeInfectados(s) {}
```
