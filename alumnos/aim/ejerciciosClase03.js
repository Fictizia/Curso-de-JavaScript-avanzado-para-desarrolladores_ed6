/* Math */

//1.Crea una función que devuelva el perímetro de un círculo a partir de su radios:
function perimetroCirculo(r) {
    return 2 * Math.PI * r;
}
console.assert(perimetroCirculo(3) === 18.84955592153876)
console.assert(perimetroCirculo(6) === 37.69911184307752)



//2. Crea una función que devuelva el area de un círculo a partir de su radio:
function areaCirculo(r) {
    return Math.PI * (r ** 2);
}
console.assert(areaCirculo(2) === 12.566370614359172)
console.assert(areaCirculo(8) === 201.06192982974676)



//3. Crea una función que devuelva la hipotenusa de un triángulo a partir de sus catetos (Teorema de Pitágoras).
function hipotenusa(c1, c2) {
    let sumC = Math.pow(c1, 2) + Math.pow(c2, 2);
    let h =  Math.sqrt(sumC);
    return h;
}
console.assert(hipotenusa(1, 2) === 2.23606797749979)



//4. Escribe una función que simula el lanzamiento de una moneda al aire y devuelva si ha salido cara o cruz.
function azar() {
    return Math.floor(Math.random() * 2) ? 'cara' : 'cruz';
}
azar();


//5.--


/* String */

//4. Crea una función que reciba un string y un número n y devuelva el string repetido n veces:
function repite(str, n) {
    return str.repeat(n);
}
console.assert(repite('Batman ', 3) === 'Batman Batman Batman ')



//5.Crea una función que reciba una frase como string y devuelva la palabra más larga:
function palabraMasLarga(str) {

    let split = str.split(' ');
    let longWord = '';

    for (let i = 0; i < split.length; i++) {
        if(split[i].length > longWord.length) {
            longWord = split[i]            
        }
    }
    return longWord;
}
console.assert(palabraMasLarga("Erase una vez que se era") === "Erase")



//6. Crea una función que reciba un string y lo devuelva con todas las palabras con su primera letra mayúscula.
function ponPrimeraMayuscula(str) {

    let splitStr = str.split(' ');
    let newStr = '';
    
    for (let i = 0; i < splitStr.length; i++) {       

        let firstLetter = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1)

        let concatWord = newStr.concat(' ', firstLetter).trim();        

        newStr = concatWord; 
    }

    return newStr;
}
console.assert(ponPrimeraMayuscula("En un lugar de la Mancha de cuyo nombre no quiero acordarme") === "En Un Lugar De La Mancha De Cuyo Nombre No Quiero Acordarme")



//7. Crea una función que reciba un string y lo devuelva en camelCase
function camelize(str) {

    let splitStr = str.split(' ');
    let newStr = '';
    
    for (let i = 0; i < splitStr.length; i++) {
       
       let firstLetter = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);

       let concatWord = newStr.concat(firstLetter);

       newStr = concatWord;        
    }

    return newStr.charAt(0).toLowerCase() + newStr.slice(1);
}
console.assert(camelize("Hola a todos que tal") === "holaATodosQueTal");



//8. Crea una función que reciba un número y devuelva un string con formato ordinal inglés. Esto es:
function formatoIngles(num) {
    num = num.toString();

    switch(true) {
        case (num.slice(-2) === '11' || num.slice(-2) === '12' || num.slice(-2) === '13'):
            return `${num}th`;        
            
        case (num.slice(-1) === '1'):
            return`${num}st`;
            
        case (num.slice(-1) === '2'):
            return`${num}nd`;
            
        case (num.slice(-1) === '3'):
            return`${num}rd`;

        default:
            return`${num}th`;

    }
}
formatoIngles(21)
