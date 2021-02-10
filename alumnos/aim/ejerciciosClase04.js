//10.Vamos a calcular el precio del carrito de la compra. Un carrito de la compra tiene una propiedad productos que es una lista de los productos. Cada producto tiene las siguientes propiedades:
const carrito = {
  productos: [
    {
      nombre: "papel higienico",
      unidades: 4,
      precio: 5,
    },
    {
      nombre: "chocolate",
      unidades: 2,
      precio: 1.5,
    },
  ],
  get precioTotal() {

    let precioTotal = 0;

    this.productos.map((item) => {
      let multiProducts = item.unidades * item.precio;
      precioTotal += multiProducts;

    });

    return precioTotal;
  },
};
carrito.precioTotal;



//11. 
/* a. Un método log que imprima por cada libro su nombre, autor y si lo has leído o no con el siguiente formato:
b. Un método sugerencia que te devuelva de forma aleatoria el nombre de un libro y su autor que no hayas leído. */
const estanteria = {
  libros: [{
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

  log() {
    const librosLeidos = this.libros.map(libro => {
      return libro.leido ? `Ya has leído ${libro.nombre} de ${libro.autor}` : `Aun no has leído ${libro.nombre} de ${libro.autor}`;
    })
    const estilos = 'color: blue; font-weight: bold;'
    console.log("%c" + librosLeidos.join('\n'), estilos)
  },

  sugerencia() {
    const librosNoLeidos = this.libros.filter(libro => !libro.leido);
    const posicionRandom = Math.floor(Math.random() * librosNoLeidos.length);
    let libroRandom = librosNoLeidos[posicionRandom];

    return `Deberías leer: ${libroRandom.nombre} de ${libroRandom.autor}`;
  }  
}

estanteria.log()
estanteria.sugerencia();
