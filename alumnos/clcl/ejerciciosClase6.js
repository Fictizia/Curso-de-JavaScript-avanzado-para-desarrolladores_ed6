//1 - Crear una función que reciba varios arrays de números y devuelva la unión de todos los arrays sin repeticiones. Datos de prueba:
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 3, 5, 9, 10];
const array3 = [4, 5, 6, 7, 9];
const array4 = [8, 10];

function unionArrays(array, ...rest) {
  return [...new Set(array.concat(...rest))];
}

console.log(unionArrays(array1, array2, array3, array4));

// 2 - Crear una función que reciba dos arrays y devuelva la intersección de los dos (los elementos que estén entre los dos) sin repeticiones.
const array1 = [1, 2, 3, 1, 4, 5, 9];
const array2 = [1, 3, 5, 5, 9, 10];

function interseccionArrays(array1, array2) {
  const newArray = [];
  for (let clave of array1.values()) {
    if (array2.includes(clave)) {
      newArray.push(clave);
    }
  }
  return [...new Set(newArray)];
}
console.log(interseccionArrays(array1, array2));

// 1 - ¿Qué fecha será dentro de 30 días?
const fechaActual = new Date(2021, 1, 8);
fechaActual.setDate(fechaActual.getDate() + 30);
console.log(fechaActual.toLocaleString());
