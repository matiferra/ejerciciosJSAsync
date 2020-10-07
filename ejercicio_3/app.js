
const obtenerPokemon = require("./library");

// Codigo funcion callback

function mostrarPokemon(pokemon){
    console.log("Pokemon: "+pokemon.name);
    console.log("Habilidad: "+pokemon.abilities[0].ability.name);
}

// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido

obtenerPokemon(1, mostrarPokemon);
