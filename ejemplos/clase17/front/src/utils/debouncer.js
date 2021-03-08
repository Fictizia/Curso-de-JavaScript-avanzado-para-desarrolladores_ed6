export const debouncer = (delay, fn) => {
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
