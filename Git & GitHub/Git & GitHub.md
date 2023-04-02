<h1 style='text-align: center'>Sistema de control de versiones</h1>

---

Un sistema de control de versiones como Git nos ayuda a guardar el historial de cambios y crecimiento de los archivos de nuestro proyecto.

En realidad, los cambios y diferencias entre las versiones de nuestros proyectos pueden tener similitudes, algunas veces los cambios pueden ser solo una palabra o una parte específica de un archivo específico. 

Git está optimizado para guardar todos estos cambios de forma atómica e incremental, o sea, aplicando cambios sobre los últimos cambios, estos sobre los cambios anteriores y así hasta el inicio de nuestro proyecto.

## **Que es Git**

---

Git es un sistema de control de versiones distribuido, diseñado por Linus Torvalds. Está pensando en la eficiencia y la confiabilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente.

* Git esta optimizado para guardar cambios de forma incremental.
* Permite contar con un historial, regresar a una version anterior y agregar funcionalidades.
* Lleva un registro de cambios que otras personas realicen en los archivos.

## **Que es GitHub**

---

GitHub es una plaraforma de desarrollo colaborativo para alojar proyectos utilizando el sistema de control de versiones Git. Se emplea principalmente para la creacion de código fuente de programas de computadora.
Puede considerarse a Github como la red social de codigo para los programadores y en muchos casos es visto como un curriculum vitae, pues aquí se guarda el portafolio de proyectos de programacion.

* GitHub permite alojar proyectos en repositorios de forma gratuita y publica, pero tiene una forma de pago para privados.
* Puedes compartir fácilmente tus proyectos.
* Permite colaborar para mejorar los proyectos de otros y a otros mejorar 0 aportar a los tuyos.
* Ayuda a reducir significantemente los errores humanos, a tener un mejor mantenimieto.


## **Introducción a la terminal y línea de comandos**

---

La línea de comandos nos permite interactuar con nuestro computador sin necesidad de utilizar una interfaz gráfica. Sin embargo, los computadores emplean distintos sistemas de archivos y manejan diferentes comandos, dependiendo del sistema operativo que utilicen.

### **Comandos basicos terminal**

* **pwd:** Muestra la ruta de carpetas en la que te encuentras ahora mismo.

* **mkdir:** Permite crear carpetas.

* **touch:** Permite crear archivos.

* **rm:** Permite borrar un archivo o carpeta (Mucho cuidado este comando puede borrar todo el disco duro).

* **cat:** Permite ver el contenido de un archivo.

* **ls:** Permite ver los archivos de la carpeta donde estamos ahora mismo.
  * **ls -l:** Muestra todos los archivos en lista.
  * **ls -a:** Muestra todos los archivos, incluso los ocultos.
  * **ls -la:** Muestra en lista los archivos incluyendo los archivos ocultos.

* **cd:** Permite navegar entre carpetas.
  * **cd /:** Ir ala principal.
  * **cd o cd~:** Ir a la ruta de tu usuario.
  * **cd carpeta/subcarpeta:** Navegar a una ruta dentro de la carpeta donde estamos ahora mismo
  * **cd ..:** Regresar a la carpeta anterior

* **history:** Ver los últimos comandos que se ejecutaron y un identificador con el que podremos repetir dicho comando.
  * **! + identificador:** Ejecuta el comando identificado del historial.

* **clear:** Limpia la terminal. Tambien se puede usar el atajo     Ctrl + l.
   
* **comando --help:** Mostrara todos los argumentos del comando especificado.
  


### **Comandos basicos Git**

* **git init:** Inicializa el control de versiones de GIT y crea un repositorio de GIT en la carpeta donde se ejecute el comando.
  
* **git add:** Añade los archivos especificados al área de preparación (staging).
  
* **git status:** Ofrece una descripción del estado de los archivos (untracked, ready to commit, nothing to commit).
  
* **git rm:** Eliminar el archivo del repositorio

* **git rm -cached name_file:** Para eliminar el archivo del staged  (ram)
  
* **git commit -m “commit description”:** Confirma los archivos que se encuentran en el área de preparación y los agrega al repositorio.
  
* **git commit -am “commit description”:** Añade al staging area y hace un commit mediante un solo comando. (No funciona con archivos nuevos)
  
* **git config --global user.email "tu@email.com":** Configura un email.
  
* **git config --global user.name "Tu nombre":** Configura un nombre.
  
* **git config --list:** Lista las configuraciones.
Analizar cambios en los archivos de un proyecto Git
* git log: lista de manera descendente los commits realizados.
  
* **git log --stat:** Además de listar los commits, muestra la cantidad de bytes añadidos y eliminados en cada uno de los archivos modificados.
  
* **git log --all --graph --decorate --oneline:** Muestra de manera comprimida toda la historia del repositorio de manera gráfica y embellecida.
  
  
* **git diff commit1 commit2:** Compara diferencias entre en cambios confirmados.

### **Comandos avanzados GIT:**
  
* **git show nombre_archivo:** Permite ver la historia de los cambios en un archivo.

### **Volver en el tiempo con branches y checkout**

* **git reset < commit > --soft/hard:** Regresa al commit especificado, eliminando todos los cambios que se hicieron después de ese commit.
  
* **git checkout <commit/branch> < filename >:** Permite regresar al estado en el cual se realizó un commit o branch especificado, pero no elimina lo que está en el staging area.

* **git checkout – < filePath >:** Deshacer cambios en un archivo en estado modified (que ni fue agregado a staging)
  
* **git rm y git reset:**
  * **git rm:** Este comando nos ayuda a eliminar archivos de Git sin eliminar su historial del sistema de versiones. Esto quiere decir que si necesitamos recuperar el archivo solo debemos “viajar en el tiempo” y recuperar el último commit antes de borrar el archivo en cuestión.

  * **git rm --cached nombre-archivo:** Elimina los archivos del área de Staging y del próximo commit, pero los mantiene en nuestro disco duro.

  * **git rm --force <archivo/s>:** elimina los archivos de Git y del disco duro. Git siempre guarda todo, por lo que podemos acceder al registro de la existencia de los archivos, de modo que podremos recuperarlos si es necesario (pero debemos aplicar comandos más avanzados).

git reset
Con git reset volvemos al pasado sin la posibilidad de volver al futuro. Borramos la historia y la debemos sobreescribir.

* **git reset --soft:** Vuelve el branch al estado del commit especificado, manteniendo los archivos en el directorio de trabajo y lo que haya en staging considerando todo como nuevos cambios. Así podemos aplicar las últimas actualizaciones a un nuevo commit.

* **git reset --hard:** Borra absolutamente todo. Toda la información de los commits y del área de staging se borra del historial.
git reset HEAD: No borra los archivos ni sus modificaciones, solo los saca del área de staging, de forma que los últimos cambios de estos archivos no se envíen al último commit. Si se cambia de opinión se los puede incluir nuevamente con git add.
Ramas o Branches en git
Al crear una nueva rama se copia el último commit en esta nueva rama. Todos los cambios hechos en esta rama no se reflejarán en la rama master hasta que hagamos un merge.

git branch <new branch>: crea una nueva rama.

git checkout <branch name>: se mueve a la rama especificada.

git merge <branch name>: fusiona la rama actual con la rama especificada y produce un nuevo commit de esta fusión.
git branch: lista las ramas generadas.


# Que es staging

El staging es el lugar donde se guardan temporalmente los cambios, para luego ser llevados definitivamente al repositorio. El repositorio es el lugar donde se guardan todos los registros de los cambios realizados a los archivos.

El área de staging se puede ver como un limbo donde nuestros archivos están por ser enviados al repositorio o ser regresados a la carpeta del proyecto.

**El flujo de trabajo basico de GIT:**

1. Modificamos una serie de archivos en el directorio de trabajo.
2. Se preparan los archivos, añadiendolos al area de preparacion (staging).
3. Confirmamos los cambios (commit), tomando los acrchivos tal y como estan en el area staging y almacena esa copia instantaneamente de manera permanente en el directorio GIT.

## Ciclo de vida o estados de los archivos en GIT:

Cuando trabajamos con git, nuestros archivos pueden vivir y moverse entre 4 diferentes estados:

* **Archivos tracked:**
Son los archivos que viven dentro de git, no tienen cambios pendientes y sus últimas actualizaciones han sido guardadas en el repositorio gracias a los comandos git add y git commit.

* **Archivos staged:**
Son archivos en staging. Viven dentro de git y hay registro de ellos porque han sido afectados por el comando git add, aunque no sus últimos cambios. Git ya sabe de la existencia de estos últimos cambios, pero todavía no han sido guardados definitivamente en el repositorio porque falta ejecutar el comando git commit.

* **Archivos unstaged:**
Entiéndelos como archivos “tracked pero unstaged”. Son archivos que viven dentro de git pero no han sido afectados por el comando git add ni mucho menos por git commit. Git tiene un registro de estos archivos, pero está desactualizado, sus últimas versiones solo están guardadas en el disco duro.

* **Archivos untracked:**
Son archivos que NO viven dentro de git, solo en el disco duro. Nunca han sido afectados por git add, así que git no tiene registros de su existencia.

Recuerda que hay un caso muy raro donde los archivos tienen dos estados al mismo tiempo: staged y untracked. Esto pasa cuando guardas los cambios de un archivo en el área de staging (con el comando git add), pero antes de hacer commit para guardar los cambios en el repositorio haces nuevos cambios que todavía no han sido guardados en el área de staging.

## Comandos para mover archivos entre los estados de GIT:

**Git status**
git status nos permite ver el estado de todos nuestros archivos y carpetas.

**Git add**
git add nos ayuda a mover archivos del untracked o unstaged al estado staged. Podemos usar git nombre-del-archivo-o-carpeta para añadir archivos y carpetas individuales o git add -A para mover todos los archivos de nuestro proyecto (tanto untrackeds como unstageds).

**Git reset HEAD**
Nos ayuda a sacar archivos del estado staged para devolverlos a su estado anterior. Si los archivos venían de unstaged, vuelven allí. Y lo mismo se venían de untracked.

**Git commit**
Nos ayuda a mover archivos de unstaged a tracked. Esta es una ocasión especial, los archivos han sido guardados o actualizados en el repositorio. Git nos pedirá que dejemos un mensaje para recordar los cambios que hicimos y podemos usar el argumento m para escribirlo (git commit -m "mensaje").

**Git rm**
Este comando necesita alguno de los siguientes argumentos para poder ejecutarse correctamente:

**git rm --cached:** mueve los archivos que le indiquemos al estado untracked.

**git rm --force:** elimina los archivos de git y del disco duro. Git guarda el registro de la existencia de los archivos, por lo que podremos recuperarlos si es necesario (pero debemos usar comandos más avanzados).

## **Branch (rama) y como funciona Merge en GIT**

Una rama o branch es una version del código del proyecto sobre el que se esta trabajando. Estas ramas ayudan a mantener el orden en el control de versiones y a manipular el código de forma segura.

En otras palabras, un branch o rama en Git es una rama que proviene de otra. Imagina un árbol, que tiene una rama gruesa, y otra más fina, en la rama más gruesa tenemos los commits principales y en la rama fina tenemos otros commits que pueden ser de hotfix, devlopment entre otros.ㅤ

## Tipos de branches o ramas en GIT:

1. Rama main (Master)
Por defecto, el proyecto se crea en una rama llamada Main (anteriormente conocida como Master). Cada vez que añades código y guardas los cambios, estás haciendo un commit, que es añadir el nuevo código a una rama. Esto genera nuevas versiones de esta rama o branch, hasta llegar a la versión actual de la rama Main.

2. Rama development
Cuando decides hacer experimentos, puedes generar ramas experimentales (usualmente llamadas development), que están basadas en alguna rama main, pero sobre las cuales puedes hacer cambios a tu gusto sin necesidad de afectar directamente al código principal.

3. Rama hotfix
En otros casos, si encuentras un bug o error de código en la rama Main (que afecta al proyecto en producción), tendrás que crear una nueva rama (que usualmente se llaman bug fixing o hot fix) para hacer los arreglos necesarios. Cuando los cambios estén listos, los tendrás que fusionar con la rama Main para que los cambios sean aplicados. Para esto, se usa un comando llamado Merge, que mezcla los cambios de la rama que originaste a la rama Main.

Todos los commits se aplican sobre una rama. Por defecto, siempre empezamos en la rama Main (pero puedes cambiarle el nombre si no te gusta) y generamos nuevas ramas, a partir de esta, para crear flujos de trabajo independientes.

Cómo crear un branch o rama en Git
El comando git branch permite crear una rama nueva. Si quieres empezar a trabajar en una nueva función, puedes crear una rama nueva a partir de la rama master con git branch new_branch. Una vez creada, puedes usar git checkout new_branch para cambiar a esa rama.

Recuerda que todas tus versiones salen de la rama principal o Master y de allí puedes tomar una versión específica para crear otra rama de versiones.

Cómo hacer merge
Producir una nueva rama se conoce como Checkout. Unir dos ramas lo conocemos como Merge.

Cuando haces merge de estas ramas con el código principal, su código se fusiona originando una nueva versión de la rama master (o main) que ya tiene todos los cambios que aplicaste en tus experimentos o arreglos de errores.

Podemos generar todas las ramas y commits que queramos. De hecho, podemos aprovechar el registro de cambios de Git para producir ramas, traer versiones viejas del código, arreglarlas y combinarlas de nuevo para mejorar el proyecto.

Solo ten en cuenta que combinar estas ramas (hacer “merge”) puede generar conflictos. Algunos archivos pueden ser diferentes en ambas ramas. Git es muy inteligente y puede intentar unir estos cambios automáticamente, pero no siempre funciona. En algunos casos, somos nosotros los que debemos resolver estos conflictos a mano.

## volver en el tiempo:

El comando git checkout + ID del commit nos permite viajar en el tiempo. Podemos volver a cualquier versión anterior de un archivo específico o incluso del proyecto entero. Esta también es la forma de crear ramas y movernos entre ellas.

También hay una forma de hacerlo un poco más “ruda”: usando el comando git reset. En este caso, no solo “volvemos en el tiempo”, sino que borramos los cambios que hicimos después de este commit.

Hay dos formas de usar git reset: con el argumento --hard, borrando toda la información que tengamos en el área de staging (y perdiendo todo para siempre). O, un poco más seguro, con el argumento --soft, que mantiene allí los archivos del área de staging para que podamos aplicar nuestros últimos cambios pero desde un commit anterior.

Cómo usar Git Reset
Para volver a commits previos, borrando los cambios realizados desde ese commit, podemos utilizar:

git reset --soft [SHA 1]: elimina los cambios hasta el staging area
git reset --mixed [SHA 1]: elimina los cambios hasta el working area
git reset --hard [SHA 1]: regresa hasta el commit del [SHA-1]
Donde el SHA-1 es el identificador del commit

# **Flujo de trabajo basico con un repositorio remoto**

Cuando empiezas a trabajar en un entorno local, el proyecto vive únicamente en tu computadora. Esto significa que no hay forma de que otros miembros del equipo trabajen en él.

Para solucionar esto, utilizamos los servidores remotos: un nuevo estado que deben seguir nuestros archivos para conectarse y trabajar con equipos de cualquier parte del mundo.

Estos servidores remotos pueden estar alojados en GitHub, GitLab, BitBucket, entre otros. Lo que van a hacer es guardar el mismo repositorio que tienes en tu computadora y darnos una URL con la que todos podremos acceder a los archivos del proyecto. Así, el equipo podrá descargarlos, hacer cambios y volverlos a enviar al servidor remoto para que otras personas vean los cambios, comparen sus versiones y creen nuevas propuestas para el proyecto.

Esto significa que debes aprender algunos nuevos comandos

Comandos para trabajo remoto con GIT
git clone url_del_servidor_remoto: Nos permite descargar los archivos de la última versión de la rama principal y todo el historial de cambios en la carpeta .git.
git push: Luego de hacer git add y git commit debemos ejecutar este comando para mandar los cambios al servidor remoto.
git fetch: Lo usamos para traer actualizaciones del servidor remoto y guardarlas en nuestro repositorio local (en caso de que hayan, por supuesto).
git merge: También usamos el comando git merge con servidores remotos. Lo necesitamos para combinar los últimos cambios del servidor remoto y nuestro directorio de trabajo.
git pull: Básicamente, git fetch y git merge al mismo tiempo.
Adicionalmente, tenemos otros comandos que nos sirven para trabajar en proyectos muy grandes:

git log --oneline:Te muestra el id commit y el título del commit.
git log --decorate: Te muestra donde se encuentra el head point en el log.
git log --stat: Explica el número de líneas que se cambiaron brevemente.
git log -p: Explica el número de líneas que se cambiaron y te muestra que se cambió en el contenido.
git shortlog: Indica que commits ha realizado un usuario, mostrando el usuario y el título de sus commits.
git log --graph --oneline --decorate y
git log --pretty=format:"%cn hizo un commit %h el dia %cd": Muestra mensajes personalizados de los commits.
git log -3: Limitamos el número de commits.
git log --after=“2018-1-2”
git log --after=“today” y
git log --after=“2018-1-2” --before=“today”: Commits para localizar por fechas.
git log --author=“Name Author”: Commits hechos por autor que cumplan exactamente con el nombre.
git log --grep=“INVIE”: Busca los commits que cumplan tal cual está escrito entre las comillas.
git log --grep=“INVIE” –i: Busca los commits que cumplan sin importar mayúsculas o minúsculas.
git log – index.html: Busca los commits en un archivo en específico.
git log -S “Por contenido”: Buscar los commits con el contenido dentro del archivo.
git log > log.txt: guardar los logs en un archivo txt

Las ramas (branches) son la forma de hacer cambios en nuestro proyecto sin afectar el flujo de trabajo de la rama principal. Esto porque queremos trabajar una parte muy específica de la aplicación o simplemente experimentar.

La cabecera o HEAD representan la rama y el commit de esa rama donde estamos trabajando. Por defecto, esta cabecera aparecerá en el último commit de nuestra rama principal. Pero podemos cambiarlo al crear una rama (git branch rama, git checkout -b rama) o movernos en el tiempo a cualquier otro commit de cualquier otra rama con los comandos (git reset id-commit, git checkout rama-o-id-commit).

Cómo funcionan las ramas en GIT
Las ramas son la manera de hacer cambios en nuestro proyecto sin afectar el flujo de trabajo de la rama principal. Esto porque queremos trabajar una parte muy específica de la aplicación o simplemente experimentar.

git branch -nombre de la rama-: Con este comando se genera una nueva rama.

git checkout -nombre de la rama-: Con este comando puedes saltar de una rama a otra.

git checkout -b rama: Genera una rama y nos mueve a ella automáticamente, Es decir, es la combinación de git brach y git checkout al mismo tiempo.

git reset id-commit: Nos lleva a cualquier commit no importa la rama, ya que identificamos el id del tag., eliminando el historial de los commit posteriores al tag seleccionado.

git checkout rama-o-id-commit: Nos lleva a cualquier commit sin borrar los commit posteriores al tag seleccionado.dd





Conceptos importantes de Git
•	Bug: Error en el código
•	Repository: Donde se almacena todo el proyecto, el cual puede vivir tanto en local como en remoto. El repositorio guarda un historial de versiones y, más importante, de la relación de cada versión con la anterior para que pueda hacerse el árbol de versiones con las diferentes ramas.
•	Fork: Si en algún momento queremos contribuir al proyecto de otra persona, o si queremos utilizar el proyecto de otro como el punto de partida del nuestro. Esto se conoce como “fork”.
•	Clone: Una vez se decide hacer un fork , hasta ese momento sólo existe en GitHub. Para poder trabajar en el proyecto, toca clonar el repositorio elegido al computador personal.
•	Branch: Es una bifurcación del proyecto que se está realizando para anexar una nueva funcionalidad o corregir un bug.
•	Master: Rama donde se almacena la última versión estable del proyecto que se está realizando. La rama master es la que está en producción en cada momento (o casi) y debería estar libre de bugs. Así, si esta rama está en producción, sirve como referente para hacer nuevas funcionalidades y/o arreglar bugs de última hora.
•	Commit: consiste en subir cosas a la versión local del repositorio. De esta manera se puede trabajar en la rama de forma local sin tener que modificar ninguna versión en remoto ni tener que tener la última versión remota, cosa muy útil en grandes desarrollos trabajados por varias personas.
•	Push: Consiste en enviar todo lo que se ha confirmado con un commit al repositorio remoto. Aquí es donde se une nuestro trabajo con el de los demás.
•	Checkout: Acción de descargarse una rama del repositorio GIT local (sí, GIT tiene su propio repositorio en local para poder ir haciendo commits) o remoto.
•	Fetch: Actualiza el repositorio local bajando datos del repositorio remoto al repositorio local sin actualizarlo, es decir, se guarda una copia del repositorio remoto en el local.
•	Merge: La acción de merge es la continuación natural del fetch. El merge permite unir la copia del repositorio remoto con tu repositorio local, mezclando los diferentes códigos.
•	Pull: Consiste en la unión del fetch y del merge, esto es, recoge la información del repositorio remoto y luego mezcla el trabajo en local con esta.
•	Diff: Se utiliza para mostrar los cambios entre dos versiones del mismo archivo.
