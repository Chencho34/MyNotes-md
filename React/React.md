# ¿Que es React?

React es una libreria JavaScript que permite crear interfaces de usuario. Permite componer IUs complejas de pequeñas y aisladas piezas de código llamadas `Componentes`.

* Libreria 
* Declarativa
* Eficiente
* Predecible
* Componentesñ
* Server-side con Node

## Componentes

Usamos componentes para decirle a React lo que queremos que se vea en la pantalla.

Un componente acepta parámetros, llamados `props` ("propiedades"), y retorna una jerarquía de vistas a mostrar a través del método `render`

El método `render` retorna una descripción de lo que quieres ver en la pantalla.

Cada componente de React está encapsualdo y puede operar independientemente.

## Babel

Permite 

## JSX

JSX es una extensión de sintaxis para JavaScript que permite escribir marcas similares a HTML dentro de una archivo JavaScript.

Facilita la escritura de estas estructuras. 

JSX viene con todo el poder de JavaScript. Puedes pones culaquier espresión de JavaScript en el interior de las llaves dentro de JSX.

Cada elemento de React es un objeto de JavaScript que se puede almacenar en una variable o pasar alrededor del programa.

#### Elementos sin JSX

```js
const button1 = React.createElement('button', { "data-id": 123}, 'boton1');
const button2 = React.createElement('button', { "data-id": 456}, 'boton2');
const button3 = React.createElement('button', { "data-id": 789}, 'boton3');

const div = React.createElement(React.Fragment, null, [button, button2, button3]);

root.render(div);
```

#### Elementos con JSX

```jsx
<React.Fragment>
    <button dataId="123">boton1</button>
    <button dataId="456">boton2</button>
    <button dataId="789">boton3</button>
</React.Fragment>
```

#### Diferencia entre elementos y componentes:

los componenetes crean los elementos y los elementos son los que renderiza react

## Conseptos necesarios de Java Script para introducirse a React
* Generar la base sobre JavaScript
* Constantes y variables Let
* Template String
* Objetos literales
* Arreglos
* Desestructruación * (sumamente importante)
* Promesas
* Fetch API
* Ternarios
* Async - Await

## Create React App

Create React App es una forma oficialmente admitida de crear aplicaciones React de una sola página. Ofrece una configuración de construcción moderna sin configuración.

```
npx create-react-app my-app
cd my-app
npm start
```



!!! note Create
    https://create-react-app.dev/


## Renderizado condicional:

El renderizado condicional en JSX permite renderizar diferentes componentes o elementos según una condicíon. Hay varias formas de hacerlo:

* ### Operador ternario:

  ```jsx
  <div>
    {isLoggedIn ? (
      <p>Bienvenido de nuevo</p>
    ) : (
      <button onClick={handleLogin}>Iniciar sesión</button>
    )}
  </div>
  ```
  
  En este ejemplo, se utiliza el operador ternario para renderizar un párrafo "Bienvenido de nuevo" si la variable 'isLoggedIn' es verdadera, de lo contrario, se muestra el botón "Iniciar sesión".

* ### Operador lógico &&:

  ```jsx
  <div>
    {isLoggedIn && <p>Bienvenido de nuevo</p>}
  </div>
  ```

  En este ejmplo, se utiliza el operador lógico && para renderizar el elemento 'p' solo si 'isLoggedIn' es verdadero.

* ### Declaracion if:

  ```jsx
  <div>
    {isLoggedIn ? (
        <p>Bienvenido de nuevo</p>
    ) : null}
  </div>
  ```

  En este ejemplo, se utiliza una declaración if para renderizar el elemento 'p' soli si 'isLoggedIn' es verdadero. Si no es así, simplemente no se renderiza nada. 



Nota

El atributo onClick del elemento <button> del DOM tiene un significado especial para React porque es un componente pre-construido. Para componentes personalizados como Square, la nomenclatura la decides tú. Podríamos darle cualquier nombre al prop onClick de Square o al método handleClick de Board, y el código funcionaría de la misma forma. En React, sin embargo, es una convención usar los nombres on[Evento] para props que representan eventos y handle[Evento] para los métodos que manejan los eventos.