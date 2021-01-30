//Números
// 1.

function perimetroCirculo(r) {
    return 2 * Math.PI * r;
}

// 2.

function areaCirculo(r) {
    return Math.PI * Math.pow(r, 2)
}

// 3.

function hipotenusa(c1, c2) {
    const hipotenusa = (c1**2 + c2**2) ** 0.5
    return hipotenusa;
}

// 4.

function azarMoneda() {
    let tirada = Math.random();
    if (tirada < 0.5) {
        return 'cara'
    }
    else {
        return 'cruz'
    };

    return tirada

    //return Math.random() > 0.5 ? 'cara' : 'cruz'
}

// 5.

function azarDados() {
    let dado1;
    let dado2;
    return (dado1 + dado2) * 100
}

//Strings
// 4.

function repite(str, n) {
    return str.repeat(n);
}

// 5. 
function palabraMasLarga(str) {
    let palabra = str.split(' ');
    let palabraMasLarga = ''
    for (palabra of str) {
        return Math.max(palabra.length)
    }
    return Math.max(palabra.length)
} 

// 6.
function ponPrimeraMayuscula(str) {
    let palabra = str.split(' ');
    for (let i = 0; i<palabra.length; i++) {
        palabra.toUpperCase()
    }
    console.log(palabra)
}

// 7.
function camelize(str) {
    let arr = str.split(' ')
    let camelCase = '',

    for (let palabra of arr) {
        camelCase += arr.replace()
    }
   
}

// 8.
function formatoIngles(num) {
    let number = num.toString()
    //substr no sirve para negativos
    switch (number) {
        case number.slice(-1).includes(1):
            return number + `${'st'}`;
        case number.slice(-1).includes(2):
            return number + `${'nd'}`
        case number.slice(-1).includes(3):
            return number + `${'rd'}`
        default:
            return number +  `${'th'}`
    }
}