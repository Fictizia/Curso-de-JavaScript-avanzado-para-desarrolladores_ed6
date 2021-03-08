export const get = (search) => {
    const result = localStorage.getItem(search);
    return result ? JSON.parse(result) : false;
}

export const set = (key, content) => {
    if (!key) {
      throw new Error('es obligatorio proporcionar una clave para cachear')
    }
    localStorage.setItem(key, JSON.stringify(content))
}
