class AdapterBaseDeDatos {
    // metodo para conectar a la base de datos
    conectar() {
      throw new Error("Metodo 'conectar' debe ser implementado");
    }
  
    // metodo para consultar la base de datos
    consultar(consulta) {
      throw new Error("Metodo 'consultar' debe ser implementado");
    }
  
    // metodo para insertar datos en la base de datos
    insertar(datos) {
      throw new Error("Metodo 'insertar' debe ser implementado");
    }
  }
  
  module.exports = AdapterBaseDeDatos;
  