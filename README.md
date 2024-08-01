# signal-store
Instalacion de proyecto de angular 18 un crud con su carrito
    1. Miramos que version de angular tenemos:
        ng version
    1.1 Si la version no es la 18 instalamos la version
        npm install -g @angular/cli
    1.2 Ejecutamos el comando CLI ng new y proporciona el nombre del proyecto, como se muestra aqui:
        ng new my-app
    1.3 Nos colocamos dentro de proyecto con:
        cd nombre del proyecto
    1.4 Arrancamos el proyecto:
        ng serve --o 

    Instalacion de Tailwind CSS en Angular
        https://tailwindcss.com/docs/guides/angular
    
        1. Instalar Tailwind CSS
            Instale tailwindcssmediante npm y luego ejecute el comando init para generar un archivo. tailwind.config.js
                npm install -D tailwindcss postcss autoprefixer
                npx tailwindcss init
        2. Configurar las rutas de las plantillas
            Agregue las rutas a todos los archivos de plantilla en su tailwind.config.jsarchivo.
                module.exports = {
                    content: [
                        "./src/**/*.{html,ts}", Esto es lo que hay que añadir
                    ],
                }
        3. Añade las directivas Tailwind a tu CSS
            Agregue las @tailwinddirectivas para cada una de las capas de Tailwind a su archivo. ./src/styles.css
                @tailwind base;
                @tailwind components;
                @tailwind utilities;
        4. Comience a utilizar Tailwind en su proyecto
            Comience a utilizar las clases de utilidad de Tailwind para darle estilo a su contenido. (app.component.html)
                <h1 class="text-3xl font-bold underline">
                    Hello world!
                </h1>
    
    Instalacion de la extension ngxtension
        https://ngxtension.netlify.app/getting-started/introduction/
        https://ngxtension.netlify.app/getting-started/installation/

        1.Instalacion de ngxtension
            ng add ngxtension
        2. Vamos a trabajar con los signalSlice
            https://ngxtension.netlify.app/utilities/signals/signal-slice/

    Creamos el componente header
        ng g c shared/ui/header -s (si pones -s se nos añade todo menos el componente.css o scss)

        1.Para poderlo utilizar necesitamos que en el app.component.ts se importe el headerComponent

    Vamos a la pagina de Flowbite
        https://flowbite.com/

        1.Vamos a buscar navbar
            https://flowbite.com/docs/components/navbar/



