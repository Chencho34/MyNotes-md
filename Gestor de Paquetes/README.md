# Que es node

Es un entorno de ejecución de código abierto y multiplataforma para crear aplicaciones de red y del lado del servidor rápidas y escalables.

# Que es NVM (Node Version Manage)

NVM (Node Version Manager) es una herramienta que te permite gestionar y cambiar entre diferentes versiones de Node.js en tu sistema. Con NVM, puedes instalar fácilmente diferentes versiones de Node.js y cambiar entre ellas según tus necesidades.

## Instalacion:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

Verifica que la instalación de NVM haya sido exitosa:

```bash
command -v nvm
```

Instalar la version de node que se necesite

```bash
nvm install 14.17.1
```

```bash
node -v
```

Cambiar a una version diferente de Node js

```bash
nvm use 12.22.1
```


NVM es una herramienta útil para gestionar y cambiar entre diferentes versiones de Node.js en tu sistema. Te permite instalar y cambiar fácilmente entre diferentes versiones de Node.js, lo que es útil cuando necesitas trabajar con diferentes proyectos que requieren diferentes versiones de Node.js.


# Gestores de Paquetes

npm es el administrador de paquetes predeterminado para Node.js y viene empaquetado con él. Es el más antiguo y ampliamente utilizado, y tiene una gran comunidad y un gran número de paquetes disponibles en su registro. npm utiliza un árbol de dependencias plano, lo que significa que todas las dependencias se instalan en un solo directorio `node_modules` en la raíz del proyecto. Esto a veces puede causar problemas de conflictos de versiones, ya que diferentes paquetes pueden requerir diferentes versiones de la misma dependencia.

yarn es una alternativa más rápida y confiable a npm, desarrollada por Facebook. Utiliza un concepto llamado "archivos de bloqueo" para garantizar que todos los miembros del equipo tengan las mismas dependencias instaladas, incluso si tienen diferentes velocidades de red o disponibilidad. yarn también tiene una función llamada "espacios de trabajo" que le permite administrar varios paquetes dentro de una sola carpeta principal, con dependencias compartidas.

pnpm es un administrador de paquetes más nuevo que pretende resolver algunos de los problemas con el árbol de dependencias plano de npm. Utiliza un enfoque de "almacenamiento con direccionamiento de contenido", lo que significa que almacena cada paquete en un directorio separado y luego crea enlaces simbólicos a esos directorios en el directorio `node_modules`. Esto le permite a pnpm evitar duplicar dependencias y ahorrar espacio en disco. pnpm también tiene una función llamada "dependencias virtuales" que le permite declarar dependencias que no deben instalarse en el directorio `node_modules`, pero deben estar disponibles en tiempo de ejecución.

En términos de rendimiento, pnpm es generalmente más rápido que tanto npm como yarn, especialmente para proyectos grandes con muchas dependencias. Sin embargo, npm y yarn tienen comunidades más grandes y más paquetes disponibles en sus registros, por lo que pueden ser una mejor opción para algunos proyectos. Al final, la elección del administrador de paquetes dependerá de las necesidades específicas de su proyecto y sus preferencias personales.


## Detrás de cada comando:

1. `npm install`:
   - npm crea un árbol de dependencias plano, lo que significa que todas las dependencias se instalan en un solo directorio `node_modules` en la raíz del proyecto.
   - Si encuentra conflictos de versiones, npm intentará resolverlos automáticamente.
   - Si no puede resolver los conflictos de versiones automáticamente, npm mostrará un mensaje de error y no instalará el paquete.

2. `yarn install`:
   - yarn utiliza un archivo de bloqueo para garantizar que todos los miembros del equipo tengan las mismas dependencias instaladas.
   - Si encuentra conflictos de versiones, yarn intentará resolverlos automáticamente.
   - Si no puede resolver los conflictos de versiones automáticamente, yarn mostrará un mensaje de error y no instalará el paquete.
   - yarn también utiliza espacios de trabajo para administrar múltiples paquetes dentro de una sola carpeta principal, con dependencias compartidas.

3. `pnpm install`:
   - pnpm utiliza un enfoque de almacenamiento con direccionamiento de contenido para almacenar cada paquete en un directorio separado.
   - Luego, pnpm crea enlaces simbólicos a esos directorios en el directorio `node_modules`.
   - pnpm también utiliza dependencias virtuales para declarar dependencias que no deben instalarse en el directorio `node_modules`, pero deben estar disponibles en tiempo de ejecución.
   - pnpm es generalmente más rápido que npm y yarn, especialmente para proyectos grandes con muchas dependencias.

En resumen, npm, yarn y pnpm son administradores de paquetes diferentes que tienen diferentes enfoques para manejar las dependencias de los proyectos. npm utiliza un árbol de dependencias plano, yarn utiliza archivos de bloqueo y espacios de trabajo, mientras que pnpm utiliza un enfoque de almacenamiento con direccionamiento de contenido y dependencias virtuales.


React es una aplicacion de reac js, o que relacion tiene? 


---

# Armando 27 Febrero:
## Porque se usa y que es node_modules, npm y yarn a rasgos generales:

  Next js es un framework que trabaja basado en la libreria de React

La carpeta "node_modules" es el directorio donde se almacenan las bibliotecas y dependencias de un proyecto Node.js que se instalan a través de herramientas como npm (Node Package Manager) o yarn. Estas herramientas descargan las bibliotecas desde repositorios remotos y las colocan en la carpeta "node_modules" para que el proyecto pueda acceder a ellas. Es importante tener esta carpeta en el archivo ".gitignore" para evitar subirla al repositorio, ya que generalmente es bastante grande y puede generarse de nuevo fácilmente con las dependencias especificadas en el archivo "package.json".

porque son remotas las librerias?: Porque estan alojadas en repositorios externos y pueden ser llamados usando npm(node package modules) o yarn.

Tanto npm (Node Package Manager) como Yarn son gestores de paquetes para JavaScript que permiten instalar, compartir y gestionar las dependencias de un proyecto. Ambos se utilizan comúnmente en proyectos de Next.js y otros proyectos basados en JavaScript o Node.js.

TODO 27 de Febrero:<br />

> Instalar nvm (node version manager)
bash
    $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash


> Comprobar la instalacion
bash
$ nvm --version


> Visualizar que versiones tenemos instaladas localmente

bash
$ nvm ls


bash
$ nvm use 18.17.0




Preguntar: 

si saben que es npm (extra si saben que es yarn)
  npm install que instala las dependencias guardadas en el package.json

si saben que es package.json(declara dependencias instaladas en tu proyecto)
                package-lock.json(conservar versiones de cada dependecia y no mutarlas)

si saben que es un API y que tipos de request hay
[HTTPS request](https://developer.mozilla.org/es/docs/Web/HTTP/Methods)<br />

probar requests:

## GET REQUEST:

> bash:
bash
curl https://jsonplaceholder.typicode.com/posts/1


>powershell:
powershell
Invoke-WebRequest -Uri "https://jsonplaceholder.typicode.com/posts/1"


## POST Request:

> bash:
bash
curl -X POST -H "Content-Type: application/json" -d '{"title":"foo","body":"bar","userId":1}' https://jsonplaceholder.typicode.com/posts

>powershell
powershell
Invoke-WebRequest -Uri "https://jsonplaceholder.typicode.com/posts" -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"title":"foo","body":"bar","userId":1}'


## PUT Request:
> bash:
bash
curl -X PUT -H "Content-Type: application/json" -d '{"id":1,"title":"foo","body":"bar","userId":1}' https://jsonplaceholder.typicode.com/posts/1

> powershell:
powershell
Invoke-WebRequest -Uri "https://jsonplaceholder.typicode.com/posts/1" -Method PUT -Headers @{"Content-Type"="application/json"} -Body '{"id":1,"title":"foo","body":"bar","userId":1}'


## DELETE REQUEST:

> bash:
bash
curl -X DELETE https://jsonplaceholder.typicode.com/posts/1

> powershell:
powershell
Invoke-WebRequest -Uri "https://jsonplaceholder.typicode.com/posts/1" -Method DELETE


si saben que es Async Await
[Async y Await](https://www.aluracursos.com/blog/asyncawait-en-javascript-que-es-y-cuando-usar-programacion-asincrona)

si tienes claro que es Server Side y Client side
[Javascript Server y Client side](https://www.cloudflare.com/es-es/learning/serverless/glossary/client-side-vs-server-side/)