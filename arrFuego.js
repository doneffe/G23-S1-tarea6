//Retornar un array solo con tipo fuego

let pokemon = [
    { nombre: "Pikachu", tipo: "Electrico" },
    { nombre: "Charmander", tipo: "Fuego" },
    { nombre: "Bulbasaur", tipo: "Planta" },
    { nombre: "Squirtle", tipo: "Agua" },
    { nombre: "Charmeleon", tipo: "Fuego" },
    { nombre: "Weedle", tipo: "Bicho" },
    { nombre: "Charizard", tipo: "Fuego" }
];


const pokemonFuego = pokemon.filter(item => item.tipo === 'Fuego');

console.log(pokemon);
console.log(pokemonFuego);