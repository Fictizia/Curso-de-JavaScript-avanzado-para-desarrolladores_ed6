// 1 - Crea una función que devuelva el perímetro de un círculo a partir de su radios:
// 2PIr

function perimetroCirculo(r) {
  return 2 * Math.PI * r
}

console.assert(perimetroCirculo(3) === 18.84955592153876)
console.assert(perimetroCirculo(6) === 37.69911184307752)

// 2 - Crea una función que devuelva el area de un círculo a partir de su radio:
// πr^2

function areaCirculo(r) {
  return Math.PI * Math.pow(r, 2)
}

console.assert(areaCirculo(2) === 12.566370614359172)
console.assert(areaCirculo(8) === 201.06192982974676)

// 3 - Crea una función que devuelva la hipotenusa de un triángulo a partir de sus catetos (Teorema de Pitágoras).

// h^2 = c1^2 + c2^2
function hipotenusa(c1, c2) {
  return Math.sqrt((c1 ** 2) + (c2 ** 2))
}

console.assert(hipotenusa(1, 2) === 2.23606797749979)


//4 - Escribe una función que simula el lanzamiento de una moneda al aire y devuelva si ha salido cara o cruz.

function azarMoneda() {
  let randomNum = Math.floor(Math.random() * 2);
  return randomNum === 1 ? 'Cara' : 'Cruz';
}

/* function azarMoneda() {
    return Math.random() > 0.5 ? 'cara' : 'cruz';
}*/

azarMoneda();

//5 - Escribe una función que simule cien tiradas de dos dados y devuelva las veces que entre los dos suman 10.

function azarDados() {
  let plays = 0;
  let wins = 0;

  while (plays < 100) {

    let dado1 = Math.floor(Math.random() * (7 - 1)) + 1;
    let dado2 = Math.floor(Math.random() * (7 - 1)) + 1;

    if (dado1 + dado2 === 10) {
      wins++
    }
    plays++
  }
  return wins
}

azarDados();

//6 Crea una función que reciba un string y un número n y devuelva el string repetido n veces:
function repite(str, n) {
  return str.repeat(n)
}

console.assert(repite('Batman ', 3) === 'Batman Batman Batman ')

//7 Crea una función que reciba una frase como string y devuelva la palabra más larga:

/* function palabraMasLarga(str) {
    const palabrasComoStrings = str.trim().split(' ');
    let resultado = palabrasComoStrings[0]
    for(let i = 1; i < palabrasComoStrings.length; i += 1) {
        const palabra = palabrasComoStrings[i]
      if (palabra.length > resultado.length) {
          resultado = palabra;
      }
    }
    return resultado;
} */

function palabraMasLarga(str) {
  let pos = 0;
  let arr = str.split(' ');
  let longest = arr[0].length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
      pos = i;
    }
  }
  return arr[pos]
}

console.assert(palabraMasLarga("Erase una vez que se erasdfsf") === "erasdfsf")


//8 Crea una función que reciba un string y lo devuelva con todas las palabras con su primera letra mayúscula.

function ponPrimeraMayuscula(str) {
  let nuevoStr = '';
  for (let palabra of str.split(' ')) {
    nuevoStr += palabra[0].toUpperCase() + palabra.slice(1) + ' ';
  }
  return nuevoStr.trimEnd();
}​
console.assert(ponPrimeraMayuscula("En un lugar de la Mancha") === "En Un Lugar De La Mancha")



// 8.2 Crea una función que reciba un string y lo devuelva en camelCase

function camelize(str) {
  const palabrasComoStrings = str.trim().split(' ');
  let resultado = palabrasComoStrings[0].toLowerCase()
  for (let i = 1; i < palabrasComoStrings.length; i += 1) {
    const palabra = palabrasComoStrings[i]
    resultado += palabra[0].toUpperCase() + palabra.slice(1);
  }
  return resultado;
}
console.assert(camelize("Hola a todos que tal") === "holaATodosQueTal");


//9 Crea una función que reciba un número y devuelva un string con formato ordinal inglés. Esto es:
//acaba en 1 --> 301st
// acaba en 2 --> 302nd
//acaba en 3 --> 303rd
//cualquier otra cosa --> 300th


function formatoIngles(num) {
  let lastNum = num.toString().slice(-1);

  if (num >= 11 && num <= 13) {
    return `${num}th`
  }

  switch (lastNum) {
    case "1":
      return `${num}st`
    case "2":
      return `${num}nd`
    case "3":
      return `${num}rd`
    default:
      return `${num}th`
  }
}

console.assert(formatoIngles(301) === "301st")
console.assert(formatoIngles(302) === "302nd")
console.assert(formatoIngles(303) === "302rd")
console.assert(formatoIngles(12) === "12th")
console.assert(formatoIngles(300) === "300th")


/* 10 Vamos a emular una "posible" pandemia. El mundo se representará como un string como el siguiente: 01000000X000X011X0X Donde los valores representan lo siguiente:
'0': no contagiado
'1': contagiado
'X': océano
Tenemos que calcular el porcentaje de personas contagiadas en el mundo. Para ello tenemos que tener en cuenta lo siguiente:

El virus no se puede propagar por el océano.
Si una persona se contagia en un continente todas las personas se contagian en ese continente.
Los continentes no están conectados por los extremos
Casos de prueba:

Input: '01000000X000X011X0X' Output: ~73.33333

Input: '01X000X010X011XX' Output: ~72.72727272727273

Input: 'XXXXX' Output: 0

Input: '0000000010' Output: 100

Input: porcentajeInfectados('X00X000000X10X0100') Output: ~42.857142857142854 */

function porcentajeInfectados(s) {

  const todoOceano = new Set(s.split(''))

  if (todoOceano.has('X') && todoOceano.size === 1) {
    return 0;
  }

  let continentes = s.split('X');
  let poblacion = 0;
  let contagiados = 0;

  for (let continente of continentes) {
    if (continente.includes('1')) {
      contagiados += continente.length;
    }
    poblacion += continente.length;
  };

  return 100 / poblacion * contagiados;
};
