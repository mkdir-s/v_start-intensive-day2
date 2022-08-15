
const names = ['Александр', 'Ян', 'Оля', 'Вячеслав', 'Маша', 'Анатолий'];

const filteredNames = names.filter(name => name.length >= 5);

console.log(filteredNames); // ['Александр', 'Вячеслав', 'Анатолий']