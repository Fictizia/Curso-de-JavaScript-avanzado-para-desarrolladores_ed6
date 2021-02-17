##### Ejercicios

1. Crear una función que reciba varios arrays de números y devuelva la unión de todos los arrays sin repeticiones.
   Datos de prueba:

```javascript
// Entrada
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 3, 5, 9, 10];
const array3 = [4, 5, 6, 7, 9];
const array3 = [8, 10][
  // Salida
  (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
];

const unionDeArrays = (...arrays) => {
  let arrayTotal = [];
  arrays.forEach((array) => {
    arrayTotal = [...arrayTotal, ...array];
  });
  const unionSet = new Set(arrayTotal);
  return [...unionSet];
};
```

2. Crear una función que reciba dos arrays y devuelva la intersección de los dos (los elementos que estén entre los dos) sin repeticiones.

```javascript
// Entrada
const array1 = [1, 2, 3, 1, 4, 5, 9];
const array2 = [1, 3, 5, 5, 9, 10][
  // Salida
  (1, 3, 5, 9)
];
const interseccionDeArrays = (array1, array2) => {
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    let interseccion = [];
    for(let element of set1) {
        if (set2.has(element)) {
            interseccion = [
                ...interseccion,
                element
            ]
        }
    }
    set1.clear()
    set2.clear()
    return interseccion;
}
```


##### Ejercicios

**1 -** ¿Qué fecha será dentro de 30 días?

```javascript
const fecha30 = () => {
    let hoy = new Date()
    hoy.setDate(hoy.getDate() + 30)
}
```

**2 -** ¿Cuántas horas han pasado desde que empezó el curso? ¿Y días?

```javascript
const dias = () => {
    const hoy = new Date();
    const fecha = new Date(2021, 0, 25, 19, 00);
    const dif = hoy - fecha;
    const horas = dif/1000/60/60;
    const dias = dif/1000/60/60/24;
}
```

**3 -** Expresar la fecha completa de vuestro cumpleaños en el formato de vuestro ordenador y en el de Inglaterra

```javascript
const fecha30 = () => {

const cumple = new Date(2021, 5, 28, 17, 00);
    console.log(cumple)
    
}
```
