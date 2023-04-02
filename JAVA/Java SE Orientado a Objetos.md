
<h1 align="center">Java SE Orientado a Objetos</h1>

***

## Paradigma en la orientacion a objetos:

Los paradigmas de programación son una teoría que nos suministra una base y modelo estandarizado para resolver problemas con nuestro código.

La Programación Orientada a Objetos (POO) nos ayuda a analizar y entender todos estos problemas para resolverlos de la forma más sostenible en el futuro. Java surgió con este paradigma y es uno de los lenguajes que define en gran manera el rumbo que sigue la POO.

**Este paradigma se compone de 4 elementos (que analizaremos a fondo más adelante):**

* Clases
* Propiedades
* Métodos
* Objetos

**Además, se basa en los siguientes 4 pilares:**

* Encapsulamiento
* Abstracción
* Herencia
* Polimorfismo

***

## Propiedades y comportamientos de un objeto: 

Los **Objetos** son todas las cosas físicas o conceptuales que tienen propiedades y comportamientos. Por ejemplo: usuario, sesión, auto, etc.

Las **Propiedades** o atributos son las características de nuestros objetos. Estos atributos siempre serán sustantivos y pueden tener diferentes valores que harán referencia a nombres, tamaños, formas y estados.

Por ejemplo: el color del auto es verde o rojo (color es el atributo, verde y rojo son posibles valores para este atributo).

Los **Comportamientos** o métodos serán todas las operaciones de nuestros objetos que solemos llamar usando verbos o sustantivos y verbos. Por ejemplo: los métodos del objeto sesión pueden ser login(), logout(), makeReport(), etc.

*** 

## Que es una clase:

Las Clases son los modelos sobre los cuales construimos nuestros objetos, es decir, las clases son los “moldes” que nos permiten generar objetos. Cada clase debe tener identidad (con un nombre de clase único usando Upper Camel Case), estado (con sus atributos) y comportamiento (con sus métodos y operaciones).

**Por ejemplo:**
En un software para un supermercado, seguramente los elementos más importantes sobre los cuales sea significativo mantener información son los productos, los clientes, las ventas y los pedidos, en este caso se han encontrado las clases PRODUCTO, CLIENTE, VENTA y
PEDIDO.
Estas clases a su vez tienen atributos (datos) y métodos (funciones), porejemplo, la clase PRODUCTO tiene como uno de sus atributos, el atributo precio y uno de sus métodos puede ser incrementarPrecio. De esta forma, a través de los atributos se puede acceder a la información de la clase y a través de los métodos se pueden ejecutar acciones sobre la clase. Estas clases se unen a otras clases a través de relaciones y así se conforma el **diagrama de clases**.

**Toda clase se compone de 3 elementos importantes:** 

* Nombre de la clase
* Atributos o propiedades también denominados miembros de la clase
* Los métodos (operaciones) o acciones propias de la clase. (Estas acciones se identifican con verbos en infinitivo).

<p align="center">
  <img src="https://static.platzi.com/media/user_upload/EjemploDeClases-15f97398-d15e-4d00-9f45-4d96dcc6c944.jpg" alt="Material Bread logo">
</p>

### Atributos:

Los atributos o características de una Clase pueden ser de tres tipos, definen la visibilidad:
* **Public (+):** Indica que el atributo será visible tanto dentro como fuera de la clase, es decir, es accesible desde todos lados.
* **Private(-):** Indica que el atributo sólo será accesible desde dentro de la clase (sólo sus métodos lo pueden acceder).
* **Protected (#):** Indica que el atributo no será accesible desde fuera de la clase, pero si podrá ser accedido por métodos de la clase además de las subclases que se deriven (herencia).
* **Sin modificador de acceso ( ):** Indica que el atributo será accesible desde cualquier clase que se encuentre en el mismo paquete de la clase que contiene al atributo sin modificador de acceso.

### Métodos:

Los métodos u operaciones de una clase son la forma en cómo ésta interactúa con su entorno, éstos pueden tener las características:
* **Public (+):** Indica que el método será visible tanto dentro como fuera de la clase, es decir, es accesible desde todos lados.
* **Private (-):** Indica que el método sólo será accesible desde dentro de la clase (sólo otros métodos de la clase lo pueden acceder).
* **Protected (#):** Indica que el método no será accesible desde fuera de la clase, pero si podrá ser accedido por métodos de la clase además de métodos de las subclases que se deriven (herencia).
* **Sin modificador de acceso ( ):** Indica que el método será
accesible desde cualquier clase que se encuentre en el mismo
paquete de la clase que contiene al método sin modificador de
acceso.

***

## Modularidad:

La Modularidad consiste en dividir nuestro programa en diferentes módulos de forma que puedan unirse o separarse sin romperse entre ellos o perder alguna funcionalidad.

**La Modularidad en Programación Orientada a Objetos nos ayuda a:**

* Reutilizar código.
* Evitar colapsos.
* Que nuestro código sea mantenible.
* Mejorar la legibilidad.
* Resolución rápida de problemas.

Mientras en la programación estructurada se tiene un sólo archivo muy grande en el que esta toda la lógica del sistema y en el que un error puede detener la ejecución de todo el programa, en la programación orientada a objetos las diferentes funciones de un sistema se dividen en módulos independientes, por lo que a la hora de solucionar bugs sólo hay que ubicar el módulo que esta fallando y repararlo sin tener que afectar al resto del código; y si se quieren añadir más funcionalidades al proyecto solo hay que crear nuevos módulos e integrarlos dentro del sistema.

***

## Metodo Constructor:

El Método Constructor es el primer método que se ejecuta por defecto cuando creamos una clase, nos permite crear nuevas instancias de una clase. Lo invocamos con la palabra reservada  ***new*** seguida del nombre con el que inicializamos la clase y paréntesis.

* **Crea** nuevas **instancias** de una clase.
* Tiene el **mismo nombre** que la clase que inicializa.
* Usa la palabra reservada **new** para invocarlo

### Ejemplo:

Clase ***Doctor*** cons sus metodos y atributos.

```java
// Clases:
public class Doctor {
  // Atributos:
  int id;
  String name;
  String speciality;

  // Comportamientos (métodos):
  public void showName() {
    // Instrucciones...
    System.out.println(name);
  }
}
```

#### Declarando el objeto:

Para declarar un objeto se coloca el nombre de la clase, en este caso la clase es ***Doctor*** y enseguida se pone el nombre del objeto ***myDoctor*** este debe de ser unico utilizando la tecnica CamelCase 

```java
// Tipo de Objeto ---- Nombre del Objeto
Doctor myDoctor;

// Otro objeto del mismo tipo Doctor:
Doctor anotherDoctor;
```

#### Instanciando el objeto:

Para instanciar un objeto se hace uso del objeto declaro anteriormente ***myDoctor*** y en seguida **=** invocamos al metodo constructor con la palabra reservada ***new*** nombre de la clase otravez ***Doctor();***

```java
// Nombre del Objeto ---- new Metodo Constructor();
myDoctor = new Doctor();

// Otro objeto
anotherDoctor = new Doctor();
```

#### Declarando e instanciando el Objeto en la misma linea:

Se esta declarando el objeto y se esta instanciando el objeto.

```java
// Declarar el objeto ---- Instanciar el objeto ---- new Metodo Constructor();
Doctor myDoctor = new Doctor();
Doctor onotherDoctor = new Doctor();
```

#### Haciendo uso del Objeto:

```java
// Declarar el objeto ---- Instanciar el objeto ---- new Metodo Constructor();
Doctor myDoctor = new Doctor();
myDoctor.name = "Armando Crescencio";
myDoctor.showName(); 

Doctor anotherDoctor = new Doctor();
anotherDoctor.name = "Alfredo Rangel";
anotherDoctor.showName(); 
```

***

## Modificadores de acceso

Los Modificadores de Acceso nos ayudan a limitar desde dónde podemos leer o modificar atributos especiales de nuestras clases. Podemos definir qué variables se pueden leer/editar por fuera de las clases donde fueron creadas. Esto lo conocemos como Encapsulamiento.

![Imagen DiagramaDeClases](https://static.platzi.com/media/user_upload/Screen%20Shot%202019-07-16%20at%205.42.34%20PM-05985be5-929e-4e87-8137-c1c5b16c96c2.jpg)

## Getters y Setters

Los Getters y Setters nos permiten leer y escribir (respectivamente) los valores de nuestras variables privadas desde fuera de la clase donde fueron creadas.
* **Getters:** Obtenemos los datos de las variables 
* **Setters:** Asignamos o cambiamos su valor.

```java
public class Patient {
	
    private String name;
    private String email;

    //Metodo Get
    public String getName() {
        return name;
    }

    //Metodo Set
    public void setName(String name) {
        this.name = name
    }
	
    //Metodo Get
    public String getEmail() {
        return email;
    }

    //Metodo Set
    public void setEmail(String email) {
        this.email = email;
    }
```

### Haciendo uso de los Getters Y Setters en la clase Main:

```java
Patient patient = new Patient();

//Asignamos o cambiamos el valor de los atributos
patient.setName("Jose Armando"); 
patient.setEmail("Chencho@gmail.com");

//Llamamos el metodo Get para recuperar los datos asignados
System.out.println(patient.getName());
System.out.println(patient.getEmail());
```

***

## Clases anidadas y estaticas anidadas

***

## Clases internas y locales a un metodo

***

## Enumerations

Los enumerations son tipos de datos muy especiales pues este, es el único en su tipo que sirve para declarar una colección de constantes, al ser así estaremos obligados a escribirlos con mayúsculas.

Usaremos enum cada vez que necesitemos representar un conjunto fijo de constantes. Por ejemplo los días de la semana.

Así podemos declarar un enumeration usando la palabra reservada **enum**.

```java
public enum Day {
    SUNDAY, MONDAY, TUESDAY, WEDNESDAY,
    THURSDAY, FRIDAY, SATURDAY
}
```

Para crear referencias de enumerations de la siguiente forma:

```java
Day day;
switch (day) {
	case MONDAY:System.out.println(“Mondays are good.”);
		break;
	case FRIDAY:
		System.out.println(“Fridays are nice”);
		break;
	case SATURDAY: case: SUNDAY:
		System.out.println(“Weekends are the best”);
		break;
	default:
		System.out.println(“Midweek are so-so”);
		break;
}
```

Y puedo llamar un valor del enumeration así:

```java
Day.MONDAY;
Day.FRIDAY;
Day.SATURDAY
```

Los enumerations pueden tener atributos, métodos y constructores, como se muestra:

```java
public enum Day {
  MONDAY("Lunes","Lundi"),
  TUESDAY("Martes","Mardi"),
  WEDNESDAY("Miercores","Mercredi"),
  THURSDAY("Jueves","Jeudi"),
  FRIDAY("Viernes","Vandredi"),
  SATURDAY("Sábado","Semedi"),
  SUNDAY("Domingo","Dimanche");

  private String spanish;
  private String french;

  private Day(String s, String f) {
    spanish = s;
    french = f;
  }

  private String getSpanish() {
    return spanish;
  }

  private String getFrench() {
    return french;
  }
}
```

Y para utilizarlo lo podemos hacer así:

```java
System.out.println(Day.MONDAY); //Imprimira MONDAY
System.out.println(Day.MONDAY.getSpanish()) //Imprimira Lunes
System.out.println(Day.TUESDAY.getFrench()) //Imprimira Mardi
System.out.println(Day.TESDAY.getSpanish()) //Imprimira Martes
```

***

## Herencia

Don’t repeat yourself (DRY) consiste en detectar cuando estamos repitiendo el mismo código una y otra vez para crear algún método o función que nos ayude a evitar estos repetidos.

* Promueve la reduccion de duplicacion de codigo.
* Las piesas de informatica nunca deben duplicarse.
* Incrementa la dificultad en los cambios y evolucion.

Esta es una de las bases de la programación que siempre debemos tener en cuenta, ya que nos ayuda a reducir la dificultad de nuestro código para implementar cambios y/o mejoras en nuestra aplicación.

La **Herencia** consiste en crear nuevas clases a partir de otras clases, establecemos una relación padre e hijo entre nuestras clases. Es diferente a las clases anidadas, ya que, en vez de crear clases dentro de clases, le indicamos a nuestras subclases de qué superclase pueden heredar (extends) para reutilizar el código de algunos de sus métodos.

Recuerda que nuestras clases no pueden heredar de más de una clase.

```java
public class SuperClass {
  // ...
}

public class SubClass extends SuperClass {
  // ...
}
```

***

## Super y This.

* **Super:** indica que una variable o método es de la clase padre, la superclase de cual heredan nuestras subclases, solo la usamos cuando aplicamos herencia. Además, podemos llamar al constructor de la clase padre desde sus diferentes subclases usando super(); y enviando los argumentos que sean necesarios.
* **this:** nos permite especificar que nuestras variables están señalando a la misma clase donde estamos trabajando, ya sea una clase normal, anidada, subclase o superclase.

***

## Polimorfismo: Sobreescritura de Metodos

**Sobreescritura:** Cuando una clase hereda de otra y en esta clase hija se redefine un metodo con otra implementacion distinta a la clase padre.

**Sobreescritura de Constructores:** Un constructor en una subclase usando los miembros heredados de la superclase con **argumentos diferentes**

El Polimorfismo es una característica de la programación orientada a objetos que consiste en sobrescribir algunos métodos de la clase de la cual heredan nuestras subclases para asignar comportamientos diferentes.

Además de los métodos de las superclases, también podemos redefinir el comportamiento de los métodos que “heredan” todos nuestros objetos, así como .toString, hashCode, finalize, notify, entre otros.

La sobreescritura de constructores consiste en usar los miembros heredados de una supreclase pero con argumentos diferentes.

Recuerda que no podemos sobrescribir los métodos marcados como final o static.

### Existen 3 tipos de polomorfismo:

* **Sobrecarga:** Podemos escribir un metodo con el mismo nombre varias veces cambiando los parametros que recibe ya sea en cantidad o en tipos, ademas podemos tomar otro tipo de dato:

    ```java
        public int suma (int num1, int num2) {
            return num1 + num2;
        }

        public int suma (int num1, int num2, int num3) {
            return num1 + num2 + num3;
        }

        public int suma (int num1, int num2, int sum3, int sum4) {
            return num1 + num2 + num3 + num4;
        }

        public String suma (String text1, String text2) {
            return text1 + " " + text2;
        }
    ```

* **Sobreescritura:** Podemos escribir un metodo de la clase padre y cambiar su contenido y asi realizar comportamientos mas especificos:

    ```java
        <!-- Clase Padre User -->
        public String toString () {
            return name + " " + email;
        }

        <!-- Clase Hija Patient -->
        public String toString () {
            return super.toString() + " " + blood + " " + weight;
        }
    ```

* **Ligadira Dinamica:** Podemos ejemplificar a las clases hijas pero tratarlas como su clase padre, puede ser util por ejmplo si queremos un arreglo qeu contenga objetos tipo User pero que implicitamente tambien va a contener doctores y pacientes: 

    ```java
        User doctor = new Doctor ("Cristian", "criss.ud@gmail.com");
        User paciente = new Patient ("Carlos", "carlos96@hotmail.com");
    ```

***

## Interfaces

Las Interfaces son un tipo de referencia similar a una clase con solo constantes y definiciones de métodos, son de gran ayuda para definir los comportamientos que son redundantes y queremos reutilizar más de una clase, incluso cuando tenemos muchas clases y no todas pertenecen a la misma “familia”.

Las interfaces establecen la forma de las clases que la implementan, así como sus nombres de métodos, listas de argumentos y listas de retorno, pero NO sus bloques de código, eso es responsabilidad de cada clase.

![Iterces](https://static.platzi.com/media/user_upload/UML%20Appointments-afea1f88-f6c3-4abc-b10f-2295d21c9991.jpg)

***

## Composicion de una Interfaz

Composición de Interfaces en Clases: abstraer todos los métodos/comportamientos de una clase para modularizarlos (comprimirlos, encapsularlos) en una interfaz y reutilizar su código en diferentes clases.

Las interfaces se crean utilizando la palabra reservada **interface** y se implementan en nuestras clases con **implements**.

Recuerda que podemos heredar (implementar) más de una interfaz, pero no podemos hacerlo de las clases padres o superclases.

```java
public interface ISchedulabe {
  void schedule(Date date, String Time);
}

public class AppointmentDoctor implements ISchedulable {
  @Override
  public void schedule(Date date, String Time) {
    // ...
  }
}
```

### Interfaz Collections

Los Collections nos van a servir para trabajar con colecciones de datos, específicamente y **solamente con objetos**, para esto recuerda que tenemos disponibles nuestras clases Wrapper que nos ayudan a convertir datos primitivos a objetos.

Los collections se diferencian de los arrays en que su tamaño no es fijo y por el contrario es dinámico.

A continuación te muestro un diagrama de su composición:

![alt](https://static.platzi.com/media/user_upload/IMG1-b5d51fc9-f21a-47c9-960c-409d2cf43f7d.jpg)

Como podemos observar el elemento más alto es la interfaz Collection, para lo cual, partiendo de su naturalidad de interface, entendemos que tiene una serie de métodos “básicos” dónde su comportamiento será definido a medida que se vaya implementando en más elementos. De ella se desprenden principalmente las interfaces Set y List.

**La interface Set tendrá las siguientes características:**

* Almacena objetos únicos, no repetidos.
* La mayoría de las veces los objetos se almacenarán en desorden.
* No tenemos índice.

**La interface List tiene éstas características:**

* Puede almacenar objetos repetidos.
* Los objetos se almacenan en orden secuencial.
* Tenemos acceso al índice.

### Si seguimos analizando las familias tenemos que de Set se desprenden:

Clase HashSet 
Interfaz SortedSet y de ella la clase TreeSet.

* **HashSet** los elementos se guardan en **desorden** y gracias al mecanismo llamado hashing (obtiene un identificador del objeto) permite almacenar **objetos únicos**.

* **TreeSet** almacena **objetos únicos**, y gracias a su estructura de árbol el *acceso es sumamente **rápido**.

### Ahora si analizamos la familia List, de ella se desprenden:

* **Clase ArrayList** Puede tener duplicados, no está sincronizada por lo tanto es más rápida.

* **Clase Vector:** Es sincronizada, los datos están más seguros pero es más lento.

* **Clase LinkedList:** Puede contener elementos duplicados, no está sincronizada (es más rápida) al ser una estructura de datos doblemente ligada podemos añadir datos por encima de la pila o por debajo.

### Sigamos con Map:

Lo primero que debes saber es que tiene tres implementaciones:

HashTable
LinkedHashMap
HashMap
SortedMap ➡️ TreeMap
  
![alt](https://static.platzi.com/media/user_upload/img3-105ac91c-3d09-4ed5-a5cc-3b0a21f3c12b.jpg)

La interfaz Map no hereda de la interfaz Collection porque representa una estructura de datos de Mapeo y no de colección simple de objetos. Esta estructura es más compleja, pues cada elemento deberá venir en pareja con otro dato que funcionará como la llave del elemento.

Map

Donde K es el key o clave
Donde V es el value o valor

**Podemos declarar un map de la siguiente forma:**

```java
Map<Integer, String> map = new HashMap<Integer, String>();
Map<Integer, String> treeMap = new TreeMap<Integer, String>();
Map<Integer, String> linkedHashMap = new LinkedHashMap<Integer, String>();
```

Como observas solo se puede construir el objeto con tres elementos que implementan de ella: HashMap, TreeMap y LinkedHashMap dejando fuera HashTable y SortedMap. SortedMap estará fuera pues es una interfaz y HashTable ha quedado deprecada pues tiene métodos redundantes en otras clases. Mira la funcionalidad de cada uno.

Como te conté hace un momento Map tiene implementaciones:

* **HashMap:** Los elementos no se ordenan. No aceptan claves duplicadas ni valores nulos.
* **LinkedHashMap:** Ordena los elementos conforme se van insertando; provocando que las búsquedas sean más lentas que las demás clases.
* **TreeMap:** El Mapa lo ordena de forma “natural”. Por ejemplo, si la clave son valores enteros (como luego veremos), los ordena de menos a mayor.

Para iterar alguno de estos será necesario utilizar la interface **Iterator** y para recorrerlo lo haremos un bucle while así como se muestra:

**Para HashMap**
```java
// Imprimimos el Map con un Iterador
Iterator it = map.keySet().iterator();
while(it.hasNext()){
  Integer key = it.next();
  System.out.println("Clave: " + key + " -> Valor: " + map.get(key));
}
```

**Para LinkedHashMap**

```java
// Imprimimos el Map con un Iterador
Iterator it = linkedHashMap.keySet().iterator();
while(it.hasNext()){
  Integer key = it.next();
  System.out.println("Clave: " + key + " -> Valor: " + linkedHashMap.get(key));
}
```

**Para TreeMap**

```java
// Imprimimos el Map con un Iterador
Iterator it = treeMap.keySet().iterator();
while(it.hasNext()){
  Integer key = it.next();
  System.out.println("Clave: " + key + " -> Valor: " + treeMap.get(key));
}
```

***

## Clases  Abstractas

A veces NO necesitamos implementar todos los métodos de una clase heredada o interfaz. No siempre necesitamos crear instancias o implementar todos los métodos heredados de una clase padre, así como tampoco podremos necesitamos algún método de nuestras interfaces, pero estas nos obligan a escribir el código de todos los métodos que definimos genéricamente.

Afortunadamente, las Clases Abstractas resuelven todos estos problemas. Son una combinación entre interfaces y herencia donde no implementaremos todos los métodos ni tampoco crearemos instancias.

Las **CLASES ABSTRACTAS** son aquellas clases que tienen por lo menos un método abstracto, es decir, un método no definido. Y además no pueden ser instanciadas, únicamente pueden ser heredadas (extends). Para definir una clase abstracta usamos:

```java
public abstract class Figura {
  // ...
}

class Triangulo extends Figura {
  // ...
}
```

## Miembros Abstractos

Los **Métodos Abstractos** son los métodos que debemos implementar obligatoriamente cada vez que usemos nuestras clases abstractas, mientras que los métodos que no sean abstractos van a ser opcionales.

```java
        public abstract class Figura {
        abstract void dibujar(); // obligatorio
        void dibujar3D(); // no es obligatorio
        }

        class Triangulo extends Figura {
        void dibujar() {
            // Instrucciones para dibujar el triángulo...
        }
        }
```

Recuerda los métodos abstractos solo se pueden implementar en clases abstractas. Y las clases abstractas no necesitan ser instanciadas para ser implementadas.

## Clases anonimas

Las **Clases Anónimas** son una forma de instanciar clases abstractas sin necesidad de usar sus clases hijas. Pero este tipo de instanciación tiene algunas restricciones: el ciclo de vida de estas instancias NO es duradero, no las tendremos disponibles durante toda la ejecución del programa.

```java
// Clase Abstracta:
public abstract class Figura {
  abstract void dibujar();
}

// Clase Anónima:
User user = new User() {
  @Override
  public void showDataUser() {
    // Instrucciones...
  }
};
```



