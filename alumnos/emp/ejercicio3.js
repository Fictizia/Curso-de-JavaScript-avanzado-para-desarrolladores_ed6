// 1 - Crea una función que devuelva el 
// perímetro de un círculo a partir de su radios:

// 2PIr
function perimetroCirculo(r) {
    const perimeter = 2 * Math.PI * r;
    return perimeter;
}

console.assert(perimetroCirculo(3) === 18.84955592153876)
console.assert(perimetroCirculo(6) === 37.69911184307752)

// 2 - Crea una función que devuelva el area 
// de un círculo a partir de su radio:

function areaCirculo(r) {
  // πr^2
  const area = Math.PI * (r ** 2) ;
  return area;
}

console.assert(areaCirculo(2) === 12.566370614359172)
console.assert(areaCirculo(8) === 201.06192982974676)

// 3 - Crea una función que devuelva la hipotenusa 
// de un triángulo a partir de sus catetos 
// (Teorema de Pitágoras).

// h^2 = c1^2 + c2^2
function hipotenusa(c1, c2) {
    return Math.sqrt((c1 ** 2) + (c2 ** 2));
}

console.assert(hipotenusa(1, 2) === 2.23606797749979)

// 4 - Escribe una función que simula el 
// lanzamiento de una moneda al aire y 
// devuelva si ha salido cara o cruz.

    function azarMoneda() {
        return (Math.floor(
            Math.random() * 2) == 0
            ) ? 'heads' : 'tails';
    }

    function azarMoneda() {
        return (Math.random() > 0.5 ? 'heads' : 'tails');
    }

    azarMoneda();

// 5 - Escribe una función que simule cien 
// tiradas de dos dados y devuelva las veces 
// que entre los dos suman 10.

function azarDados() {
    let tiradas = 0;
    let sumenDiez = 0;
    const tirarDado = () => Math.floor(6 * Math.random() + 1);
    while (tiradas < 100) {
        tiradas++;
        if (tirarDado() + tirarDado() === 10) {
            sumenDiez++;
        }
    }
    return sumenDiez;
} 

    azarDados();

   // Crea una función que reciba un string y 
   // un número n y devuelva el string repetido n veces:
function repite(str, n) {
    return str.repite(n);
}

console.assert(repeat('Batman ', 3) === 'Batman Batman Batman ')

// Crea una función que reciba una frase como string y 
// devuelva la palabra más larga:
function palabraMasLarga(str) {
    const palabrasComoStrings = str.trim().split(' ');
    let resultado = palabrasComoStrings[0]
    for(let i = 1; i < palabrasComoStrings.length; i += 1) {
        const palabra = palabrasComoStrings[i]
      if (palabra.length > resultado.length) {
          resultado = palabra;
      }
    }
    return resultado;
}

console.assert(palabraMasLarga("Erase una vez que se era") === "Erase");

// Crea una función que reciba un string y 
// lo devuelva con todas las palabras con su primera letra mayúscula.
function ponPrimeraMayuscula(str) {
    let nuevoStr = '';
    for (let palabra of str.split(' ')) {
        nuevoStr += palabra[0].toUpperCase() + palabra.slice(1) + ' ';
    }
    return nuevoStr.trimEnd();
}

console.assert(ponPrimeraMayuscula("En un lugar de la Mancha de cuyo nombre no quiero acordarme") === "En Un Lugar De La Mancha De Cuyo Nombre No Quiero Acordarme")

//Crea una función que reciba un string y lo devuelva en camelCase

// function camelize(str) {
//     const formatWords = str
//         .split(" ")
//         .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase());
//     const concatWords = "".concat(...formatWords);
//     return `${concatWords[0].toLowerCase()}${concatWords.slice(1)}`;
// }

function camelize(str) {
    const palabrasComoStrings = str.trim().split(' ');
    let resultado = palabrasComoStrings[0].toLowerCase()
    for(let i = 1; i < palabrasComoStrings.length; i += 1) {
        const palabra = palabrasComoStrings[i]
        resultado += palabra[0].toUpperCase() + palabra.slice(1);
    }
    return resultado;
}

console.assert(camelize("Hola a todos que tal") === "holaATodosQueTal");

// Crea una función que reciba un número y 
// devuelva un string con formato ordinal inglés. Esto es:
// acaba en 1 --> 301st
// acaba en 2 --> 302nd
// acaba en 3 --> 303rd
// cualquier otra cosa --> 300th

function formatoIngles(num) {
    const newString = num.toString();
    const lastNumber = newString.splice(-1);
    switch(lastNumber) {
        case "1":
          return `${num}st`;    
        case "2":
          return `${num}nd`;    
        case "3":
          return `${num}rd`;
        default:
        return num + "th";
    }
}
