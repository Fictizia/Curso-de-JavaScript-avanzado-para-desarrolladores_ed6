![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# [Curso de JavaScript avanzado para desarrolladores](https://fictizia.com/formacion/curso-javascript-avanzado)

## Clase 5

* Derivados de object
  * Array
  * Proxy
  * Set
  * Map

## Derivados de Object

Como ya hemos visto, en JS casi todo es, de una forma u de otra, un objeto. Por tanto, todo lo que derive de un objeto, funcionará por referencia, y tendremos que tener en cuenta la mutabilidad de los objetos.

### Array

Un array en JS es un listado de cosas. Es un iterable, es decir, se puede recorrer con for...of. Su contenido puede ser de cualquier tipo, object, function, string,... no importa el tipo. Los elementos de un array pueden estar repetidos.

#### Declaración

Para crear un array tenemos dos opciones:

```javascript
const miArray = ['elemento1', 'elemento2'];

// Usando el constructor
const miOtroArray = new Array('elemento1', 'elemento2');

// También podemos crear un array vacío
const miArrayVacio = new Array(5) // [empty x5]
```

#### Propiedades

* `.length`: Número de elementos de un array (una dimensión)

```javascript

const heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']

const heroesLength = heroes.length
```

Esta propiedad se puede modificar, cambiando así el contenido del array a voluntad.

```javascript
const heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']

// Al decirle que su tamaño es mayor del real, añadimos espacios en blanco.
heroes.length = 10;

// Esta es una forma de eliminar elementos de un array
heroes.length = 4;
```

Pese a que se pueda hacer, esta práctica no es muy recomendable ya que modifica el array original.

### Acceso

- El operador `[]`

```javascript
const heroes = ['batman', 'superman']

const batman = heroes[0]
```

- Al igual que con los objetos, podemos usar `destructuring` para acceder a las propiedades:

```javascript
const heroes = ['batman', 'superman'];

const [batman, superman] = heroes
```

Si nos pasamos asignando variables, estas tendrán valor `undefined`

```javascript
const heroes = ['batman', 'superman']

const [batman, superman, wonderwoman] = heroes
```

Al igual que en los objetos, podemos usar valores por defecto

```javascript
const heroes = ['batman', 'superman']

const [batman, superman, wonderwoman = 'wonderwoman'] = heroes
```

Si no queremos quedarnos con todos los valores, podemos saltarnos algunos

```javascript

const heroes = ['batman', 'aquaman', 'superman']

const [batman, , superman] = heroes
```

#### Jugando con Arrays

```javascript

const string = 'mi string'
// Como ya vimos esto no lo puedo hacer
string = 'otra cosa diferente'

// Los arrays mutan, así que puedo modificar su contenido libremente
const miArray = ['elemento1', 'elemento2', 'elemento3']

const miOtroArray = miArray

miOtroArray[0] = 'EsteEs el primer elemento'
console.assert(miOtroArray[0] === miArray[0])

```

Podemos usar el [spread operator](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Spread_operator) para componer arrays:

```javascript
const frutas = ['🍐', '🍎']

const verduras = ['🥬', '🍅']

const frutasYVerduras = [
  ...frutas,
  ...verduras
]
```

Podemos borrar propiedades de un array usando `delete`. Lo que hace por debajo es cambiar a undefined ese valor.

```javascript

delete frutasYVerduras[0];

// dicho de otra manera
frutasYVerduras[0] = undefined;
```

#### Métodos

* `.isArray()`: Nos dice si una variable es o no un Array.

```javascript
const heroes = ['batman', 'superman', 'wonderwoman'];

Array.isArray(heroes)
```

* `.from(casiArray)`: Crea un array a partir de un iterable.

```javascript
const miPalabra = 'batman';

const miPalabraComoArray = Array.from(miPalabra);

// Esto es equivalente a usar el spread operator
const miPalabraComoArray = [...miPalabra];
```

* `.of()`: Crea un array con los elementos que reciba

```javascript
// La principal diferencia con new Array es que .of trata los enteros como miembros del array
const miNuevoArray = Array.of(8) // [8]
const miOtroArray = Array.of('batman', 'superman', 'wonderwoman')
```

##### Métodos que mutan

* `.pop()`: Borra el último elemento de una matriz y lo devuelve

```javascript
const heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']

const elHeroeQueNadieQuiere = heroes.pop() // aquaman
```

* `.push(param1, param2, ...paramn)`: Añade uno o n elementos al final de un array y devuelve la nueva longitud.

```javascript
const heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']

const nuevaLongitud = heroes.push('flechaVerde', 'linternaVerde') // 7
```

* `.reverse()`: Da la vuelta a los elementos de un array

```javascript
const heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']

const nuevoOrden = heroes.reverse() // ['aquaman', 'shazam', 'wonderwoman', 'superman', 'batman']
```

* `.shift()`: Elimina el primer elemento del array y lo devuelve

```javascript
const heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']

const elMejorHeroe = heroes.shift() // batman
```

* `.sort(funcionDeComparación)`: Ordena los elementos de un array y devuelve el array ordenado. Si son strings, se devolverán alfabéticamente. Puede recibir una función como parámetro en la que se establezca el orden.

```javascript

const heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']

const heroesOrdenados = heroes.sort() // ["aquaman", "batman", "shazam", "superman", "wonderwoman"]

const ordenaPorNumeroDeLetras = (a, b) => {
  // Si a es menor que b por el criterio que nosotros elegimos, devolvemos -1
  if (a.length > b.length) {
    return -1;
  } else if (a.length < b.length) {
    return 1;
  }
  return 0;
}

const heroesOrdenadorPorNumeroDeLetras = heroes.sort(ordenaPorNumeroDeLetras)

console.assert(heroes === heroesOrdenados)
console.assert(heroes === heroesOrdenadorPorNumeroDeLetras)
```

* `.splice(inicio, elementosQueBorra?, elemento1, elemento2, ...elementon)`: Añade y/o elimina elementos de un arrray. En caso de que no se indiquen cuantos elementos se quieren borrar, todos los elementos desde start hasta el final se borran. Si es 0 o menor que 0 no se eliminarán elementos. Los elementos que se indiquen al final serán los que se indiquen en el lugar de los borrados. Devuelve un array con los elementos eliminados.

```javascript
const marvel = ['capitan america', 'iron man', 'maquina de guerra', 'thor', 'groot', 'spiderman', 'pantera negra', 'halcón']

// Thanos consigue las joyas del infinito y elimina a la mitad de la población

const desvanecidos = marvel.splice(marvel.length / 2)

const heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']

// A Superman lo matan, así que necesitamos sustituirlo y flash se ofrece voluntario
const eliminados = heroes.splice(1, 1, 'flash')
```

* `.unshift(elem1, elem2, ...elemn)`: Añade n elementos a un array por el inicio y devuelve la nueva longitud del array.

```javascript
const heroesAntesDeMolar = ['superman', 'wonderwoman', 'shazam', 'aquaman']

const nuevaLongitud = heroesAntesDeMolar.unshift('batman')
```

##### Metodos que no mutan

* `.concat(array1, array2, arrayn)`: Devuelve un nuevo array con la unión del array original con los n array recibidos.


```javascript
const heroesQueMolan = ['batman', 'wonderwoman', 'flash']
const heroesQueMeh = ['superman', 'aquaman', 'shazam']

const heroes = heroesQueMolan.concat(heroesQueMeh)

// Equivalente a usar spread operator

const heroes = [...heroesQueMolan, ...heroesQueMeh]
```

* `.join(separador)`: Une todos los elementos del array en una cadena. Si recibe un separador, lo usará para unirlos. Por defecto el separador es ','.


```javascript

const heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']

console.log(`En la Liga de la justicia podemos encontrar a ${heroes.join(', ')}`)
```

* `.toString()`: Devuelve un string con el contenido del array. El array será parecido al generado por `.join()`. También tenemos una versión `.toLocaleString()`

```javascript

const heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']

console.log(`En la Liga de la justicia podemos encontrar a ${heroes.toString()}`)

const datos = [new Date(), 12000.43]

console.log(`Mis datos son: ${datos.toString()}`)
console.log(`Mis datos en locale son: ${datos.toLocaleString()}`)
```

* `.indexOf(elemento)`: Devuelve el primer índice en el que se encuentra un elemento o -1.

```javascript
const heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']
const indiceDeSuperman = heroes.indexOf('superman') // 1
const indiceDeFlash = heroes.indexOf('flash') // -1
```

* `.lastIndexOf(elemento)`: Devuelve el último índice en el que se encuentra un strinng o -1. Es case sensitive.

* `.includes`: Devuelve un booleano que dice si un elemento existe en un array o no.

```javascript
const heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']
const indiceDeSuperman = heroes.includes('superman') // true
const indiceDeFlash = heroes.includes('flash') // false
```

##### Métodos de repetición

Estos métodos llegaron con ES6. Todos estos métodos reciben una función que se ejecuta por cada elemento del array.

- `.forEach(funcionIteracion, contexto)`: Recibe una función que se ejecuta por cada elemento del array y cuyos parámetros serán:
  1. el elemento actual del array
  2. indice en el que nos encontramos del array
  3. el array completo

Además, puede recibir un contexto (this)

```javascript
// Una simplificación
function forEach(array, funcion) {
  for(let i = 0; i < array.length; i++) {
    funcion(array[i], i, array)
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
    },
  ],
  log() {
    this.libros.forEach((libro, index) => {
      let prefijo = libro.leido ? 'Ya' : 'Aun no';
      console.log(`${prefijo} has leido ${libro.nombre} de ${libro.autor}`)
    })
  }
}
```

* `.filter(funcionDeFiltrado)`: Aplica una función de filtrado a los elementos de un array devolviendo un nuevo array que sólo contenga los elementos que cumplan una condición. Esta función recibe los mismos parámetros que forEach

```javascript
// Una simplificación
function filter(array, funcion) {
  const nuevoArray = []
  for(let i = 0; i < array.length; i++) {
    if (funcion(array[i], i, array)) {
      nuevoArray.push(array[i])
    }
  }
  return nuevoArray;
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
    },
  ],
  sugerencia() {
    const librosNoLeidos = this.libros.filter(libro => !libro.leido)
    const indiceRandom = Math.floor(librosNoLeidos.length * Math.random())
    const elementoRandom = librosNoLeidos[indiceRandom]
    console.log(`Te sugiero ${elementoRandom.nombre} de ${elementoRandom.autor}`)
  }
}
```

* `.map(funcionDeTransformacion)`: Aplica una función de transformación a cada uno de los elementos del array, devolviendo un nuevo array con la misma longitud que el original.

```javascript
function filter(array, funcion) {
  const nuevoArray = []
  for(let i = 0; i < array.length; i++) {
      nuevoArray.push(funcion(array[i], i, array))
  }
  return nuevoArray;
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
    },
  ],
  log() {
    const librosComoMensajes = this.libros.map(libro => {
      let prefijo = libro.leido ? 'Ya' : 'Aun no';
      return `${prefijo} has leido ${libro.nombre} de ${libro.autor}`;
    })
    console.log(librosComoMensajes.join('\n'))
  }
}
```

* `.some(funcionDeBusqueda)`: Itera por el array ejecutando la función de busqueda por cada elemento hasta que en uno de ellos la función devuelva true. Comprueba que al menos uno de los elementos sea true. Esta función no recorre todo el array, si encuentra un resultado para.

```javascript
function some(array, funcionDeBusqueda) {
  let encontrado = false;
  let i = 0;
  while(!encontrado && i < array.length) {
    encontrado = funcionDeBusqueda(array[i], i, array)
    i += 1;
  }
  return encontrado;
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
    },
  ],
  todoLeido() {
    const hayAlgoSinLeer = this.libros.some(libro => !libro.leido)
    const mensaje = hayAlgoSinLeer ? 'Aun te quedan libros por leer' : 'Ya has leído todo';
    console.log(mensaje)
  }
}
```

* `.every(funcionDeBusqueda)`: Itera por el array ejecutando la función de busqueda por cada elemento hasta que en uno de ellos la función devuelva false. Esta función no recorre todo el array, si encuentra un que no sea satisfactorio para.

```javascript
function every(array, funcionDeBusqueda) {
  let cumple = true;
  let i = 0;
  while(cumple && i < array.length) {
    cumple = funcionDeBusqueda(array[i], i, array)
    i += 1;
  }
  return cumple;
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
    },
  ],
  todoLeido() {
    const estaTodoLeido = this.libros.every(libro => libro.leido)
    const mensaje = estaTodoLeido ? 'Ya has leído todo' : 'Aun te quedan libros por leer';
    console.log(mensaje)
  }
}
```

* `.find(funcionDeBusqueda)`: Itera por el array ejecutando la funcion de busqueda y devuelve el primer elemento para el que la función devuelva true. Muy similar a `.find` tenemos `.findIndex()` que devuelve el indice del elemento que cumple la condición

```javascript
function find(array, funcionDeBusqueda) {
  let encontrado;
  let i = 0;
  while(!encontrado && i < array.length) {
    encontrado = funcionDeBusqueda(array[i], i, array)
    if (!encontrado) {
      i += 1;
    }
  }
  return array[i]; // en el caso de findIndex: return i;
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
    },
  ],
  proximoSinLeer() {
    const proximoSinLeer = this.libros.find(el => !el.leido)
    console.log(`El proximo libro que te toca por leer es ${proximoSinLeer.nombre} de ${proximoSinLeer.autor}`)
  }
}
```

* `.reduce(funcionReductora, valorInicial)`: Ejecuta la función reductora por cada miembro del array y devuelve un único valor.

```javascript

function reduce (array, funcion, inicio) {
  let valor = inicio
  for(let i = 0; i < array.length; i += 1) {
    valor = funcion(valor, array[i], i, array)
  }
  return valor
}

const sumaTodosLosNumeros = (arrayNumeros) => arrayNumeros.reduce((a,b) => a + b, 0)

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
  log() {
    const mensaje = this.libros.reduce((acumulado, actual) => {
      const prefijo = actual.leido ? 'Ya' : 'Aun no';
      return `${acumulado}
${prefijo} has leido ${actual.nombre} de ${actual.autor}`
    }, '')
    console.log(mensaje)
  }
}
```

#### Ejercicios

1. Como estamos de cuarentena y tenemos que encontrar una forma de pasar el tiempo, vamos a probar a ordenar nuestra estantería. Para ello, vamos a crear un método crear un método interno `ordenarPorNombre` que ordene los títulos de la librería por su título.

2. Al salir al supermercado, hemos visto que un vecino ha dejado un cartel pidiendo que le dejen libros para pasar el rato y hemos decidido dejarle los libros de nuestra estantería que ya hemos leído. Crear una propiedad interna `prestamo` que sea booleana que al cambiar a true almacene en otra propiedad interna `librosPrestados` los libros que hemos leído y los quite del total de libros. Ambas propiedades pertenecen al objeto estanteria.

3. Parece que los libros no han sido del agrado de nuestro vecino y ha decido devolvérnoslos antes de tiempo. Modificar esta variable interna para que cuando pase a valer `false los libros leídos vuelvan a la estantería. No hace falta mantener el orden.


```javascript
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

  },
  log() {

  },
  sugerencia() {

  },
  ordenarPorNombre() {

  }
}
```

### Proxy & Reflect

Los proxies en JS nos permiten interceptar invocaciones y operaciones sobre objetos antes de que ocurran y ser nosotros quienes controlemos como estas operaciones se llevan a cabo. Los proxies se crean usando el constructor de Proxy, y reciben el objeto que van a interceptar y un objeto `handler` en el que se definen que operaciones se van a interceptar y que tiene que hacer el proxy en cada una de ellas. La lista de operaciones que se pueden interceptar la podéis encontrar [aquí](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Proxy).

Los proxies van muy ligados a Reflect, que algo que llegó también en ES6. En programación, `reflection` se refiere a la capacidad que tiene algo para leer o editar sobre sí mismo. Ejemplos de esto son: `Array.isArray()`, `Object.keys()`, etc. Con Reflect, tenemos un objeto que nos proporciona los métodos para aplicar sobre objetos las transformaciónes que queremos. Estos métodos son los mismos que pueden interceptar los proxies.

```javascript
const persona = {
  nombre: 'Peter',
  apellidos: 'Parker',
  edad: 16,
  aficiones: ['fotografia', 'apatrullar la ciudad'],
  topSecret: '¡¡¡ES SPIDERMAN!!!',
};

const manejador = {
  get: (objeto, propiedad, valor) => {
    if (propiedad === 'topSecret') {
      throw new Error('Esto no lo puedes ver')
    } else {
      return Reflect.get(objeto, propiedad, valor);
    }
  },
  set: (objeto, propiedad, valor) => {
    if (!valor instanceof Array) {
      throw new Error('aficiones tiene que ser una lista, lo siento mucho');
    }
    if (propiedad === 'aficiones' && objeto.edad < 18 && valor.includes('botellon')) {
      throw new Error('No vayas tan rapido, tigre')
    }
    return Reflect.set(objeto, propiedad, valor)
  }
}

const peterParker = new Proxy(persona, manejador)
```

También podemos crear proxies 'revocables', los cuales se pueden cancelar en cualquier momento y así dejan de ser intermediarios con tu objeto. Este tipo de proxies se crean con el método revocable de la clase Proxy.

```javascript

const revocable = Proxy.revocable({}, {
  get: (objeto, propiedad) => {
    console.log(`Accediendo a: ${propiedad}`)
    return objeto[propiedad];
  }
})

const proxy = revocable.proxy
proxy.nombre = 'Pepito'

console.log(proxy.nombre)

revocable.revoke();

console.log(proxy.nombre) // TypeError
```

Aquí podemos ver un ejemplo con un poco más de utilidad

```javascript
const cacheameEsto = (objetoACachear, ttl = 60) => {
  const creadoEn = Date.now();
  const haExpirado = () => (Date.now() - creadoEn) > (ttl * 1000);
  const manejador = {
    get: (objeto, propiedad) => haExpirado() ? undefined : Reflect.get(objeto, propiedad)
  }
  return new Proxy(objetoACachear, manejador)
}
```

**¡¡¡DISCLAIMER!!!**

Tened en cuenta que los proxies en términos de rendimiento son pésimos.

#### Ejercicios

3. Que pesado Aquaman. No sabemos cómo hacer para que tranquilos a los miembros de la Liga de la Justica. Ha comenzado a entrar usando variaciones de su nombre: aQuaman, AQUAMAN, aquaman... Crear un listado de heroes `heroes` que lance una excepción cada vez que intenten añadir a dicho array cualquier variación de 'Aquaman'.

```javascript
const supers = ["superman", "batman"];

```

4. Nuestro carrito de la compra es bastante inteligente, pero no estaría mal que lo fuese aún más. Crear un metodo anade que reciba un producto y lo añada al carrito. Para ello Hay que tener en cuenta las siguientes cuestiones:

- si un producto ya existe en el carrito hay que aumentar la cantidad, no duplicarlo.
- Si el precio del nuevo producto es menor, será este el que predomine.
- La cantidad por defecto será 1, pero si hubiera más habrá que sumarlos.
- Hay que validar los tipos, el nombre del producto es un string, la cantidad es un entero y el precio es un número. En caso de que se introduzca un producto con un tipo inválido se debe lanzar una excepción.


```javascript
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

  }
}
```
