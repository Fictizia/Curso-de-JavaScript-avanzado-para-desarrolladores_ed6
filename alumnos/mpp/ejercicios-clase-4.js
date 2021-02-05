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
    }],
    get precioTotal() {
        let total = 0;
        for (const producto of this.productos) {
            total += producto.precio * producto.unidades;
        }
        return total;
    }
};

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
      this.libros.forEach((libro) => {
        console.log(`${libro.leido ? "Ya " : "Aun no "} has leido ${libro.nombre} de ${libro.autor}`)
      });
  },
  sugerencia() {
    let noLeidos = this.libros.filter(libro => !libro.leido);
    let sugerencia = noLeidos[Math.floor(Math.random()*noLeidos.length)];
    return {nombre: sugerencia.nombre, autor: sugerencia.autor};
  }
}