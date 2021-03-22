![WideImg](https://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# [Curso de JavaScript avanzado para desarrolladores](https://fictizia.com/formacion/curso-javascript-avanzado)

## Clase 20

- Automatización de tareas de desarrollo Frontend
  - NPM & yarn
  - Herramientas de análisis estático
  - Documentación
  - gulp
  - Webpack

## NPM

![npm_logo](../assets/clase20/npm.png)

Es el sistema de gestión de paquetes por defecto para nodeJS. Facilita el trabajo con dependencias de terceros así cómo la creación de librerías y paquetes.

**Documentación**

- [Web Oficial](https://www.npmjs.com/)
- [Features](https://www.npmjs.com/features)
- [Pricing](https://www.npmjs.com/pricing)
- [Documentación](https://docs.npmjs.com/)
- [NPM Community](https://npm.community/)
- [NPM en Github](https://github.com/npm/cli)
- [@npmjs en Twitter](https://twitter.com/npmjs)
- [@npmstatus en Twitter](https://twitter.com/npmstatus)
- [@npm_support en Twitter](https://twitter.com/npm_support)

**Inicializar proyecto**

```shell
npm init
```

**Instalar paquetes:**

- global:

```shell
npm install -g <paquete>
```

- local:

```shell
npm install <paquete>
```

- desarrollo:

```shell
npm install --save-dev <paquete>
```

**Buscar paquetes**

```shell
npm search <paquete>
```

**Información de los paquetes**

```shell
npm view <paquete>
```

**Lista de paquetes instalados**

```shell
  npm ls
```

**Lista de paquetes instalados globalmente**

```shell
  npm ls -g
```

**Instalando versiones especificas:**

- la más reciente:

```shell
  npm install <paquete>@latest
```

- versión especifica:

```shell
  npm install <paquete>@1.x (1.xx.xx)
```

- Otra versión especifica

```shell
  npm install <paquete>@2.10.x (2.10.x)
```

**Paquetes desactualizados:**

```shell
npm outdated
```

**Actualizando paquetes:**

```shell
npm update <paquete>
```

**Desinstalando paquete:**

```shell
npm uninstall <paquete>
```

**Información sobre Bugs**

```shell
npm bugs <paquete>
```

**Información sobre seguridad**

```shell
npm audit
```

**[Más comandos - CLI](https://docs.npmjs.com/cli-documentation/cli)**

### package.json

Este archivo contiene la configuración del proyecto. Esta configuración será:

- nombre del paquete
- versión del paquete: Esta siempre seguirá SemVer.
- descripción
- dependencias:
  - producción
  - desarrollo
- scripts
- licencia
- [Muchas más](https://docs.npmjs.com/files/package.json)

La versión del paquete siempre debe seguir la notación SemVer (versionado semántico):

 - El primer número (major) cambia cuando se produce un cambio que NO es retro compatible o cuando se saca una primera versión estable.
 - El segundo número (minor) cambia cuando añadimos nueva funcionalidad que no rompe con lo que hubiera antes.
 - El último número (patch) se modifica cuando se arregla un fallo introducido en una nueva versión.

Siempre que se modifique uno de los números los que estén a su derecha pasarán a valer 0.

Todo esto se refleja en archivo package.json de la siguiente manera:

```json
{
  "name": "javascript-avanzado",
  "version": "1.0.0",
  "description": "![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Fictizia/Curso-de-JavaScript-avanzado-para-desarrolladores_ed6.git"
  },
  "author": "Fran Quesada",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/Fictizia/Curso-de-JavaScript-avanzado-para-desarrolladores_ed6/issues"
  },
  "homepage": "https://github.com/Fictizia/Curso-de-JavaScript-avanzado-para-desarrolladores_ed6#readme",
  "devDependencies": {
    "jest": "^26.0.1"
  }
}
```

### npx

A partir de npm 5.2, con npm viene incluido este ejecutor de paquetes binarios, es decir, un cli que permite ejecutar otros paquetes. Este ejecutador permite, entre otras, evitar conflictos entre paquetes globales y locales, ejecutar paquetes sin tenerlos instalados o simplemente utilizar paquetes sin necesidad de incluírlos como scripts en nuestro proyecto.

## Yarn

Se trata de una alternativa a NPM para la gestión de paquetes. Está centrado en la velocidad y la seguridad de los paquetes.

**Iniciar un proyecto**

```shell
yarn init
```

**Añadir dependencias al proyecto**

```shell
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

**Añadir dependencias al proyecto en categorías**

```shell
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```

**Actualizar dependencias**

```shell
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

**Eliminar dependencias**

```shell
yarn remove [package]
```

**Instalar todas las dependencias**

```shell
yarn
yarn install
```

**¿Quien pidio este paquete?**

```shell
yarn why [package]
```

## Herramientas de análisis estático

Este tipo de herramientas permiten detectar problemas en el código antes de que se ejecute. El tipo de problemas que detectan pueden ir desde seguridad hasta estilos de programación. Dado que JS no es un lenguaje tipado, los analizadores de código más comunes son los formatters y los linters. Si bien en esta sección nos centraremos en los linters, hay muchos otros recursos interesantes que debemos conocer:

- [.editorconfig](https://editorconfig.org/)
- [prettier](https://prettier.io/)
- [jslint](https://jslint.com/)

### Linter

Si bien los `formatters` permiten unificar el estilo de programación, los linters van más allá. Permiten definir normas de estilo más complejas de las que pueda detectar un formatter y analizan el código para detectar posibles violaciones de las mismas.

La linter más extendido para JS es [ESLint](https://eslint.org/). El tipo de [reglas](https://eslint.org/docs/rules/) que puede detectar un linter son los mismos que los de los formatter y, además, cuestiones como complejidad ciclomática, declaración de variables que no se utilicen, uso de var, etc...

### Configuración

Gracias a npm, la configuración de `eslint` inicial se puede hacer de la siguiente manera:

```shell
npx eslint --init
```

Este comando lanzará un asistente interactivo para saber cómo configurar el proyecto. Una vez hayamos respondido, se generará un archivo `.eslintrc` (la extensión la indicaremos durante la configuración) que contendrá la configuración que nos interese.

Este archivo tendrá la siguiente forma:

```json
{
  "env": {
      "browser": true,
      "commonjs": true,
      "es2020": true
  },
  "extends": [
      "airbnb-base"
  ],
  "parserOptions": {
      "ecmaVersion": 11
  },
  "rules": {
  }
}
```

- `env`: Aquí indicamos en qué entorno va a ejecutarse el proyecto. En función de en qué entorno estemos se configurarán ciertas variables u otras.

- `extends`: Indica de que configuración/es estamos extendiendo. En este caso, extiende de la configuración de `airbnb`.

- `parserOptions`: Aquí indicaremos la versión del lenguaje que deberá soportar.

- `rules`: Aquí definiremos las reglas que queremos que nuestro proyecto cumpla. En caso de que la configuración extienda de otra, aquí las sobreescribiremos.

Una vez que esté configurado, podremos ejecutar el análisis de la siguiente manera:

```shell
npx eslint .
```

No obstante, la mayoría de los editores a día de hoy se pueden integrar con eslint y informan en tiempo real de las violaciones que se están cometiendo.

### Recursos

- [Awesome eslint](https://github.com/dustinspecker/awesome-eslint)

## Documentación

En entornos colaborativos donde diferentes personas escriben código sin comunicarse entre sí, es muy fácil que encontremos piezas de código que otra persona (o nosotros mismos) escribieron hace mucho tiempo y que no entendamos muy bien cómo funcionan. Este problema es muy común, y normalmente se soluciona dedicando algo de tiempo a (redoble de tambores...🥁🎶) documentar.

Uno de los problemas de documentar, es que lleva tiempo y a menudo nos parece engorroso, no obstante, existen mecanismos que permiten agilizar la documentación del código cómo son **JSDoc**. JSDoc es un generador de documentación para Javascript. Se basa en etiquetas (comentarios con palabras clave precedidas de @) que se usan antes de la declaración de funciones o clases en el código.

### Configuración

Lo primero que necesitaremos para tener JSdoc será instalarlo en nuestro proyecto:

```shell
npm install --save-dev jsdoc
```

Una vez instalado, tendremos que configurarlo. Esto se hace creando un archivod json de configuración. Si no indicamos ningún tipo de configuración, este tomará la siguiente por defecto:

```json
{
    "plugins": [],
    "recurseDepth": 10,
    "source": {
        "includePattern": ".+\\.js(doc|x)?$",
        "excludePattern": "(^|\\/|\\\\)_"
    },
    "sourceType": "module",
    "tags": {
        "allowUnknownTags": true,
        "dictionaries": ["jsdoc","closure"]
    },
    "templates": {
        "cleverLinks": false,
        "monospaceLinks": false
    }
}
```

Esta configuración indica lo siguiente:

- No se ha cargado ningún plugin.
- La profundidad con la que buscará ficheros es de 10 máximo.
- Sólo ficheros que acaben en `.js`, `.jsdoc` o `.jsx` se procesarán.
- Cualquier fichero o directorio que comience por `_` será excluido.
- Soporta módulos de ES6.
- Se pueden usar etiquetas desconocidas.
- Se soportan las etiquetas de JSDoc y las de Closure.
- Los links en línea se renderizan como texto plano.

Si nosotros quisieramos que se generase documentación para todo el código contenido en la carpeta `src`, tendríamos que añadir el atributo `include`.

```json
{
    "plugins": [],
    "recurseDepth": 10,
    "source": {
        "include": ["src"],
        "includePattern": ".+\\.js(doc|x)?$",
        "excludePattern": "(^|\\/|\\\\)_"
    },
    "sourceType": "module",
    "tags": {
        "allowUnknownTags": true,
        "dictionaries": ["jsdoc","closure"]
    },
    "templates": {
        "cleverLinks": false,
        "monospaceLinks": false
    }
}
```

Una vez configurado, para ejecutarlo usaríamos npx, indicando donde está el archivo de configuración.

```shell
npx jsdoc -c jsdoc.json
```

### Uso

Para generar la documentación, lo que haremos será antes de declarar funciones o clases es incluir comentarios de bloque con ciertas etiquetas. Algunas de las más importantes son:

- `@params`: Sirve para definir parámetros de funciones
- `@returns`: Sirve para definir lo que devuelve una función.
- `@async`: Para indicar que una función es asíncrona
- `@example`: Ejemplo de cómo usar una función, clase, método,....
- `@property`: Sirve para definir propiedades en un objeto.
- `@module`: Para definir módulos ES6.
- `@class`/`@constructs`: Para identificar que algo es una clase.
- [Muchas más](https://jsdoc.app/index.html)


## [Gulp](https://gulpjs.com/)

Gulp es uno de los gestores de tareas más populares en desarrollo front, lo cual permite automatizar ciertas tareas de nuestro proyecto a partir de una configuración única.

**Características**

- Filosofía de código sobre configuración
- Basado en stream
- No es necesario usar archivos temporales
- Claridad en creación de tareas y seguimiento de procesos
- Gran cantidad de Plugins
- Cuenta con una comunidad sólida y madura
- Su curva de aprendizaje es moderada

### Configuración

Podemos instalar gulp tanto de forma global como de forma local. Lo instalaremos usando npm.

```shell
npm install -g gulp@3

# O bien

npm install --save-dev gulp@3
```

Si no indicamos la versión, se instalará la versión 4. Esta versión si bien es la más moderna, es muy poco usada en la comunidad.

Una vez instalado, crearemos un fichero `gulpfile.js` donde definiremos las tareas que queremos automatizar.

```javascript
const gulp = require('gulp')

gulp.task('default', () => {
  console.log('Esta tarea es la que tendremos por defecto cada vez que ejecutemos gulp')
})
```

Una vez creado el fichero, podremos ejecutar la tarea usando el comando `gulp`.

```shell
gulp
```

### Uso

La API de gulp contiene 4 elementos muy importantes que serán con los que interactuaremos para definir nuestras tareas en el fichero `gulpfile.js`:

- `gulp.task`: Sirve para definir tareas

```javascript
gulp.task('minify', () =>  {
  return gulp
    .pipe(eslint())
    .pipe(gulp.dest('dist'))
})
```

En caso de que queramos indicar dependencias entre tareas, debemos indicarlas en la tarea como array.

```javascript
gulp.task('build', ['linter', 'minify'], () => {

})
```

- `gulp.src`: Sirve para obtener los ficheros que queremos tratar.

- `gulp.dest`: Apunta al lugar donde queremos que acaben los ficheros.

```javascript
gulp.task('minify', () => {
  gulp.src('src/**.js')
    .pipe(minify)
    .pipe(gulp.dest('public'));
});
```

- `gulp.watch`: Permite monitorizar uno o varios archivos y lanzar tareas cuando ocurran cambios en los mismos.

```javascript
gulp.watch('src/*.js', ['linter'])
```

### Ejemplos

```javascript
// Concatenación y uglificado de archivos
const gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

gulp.task('concat-ugly', () => {
  gulp.src('js/sources/*.js')
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});
```

- [Ejemplo complejo gulp 4](https://gist.github.com/jeromecoupe/0b807b0c1050647eb340360902c3203a)

### Recursos

- [Awesome gulp](https://alferov.github.io/awesome-gulp)

## [Webpack](https://webpack.js.org/)

Webpack es un empaquetador de módulos (bunlder) para archivos estáticos. Se usa, entre otras, para:

- Gestión de dependencias
- Gestionar tareas
- Conversión de formatos

Su uso está muy extendido y casi todos los frameworks de desarrollo web modernos se integran con él. No obstante, su configuración es realmente compleja, por lo que normalmente se utilizan soluciones construidas sobre webpack para facilitar el desarrollo.

Cuando configuramos webpack en nuestro proyecto, este trata todos los archivos que se encuentra como módulos y con estos forma un grafo de dependencias entre archivos. Una vez formado, Webpack se encarga de transformar todo el código en un único paquete (bundle) que contenga todos los módulos en el oden que sean necesarios. Este bundle será el que finalmente utilicemos en nuestro archivo HTML.

***Conceptos clave***

- Loaders: Se encargan de transformar cualquier archivo que no sea JS en módulos con los que Webpack pueda trabajar.
- Plugins: Son el core de webpack. Se utilizan para multitud de tareas, optimización de módulos, minificado, inyección de scripts, etc
- Modo: Permite especificar en qué entorno estamos trabajando, si es desarrollo o es producción.

### Configuración

- Instalación

```shell
npm i --save-dev webpack webpack-cli
```

- Configuración

Si lo ejecutamos a continuación, sin haber configurado nada, Webpack nos informará de que no hemos configurado ningún modo, por lo que usará el modo de producción que tiene ciertas configuraciones por defecto. En este contexto, Webpack siempre tomará como entrada por defecto el fichero `src/index.js` y la salida será `dist/main.js`. En este archivo nos encontraremos la versión uglificada de nuestro código.

En caso de que usemos el modo de desarrollo (`--mode development`), este nos mostrará nuestro código no uglificado como un módulo.

Para hacer una configuración específica, crearemos un archivo `webpack.config.js` que la contenga. Dicho archivo estará en la raíz del proyecto. Dicho archivo tendrá el siguiente formato:

```javascript
const path = require('path')

module.exports = {
  mode: 'development', // Esto será development o production
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js' // Con esto estamos indcando que mantenga el nombre de archivo original
  },
  resolve: {
      extensions: ['js'] // aquí indicaremos qué tipo de archivos deberá tratar webpack
  },
  module: {
      rules: [
        {
          test: /.js$/,
          use: 'babel-loader' // Aquí podríamos usar más de uno si fuese un array
        }
      ] // Aquí definiremos los loaders que procesarán los archivos
  },
  plugins: [],
  devtool: 'source-map' // Esto nos permitirá saber la correspondencia entre nuestro código y el código 'empaquetado'
}
```

**Ejemplo**

```javascript
/**
 * @see https://gist.github.com/danielwrobert/cac4a4a44f1430339861
 **/
const path = require( 'path' );
const webpack = require( 'webpack' );
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ( env, options ) => {
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve( __dirname, 'build' ),
      filename: '[name].js',
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx$|\.es6$|\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['react'],
            }
          },
          exclude: /(node_modules|bower_components)/
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                minimize: ( options.mode == 'production' ? true : false ),
                sourceMap: true,
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [ require( 'autoprefixer' ) ]
              }
            },
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images/'
              }
            }
          ]
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css',
        chunkFilename: '[id].css'
      })
    ],
  }
};
```

### Alternativas

- [ParcelJs](https://parceljs.org/)
- [RollupJs](https://rollupjs.org/guide/en/)

# The END

![final de curso](https://media.giphy.com/media/JLtQeoVXD5yKI/giphy.gif)
