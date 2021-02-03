const carrito = {
    productos: [{
        nombre: 'papel higienico',
        unidades: 4,
        precio: 5,
    },
    {
        nombre: 'chocolate',
        unidades: 2,
        precio: 1.5,
    }],
    get precioTotal(){
        const productos = this.productos;
        const papel = productos[0].unidades * productos[0].precio;
        const chocolate= productos[1].unidades * productos[1].precio;
        return papel + chocolate;

        // const productos = this.productos;
        // let precioTotal = 0;
        // for(const producto of productos) {
        //     precioTotal += producto.unidades * producto.precio
        // }
        // return precioTotal;

        // return this.productos.map(
        //     producto => producto.unidades* producto.precio
        // ).reduce((acc, curr) => acc+ curr, 0);
    }
}

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
    // imprima de cada libro: nombre, autor, leido o no
    // formato: Ya has leido el quijote de miguel de cervantes 
    // formato: Aún no has leido el quijote de miguel de cervantes 
        log() {
        const libros = this.libros;
            const messageLog = libros.map(
                libro => {
                    if(libro.leido){
                        return `Ya has leído ${libro.nombre} de ${libro.autor}`;
                    } else {
                        return `Aún no has leído ${libro.nombre} de ${libro.autor}`;
                    }
                }
            );
        return messageLog;
    },
    // devuelva de forma aleatoria nombre de un libro y 
    // su autor que no hayas leído
        sugerencia() {
            const libros = this.libros;
            const notReadBooks = libros.filter(libro => !libro.leido);
            const getRandomBook = notReadBooks[Math.floor(Math.random() * notReadBooks.length)];
            const messageSugerencia = `Aún no has leído ${getRandomBook.nombre} de ${getRandomBook.autor}`;
            return messageSugerencia;
    }
} 