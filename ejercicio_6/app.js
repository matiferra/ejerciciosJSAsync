
const obtenerPersonaFake = require("./library");

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido
obtenerPersonaFake().then(x => {
    return x.results[0];
  }).then((resultado)=>{
      console.log("\nNombre: " +resultado.name.title+ " "+resultado.name.first + " "+resultado.name.last);
      console.log("Genero: "+resultado.gender);
      return resultado;
  }).then((resultado)=>{
      console.log("\nLocalizacion>");
      console.log("Pais: "+resultado.location.country);
      console.log("Estado: "+resultado.location.state);
      console.log("Ciudad: "+resultado.location.city);
      console.log("Calle Nombre: "+resultado.location.street.name);
      console.log("Calle Nro: "+resultado.location.street.number+"\n");
      return resultado;
}).then((resultado) =>{
    console.log("Email: "+ resultado.email);
    return resultado.login;
}).then((login) =>{
    console.log("Usuario: "+login.username);
    console.log("Password: "+login.password+"\n");
}).catch((err) =>{
    console.log(err.message);
});