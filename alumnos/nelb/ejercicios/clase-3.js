// 2PIr
function perimetroCirculo(r) {
  return 2*Math.PI*r;
}

console.assert(perimetroCirculo(3) === 18.84955592153876)
console.assert(perimetroCirculo(6) === 37.69911184307752)
// 1
function areaCirculo(r) {
  return Math.PI*r**2;
}

console.assert(areaCirculo(2) === 12.566370614359172)
console.assert(areaCirculo(8) === 201.06192982974676)

// 2

function hipotenusa(c1, c2) {
  return Math.sqrt(c1**2 + c2**2);
}
console.assert(hipotenusa(1, 2) === 2.23606797749979)

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function azarMoneda() {
  return Math.random() > 0.5 ? 'Cara' : 'cruz';
}

function azarMoneda() {
  return getRandomInt(0,1) === 0 ? 'Cara' : 'cruz';
}

azarMoneda();

// 3

function azarDados() {
  let numVeces = 0;
  for (let i =0; i < 100; i++){
    if (getRandomInt(1,6) + getRandomInt(1,6) === 10){
      numVeces++;
    }
  }
  return numVeces
}

azarDados();

// 4

function repeat(str, n) {
    return str.repeat(n);

}

console.assert(repeat('Batman ', 3) === 'Batman Batman Batman ')

// 5

function palabraMasLarga(str) {
  const palabras =  str.split(' ');
  let palabra = palabras[0];
  for (let i = 0; i < palabras.length -1; i++) {
    palabra = palabra.length > palabras[i + 1].length ? palabra : palabras[i + 1].toString();
  }
  return palabra;
}

console.assert(palabraMasLarga("Erase una vez que se era") === "Erase")

// 6

function ponPrimeraMayuscula(str) {
  let nuevoStr = '';
  for (let palabra of str.split(' ')) {
    nuevoStr += palabra[0].toUpperCase() + palabra.slice(1) + ' ';
  }
  return nuevoStr.trimEnd();

}
console.assert(ponPrimeraMayuscula("En un lugar de la Mancha de cuyo nombre no quiero acordarme") === "En Un Lugar De La Mancha De Cuyo Nombre No Quiero Acordarme")

// 7

function camelize(str) {
  const formatWords = str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase());
  const concatWords = "".concat(...formatWords);
  return `${concatWords[0].toLowerCase()}${concatWords.slice(1)}`;
}

console.assert(camelize("Hola a todos que tal") === "holaATodosQueTal");

// 8

function formatoIngles(num) {
  const ends  = ['th','st','nd','rd','th','th','th','th','th','th'];
  let palabra;
  if ((num % 100) >= 11 && (num % 100) <= 13) {
    palabra = num + 'th';
  } else {
    palabra = num + ends[num % 10];
  }
  return palabra;
 }

console.assert(formatoIngles(203));

// 9
function porcentajeInfectados(s) {
  const continentes = s.split('X');
  let contagiados = 0;
  let humanidad = 0;
  if (continentes.length > 0) {
    for (let i = 0; i < continentes.length; i++) {
      if (continentes[i].indexOf('1') !== -1) {
        contagiados += continentes[i].length;
      }
      humanidad += continentes[i].length;
    }
  }
  return humanidad > 0 ? contagiados * 100 / humanidad : 0;
}

porcentajeInfectados('01000000X000X011X0X');



//10

const carrito = {
  productos: [
      {
      nombre: 'papel higienico',
      unidades: 4,
      precio: 5,
    },
    {
      nombre: 'chocolate',
      unidades: 2,
      precio: 1.5
    }],
  get precioTotal() {
    let precioTotal = 0;
    this.productos.forEach((producto) => {
      const {precio, unidades} = producto;
      precioTotal += precio * unidades;
    })
    return precioTotal;
  }
}

//11

const estanteria = {
  libros: [
    {
      nombre: 'El caballero oscuro',
      autor: 'Frank Miller',
      leido: false
    },
    {
      nombre: 'El mundo amarillo',
      autor: 'Albert Espinosa',
      leido: false,
    },
    {
      nombre: 'Harry Potter y el caliz de fuego',
      autor: 'J.K. Rowling',
      leido: true,
    },
    {
      nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
      leido: false
    },
    {
      nombre: 'Berserk',
      autor: 'Kentaro Miura',
      leido: true
    },
    {
      nombre: 'Iliada',
      autor: 'Homero',
      leido: false
    }],
  get log() {
    let lista = ''
    this.libros.forEach((libro) => {
      if (libro.leido){
        lista += `Ya has leído ${libro.nombre} de ${libro.autor}\n`;
      } else {
        lista += `Aun no has leído ${libro.nombre} de ${libro.autor}\n`;
      }
    })
    return lista;
  },
  get sugerencia() {
    let libroRamdon = Math.floor(Math.random() * (this.libros.length - 1)) +1;
    while (this.libros[libroRamdon].leido) {
      libroRamdon = Math.floor(Math.random() * (this.libros.length - 1)) +1;
    }
    return this.libros[libroRamdon];
  }
}
