  /* 1.	Como estamos de cuarentena y tenemos que encontrar una forma de pasar el tiempo,
  vamos a probar a ordenar nuestra estantería. Para ello, vamos a crear un método crear un método
  interno ordenarPorNombre que ordene los títulos de la librería por su título. */



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
  prestamo: false,
  librosPrestados: [],

  set prestamo(nuevoValor) {
    if(nuevoValor){
      this.librosPrestados = this.libros.filter(libro => libro.leido);
      this.libros = this.libros.filter(libro => !libro.leido);
      console.info('Has prestado el libro : ', this.librosPrestados);
      console.info('Te quedan: ', this.libros);
    }else{
      this.libros = [...this.libros, ...this.librosPrestados];
      this.librosPrestados = [];
      console.info('Has prestado el libro :', this.librosPrestados);
      console.info('Te quedan:', this.libros);
    }
  },

  ordenarPorNombre() {
    this.libros.sort(function(a, b){
      if(a.nombre < b.nombre) {
          return -1;
      }
      else if(a.nombre > b.nombre) {
          return 1;
      }
      return 0;
  });
  console.info(this.libros);
  }
}

estanteria.prestamo = true
estanteria.ordenarPorNombre()
