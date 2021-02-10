//1. -

//2. Crear una función que reciba dos arrays y devuelva la intersección de los dos (los elementos que estén entre los dos) sin repeticiones.

const array1 = [1,2,3,1,4,5,9]
const array2 = [1,3,5,5,9,10]

function interArr(array1, array2) {
    const sum = [...array1, ...array2];
    let newInterArr = sum.filter((item, index) => sum.indexOf(item) !== index);
    return new Set([...newInterArr])
}
interArr(array1, array2) 


//DATE
//1. Qué fecha será dentro de 30 días?
const thisDay = new Date().getTime();
thisDay.setDate(thisDay.getDate() + 30);
thisDay.toLocaleString()


//2.¿Cuántas horas han pasado desde que empezó el curso? ¿Y días?


//3.Expresar la fecha completa de vuestro cumpleaños en el formato de vuestro ordenador y en el de Inglaterra

const fecha = new Date(1980, 6, 16);
const localTime = fecha.toLocaleString();
const fechaEn = fecha.toLocaleString('uk');