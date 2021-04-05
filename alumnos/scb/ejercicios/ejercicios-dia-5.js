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
  }]
  prestamo: false,
  librosPrestados: [],
  set prestamo(nuevoValor) {
    if(nuevoValor){
      this.librosPrestados = this.libros.filter(libro => libro.leido);
      this.libros = this.libros.filter(libro => !libro.leido);
    } else {
      this.libros = [...this.libros, ...this.librosPrestados];
      this.librosPrestados = [];
    }
  },

  const ordenarPorNombre = function(libros) {
    return libros.sort(function(a, b){a.libros.nombre - b.libros.nombre;} )
  }

  ordenarPorNombre()
}


