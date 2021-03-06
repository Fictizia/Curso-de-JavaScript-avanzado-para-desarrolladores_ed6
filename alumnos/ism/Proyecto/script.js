document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  let width = 10;
  let area = Math.pow(width, 2);
  let casillas = [];
  let bombas = 20;
  //create board
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
      
      casilla.addEventListener('click', function(e) {
        click(casilla)
      }) 
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
        if (i < 90 && !bordeDerecho && casillas[i + 1 + width].classList.contains('bomba')) {
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

  function click(casilla) {
    if (casilla.classList.contains('bomba')) {
      alert("Game OVER pringao :)");
    } else {
      let total = casilla.getAttribute('data');
      if (total != 0) {
        casilla.classList.add('checked');
        casilla.innerHTML = total;
        return;
      }
      casilla.classList.add('checked');
    }
  }
})