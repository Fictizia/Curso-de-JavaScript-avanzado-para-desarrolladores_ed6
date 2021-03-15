export const get = (search) => {
  const result = localStorage.getItem(search);
  return result ? JSON.parse(result) : false;
}

export const set = (key, content) => {
  if (!key) {
    throw new Error('es obligatorio proporcionar una clave para guardar')
  }
  localStorage.setItem(key, JSON.stringify(content))
}

export const add = (key, content) => {
  if (!key) {
    throw new Error('es obligatorio proporcionar una clave para guardar')
  }
  const item = localStorage.getItem(key)
  if (!item) {
    localStorage.setItem(key, JSON.stringify([content]))
  } else {
    localStorage.setItem(key, JSON.stringify(JSON.parse(item).concat(content)))
  }
}
