## Proyecto de Base de Datos con el Patrón Adapter en Node.js
Este proyecto implementa el **patron de diseño Adapter** en Node.js, que permite integrar diferentes sistemas de bases de datos (MySQL y MongoDB) a través de una interfaz comun. La aplicación permite interactuar con distintos tipos de bases de datos sin tener que modificar la logica de negocio, gracias a los adaptadores.

## Estructura del Proyecto
│   index.js               # Punto de entrada 
│   package-lock.json      # Archivo de dependencias 
│   package.json           # Archivo de configuración de dependencias
│   README.md              # Documentacion del proyecto
│
├───baseDeDatos
│       AdapterBaseDeDatos.js   # Interfaz comun para interactuar con las bases de datos
│       BaseDeDatosMongo.js     # Adaptador para MongoDB
│       BaseDeDatosMySQL.js     # Adaptador para MySQL
│       ServicioBaseDeDatos.js  # Servicio para gestionar la conexión y operaciones


## Ejecute el programa 
Para correr el programa escriba **node index.js** sobre la terminal donde esta abierto el programa.

## Flijo de ejecución
Conectando a la base de datos MySQL...
Consultando en MySQL: SELECT * FROM usuarios
Insertando en MySQL: {"nombre":"Fer","edad":19}
Conectando a la base de datos MongoDB...
Consultando en MongoDB: db.usuarios.find()
Insertando en MongoDB: {"nombre":"Gabs","edad":20}


## Clases principales y metodos
1. Clase AdapterBaseDeDatos (baseDeDatos/AdapterBaseDeDatos.js) -->Esta clase define la interfaz comun que deben implementar los adaptadores para interactuar con cualquier tipo de base de datos.
**Metodos principales**
    1. conectar() --> Método para conectar con la base de datos.
    2. consultar(consulta) --> Método para realizar una consulta a la base de datos.
    3. nsertar(datos) --> Método para insertar datos en la base de datos.

2. Clase BaseDeDatosMySQL (baseDeDatos/BaseDeDatosMySQL.js) --> Adaptador que implementa la interfaz AdapterBaseDeDatos para interactuar con una base de datos mysql.
**Metodos principales**
    1. conectar() --> Conecta a una base de datos mysql.
    2. consultar(consulta) --> Realiza una consulta en mysql.
    3. insertar(datos) --> Inserta datos en mysql.

3. Clase BaseDeDatosMongo (baseDeDatos/BaseDeDatosMongo.js) --> Adaptador que implementa la interfaz AdapterBaseDeDatos para interactuar con una base de datos Mongo. 
**Metodos principales**
    1. conectar() --> Conecta a una base de datos Mongo.
    2. consultar(consulta) --> Realiza una consulta en Mongo.
    3. insertar(datos) --> Inserta datos en Mongo.

4. Clase ServicioBaseDeDatos (baseDeDatos/ServicioBaseDeDatos.js) --> Esta clase proporciona un servicio para interactuar con las bases de datos usando el patron Adapter. Dependiendo de la base de datos que se elija, se utiliza el adaptador correspondiente. 
**Metodos principales**
    1. conectar() --> Establece la conexion con la base de datos seleccionada.
    2. consultar(consulta) --> Realiza una consulta utilizando el adaptador correspondiente.
    3. insertar(datos) --> Inserta datos utilizando el adaptador correspondiente.


## Implentación de Prototype
El patron Adapter es utilizado para adaptar interfaces de diferentes clases a una interfaz comun. En el proyecto se implementan dos adaptadores: BaseDeDatosMySQL y BaseDeDatosMongo, que permiten que la aplicación interactue de manera uniforme con ambas bases de datos, sin que la logica de negocio tenga que ser modificada. La clase AdapterBaseDeDatos define la interfaz comun para los metodos conectar(), consultar() e insertar().Por otro lado las clases BaseDeDatosMySQL y BaseDeDatosMongo implementan esta interfaz, adaptando sus propias operaciones para ajustarse a la interfaz comun. Al mismo tiempo que la clase ServicioBaseDeDatos utiliza la interfaz comun para interactuar con las bases de datos, de manera que la logica de la aplicación puede cambiar entre MySQL y MongoDB sin cambiar el flujo de ejecución ni el código que hace uso de los datos.