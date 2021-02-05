/*10. Vamos a calcular el precio del carrito de la compra. Un carrito de la compra tiene una propiedad productos que es una 
lista de los productos. Cada producto tiene las siguientes propiedades:
nombre: Nombre del producto (Papel higiénico, leche, ...)
unidades: número elementos que se van a comprar de dicho producto
precio: precio unitario del producto
Además, tiene una propiedad `precioTotal donde se va actualizando automáticamente el precio del producto. 

Crear el código necesario para soportar esta funcionalidad.

Datos de prueba:
*/

const carrito = {
  productos: [{
      nombre: 'papel higienico',
      unidades: 4,
      precio: 5,
    },
    {
      nombre: 'chocolate',
      unidades: 2,
      precio: 1.5
    }
  ],
  get precioTotal() {
    return this.productos.reduce((sum, product) => {
      sum += (product.precio * product.unidades);
      return sum;
    }, 0)
  }
}



/*11.Cada libro se compone de las siguientes propiedades:

nombre: Nombre del libro
autor: Nombre de quien lo ha escrito
leido: Un booleano que nos indica si hemos leído o no el libro

Nuestra estantería necesita las siguientes funcionalidades:

Un método log que imprima por cada libro su nombre, autor y si lo has leído o no con el siguiente formato:

Si no lo has leído: Aun no has leído El Quijote de Miguel de Cervantes
Si lo has leído: Ya has leído El Quijote de Miguel de Cervantes

Un método sugerencia que te devuelva de forma aleatoria el nombre de un libro y su autor que no hayas leído.
Implementar los métodos log y sugerencia del objeto estantería.

Datos de prueba: */

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
    }
  ],
  log() {
    return this.libros.forEach(libro => console.log(`${libro.leido ? `%c Ya` : `%c Aun no`} has leído ${libro.nombre} de ${libro.autor}`, libro.leido ? 'background: green;' : 'background: red;'))
  },
  sugerencia() {
    const librosNoLeidos = this.libros.filter(libro => !libro.leido);
    const randomNum = Math.trunc(Math.random() * librosNoLeidos.length);
    const {
      nombre,
      autor
    } = librosNoLeidos[randomNum];
    return `Todavía no has leido ${nombre} de ${autor}`;
  }
}
