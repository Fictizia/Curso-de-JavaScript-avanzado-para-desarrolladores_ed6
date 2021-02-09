// Como estamos de cuarentena y tenemos que encontrar una forma de pasar el tiempo, 
// vamos a probar a ordenar nuestra estantería. 
// Para ello, vamos a crear un método crear un método interno ordenarPorNombre que 
// ordene los títulos de la librería por su título.

// Al salir al supermercado, hemos visto que un vecino ha dejado un cartel pidiendo 
// que le dejen libros para pasar el rato y hemos decidido dejarle los libros de nuestra 
// estantería que ya hemos leído. 
// Crear una propiedad interna prestamo que sea booleana que al cambiar a true almacene en otra propiedad 
// interna librosPrestados los libros que hemos leído y los quite del total de libros. 
// Ambas propiedades pertenecen al objeto estanteria.

// Parece que los libros no han sido del agrado de nuestro vecino y ha decido devolvérnoslos antes de tiempo. 
// Modificar esta variable interna para que cuando pase a valer `false los libros leídos vuelvan a la estantería. 
// No hace falta mantener el orden.

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
    if (nuevoValor) {
        this.librosPrestados = this.libros.filter(libro => libro.leido);
        this.libros = this.libros.filter(libro => !libro.leido);
    } else {
        this.libros = this.libros.concat(this.librosPrestados);
    }
  },
  ordenarPorNombre() {
    const libros = this.libros;
    const order = libros.sort(function(a, b){
        if(a.nombre > b.nombre) { return -1; }
        if(a.nombre < b.nombre) { return 1; }
        return 0;
    })
    return order;
  }
}

// Que pesado Aquaman. No sabemos cómo hacer para que tranquilos a los miembros de la Liga de la Justica. Ha comenzado a entrar usando variaciones de su nombre: aQuaman, AQUAMAN, aquaman... Crear un listado de heroes heroes que lance una excepción cada vez que intenten añadir a dicho array cualquier variación de 'Aquaman'.
// const supers = ["superman", "batman"];
// Nuestro carrito de la compra es bastante inteligente, pero no estaría mal que lo fuese aún más. 
//Crear un metodo anade que reciba un producto y lo añada al carrito. 
// Para ello Hay que tener en cuenta las siguientes cuestiones:
// si un producto ya existe en el carrito hay que aumentar la cantidad, no duplicarlo.
// Si el precio del nuevo producto es menor, será este el que predomine.
// La cantidad por defecto será 1, pero si hubiera más habrá que sumarlos.
// Hay que validar los tipos, el nombre del producto es un string, la cantidad es un entero y el precio es un número. En caso de que se introduzca un producto con un tipo inválido se debe lanzar una excepción.

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
    let precio = 0;
    for (let i = 0; i < this.productos.length; i++) {
      precio += this.productos[i].unidades * this.productos[i].precio;
    }
    return precio;
  },
  anade(producto) {
     //WIP
  }
}