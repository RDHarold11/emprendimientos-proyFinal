# Notas para iniciar el servidor

Antes de todo, deben posicionarse en la carpeta server, de esta manera:

- Abrir la terminal --> Terminal (Arriba lo ven) -> new terminal y hacen lo de abajo
- cd server
- npm i
- npm start
  Este último comando es para iniciar la aplicación. Si ya quieren dejar de correrla, solo presionen control + c

Es importante que solo la primera vez ejecuten npm i, ya que esto instala todas las dependencias y librerias.

# Ojo

Si por algun motivo se instala otra dependencia o libreria, deben ejecutar npm i nuevamente.

# Estructura del proyecto

A diferencia del frontend aqui tenemos más carpetas:

- config: aqui dentro colocaremos el archivo que nos permitirá conectarnos a mongodb
- controllers: irá toda la lógica, para iniciar sesión, agregar/editar/eliminar productos, etc
- middleware: dentro se pondrán funciones que permitirán mantener segura la app.
- models: dentro irán los modelos, piensen en modelos como si fueran tablas de SQL, pero orientado a mongodb
- utils: la carpeta de utilidades, que son funciones que solemos llamar en muchas partes del código. Dentro
  colocaremos algunas cosas interesantes para generar los token de acceso, enviar correos, etc.
- server.js: este último es el archivo donde todo se ejecuta.
- .env: este archivo mantendrá toda la data sensible.

Ya lo demás como los package.json, la carpeta node_modules, .gitignore, no la toquen, sin eso no hay app.
