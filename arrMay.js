//Retornar un nuevo array con todo a mayusculas
let pokemon = [
    'Pikachu',
    'Charmander',
    'Bulbasaur',
    'Squirtle'
];

const pokemonMay = pokemon.map(item => item.toLocaleUpperCase());


console.log(pokemon);
console.log(pokemonMay);