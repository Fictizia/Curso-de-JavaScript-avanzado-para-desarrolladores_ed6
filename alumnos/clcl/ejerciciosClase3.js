//NUMEROS
//1 - Crea una función que devuelva el perímetro de un círculo a partir de su radios:
function perimetroCirculo(r) {
  return Math.PI * r * 2;
}

console.assert(perimetroCirculo(3) === 18.84955592153876);

//2 - Crea una función que devuelva el area de un círculo a partir de su radio:
function areaCirculo(r) {
  return Math.PI * r ** 2;
}

console.assert(areaCirculo(2) === 12.566370614359172);

//3 - Crea una función que devuelva la hipotenusa de un triángulo a partir de sus catetos (Teorema de Pitágoras).
function hipotenusa(c1, c2) {
  return Math.sqrt(c1 ** 2 + c2 ** 2);
}

console.assert(hipotenusa(1, 2) === 2.23606797749979);

//4 - Escribe una función que simula el lanzamiento de una moneda al aire y devuelva si ha salido cara o cruz.
function azarMoneda() {
  return Math.round(Math.random());
}

console.log(azarMoneda());

//5 - Escribe una función que simule cien tiradas de dos dados y devuelva las veces que entre los dos suman 10.
function azarDados() {
  let tiradas = 0;
  let sumenDiez = 0;
  const tirarDado = () => Math.floor(6 * Math.random());
  while (tiradas < 100) {
    tiradas++;
    if (tirarDado() + tirarDado() === 10) {
      sumenDiez++;
    }
  }
  return sumenDiez;
}
console.log(azarDados());

//STRING
//4 - Crea una función que reciba un string y un número n y devuelva el string repetido n veces:
function repite(str, n) {
  return str.repeat(n);
}

console.assert(repeat("Batman ", 3) === "Batman Batman Batman ");

//5 - Crea una función que reciba una frase como string y devuelva la palabra más larga:
function palabraMasLarga(str) {
  const array = str.split(" ");
  let palabraMasLarga = array[0].length;

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > palabraMasLarga) {
      palabraMasLarga = array[i];
    }
  }

  return palabraMasLarga;
}

console.assert(palabraMasLarga("Erase una vez que se era") === "Erase");

//6 - Crea una función que reciba un string y lo devuelva con todas las palabras con su primera letra mayúscula.
function ponPrimeraMayuscula(str) {
  const array = str.split(" ");
  let string = "";
  for (let palabra of array) {
    string += palabra[0].toUpperCase() + palabra.slice(1, palabra.length) + " ";
  }
  return string;
}

console.assert(
  ponPrimeraMayuscula(
    "En un lugar de la Mancha de cuyo nombre no quiero acordarme"
  ) === "En Un Lugar De La Mancha De Cuyo Nombre No Quiero Acordarme"
);

//7 - Crea una función que reciba un string y lo devuelva en camelCase
function camelize(str) {
  const array = str.split(" ");
  let string = "";
  for (let palabra of array) {
    string += palabra[0].toUpperCase() + palabra.slice(1, palabra.length);
  }
  const result = string[0].toLowerCase() + string.slice(1, string.length);
  return result;
}

console.assert(camelize("Hola a todos que tal") === "holaATodosQueTal");

//8 - Crea una función que reciba un número y devuelva un string con formato ordinal inglés. Esto es:
function formatoIngles(num) {
  const string = num.toString();
  if (string === "11") {
    return string + "st";
  } else if (string === "12") {
    return string + "st";
  } else if (string === "13") {
    return string + "st";
  } else if (string.charAt(string.length - 1) === "1") {
    return string + "st";
  } else if (string.charAt(string.length - 1) === "2") {
    return string + "nd";
  } else if (string.charAt(string.length - 1) === "3") {
    return string + "rd";
  } else {
    return string + "rd";
  }
}
console.log(formatoIngles(12));

//9 - Vamos a emular una "posible" pandemia. El mundo se representará como un string como el siguiente: 01000000X000X011X0X Donde los valores representan lo siguiente:
//'0': no contagiado
//'1': contagiado
//'X': océano
//Tenemos que calcular el porcentaje de personas contagiadas en el mundo. Para ello tenemos que tener en cuenta lo siguiente:
//El virus no se puede propagar por el océano.
//Si una persona se contagia en un continente todas las personas se contagian en ese continente.
//Los continentes no están conectados por los extremos
function porcentajeInfectados(s) {
  //????????????????????
}
