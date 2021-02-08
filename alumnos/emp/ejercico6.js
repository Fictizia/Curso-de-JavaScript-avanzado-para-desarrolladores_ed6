// Crear una función que reciba varios arrays de números y devuelva la unión de todos los arrays sin repeticiones. Datos de prueba:
// Entrada
const array1 = [1,2,3,4,5]
const array2 = [1,3,5,9,10]
const array3 = [4,5,6,7,9]
const array4 = [8,10]

const getUnionArray = () => {
    const getArraysTogether = new Set([...array1, ...array2, ...array3, ...array4]);
    const miNuevoSet = Array.from(getArraysTogether);
    return miNuevoSet;
};

// const getUnionArray = (array, ...rest) => {
//     return [...new Set(array.concat(...rest))];
// };
// getUnionArray(array1, array2, array3, array4);
// Salida
// [1,2,3,4,5,6,7,8,9,10]


// Crear una función que reciba dos arrays y 
// devuelva la intersección de los dos 
//(los elementos que estén entre los dos) sin repeticiones.
// Entrada
const array1 = [1,2,3,1,4,5,9]
const array2 = [1,3,5,5,9,10]

// const getIntersectionArray = (array, ...rest) => {
//     const miNuevoSet = new Set([...array].filter(x => rest.has(x)));
//     return miNuevoSet;
// }

const intersection = (arr1, arr2) => {
    const set1 = new Set(arr1)
    const set2 = new Set(arr2)
    for(const element of set1) {
        if (!set2.has(element)) {
          set1.delete(element)
        }
    }
    return [...set1]
} 

// Salida
// [1,3,5,9]


// 1 - ¿Qué fecha será dentro de 30 días?
// const hoy = new Date();
// hoy.setDate(30);
// console.info("La fecha es " + hoy);

const ahora = new Date();
ahora.setDate(ahora.getDate() + 30);
console.log(`Dentro de 30 días será: ${ahora.toLocaleString()}`); 


// 2 - ¿Cuántas horas han pasado desde que empezó el curso? ¿Y días?
const difference = new Date() - new Date(2021, 0, 25) ;
const monkey = difference/ 3600 / 1000;
const totalHours = parseFloat((monkey).toFixed(2));



// 3 - Expresar la fecha completa de vuestro cumpleaños en el formato 
// de vuestro ordenador y en el de Inglaterra

const cumpleaños = new Date(1986, 2, 7);
console.log(cumpleaños.toLocaleString());
console.log(cumpleaños.toLocaleString('uk'));
