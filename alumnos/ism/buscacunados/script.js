
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
  let btnPause = document.getElementById('pause');
  const helpBtn = document.getElementById('help');
  const reload = document.getElementById('reload');
  let face = document.querySelector('.face img');

  setTimeout(() => {
    Swal.fire({
      html: "<p>Bienvenido al Buscacuñados. En el siguiente tablero hay 20 cuñados bien enterrados. Encuéntralos señalándolos con la insignia patria</p><p>Si no sabes cómo se juega, lo gugleas, que los chavales queréis todo hecho para ayer y yo a tu edad no tenía tantas facilidades.</p>",
      confirmButtonText: "Al ruedo",
      stopKeydownPropagation: true,
      buttonsStyling: false,
      customClass: {
        popup: 'alert-container bienvenida',
        confirmButton: 'alert-button'
      }
    });
  }, 500);
  
  reload.addEventListener('click', _ => {
      location.reload();
  });

  window.onload = function() {
    changeBg();
  }
  
  let bgElements = document.querySelectorAll('.bg');
  let backgrounds = ['img/fachaleco.svg', 'img/paloselfie.svg', 'img/paella.svg', 'img/smartwatch.svg', 'img/gintonic.svg'];
  let backgroundsCount = 0;

  function changeBg() {
    let number = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    bgElements.forEach(element => {
      element.src = number;
    })
    console.log(number)
  }

  btnReset.addEventListener('click', function() {
    reset();
  });
  btnPause.addEventListener('click', function() {
    pause();
  });
  var counter = setInterval(incrementSeconds, 1000);
  console.log(counter)


  helpBtn.addEventListener('click', function() {
    Swal.fire({
      title: "Instrucciones",
      html: "<p>Clavar la Rojigualda: <span>click</span></p><p>Desclavar la Rojigualda: <span>alt/ctrl + click</span> o <span>click derecho</span></p><p>(Mi nieto de 4 años no necesita estas instrucciones, también te digo eh, ¡JAJAJA!)</p>",
      confirmButtonText: "Gracias, caballero",
      buttonsStyling: false,
      customClass: {
        popup: 'alert-container instrucciones',
        confirmButton: 'alert-button'
      }
    })
  });
  //Background
  document.addEventListener('mousemove', function(e) {
    let mouseX = e.pageX;
    let mouseY = e.pageY;
    // console.log(mouseX, mouseY);
    bgElements.forEach(element => {
      // element.style.top = mouseY;
      let elementX = element.getBoundingClientRect().left;
      let elementY = element.getBoundingClientRect().top;
      let difX = mouseX - elementX;
      let difY = mouseY - elementY;

      let radians = Math.atan2(difY, difX);
      let angle = radians * 180 / Math.PI;

      element.style.transform = "rotate(" + angle + "deg)";
    });
  });

  //Every 3 secs change fachaleco
  // setInterval(function() {
  //   count = count + 1;
  //   count = count % backgrounds.length;

  //   let image = backgrounds[count];

  //   bgElements.forEach(element => {
  //     element.src = image;
  //   })
  // }, 3000)

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
  function pause() {
    btnPause.classList.toggle('paused');
    if (btnPause.classList.contains('paused')){
      clearInterval(counter);
      btnPause.innerHTML = 'reanudar';
    }
    else{
      if (counter) clearInterval(counter);
      counter = setInterval(incrementSeconds, 1000);
      btnPause.innerHTML = 'pausar';
    }
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
        casilla.innerHTML = '<img src="img/bandera.svg">';
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
      face.src= "img/chill.svg";
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
      face.src="img/chill.svg";
    }
    if (banderas > 12 && banderas < 20) {
      contadorBanderas.innerHTML = banderas;
      face.src="img/nervous.svg";
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
    setTimeout(() => {
      Swal.fire({
        title: "geim ouver",
        html: "<p>Y azín va Ehpaña... Llena de ROJOS y LESBIANAS. Zi tuviera do COJONES jugaría otra ve.</p><p>A mamarla, figura!</p>",  
        confirmButtonText: "soy Copérnico",
        buttonsStyling: false,
        customClass: {
          popup: 'alert-container perder',
          confirmButton: 'alert-button'
        }
      }).then(function(){
      location.reload();
      });
    }, 1000);
    

    casillas.forEach(casilla => {
      if (casilla.classList.contains('bomba')) {
        casilla.innerHTML = '<img src="img/bomba.svg">';
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
        face.src= "img/angry.svg";
        setTimeout(alertaFinal, 1000);
        isGameOver = true;
      }
    }
  }

  function alertaFinal() {
    Swal.fire({
      title: "Enhorabuena máquina",
      html: "<p>No está mal, pero si me dejas que te enseñe la técnica buena te lo haces en 10 segundos.</p><p>Qué le vamos a hacer, soy español, ¿a qué quieres que te gane? ¡JAJAJA!</p>",    
      confirmButtonText: "Venga pirámide",
      buttonsStyling: false,
      customClass: {
        popup: 'alert-container ganar',
        confirmButton: 'alert-button'
      }
    }).then(function(){
      location.reload();
  });

  }
})