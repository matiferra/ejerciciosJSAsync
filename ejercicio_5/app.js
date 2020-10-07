
const obtenerPersonaFake = require("./library");

// Codigo funcion callback
function mostrarDatos(persona){
    console.log("\nNombre: " + persona.results[0].name.title+ " "+persona.results[0].name.first + " "+persona.results[0].name.last);
    console.log("Genero: " + persona.results[0].gender );
    console.log("\n Localizacion>> \n"
    +"Pais: "+  persona.results[0].location.country + "\n"
    +"Estado: "+  persona.results[0].location.state+ "\n"
    +"Ciudad: "+  persona.results[0].location.city+ "\n"
    +"Calle Nombre: "+  persona.results[0].location.street.name + "\n"
    +"Calle Nro: "+  persona.results[0].location.street.number+ "\n" 
    +"Codigo Postal: "+  persona.results[0].location.postcode+ "\n" );
    console.log("Email: " + persona.results[0].email );
    console.log("Usuario: " + persona.results[0].login.username );
    console.log("Password: " + persona.results[0].login.password+"\n");
}


// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(mostrarDatos);
