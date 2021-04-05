let ahora = new Date();
ahora.setDate(ahora.getDate() + 30);
console.log(`Dentro de 30 días será: ${ahora.toLocaleString()}`);

ahora = new Date();
const curso = new Date(2021, 0, 25);
const dif = ahora.getTime() - curso.getTime();
console.log(`Han pasado ${dif/(1000*60*60)} horas`);
console.log(`Han pasado ${dif/(1000*60*60*24)} días`);

const cumple = new Date(2021, 7, 22);
console.log(cumple.toLocaleDateString());
console.log(cumple.toLocaleDateString('uk'));