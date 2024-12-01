const AdapterBaseDeDatos = require("./AdapterBaseDeDatos");

class BaseDeDatosMySQL extends AdapterBaseDeDatos {
  conectar() {
    console.log("Conectando a la base de datos MySQL...");
  }

  consultar(consulta) {
    console.log(`Consultando en MySQL: ${consulta}`);
    return "Datos de MySQL"; // devolución de datos de mysql
  }

  insertar(datos) {
    console.log(`Insertando en MySQL: ${JSON.stringify(datos)}`);
  }
}

module.exports = BaseDeDatosMySQL;
