//1.	Crear una función que reciba varios arrays de números y devuelva
//la unión de todos los arrays sin repeticiones. Datos de prueba:


// Entrada
const array1 = [1,2,3,4,5]
const array2 = [1,3,5,9,10]
const array3 = [4,5,6,7,9]
const array4 = [8,10]


function joinArrays(array, ...rest) {
  return [new Set(array.concat(...rest))];
}


function joinArraysAlternative() {
  let array = new Array();
  for (let i = 0; i < arguments.length; i++) {
    array = [...array, ...arguments[i]];
  }
  const set = new Set(array)
  array = Array.from(set);
  set.clear();
  return array;
}


console.log(joinArrays(array1, array2, array3, array4));
console.log(joinArraysAlternative(array1, array2, array3, array4));

// Salida [1,2,3,4,5,6,7,8,9,10]


//Crear una función que reciba dos arrays y devuelva la intersección de los dos (los elementos que estén entre los dos) sin repeticiones.

const array1 = [1,2,3,1,4,5,9]
const array2 = [1,3,5,5,9,10]


function intersection(arr1, arr2) {
  const set1 = new Set(arr1)
  const set2 = new Set(arr2)
  for(const element of set1) {
      if (!set2.has(element)) {
          set1.delete(element)
      }
  }
  return [...set1]
}



const interSeccionArrays = (a, b) => {
    const arrayA = [...new Set(a)];
    const arrayB = [...new Set(b)];
    const interseccion = arrayA.filter(numero => {
        return arrayB.indexOf(numero) !== -1
    })
    return interseccion
}


const interSeccionArraysAlternative = (array1, array2) => {
  const set1 = new Set(array1);
  const set2 = new Set(array2);
  let interseccion = [];

  for(let element of set1) {
      if (set2.has(element)) {
          interseccion = [...interseccion, element
          ]
      }
  }
  set1.clear()
  set2.clear()
  return interseccion;
}



intersection(array1, array2)
interSeccionArrays(array1, array2)
interSeccionArraysAlternative(array1, array2)

// Salida[1,3,5,9]






// 1 - ¿Qué fecha será dentro de 30 días?
const today = new Date();
today.setDate(today.getDate() + 30);
console.info(`Dentro de 30 días será: ${today.toLocaleString()}`);


// 2 - ¿Cuántas horas han pasado desde que empezó el curso? ¿Y días?
const firstDay = new Date() - new Date(2021, 0, 25);
const today = new Date();

var dateRest = new Date(today - firstDay);

console.log(`El curso comenzó hace: ${dateRest.getDate()} días`);
console.log(`El curso comenzó hace: ${dateRest.getDate() * 24} horas`);

// 3 - Expresar la fecha completa de vuestro cumpleaños en el formato de vuestro ordenador y en el de Inglaterra

const birthDay = new Date(1983, 10, 30);

console.log(birthDay.toLocaleString()); // local
console.log(birthDay.toLocaleString('uk')); // uk

