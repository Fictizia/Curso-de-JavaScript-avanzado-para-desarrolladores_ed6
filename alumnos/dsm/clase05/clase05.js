/*1. Como estamos de cuarentena y tenemos que encontrar una forma de pasar el tiempo, vamos a probar a ordenar nuestra estantería. 
Para ello, vamos a crear un método crear un método interno ordenarPorNombre que ordene los títulos de la librería por su título.
 */

/* Al salir al supermercado, hemos visto que un vecino ha dejado un cartel pidiendo que le dejen 
libros para pasar el rato y hemos decidido dejarle los libros de nuestra estantería que ya hemos leído. 
Crear una propiedad interna prestamo que sea booleana que al cambiar a true almacene en otra propiedad 
interna librosPrestados los libros que hemos leído y los quite del total de libros. 
Ambas propiedades pertenecen al objeto estanteria.
 */

/* Parece que los libros no han sido del agrado de nuestro vecino y ha decido devolvérnoslos antes de tiempo. 
Modificar esta variable interna para que cuando pase a valer `false los libros leídos 
vuelvan a la estantería. No hace falta mantener el orden. */

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
	librosPrestados : [],
	set prestamo(estado) {
        if(estado){
            this.librosPrestados = this.libros.filter(libro => libro.leido);
            this.libros = this.libros.filter(libro => !libro.leido);
            console.info('librosPrestados', this.librosPrestados);
            console.info('libros', this.libros);
        }else{
            this.libros = [...this.libros, ...this.librosPrestados];
            this.librosPrestados = [];
            console.info('librosPrestados', this.librosPrestados);
            console.info('libros', this.libros);
        }
    },
    ordenarPorNombre(){
        return this.libros.sort(({ nombre: a }, { nombre: b }) => a > b ? 1 : -1)
    }
  }


  /* ordenarPorNombre() { 
        this.libros.sort(function(a, b){
            if(a.nombre < b.nombre) {
                return -1;
            }
            else if(a.nombre > b.nombre) {
                return 1;
            }
            return 0;
        });
        console.log(this.libros);
    }, */