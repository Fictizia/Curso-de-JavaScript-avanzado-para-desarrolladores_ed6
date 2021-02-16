// numeros

// 1 -- Crea una función que devuelva el perímetro de un círculo a partir de su radios:

function perimetroCirculo(r) {
  return 2 * Math.PI * r
}

console.assert(perimetroCirculo(3) === 18.84955592153876)
console.assert(perimetroCirculo(6) === 37.69911184307752)


//2 -- Crea una función que devuelva el area de un círculo a partir de su radio:
function areaCirculo(r) {
  return  Math.PI * (r ** 2)
}

function areaCirculo2(r) {
  return  Math.PI * Math.pow(r, 2)
}

console.assert(areaCirculo(2) === 12.566370614359172)
console.assert(areaCirculo(8) === 201.06192982974676)


//3 -- Crea una función que devuelva la hipotenusa de un triángulo a partir de sus catetos (Teorema de Pitágoras).
function hipotenusa(c1, c2) {
  return Math.sqrt((c1**2) + (c2**2));
}


//4 -- Escribe una función que simula el lanzamiento de una moneda al aire y devuelva si ha salido cara o cruz.

function azarMoneda() {
  return (Math.floor( Math.random() * 2) == 0 ) ? 'heads' : 'tails';
}


function azarMoneda2() {
  return  Math.random() > 0.5 ? 'heads' : 'tails';
}


//5 -- Escribe una función que simule cien tiradas de dos dados y devuelva las veces que entre los dos suman 10.
function azarDados() {
  let tiradas = 0;
  let sumenDiez = 0;
  let noIguales = 0;

  while (tiradas < 100) {
    let dado1 = Math.floor(Math.random() * (7 - 1)) + 1;
    let dado2 = Math.floor(Math.random() * (7 - 1)) + 1;
    tiradas++

    dado1 + dado2 === 10 ? sumenDiez++ : noIguales++;
  }
  return sumenDiez;
}


function azarDados2() {
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
azarDados2();




//-- Strings


//6 -- Crea una función que reciba un string y un número n y devuelva el string repetido n veces:

function repite(str, n) {
  return str.repeat(n)
}

repite('Batman ', 3)


// 7 --  Crea una función que reciba una frase como string y devuelva la palabra más larga:


function palabraMasLarga(str) {
  let stringSeparated = str.trim().split(' ');
  let longest = stringSeparated[0];

  for ( i = 0; i < stringSeparated.length; i++) {

    if (stringSeparated[i].length > longest.length) {
      longest = stringSeparated[i]
    }
  }
  return longest;
}

function palabraMasLarga2(str) {
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

palabraMasLarga("Erase una vez que se era")
palabraMasLarga2("Erase una vez que se era")

//  8 -- Crea una función que reciba un string y lo devuelva con todas las palabras con su primera letra mayúscula.

function ponPrimeraMayuscula(str) {
  let nuevoStr = '';
  for (let palabra of str.split(' ')) {
      nuevoStr += palabra[0].toUpperCase() + palabra.slice(1) + ' ';
  }
  return nuevoStr.trimEnd();
}

ponPrimeraMayuscula("En un lugar de la Mancha de cuyo nombre no quiero acordarme");


//9 -- Crea una función que reciba un string y lo devuelva en camelCase
function camelize(str) {
  const palabrasComoStrings = str.trim().split(' ');
  let resultado = palabrasComoStrings[0].toLowerCase()
  for(let i = 1; i < palabrasComoStrings.length; i += 1) {
      const palabra = palabrasComoStrings[i]
      resultado += palabra[0].toUpperCase() + palabra.slice(1);
  }
  return resultado;
}

camelize("Camel Case");


function camelize2(str) {
  const formatWords = str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase());
  const concatWords = "".concat(...formatWords);
  return `${concatWords[0].toLowerCase()}${concatWords.slice(1)}`;
}


// 9 -- Crea una función que reciba un número y devuelva un string con formato ordinal inglés.
function formatoIngles(num) {

  let string = num.toString().trim();

  let lastNum =  string.slice(-1)
  let last2nums = string.slice(-2)


  if( last2nums >= "12" && last2nums <= "13" ){
    return last2nums + "th";
  }

    switch(lastNum) {

    case "1":
      return num + "st";
    break

    case "2":
      return num + "nd";
    break

    case "3":
      return num + "rd";
    break

    case "12":
      return num + "th*";
    break

    case "13":
      return num + "th*";
    break

    default:
    return num + "th";
  }

}

formatoIngles(3013)
formatoIngles(3003)
formatoIngles(305)
