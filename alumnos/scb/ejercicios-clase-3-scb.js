// 1. Crea una función que devuelva el perímetro de un círculo a partir de su radios:

function perimetroCírculo(r){
  return 2 * Math.PI * r;
};

perimetroCírculo(2);




// 2. Crea una función que devuelva el area de un círculo a partir de su radio:


function areaCírculo(radio){
  return Math.PI * (radio ** 2);
};

areaCírculo(2);




// 3. Crea una función que devuelva la hipotenusa de un triángulo a partir de sus catetos (Teorema de Pitágoras).

function hipotenusa(c1, c2) {
  return ((c1 **c2) + (c2**2)) ** (1/2);
};

// Math.sqrt((c1 **c2) + (c2**2))

console.assert(hipotenusa(1, 2) === 2.23606797749979)




// 4. Escribe una función que simula el lanzamiento de una moneda al aire y devuelva si ha salido cara o cruz.

function azarMoneda(moneda) {
  return Math.random()> 0.5 ? 'cara': 'cruz';
};

azarMoneda(1);


// 5. Escribe una función que simule cien tiradas de dos dados y devuelva las veces que entre los dos suman 10.

function azarDados(){
  let tiradas = 0;
  let sumenDiez = 0;

  const tirarDado = () => Math.floor(6 * Math.random()) + 1;
  while(tiradas < 100) {
    tiradas++;
    if(tirarDado() + tirarDado() === 10){
      sumenDiez++;
    }
  }
  return sumenDiez;
}

azarDados();


// PART 2 - STRINGS


// 1. Crea una función que reciba un string y un número n y devuelva el string repetido n veces:

function repite(str, n) {
  const str = 'Batman '
  return str.repeat(n)
};

repite('Batman', 3)




// 2. Crea una función que reciba una frase como string y devuelva la palabra más larga:

function palabraMasLarga(str) {
  let palabras = str.split(' ');
  let masLarga = 0;

  for (let i=0; i<palabras.length; i++) {
    if (palabras[i].length > masLarga) {
      masLarga = palabras[i].length;
    }

  }
  return masLarga;
}

palabraMasLarga("Erase una vez que se era");


// 3. Crea una función que reciba un string y lo devuelva con todas las palabras con su primera letra mayúscula.


function ponPrimeraMayuscula(str) {
  let palabraSeparada = str.toLowerCase().split(' ');
  for (let i = 0; i < palabraSeparada.length; i++) {
    palabraSeparada[i] = palabraSeparada[i].charAt(0).toUpperCase() +
    palabraSeparada[i].substring(1);
  }
  return palabraSeparada.join(' ');
}
console.log(ponPrimeraMayuscula("Erase una vez que se era"));



// 4. Crea una función que reciba un string y lo devuelva en camelCase.

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


// 5. Crea una función que reciba un número y devuelva un string con formato ordinal inglés. Esto es:
// - acaba en 1 --> 301st
// - acaba en 2 --> 302nd
// -  acaba en 3 --> 303rd
// - cualquier otra cosa --> 300th


function formatoIngles(num) {
  let string = num.toString(10);
  if (num === 11 || num === 12 || num === 13) {
      return string + 'th';
  }
  switch (string.slice(-1)) {
      case '1':
          return string + 'st';
      case '2':
          return string + 'nd';
      case '3':
          return string + 'rd';
      default:
          return string + 'th';
  }
}
formatoIngles(11)


