const fizzbuzz = numero => {
  if (numero % 15 === 0) {
    return "fizzbuzz";
  }
  if (numero % 5 === 0) {
    return "buzz";
  }
  if(numero % 3 === 0) {
    return "fizz"
  }
  return numero;
};

// const fizzbuzz = numero => {
//   let texto = ''
//   if (numero % 3 === 0) {
//     texto += "fizz";
//   }
//   if(numero % 5 === 0) {
//     texto += "buzz";
//   }
//   return texto === '' ? numero : texto;
// };

module.exports = fizzbuzz;
