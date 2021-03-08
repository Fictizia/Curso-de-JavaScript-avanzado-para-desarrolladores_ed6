const fizzbuzz = require('../src/index')

describe('FizzBuzz', () => {
  it('debe devolver "fizz" cuando le pasamos un 3', () => {
    const resultado = fizzbuzz(3);

    expect(resultado).toEqual("fizz");
  })

  it('debe devolver "fizz" cuando es múltiplo de 3', () => {
    const resultado = fizzbuzz(6);

    expect(resultado).toEqual("fizz");
  })

  it('debe devolver "buzz" cuando le pasamos un 5', () => {
    const resultado = fizzbuzz(5);

    expect(resultado).toEqual("buzz");
  })

  it('debe devolver "buzz" cuando es múltiplo de 5', () => {
    const resultado = fizzbuzz(10);

    expect(resultado).toEqual("buzz");
  })

  it ('debe devolver "fizzbuzz cuando es múltiplo de 3 y de 5', () => {
    const resultado = fizzbuzz(15);

    expect(resultado).toEqual("fizzbuzz");
  })

  it('debe devolver la entrada cuando no es multiplo de 3 ni de 5', () => {
    const resultado = fizzbuzz(4);

    expect(resultado).toEqual(4);
  })
})
