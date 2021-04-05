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
    },
    ],

    // Ejercicio 1

    ordenarPorNombre() {
        this.libros.sort((a, b) => {
            if (a.nombre < b.nombre) {
                return -1;
            }
            else if (a.nombre > b.nombre) {
                return 1;
            }
            else {
                return 0;
            }
        });
    },

    // Ejercicios 2 y 3

    prestamo: false,
    librosPrestados: [],
    set prestamo(nuevoValor) {
        if (nuevoValor) {
            this.librosPrestados = this.libros.filter((libro) => libro.leido);
            this.libros = this.libros.filter((libro) => !libro.leido);
        }
        else {
            this.libros = [...this.librosPrestados, ...this.libros];
            this.librosPrestados = [];
        }
    }

};

/*
Que pesado Aquaman. No sabemos cómo hacer para que tranquilos a los miembros 
de la Liga de la Justica. Ha comenzado a entrar usando variaciones de su nombre: 
aQuaman, AQUAMAN, aquaman... 
Crear un listado de heroes heroes que lance una excepción 
cada vez que intenten añadir a dicho array cualquier variación de 'Aquaman'.
*/

const supers = ["superman", "batman"];
const manejador = {
    set: (obj, prop, val) => {
        console.log(val);
        if (val.toUpperCase && val.toUpperCase() === "AQUAMAN") {
            throw new Error("Lo siento, Aquaman. Nunca entrarás en la Liga.");
        }
        return Reflect.set(obj, prop, val);
    }
};
const realSupers = new Proxy(supers, manejador);

/*
    Nuestro carrito de la compra es bastante inteligente, 
    pero no estaría mal que lo fuese aún más. Crear un metodo anade que 
    reciba un producto y lo añada al carrito. Para ello Hay que tener en cuenta 
    las siguientes cuestiones:

    si un producto ya existe en el carrito hay que aumentar la cantidad, 
    no duplicarlo.
    Si el precio del nuevo producto es menor, será este el que predomine.
    La cantidad por defecto será 1, pero si hubiera más habrá que sumarlos.
    Hay que validar los tipos, el nombre del producto es un string, 
    la cantidad es un entero y el precio es un número. 
    En caso de que se introduzca un producto con un tipo inválido se debe 
    lanzar una excepción.
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
    }],
    get precioTotal() {
        let precio = 0;
        for (let i = 0; i < this.productos.length; i++) {
            precio += this.productos[i].unidades * this.productos[i].precio;
        }
        return precio;
    },
    anade(producto) {
        if (typeof producto.nombre !== "string") {
            throw new Error("El nombre del producto es obligatorio y debe ser un String");
        }
        else if (producto.unidades && !Number.isInteger(producto.unidades)) {
            throw new Error("El número de unidades debe ser entero.");
        }
        else if (!producto.precio || typeof producto.precio !== "number") {
            throw new Error("El precio es obligatorio y debe ser un número.");
        }
        let nombres = carrito.productos.map(p => p.nombre);
        let index = nombres.indexOf(producto.nombre);
        if (index > -1) {
            let productoEnCarrito = carrito.productos[index];
            productoEnCarrito.unidades += producto.unidades ?? 1;
            productoEnCarrito.precio = Math.min(productoEnCarrito.precio, producto.precio);
        }
        else {
            carrito.productos.push(producto);
        }
    }
};

let leche = { nombre: "Leche", unidades: 2, precio: 0.5 };
let chocoCaro = { nombre: "chocolate", unidades: 2, precio: 1 };
let chocoBarato = { nombre: "chocolate", unidades: 2, precio: 2 };
let chocoSinUnidades = { nombre: "chocolate", precio: 1.5 };
let malNombre = { nombre: 5, unidades: 3, precio: 10000 };
let malPrecio = { nombre: "oro", unidades: 20, precio: "mil" };
let malUnidades = { nombre: "plata", unidades: "una", precio: 100 };

// Crear una función que reciba varios arrays de números y devuelva la unión de todos los arrays sin repeticiones.

// Bueno, hice estas versiones sin saber que existía algo llamado Set...
// Al final, la versión "buena" y "sencilla" usando un Set.
// Versión 1: busca si un elemento ya está añadido con indexOf
function union1(...arrays) {
    return arrays.reduce(
        (acc, cur) => acc.concat(
            cur.filter(element => acc.indexOf(element) === -1)), []);
}

// Versión 2: crea un objeto con los números ya añadidos como keys
function union2(...arrays) {
    let result = arrays.reduce(
        (acc, cur) => {
            cur.forEach(element => { acc[element] = 1; });
            return acc;
        }, {});
    return Object.keys(result).map(e => parseInt(e));
}

// Versión 3: añade todos, ordena y elimina duplicados
function union3(...arrays) {
    let todos = [].concat(...arrays);
    todos.sort((a, b) => a - b);
    let first = todos[0];
    let last = first;
    todos = todos.filter(cur => {
        let keep = cur != last;
        last = cur;
        return keep;
    });
    return [first, ...todos];
}

// Con un Set
function union(...arrays) {
    let todos = [].concat(...arrays);
    let set = new Set(todos);
    return Array.from(set);
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 3, 5, 9, 10];
const array3 = [4, 5, 6, 7, 9];
const array4 = [8, 10];
console.log(union1(array1, array2, array3, array4));
console.log(union2(array1, array2, array3, array4));
console.log(union3(array1, array2, array3, array4));
console.log(union(array1, array2, array3, array4));

// Interseccion

function interseccion(...arrays) {
    let sets = arrays.map(array => new Set(array));
    let todos = [].concat(...arrays);
    return Array.from(new Set(todos.filter(elemento => sets.every(set => set.has(elemento)))));

}

const array5 = [1,2,3,1,4,5,9];
const array6 = [1,3,5,5,9,10];
console.log("Interseccion: ", interseccion(array5, array6));
