const array1 = [1,2,3,4,5];
const array2 = [4,5,6,7,9];
const array3 = [8,10];
const array4 = [1,3,5,9,10];

// 1.1
function sumOfArrays(array){
 const newArray = new Set([...array1, ...array2, ...array3, ...array4 ])

 return newArray;
}
sumOfArrays()


// 1.2
const array1 = [1,2,3,4,5]
const array2 = [1,3,5,9,10]
const array3 = [4,5,6,7,9]
const array4 = [8,10]

function joinArrays(array, ...rest) {
    return new Set(array.concat(...rest));
}

console.log(joinArrays(array1, array2, array3, array4));


// 2
const array1 = [1,2,3,1,4,5,9]
const array2 = [1,3,5,5,9,10]

const interSeccionArrays = (a, b) => {
    const arrayA = [...new Set(a)];
    const arrayB = [...new Set(b)];
    const interseccion = arrayA.filter(numero => {
        return arrayB.indexOf(numero) !== -1
    })
    return interseccion
}

interSeccionArrays(array1, array2)

// 2.2
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


// 2.3
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


// 1 - ¿Qué fecha será dentro de 30 días?

const hoy = new Date(2021, 2, 1);
hoy.setDate(hoy.getDate() + 30);

console.log(hoy)

// 2 - ¿Cuántas horas han pasado desde que empezó el curso? ¿Y días?

const primerDía = new Date() - new Date(2021, 01, 25);
const hoy = new Date();

const resta = new Date(today - firstDay);

console.log(`El curso comenzó hace: ${resta.getDate()} días`);
console.log(`El curso comenzó hace: ${resta.getDate() * 24} horas`);

// 3 - Expresar la fecha completa de vuestro cumpleaños en el formato de vuestro ordenador y en el de Inglaterra

const miCumple = new Date(1984, 03, 23);

console.log(miCumple.toLocaleString());
console.log(miCumple.toLocaleString('uk'));
