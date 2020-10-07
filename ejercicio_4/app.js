
const obtenerPokemon = require("./library");

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
obtenerPokemon(13).then((pokemon) => {
    console.log("Pokemon: "+pokemon.name);
    return pokemon.abilities[0];
}).then((pokemon)=>{
    console.log("Habilidad: "+pokemon.ability.name);
}).catch((err) => {
    console.log(err.message);
});
