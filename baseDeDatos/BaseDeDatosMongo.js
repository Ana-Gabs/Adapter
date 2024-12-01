// src/baseDeDatos/BaseDeDatosMongo.js

const AdapterBaseDeDatos = require("./AdapterBaseDeDatos");

class BaseDeDatosMongo extends AdapterBaseDeDatos {
  conectar() {
    console.log("Conectando a la base de datos MongoDB...");
  }

  consultar(consulta) {
    console.log(`Consultando en MongoDB: ${consulta}`);
    return "Datos de MongoDB"; // devolución de datos de mongo
  }

  insertar(datos) {
    console.log(`Insertando en MongoDB: ${JSON.stringify(datos)}`);
  }
}

module.exports = BaseDeDatosMongo;
