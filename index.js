const ServicioBaseDeDatos = require("./baseDeDatos/ServicioBaseDeDatos");

// utiliza el adaptador para mysql
const servicioMySQL = new ServicioBaseDeDatos("MySQL");
servicioMySQL.conectar();
servicioMySQL.consultar("SELECT * FROM usuarios");
servicioMySQL.insertar({ nombre: "Fer", edad: 19 });

// utiliza el adaptador para mongo
const servicioMongo = new ServicioBaseDeDatos("MongoDB");
servicioMongo.conectar();
servicioMongo.consultar("db.usuarios.find()");
servicioMongo.insertar({ nombre: "Gabs", edad: 20 });
