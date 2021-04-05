// 2PIr
function perimetroCirculo(r) {
    return 2 * Math.PI * r;
}

console.assert(perimetroCirculo(3) === 18.84955592153876)
console.assert(perimetroCirculo(6) === 37.69911184307752)

function areaCirculo(r) {
    // πr^2
    return Math.PI * r ** 2;
}

console.assert(areaCirculo(2) === 12.566370614359172)
console.assert(areaCirculo(8) === 201.06192982974676)

// h^2 = c1^2 + c2^2
function hipotenusa(c1, c2) {
    return Math.sqrt(c1 ** 2 + c2 ** 2);
}

console.assert(hipotenusa(1, 2) === 2.23606797749979)

function azarMoneda() {
    return (Math.random() >= 0.5) ? "Cara" : "Cruz";
}

azarMoneda();

function dado() {
    return Math.floor(Math.random() * 6 + 1);
}

function azarDados() {
    let resultado = 0;
    for (let i = 0; i < 100; ++i) {
        if (dado() + dado() === 10) {
            resultado++;
        }
    }
    return resultado;
}

azarDados();

function repite(str, n) {
    let resultado = '';
    for (let i = n; i > 0; --i) {
        resultado += str;
    }
    return resultado;
}

console.assert(repite('Batman ', 3) === 'Batman Batman Batman ')

function palabraMasLarga(str) {
    let masLarga = '';
    for (let palabra of str.split(' ')) {
        if (palabra.length > masLarga.length) {
            masLarga = palabra;
        }
    }
    return masLarga;
}

console.assert(palabraMasLarga("Erase una vez que se era") === "Erase")

function ponPrimeraMayuscula(str) {
    let nuevoStr = '';
    for (let palabra of str.split(' ')) {
        nuevoStr += palabra[0].toUpperCase() + palabra.slice(1) + ' ';
    }
    return nuevoStr.trimEnd();
}

console.assert(ponPrimeraMayuscula("En un lugar de la Mancha de cuyo nombre no quiero acordarme") === "En Un Lugar De La Mancha De Cuyo Nombre No Quiero Acordarme")

function camelize(str) {
    let camelStr = '';
    let palabras = str.split(' ');
    camelStr += palabras[0][0].toLowerCase() + palabras[0].slice(1);
    for (let i = 1; i < palabras.length; ++i) {
        camelStr += palabras[i][0].toUpperCase() + palabras[i].slice(1).toLowerCase();
    }
    return camelStr;
}

console.assert(camelize("Hola a todos que tal") === "holaATodosQueTal");

function formatoIngles(num) {
    let numStr = num.toString(10);
    if (num === 11 || num === 12 || num === 13) {
        return numStr + 'th';
    }
    switch (numStr.slice(-1)) {
        case '1':
            return numStr + 'st';
        case '2':
            return numStr + 'nd';
        case '3':
            return numStr + 'rd';
        default:
            return numStr + 'th';
    }
}

function porcentajeInfectados(s) {
    while (s.length > 0 && s[0] === 'X') {
        s = s.slice(1);
    }
    while (s.length > 0 && s[s.length - 1] === 'X') {
        s = s.slice(0, -1);
    }
    let porContinentes = s.split(/X+/);
    let infectados = 0;
    let total = 0;
    for (let continente of porContinentes) {
        total += continente.length;
        if (continente.includes('1')) {
            infectados += continente.length;
        }
    }
    return total ? 100*infectados/total : 0;
}

console.log(porcentajeInfectados('01000000X000X011X0X'));
console.log(porcentajeInfectados('01X000X010X011XX'));
console.log(porcentajeInfectados('XXXXX'));
console.log(porcentajeInfectados('0000000010'));
console.log(porcentajeInfectados('X00X000000X10X0100'));