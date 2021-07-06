/* Crear una función que reciba varios arrays de números y 
devuelva la unión de todos los arrays sin repeticiones (en forma de Array).*/
// Entrada
const array1 = [1,2,3,4,5]
const array2 = [1,3,5,9,10]
const array3 = [4,5,6,7,9]
const array4 = [8,10]

function joinArrays(array, ...rest) {
    return [...new Set(array.concat(...rest))];
}

console.log(joinArrays(array1, array2, array3, array4));  //[1,2,3,4,5,6,7,8,9,10] */

/* function union() {
  let array = new Array();
  for (let i = 0; i < arguments.length; i++) {
    array = [...array, ...arguments[i]];
  }        
  const set = new Set(array)
  array = Array.from(set);
  set.clear();
  return array;
} 
union(array1, array2, array3, array4
)*/


/*Crear una función que reciba dos arrays y devuelva la intersección 
de los dos (los elementos que estén entre los dos) sin repeticiones.  */

const array1 = [1,2,3,1,4,5,9]
const array2 = [1,3,5,5,9,10]

function findRepeatedItems(array1, array2) {
    let repeatedItems = array1.filter(elem => array2.includes(elem));
    return [...new Set(repeatedItems)];
}

console.log(findRepeatedItems(array1, array2));// [1,3,5,9]


/* 1 - ¿Qué fecha será dentro de 30 días? */

let today = new Date()
today.setDate(30)
console.log(today.toDateString())

/* 2 - ¿Cuántas horas han pasado desde que empezó el curso? ¿Y días? */

const inicioCurso = new Date(2021, 0, 25);
const hoy = new Date();

var diferencia = new Date(hoy - inicioCurso);

console.log(diferencia.getDate()); // dias
console.log(diferencia.getDate() * 24); // horas

/* 3 - Expresar la fecha completa de vuestro cumpleaños en el formato de vuestro ordenador y en el de Inglaterra */

const cumple = new Date(1984, 1, 1);

console.log(cumple.toLocaleString()); // formato local
console.log(cumple.toLocaleString('en')); // formato Inglaterra