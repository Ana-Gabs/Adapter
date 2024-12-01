const BaseDeDatosMySQL = require("./BaseDeDatosMySQL");
const BaseDeDatosMongo = require("./BaseDeDatosMongo");

class ServicioBaseDeDatos {
  constructor(tipoBaseDeDatos) {
    if (tipoBaseDeDatos === "MySQL") {
      this.baseDeDatos = new BaseDeDatosMySQL();
    } else if (tipoBaseDeDatos === "MongoDB") {
      this.baseDeDatos = new BaseDeDatosMongo();
    } else {
      throw new Error("Tipo de base de datos no soportado");
    }
  }

  conectar() {
    this.baseDeDatos.conectar();
  }

  consultar(consulta) {
    return this.baseDeDatos.consultar(consulta);
  }

  insertar(datos) {
    this.baseDeDatos.insertar(datos);
  }
}

module.exports = ServicioBaseDeDatos;
