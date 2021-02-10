//1. Ordenar por nombre, 
//2. Propiedad prestamo que sea booleana que al cambiar a true almacene en otra propiedad interna librosPrestados los libros que hemos leído y los quite del total de libros.
//3. prestamo false, mostrar todos los libros

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
    const librosSiLeidos = this.libros
      .filter(libro => libro.leido)
      .map(libro => libro.nombre)

    const totalEstanteria = this.libros.map(libro => libro.nombre);

    if (nuevoValor) {
      this.librosPrestados = librosSiLeidos
    } else {
      this.librosPrestados = totalEstanteria;
    }
  },

  log() {

  },

  sugerencia() {

  },

  ordenarPorNombre() {
    const librosPorNombre = this.libros.sort((a, b) => {
      if (a.nombre < b.nombre) {
        return -1;
      } else {
        return 1;
      }
    });

    return librosPorNombre;
  }
}
//estanteria.ordenarPorNombre();

//estanteria.prestamo = false;
//console.log(estanteria.librosPrestados)

//estanteria.prestamo = true;
//console.log(estanteria.librosPrestados)



//PROXIES

//3. Crear un listado de heroes que lance una excepción cada vez que intenten añadir a dicho array cualquier variación de 'Aquaman'.  

const heroes = {
  supers: ["superman", "batman"]
}

const manejador = {

  set: (objeto, propiedad, valor) => {
    let heroWannabe = 'aquaman';
    
   if (propiedad === 'supers' && /[a-z]/.test(valor) || valor.includes(heroWannabe.toUpperCase())) {
      throw new Error('No puedes añadir a la lista')
    } else {
      return Reflect.get(objeto, propiedad, valor);
    }
  },
  
}

const realHeroes = new Proxy(heroes, manejador);
