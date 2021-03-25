
document.addEventListener('DOMContentLoaded', () => {
  
  const grid = document.querySelector('.grid');
  const stopwatch = document.getElementById('#stopwatch');
  const contadorBanderas = document.getElementById("banderas");
  let width = 10;
  let area = Math.pow(width, 2);
  let casillas = [];
  let bombas = 20;
  let banderas = 0;

  let isGameOver = false;
  //create board

  let seconds = 0;
  let timer = document.getElementById('seconds');
  let btnReset = document.getElementById('reset');
  let btnStop = document.getElementById('stop');
  const reload = document.getElementById('reload');

  reload.addEventListener('click', _ => {
      location.reload();
  });
  

  btnReset.addEventListener('click', function() {
    reset();
  });
  btnStop.addEventListener('click', function() {
    stop();
  });
  var counter = setInterval(incrementSeconds, 1000);
  console.log(counter)

  function incrementSeconds() {
      seconds += 1;
      timer.innerHTML = seconds;
  }
  function reset() {
    seconds = 0;
    timer.innerHTML = 0;
    borrarBanderas();
    contadorBanderas.innerHTML = 0;
  }
  function stop() {
      clearInterval(counter);

  }

  // var interval = setInterval(callback, 1000);

  function crearTablero() {
    const bombasArray = Array(bombas).fill('bomba');
    const vacioArray = Array(area - bombas).fill('vacio');
    const juegoArray = vacioArray.concat(bombasArray);
    const randomJuego = juegoArray.sort(() => Math.random() -0.5);
    console.log(randomJuego);
    
    // get shuffled game array with random bombs
    for(let i = 0; i < area; i++) {
      //Crear un div por casilla
      const casilla = document.createElement('div');
      //Añadirle un atributo id con su respectivo índice
      casilla.setAttribute('id', i);
      //Añadir clase con su clave en el Array randomJuego
      casilla.classList.add(randomJuego[i]);
      //Meterlo en el grid
      grid.appendChild(casilla);
      //Meter las casillas en el array vacío casillas
      casillas.push(casilla);
      
      //Click normal
      casilla.addEventListener('click', function(e) {
        console.log('empieza cronómetro');
        click(casilla)
      });

      //Click derecho O ctrl+ click izquierdo
      casilla.oncontextmenu = function(e) {
        e.preventDefault();
        clavarBandera(casilla);
      }
      //Mobile
      casilla.addEventListener('long-press', function(e) {
        e.preventDefault();
        clavarBandera(casilla);
      });
    }

    //Añadir números
    for (let i = 0; i < casillas.length; i++) {
      total = 0;
      //numeros al borde izq: 0, 10, 20, 30...
      const bordeIzquierdo = (i % width === 0);
      //numeros al borde dch: 9, 19, 29, 39...
      const bordeDerecho = (i % width === width - 1);

      if(casillas[i].classList.contains('vacio')) {
        //si el índice es mayor que 0 (ya que no puede comprobarse nada a su izquierda)
        //si no está en el borde izquierdo
        //si la casilla OESTE contiene bomba
        if (i > 0 && !bordeIzquierdo && casillas[i - 1].classList.contains('bomba')) {
          total++
        }
        //NOROESTE
        if (i > 9 && !bordeIzquierdo && casillas[i - 1 - width].classList.contains('bomba')) {
          total ++
        }
        //NORTE
        if (i > 9 && casillas[i - width].classList.contains('bomba')) {
          total++
        }
        //si el índice es mayor que 9 (para que tenga una fila por encima)
        //si no está en el borde derecho
        //si la casilla al NORESTE contiene bombra (i + 1 sería a su Este,
          //y - width le resta el total de una fila, es decir, una casilla más arriba)
        if (i > 9 && !bordeDerecho && casillas[i + 1 - width].classList.contains('bomba')) {
          total++
        }
        //ESTE
        if (i < 99 && !bordeDerecho && casillas[i + 1].classList.contains('bomba')) {
          total ++
        }
        //SURESTE
        if (i < 89 && !bordeDerecho && casillas[i + 1 + width].classList.contains('bomba')) {
          total ++
        }
        //SUR
        if (i < 90 && casillas[i + width].classList.contains('bomba')) {
          total ++
        }
        //SUROESTE
        if (i < 90 && casillas[i - 1 + width].classList.contains('bomba')) {
          total ++
        }
        
        casillas[i].setAttribute('data', total);
      }

    }
  }
  crearTablero();

  

  function clavarBandera(casilla) {
    if (isGameOver) return;
    if (!casilla.classList.contains('checked') && (banderas < bombas)) {
      if (!casilla.classList.contains('bandera')) {
        casilla.classList.add('bandera');
        casilla.innerHTML = "🇪🇸";
        
        banderas++;
        console.log(banderas);
        
       
        checkWin();
      } else {
        casilla.classList.remove('bandera');
        casilla.innerHTML = "";
        banderas--
        console.log(banderas);

      }
      contarBanderas();
    }
  }

  function click(casilla) {
    let casillaID = casilla.id;
    // console.log(casillaID);
    //Si es Game over, no pasa nada
    if (isGameOver) return;
    // Si la casilla ya ha sido checkeada o tiene una bandera, no pasa nada
    if (casilla.classList.contains('checked') || casilla.classList.contains('bandera')) return;
    if (casilla.classList.contains('bomba')) {
      gameOver();
    }
    else {
      let total = casilla.getAttribute('data');
      // Si la casilla no es 0
      if (total != 0) {
        // Añadir la clase checked y escribir el número total
        casilla.classList.add('checked');
        casilla.innerHTML = total;
        return;
      }
      //Se va a desplegar cuando sea una casilla vacía y con data="0"
      comprobarCasilla(casilla, casillaID);
    }
    // Para lo demás, añadir la clase checked
    casilla.classList.add('checked');
    
  }

//  function start() {
//   if(!empieza) {
//     offset = Date.now();
//     empieza = setInterval(update, 1);
//   }
//  }

  //Check neighboring squares once square is clicked
  function comprobarCasilla(casilla, casillaID) {
    const bordeIzquierdo = (casillaID % width === 0);
    const bordeDerecho = (casillaID % width === width -1);

    setTimeout(() => {
      //OESTE: -1
      if (casillaID > 0 && !bordeIzquierdo) {
        const nuevoID = casillas[parseInt(casillaID) -1].id;
        const nuevaCasilla = document.getElementById(nuevoID);
        click(nuevaCasilla);
      }
      //NOROESTE: -1-width
      if (casillaID > 10 && !bordeIzquierdo) {
        const nuevoID = casillas[parseInt(casillaID) -1 -width].id;
        const nuevaCasilla = document.getElementById(nuevoID);
        click(nuevaCasilla);
      }
      //NORTE: -width
      if (casillaID > 9) {
        const nuevoID = casillas[parseInt(casillaID) -width].id;
        const nuevaCasilla = document.getElementById(nuevoID);
        click(nuevaCasilla);
      }
      //NORESTE: +1-2width
      if (casillaID > 9 && !bordeDerecho) {
        const nuevoID = casillas[parseInt(casillaID) +1 -width].id;
        const nuevaCasilla = document.getElementById(nuevoID);
        click(nuevaCasilla);
      }
      //ESTE: +1
      if (casillaID < 99 && !bordeDerecho) {
        const nuevoID = casillas[parseInt(casillaID) +1].id;
        console.log(nuevoID);
        const nuevaCasilla = document.getElementById(nuevoID);
        click(nuevaCasilla);
      }
      //SURESTE: +1+width
      if (casillaID < 89 && !bordeDerecho) {
        const nuevoID = casillas[parseInt(casillaID) +1 +width].id;
        const nuevaCasilla = document.getElementById(nuevoID);
        click(nuevaCasilla);
      }
      //SUR: +width
      if (casillaID < 90) {
        const nuevoID = casillas[parseInt(casillaID) +width].id;
        const nuevaCasilla = document.getElementById(nuevoID);
        click(nuevaCasilla);
      }
      //SUROESTE: -1 + width
      if (casillaID < 90 && !bordeIzquierdo) {
        const nuevoID = casillas[parseInt(casillaID) -1 +width].id;
        const nuevaCasilla = document.getElementById(nuevoID);
        click(nuevaCasilla);
      }
    }, 10);
  }

  // function displayBandera(num) {
  //   var contador = document.getElementById("banderas").innerHTML = cifra + num;
  //   cifra = contador;
  // }
  function contarBanderas() {
    if (banderas < 10) {
      contadorBanderas.innerHTML = "0" + banderas;
    }
    else {
      contadorBanderas.innerHTML = banderas;
    }
  }

  function borrarBanderas(casilla) {
    console.log("start over");
    casillas.forEach(casilla => {
      if (casilla.classList.contains('checked') || casilla.classList.contains('bandera')) {
        casilla.classList.remove('checked');
        casilla.innerHTML = "";
        casilla.classList.remove('bandera');
        banderas = 0;
      }
    });
  }

  function gameOver(casilla) {
    console.log('BOOM!');
    isGameOver = true;
    console.log("Game over");
    Swal.fire({
      title: "has perdido",
      text: "ahora hazme la comida por favor",     
      confirmButtonText: "comprendido",
      customClass: {
        popup: 'alert-container instrucciones',
      }
    });

    casillas.forEach(casilla => {
      if (casilla.classList.contains('bomba')) {
        casilla.innerHTML = "💣"
      }
    });
  }

  function checkWin() {
    aciertos = 0;
    for (let i = 0; i < casillas.length; i++) {
      if (casillas[i].classList.contains('bandera') && casillas[i].classList.contains('bomba')) {
        aciertos++
      }
      if (aciertos === bombas) {
        setTimeout(alertaFinal, 1000);
        isGameOver = true;
      }
    }
  }

  function alertaFinal() {
    var alertasRancias = ["Eso te lo hago yo en la mitad", "Nada mal pa ser tía xdd", "ni machismo ni feminismo, igualdad"];
    var a = Math.floor(Math.random() * alertasRancias.length);
    // window.alert(alertasRancias[a]);
    Swal.fire({
      title: "Instrucciones",
      text: alertasRancias[a],      
      confirmButtonText: "comprendido",
      customClass: {
        popup: 'alert-container instrucciones',
      }
    })

  }
})