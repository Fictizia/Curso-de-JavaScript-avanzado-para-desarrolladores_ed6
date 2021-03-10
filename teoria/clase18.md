![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# [Curso de JavaScript avanzado para desarrolladores](https://fictizia.com/formacion/curso-javascript-avanzado)

## Clase 15

- HTML5 APIs
  - Drag & Drop
  - Intersection Observer
  - Geolocation
  - Canvas
  - IndexedDB

## Drag and Drop

Esta API permite al usuario arrastrar elementos HTML por la pantalla de su dispositivo usando su ratón y soltarlos en otro elemento. Su uso implica la combinación de DOM y gestión de eventos de navegador.

#### Uso

Lo primero que tendremos que hacer es marcar el elemento que queremos arrastrar como `draggable`.

```html
<li class="card-item" draggable="true">
  <img src="https://via.placeholder.com/150" alt="" class="card-image">
  <div class="card-content">
      <p class="card-title">Nombre</p>
      <p class="card-text">Nombre real</p>
      <p class="card-text">Genero</p>
  </div>
</li>
```

Una vez que ya hemos indicado que un elemento es "arrastrable", tenemos que capturar los eventos que este elemento comenzará a lanzar:

- `dragstart`: Tiene lugar cuando el elemento comienza a ser arrastrado. Capturando este evento podremos personalizar el comportamiento del drag.
- `drag`: Salta mientras el elemento es arrastrado.
- `dragend`: La operación de arrastrar acaba, ya sea porque se suelta el ratón o porque se pulsa escape.
- `dragenter`: El elemento arrastrado entra en una zona en la que se maneja el drop.
- `dragleave`: El elemento deja la zona de drop.
- `dragover`: Salta mientras el elemento se arrastre sobre una zona de drop.
- `drop`: El elemento se suelta sobre una zona de drop valida. Este evento se debe escuchar desde el elemento donde se va a soltar. Por defecto, el navegador evita el comportamiento de cualquier elemento para este evento, por lo que para poder escucharlo siempre tendremos que ejecutar `preventDefault()`

Una vez que comenzamos a arrastrar, podemos interactuar con la interfaz `dataTransfer` contenida en el evento que toque para disponer de la información que necesitemos.

Para interactuar con esta información usaremos los siguientes métodos:

- `.setData(mime, dato)`: Almacena información basada en su MIME.

```javascript
  const onDragStart = function(event) {
      console.log('dragStart', event)
      removeZone.classList.add('dragging')
      event.dataTransfer.setData('text/plain', this.id);
      event.dataTransfer.setData('text/uri-list', 'https://www.fictizia.com/')
      event.dataTransfer.setData("text/html", this.outerHTML);
  }
```

- `.getData(dato)`: Recupera la información almacenada en eventTransfer.

```javascript
  const onDrop = function (event) {
    const text = event.dataTransfer.getData('text')
    const link = event.dataTransfer.getData('URL')
  }
```

### Intersection Observer

La API Intersection Observer nos permite observar se produce una intersección entre dos elementos o un elemento y el viewport.

#### Uso

Lo primero que haremos para utilizar esta API será crear una nueva instancia de `IntersectionObserver` usando el constructor de su clase.

```javascript

const observer = new IntersectionObserver(callback, options);
```

Este constructor recibirá dos parámetros:

- El callback que se ejecutará cuando los elementos se crucen.
- La configuración para que este callback se ejecute. Esta configuración tiene tres opciones:
  - `root`: Indica el elemento con el que queremos que se cruce. Por defecto vale `null`, haciendo referencia al viewport del navegador.
  - `rootMargin`: El margin con respecto a ese elemento expresado como si fuera css.
  - `threshold`: Sirve para indicar los porcentajes de cruce en los que se debe ejecutar la función de callback. Estos son valores comprendidos entre 0 y 1. Puede ser un único valor numérico o un array. El valor por defecto será 0.


```javascript

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0
}
```

Cuando el callback se invoca, recibe dos parámetros. El primero es una lista y el segundo es el propio observer.

```javascript
const callback = (entries, observer) => {
  entries.forEach(entrada => {
    console.log(entry.intersectionRatio) // Devuelve el porcentaje de interseción
    console.log(entry.isIntersecting) // Devuelve true o false si los elementos se están cruzando o no
    console.log(entry.target)
  })
}
```

El observador que creemos tendrá los siguientes métodos:

- `.observe(elemento)`: Recibe un elemento HTML que queremos que observe con la configuración suministrada.

- `.unobserve(elemento)`: Le dice al IntersectionObserver que deje de observar al elemento que recibe.

- `.takeRecords()`: Devuelve un array con todas las intersecciones que se han producido.

- `.disconnect()`: Nuestro IntersectionObserver dejará de observar los elementos.


Una vez que sepamos que elemento queremos observar, obtendremos una referencia al mismo y comenzaremos a observarlo.

```javascript

const miElemento = documen.getElementById('teVeo');

observer.observe(miElemento)
```

#### Geolocation

Una de las APIs de `navigator` es la de geolocalización que nos permite obtener los datos geográficos (latitud y longitud) del dispositivo de un usuario. Esta API necesita que el usuario apruebe el permiso de geolocalización por lo que es totalmente asíncrona. Su uso está limitado a HTTPS y localhost.

Antes de usar esta API, conviene comprobar que exista en el navegador del usuario. Esto se hace de usando el operador `in`.

```javascript
if ('geolocation' in navigator) {

}
```

Los métodos de esta API reciben 3 parámetros:

- Una función de callback que se ejecutará si todo ha salido bien. Esta función recibirá un objeto con la información geográfica del dispositivo.

```javascript
const todoHaSalidoAPedirDeMilhouse = (position) => {
  console.log('Estas aparecen siempre')
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  console.log(position.coords.accuracy);
  console.log('Estas sólo aparecen si están disponibles')
  console.log(position.coords.altitude)
  console.log(position.coords.altitudeAccuracy)
  console.log(position.coords.heading)
  console.log(position.coords.speed)
  console.log(position.timestamp)
}
```

- Una función de callback para manejar el error que recibirá como parámetro el error en cuestión. Este error contendrá una propiedad `code` donde se indicará la razón del fallo.

```javascript
const muestraError = (error) => {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("No te doy permiso y.")
      break;
    case error.POSITION_UNAVAILABLE:
      alert("No consigo encontrarte.")
      break;
    case error.TIMEOUT:
      alert("No puedo pasarme la vida buscándote.")
      break;
    case error.UNKNOWN_ERROR:
      alert("No sé qué pasa.")
      break;
  }
}
```

- Un objeto de configuración

```javascript
const objetoConfiguracion = {
  maximumAge: 3000, // Indica el tiempo máximo que se cachea una posición
  timeout: 30000, // El tiempo máximo durante el cual se intentará obtener la información
  enableHighAccuracy: true // Indica si queremos alta precisión o no
}
```

Esta API tiene 3 métodos:

- `.getCurrentPosition(exito, fallo, config)`: Devuelve información geográfica sobre la posición del dispositivo.
- `.watchPosition(exito, fallo, config)`: La función de éxito se ejecutará cada vez que el usuario modifique su posición. Devuelve un id numérico.
- `.clearWatch(id)`: Se encarga de parar la vigía de `watchPosition` a partir del id que esta devuelve.

### Canvas

La etiqueta HTML `<canvas>` se utiliza para dibujar gráficos programaticamente mediante Javascript. Dentro de canvas podemos dibujar elementos [2D](https://curran.github.io/HTML5Examples/) o usar webGL para renderizado [3D](https://webglsamples.org/).

#### Uso

Lo primero que haremos cuando queramos trabajar con canvas será obtener una referencia a la etiqueta HTML e indicar el contexto con el que trabajaremos. Este puede ser `2d`, `webgl` o `bitmaprenderer`. Nos centraremos en el contexto `2d`.

```html
<canvas id="miCanvas" width="360" height="360"></canvas>

<script>
  const canvas = document.getElementById('miCanvas')
  const contexto = canvas.getContext('2d')
</script>
```

Una vez que tenemos el contexto, será parecido a trabajar con el famoso Paint. Antes de hacer cada trazo elegiremos que herramienta queremos, con qué color, estilo de línea, etc. Hay que tener en cuenta que en el canvas los elementos se posicionan en base posiciones x, y. El punto 0 será siempre la esquina superior izquierda.

- Colores estilos y sombras
  - Propiedades:
    - `fillStyle`: Define el estilo del relleno. Puede ser un color, un gradiente o un patrón.
    - `strokeStyle`: Define el estilo del contorno. Puede ser un color, un gradiente o un patrón
    - `shadowColor`: Define el color de las sombras.
    - `shadowBlur`: Define el desenfoque de las sombras.
    - `shadowOffsetX`: Define la distancia horizontal de la sombra desde la forma.
    - `shadowOffsetY`: Define la distancia vertical de la sombra desde la forma.

  - Métodos:
    - `createPattern(imagen, repetición)`: Repite un elemento HTML especificado en la dirección especificada. Este elemento puede ser una imagen, un canvas o un elemento vídeo. La repetición tomará uno de los siguientes valores:
      - `repeat`
      - `repeat-x`
      - `repeat-y`
      - `no-repeat`
    - `addColorStop(parada, color)`: Especifica para un degrada una parada con el color que tendrá que tener. La parada será un valor entre 0 y 1 y el color tendrá el mismo formato que los colores en CSS.
    - `createLinearGradient(x0, y0, x1, y1)`: Crea un degradado lineal a partir de unas coordenadas.

    ```html
    <canvas id="miCanvas" width="360" height="360"></canvas>

    <script>
      const canvas = document.getElementById('miCanvas')
      const contexto = canvas.getContext('2d')

      const grd = contexto.createLinearGradient(0, 0, 170, 0);
      grd.addColorStop(0, "black");
      grd.addColorStop(1, "white");

      contexto.fillStyle = grd;
      contexto.fillRect(20, 20, 150, 100);
    </script>
    ```

    - `createRadialGradient(x0, y0, r0, x1, y1, r1)`: Crea un degradado circular. Recibe las coordenadas y los radios de los círculos que delimitarán el degradado.

    ```html
      <canvas id="miCanvas" width="360" height="360"></canvas>

      <script>
        const canvas = document.getElementById('miCanvas')
        const contexto = canvas.getContext('2d')

        const grd = contexto.createRadialGradient(75, 50, 5, 90, 60, 100);
        grd.addColorStop(0, "red");
        grd.addColorStop(1, "white");

        ctx.fillStyle = grd;
        ctx.fillRect(10, 10, 150, 100);
      </script>
    ```

- Estilo de línea
  - Propiedades
    - `lineCap`: Define el estilo de los extremos de una línea. Puede tomar los siguientes valores:
      - `butt`
      - `round`
      - `square`
        `round` y `square` aumentarán ligeramente el tamaño de la línea.

    ```html
      <canvas id="miCanvas" width="360" height="360"></canvas>

      <script>
        const canvas = document.getElementById('miCanvas')
        const ctx = canvas.getContext('2d')

        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.lineCap = "butt";
        ctx.moveTo(20, 20);
        ctx.lineTo(200, 20);
        ctx.stroke();

        ctx.beginPath();
        ctx.lineCap = "round";
        ctx.moveTo(20, 40);
        ctx.lineTo(200, 40);
        ctx.stroke();

        ctx.beginPath();
        ctx.lineCap = "square";
        ctx.moveTo(20, 60);
        ctx.lineTo(200, 60);
        ctx.stroke();
      </script>
    ```

    - `lineJoin`: Define el tipo de esquina creada cuando dos líneas se encuentran. Puede tomar los siguientes valores:
      - `bevel`: La intersección es recta.
      - `round`: La intersección es curva.
      - `miter`: La intersección es puntiaguda. Esta se combina con la propiedad `miterLimit`.
    - `lineWidth`: Define el ancho de línea actual.
    - `miterLimit`: define la longitud máxima de inglete.

- Rectángulos
  - Métodos:
    - `rect(x, y, width, height)`: Crea un rectángulo a partir de la coordenada de su esquina superior izquierda.
    - `fillRect(x, y, width, height)`: Dibuja un rectángulo relleno.
    - `strokeRect(x, y, width, height)`: Dibuja el contorno de un rectángulo.

    ```html
      <canvas id="miCanvas" width="360" height="360"></canvas>

      <script>
        const canvas = document.getElementById('miCanvas')
        const ctx = canvas.getContext('2d')

        // Rectangulo rojo
        ctx.beginPath();
        ctx.lineWidth = "6";
        ctx.strokeStyle = "red";
        ctx.rect(5, 5, 290, 140);
        ctx.stroke();

        // Rectangulo Verde
        ctx.beginPath();
        ctx.lineWidth = "4";
        ctx.strokeStyle = "green";
        ctx.fillRect(30, 30, 50, 50);
        ctx.stroke();

        // Rectangulo Azul
        ctx.beginPath();
        ctx.lineWidth = "10";
        ctx.strokeStyle = "blue";
        ctx.strokeRect(50, 50, 150, 80);
      </script>
    ```

    - `clearRect(x, y, width, height)`: Borra los píxeles especificados dentro de un rectángulo dado.

- Líneas
  - Metodos
    - `fill()`: Llena el dibujo actual con el color guardado en fillStyle.
    - `stroke()`: Dibuja el contorno que se ha definido.
    - `beginPath()`: Comienza una línea en la posición actual o restablece la línea actual
    - `moveTo(x, y)`: Mueve el puntero al punto especificado en el canvas, sin crear una línea.
    - `lineTo(x, y)`: Agrega un nuevo punto y crea una línea a ese punto desde el último punto especificado en el canvas.
    - `closePath()`: Crea una línea desde el punto actual hasta el punto de partida definido por `beginPath()`.
    - `clip()`: Recorta una región de cualquier forma y tamaño del canvas original.
    - `quadraticCurveTo(px, py, x, y)`: Crea una curva de Bézier cuadrática a partir de las coordenadas del punto de referencia y el punto final.

    ```html
    <canvas id="miCanvas" width="150" height="150"></canvas>

    <script>
        const canvas = document.getElementById('miCanvas')
        const ctx = canvas.getContext('2d')
        ctx.beginPath();
        ctx.moveTo(20, 20);
        ctx.quadraticCurveTo(20, 100, 200, 20);
        ctx.stroke();
    </script>
    ```

    - `bezierCurveTo(px1, py1, px2, py2, x, y)`: Crea una curva Bézier cúbica.
    - `arc(x, y, r, anguloInicial, anguloFinal, sentidoGiro)`: Crea un arco / curva (usado para crear círculos o partes de círculos).

    ```html
      <canvas id="miCanvas" width="150" height="150"></canvas>

      <script>
          const canvas = document.getElementById('miCanvas')
          const ctx = canvas.getContext('2d')
          ctx.beginPath();
          ctx.arc(100, 75, 50, 0, 2 * Math.PI);
          ctx.stroke();
      </script>
    ````

    - `arcTo(x1, y1, x2, y2, radio)`: Crea un arco / curva entre dos puntos.

- Transformaciones
  - Metodos
    - `scale(ancho, alto)`: Escala el dibujo actual más grande o más pequeño. Se toma el 1 como referencia (0.5 = 50%, 2 = 200%)
    - `rotate(angulo)`: Rota el dibujo actual. El angulo es en radianes.
    - `translate(x, y)`: Mueve la posición inicial del canvas a la proporcionada.

- Texto
  - Propiedades
    - `font`: Define las propiedades de fuente actuales para el contenido de texto.
    - `textAlign`: Define la alineación actual para el contenido del texto.
    - `textBaseline`: Define la línea de base de texto actual utilizada al dibujar texto.

  - Metodos
    - `fillText(texto, x, y, anchoMaximo)`: Dibuja texto en el lienzo.
    - `strokeText(text, x, y, anchoMaximo)`: Dibuja texto en el lienzo (sin relleno).
    - `measureText(text)`: Devuelve un objeto que contiene el ancho del texto especificado sin ponerlo en el canvas.

    ```html
    <canvas id="miCanvas" width="150" height="150"></canvas>

    <script>
        const canvas = document.getElementById('miCanvas')
        const ctx = canvas.getContext('2d')
        ctx.font = "20px Georgia";
        ctx.fillText("Hello World!", 10, 50);

        ctx.font = "30px Verdana";
        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop("0"," magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");
        // Fill with gradient
        ctx.fillStyle = gradient;
        ctx.fillText("Big smile!", 10, 90);
    </script>
    ```

- Dibujo de imagen
  - Metodo
    - `drawImage(image, clipX, clipY, clipAncho, clipAlto, x, y, ancho, alto)`: Dibuja un elemento imagen, canvas o video en el canvas.

```html
<canvas id="miCanvas" width="150" height="150"></canvas>

<script>
    const canvas = document.getElementById('miCanvas')
    const ctx = canvas.getContext('2d')
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // La cara
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // La boca
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Ojo izquierdo
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Ojo derecho
    ctx.stroke();
</script>
```

#### Librerías

- 2d:
  - [Paper.js](http://paperjs.org/)
  - [Processing.js](http://processingjs.org/)
  - [p5.js](https://p5js.org/)
  - [Fabric.js](http://fabricjs.com/)
- 3d:
  - [Babylon.js](https://www.babylonjs.com/)
  - [Three.js](https://threejs.org/)

### IndexedDB

Además de WebStorage y de las cookies, los navegadores nos proveen de una BBDD clave-valor integrada en los mismo. Esta BBDD es orientada a eventos y tiene mucha más potencia que `WebStorage`. Esta BBDD está orientada a usos un poco más avanzados como puedan ser el modo offline o los Service Workers. Cada dominio tiene acceso a su BBDD sólo a las BBDD de su dominio. Esta API es asíncrona y muy orientada a eventos.

#### Uso

Lo primero que tendremos que hacer para trabajar con la BBDD será crear una conexión a BBDD.

```javascript
// El método open recibe el nombre y la versión de la BBDD
const conexion = indexedDB.open('heroDB', 1)
```

Una vez que hemos solicitado que se abra una conexión, tendremos que estar a la espera de que salten los eventos asociados a IndexedDB que nos dirán si estamos listos para trabajar con ella o no. Estos eventos son:

- `success`: La conexión está abierta y podemos empezar a trabajar con la BBDD. En este manejador será donde realicemos las operaciones de lectura-escritura.
- `error`: Algo malo ha ocurrido. También saltaría si intentásemos acceder a una versión obsoleta
- `upgradeneeded`: La BBDD está lista pero la versión que hay es menor a la que estamos pidiendo así que hay que actualizar datos. Saltará siempre que la creemos ya que esta pasará de inexistente a 1. Será en este manejador donde definamos el 'modelo' de nuestra BBDD.

```javascript
request.onupgradeneeded = function(event) {
  const db = event.target.result;
  const objectStore = db.createObjectStore("heroe", { keyPath: "id", autoIncrement: true });
  objectStore.createIndex('nameIndex', 'name', { unique: false })
}
```

Con esto estaríamos creando un `objectStore` donde la clave sería `id`, que además, será autoincremental. Un `objectStore` es el equivalente a una tabla SQL, aglutina elementos de una entidad en función de su clave.

Como hemos visto, el nombre de esta clave se definirá a partir del atributo `keyPath` y `autoIncrement` definirá si es una clave autonumérica o no.

Además de los `objectStore`, podremos crear índices que nos permitan buscar por otros atributos.

- `objectStore.createIndex(nombreIndice, columnasIndice, opciones)`: Un índice permite hacer consultas a BBDD de forma más eficiente. `columnasIndice` puede ser vacío, un string si es una sola columna o un array de columnas. Las opciones que reciba serán las siguientes:

- `unique`: Es un booleano que indica si se permiten valores duplicados para una columna
- `multiEntry`: Un booleano que indica si se creará un índice por cada valor del array o será uno que englobe a todas las columnas.

```javascript
  objectStore.createIndex('name', 'name', { unique: false })
```

Para operar con esta BBDD, usaremos lo que se llaman transacciones. Estas transacciones serán de 3 tipos:

- `readonly`: Operaciones de lectura.
- `readwrite`: Operaciones de lectura y escritura.
- `versionchange`: Se produce cuando existe una modificación del 'modelo' en `onupgradeneeded`.

Cada una de estas transacciones tendrá dos eventos que deberemos manejar:

- `oncomplete`: Salta cuando la transacción ha finalizado correctamente.
- `onerror`: Salta si algo falla durante la transacción.

```javascript
  const transaction = db.transaction('Heroe', 'readwrite');
  // Por cada transacción que creemos, tendremos que recuperar el objectStore
  // sobre el que trabajaremos
  const store = transaction.objectStore('Heroe');
```

Una vez que tenemos el objeto objectStore, interacturemos con él usando los siguientes métodos:

- `get(clave)`: Permite obtener un elemento a partir de su key.

```javascript
window.indexedDB.open('Heroes', 1).onsuccess = ev => {
    const db = event.target.result
    const store = db.transaction(['Heroe']).objectStore('Heroe')
    const req = store.get(1)
    req.onsuccess = (event) => {
        console.log(req.result)
    }
    req.onerror = (err) => { console.log(err) }
}
```

- `getAll()`: Obtiene todos los registros.
- `add(item)`: Añade un elemento al `objectStore`.
- `clear()`: Borra todos los elementos de un store.
- `count()`: Cuenta el número de elementos de un objectStore.
- `delete(item)`: Borra un elemento a partir de una clave o un array de claves.
- `deleteIndex(indexName)`: Elimina un índice a partir de su nombre.
- `index()`: Obtiene un índice sobre el que podemos ejecutar consultas o crear un cursor.
- `openCursor()`: Crea un cursor sobre el que podremos iterar realizando operaciones.

```javascript
window.indexedDB.open('Heroes', 1).onsuccess = ev => {
    const db = event.target.result
    const transaction = db.transaction('Heroe', "readonly");
    const store = transaction.objectStore('Heroe');
    const request = store.openCursor();
    request.onsuccess = function(event) {
      const cursor = event.target.result;
      if(cursor) {
        console.log(cursor)
        cursor.continue();
      } else {
        console.log('No queda nada')
      }
    }
}
```

- `put(item)`: Actualiza el registro con la información proporcionada.

#### Librerías

- [idb](https://github.com/jakearchibald/idb)
- [Dexiejs](https://github.com/dfahlander/Dexie.js/)

#### Ejemplo

```javascript
const dbconnect = window.indexedDB.open('Heroes', 1);
dbconnect.onupgradeneeded = ev => {
  console.log('Actualizar BD');
  const db = ev.target.result;
  const store = db.createObjectStore('Heroe', { keyPath: 'id', autoIncrement: true });
  store.createIndex('nameIndex', 'name', { unique: true });
}
dbconnect.onsuccess = ev => {
  console.log('BD-Actualización exitosa');
  const db = ev.target.result;
  const transaction = db.transaction('Heroe', 'readwrite');
  // Por cada transacción que creemos, tendremos que acceder al objectStore
  // sobre el que aplicarla
  const store = transaction.objectStore('Heroe');
  const data = [
    {name: 'Batman'},
    {name: 'Robin'}
  ];
  // Añadiremos elementos a la transacción con el método add
  data.forEach(el => store.add(el));
  transaction.onerror = ev => {
    console.error('¡Se ha producido un error!', ev.target.error.message);
  };
  transaction.oncomplete = ev => {
    console.log('¡Los datos se han añadido con éxito!');
    const store = db.transaction('Heroe', 'readonly').objectStore('Heroe');
    const query = store.openCursor()
    query.onerror = ev => {
      console.error('¡Solicitud fallida!', ev.target.error.message);
      };
    query.onsuccess = ev => {
      const cursor = ev.target.result;
      if (cursor) {
        console.log(cursor.key, cursor.value.name, cursor.value.id);
        cursor.continue();
      } else {
        console.log('¡No hay más registros disponibles!');
      }
    };
  };
};
```

- [Making your web app work offline, with Service Workers and IndexedDB](https://medium.com/@adamrackis/making-your-web-app-work-offline-with-service-workers-and-indexeddb-6ce9c538c48)
- [IndexedDB and caching](https://james-priest.github.io/100-days-of-code-log-r2/IndexedDB-and-Caching.html)
