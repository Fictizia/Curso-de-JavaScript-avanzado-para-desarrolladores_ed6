const input = document.getElementById('heroInput')
const list = document.getElementById('superHeroList')

const debouncer = (delay, fn) => {
  let temporizador;
  return function (...args) {
    if (temporizador) {
      clearTimeout(temporizador);
    }
    temporizador = setTimeout(() => {
      fn(...args);
      temporizador = null;
    }, delay);
  }
}

const createHeroCard = ({ nombre, heroe, imagen }) => {
  const listItem = document.createElement('li')
  listItem.classList.add('card-item')
  listItem.innerHTML = `<img class="card-image" src="${imagen}" data-src="${imagen}" alt ="${nombre}"/>
            <div class="card-content">
              <p class="card-title">${heroe}</p>
              <p class="card-text">${nombre}</p>
            </div>`
  return listItem
}

const createListElement = ({
                             nombre,
                             heroe,
                             imagen,
                           }) => {
  const listItem = createHeroCard({ nombre, imagen, heroe })
  list.append(listItem)
}

const getHero = async (name) => {
  try {
    const respuesta = await fetch(`http://localhost:3000/search/${name}`);
    return respuesta.json()
  } catch (ex) {
    alert(ex.message)
  }
}

const onChange = async event => {
  list.textContent = ''
  const text = event.target.value
  if (text.length < 3) {
    return;
  }
  const queryResult = localStorage.getItem(text)
  let bats
  if (queryResult) {
    console.log('Obtenido del storage')
    bats = JSON.parse(queryResult)
  } else {
    console.log('Obtenido de la API Web')
    bats = await getHero(text)
    if (bats) {
      localStorage.setItem(text, JSON.stringify(bats))
    }
  }
  bats.results.forEach(el => {
    createListElement({
      heroe: el.name,
      nombre: el.biography['full-name'],
      imagen: el.image.url,
    })
  })
}

input.addEventListener('submit', e => e.preventDefault());

input.addEventListener('input',  debouncer(500, onChange));
