# Notas importantes para correr la aplicacion:

Antes de todo, deben posicionarse en la carpeta client, de esta manera:
-Abrir la terminal --> Terminal (Arriba lo ven) -> new terminal y hacen lo de abajo
-cd client
-npm i
-npm run dev
Este último comando es para iniciar la aplicación. Si ya quieren dejar de correrla, solo presionen control + c

Es importante que solo la primera vez ejecuten npm i, ya que esto instala todas las dependencias y librerias.

# Ojo

Si por algun motivo se instala otra dependencia o libreria, deben ejecutar npm i nuevamente.
Cualquier archivo o carpeta que quieran agregar, asegurense siempre de crearlo dentro de la carpeta src.

# Estructura del proyecto

Dentro de la carpeta pages, colocaremos todas las paginas, ejemplo: login, home, etc.
Dentro de components, pondremos los componentes. Un componente es basicamente una función que podremos reutilizar en otras
partes del código. Si estamos trabajando en la pagina home, dentro llamaremos a sus componentes, como por ejemplo: Navbar, articulos, etc.
Esto permitirá tener el código más organizado y así no creamos toda la estructura en un solo archivo.

# Estructura de un componente o pagina (Al final es lo mismo solo que orientado a lo que queremos)

const Home = () => {
return (

<div>Esta es la pagina inicial</div>
)
}
export default Home

Fijense que siempre es lo mismo, tanto para el componente o la pagina. Lo unico que cambiaría sería el nombre la función, dependiendo
de como usted llamó el archivo. Siempre pero siempre coloquen todo dentro del return, además de las indicaciones que les di sobre el elemento padre.
Esto último podrán entenderlo si se dirigen al archivo Home o al componente Navbar.

Otra cosa que es muy importante, es que cada pagina o componente, si o si creanlo con la letra inicial en mayuscula.

# Ejemplo de estructura para el proyecto

Dentro de este repositorio, podrán entender mejor como funciona lo mencionado anteriormente, se crean los componentes y se llaman en el archivo
App.js. Esto sería lo mismo solo que aplicado para todas las paginas que tenemos. Este repositorio únicamente contiene estructura html y css,
no tiene nada de lógica, para que puedan entender mejor como funciona React.
https://github.com/RDHarold11/Tropiko/blob/master/src/App.js

En la carpeta public pueden agregar sus imagenes, esta carpeta es especial, ya que tendremos acceso a ella en todo el proyecto de una manera facil.
Si por ejemplo agregan una imagen, la forma de obtenerla sería la siguiente:
<img src="/nombreimagen.jpg"/>

En assets pueden agregar iconos si lo desean.

Con todas estas indicaciones, podremos crear fácilmente todo el diseño de la aplicación sin problemas. Ya luego crearemos más carpetas
para crear la lógica necesaria.

# Sobre el CSS

Cuando quieran agregar algún estilo, pueden irse al archivo index.css. En este proyecto instalé Tailwind CSS, para el que sepa utilizarlo. Luego puedo comentarles como agregar estilos de una manera más organizada, y así no tienen todo en un solo archivo.

--Olviden esto de abajo--

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
