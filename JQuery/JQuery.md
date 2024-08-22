# Introduccion a JQuery
 

## Que es JQuery
JQuery es una biblioteca de JavaScript que simplifica la manipulacion del DOM (Document Objet Model), el manejo de envetos, las animaciones y las interacciones AJAX.

## Incluir JQuery a un proyecto

Para usar JQuery, primero debes incluirlo en tu proyecto. Puedes hacerlo de dos formas:

1. Desde una CDN
Agregar la siguiente línea dentro de la seccion `<head>` de tu HTML:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

2. Descargar JQuery
Descarga jQuery desde la página oficial y guarda el archivo en tu proyecto. Luego, inclúyelo con una etiqueta `<script>`:

```html
<script src="ruta/a/tu/jquery.min.js"></script>
```

## Estructura Básica de JQuery

El código JQuery generalmente se escribe dentro de un bloque `$(document).ready()`. Esto asegura que el código se ejecute solo después de que el DOM este completamente cargado.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function(){
            // Aquí va tu código jQuery
        });
    </script>
</head>
<body>
    <!-- Tu contenido HTML -->
</body>
</html>
```

## Selección de Elementos
La selección de elementos en JQuery es similar a la de CSS. Usa el símbolo `$` seguido de un selector.

```js
$(document).ready(function(){
    // Selecciona todos los párrafos
    $("p").css("color", "red");

    // Selecciona un elemento con id "miId"
    $("#miId").text("Nuevo texto");

    // Selecciona todos los elementos con la clase "miClase"
    $(".miClase").hide();
});
```

## Manipulación del DOM
JQuery facilita la manipulacion del DOM. Aquí algunos ejemplos:

1. Cambiar el contenido de texto o HTML
```js
$("#miId").text("Nuevo texto"); // Cambia el texto
$("#miId").html("<strong>Texto en negrita</strong>"); // Cambia el HTML
```

2. Añadir y eliminar clases
```js
$("#miId").addClass("nuevaClase");
$("#miId").removeClass("miClase");
```

3. Mostrar y ocultar elementos
```js
$(".miClase").hide(); // Oculta
$(".miClase").show(); // Muestra
```

## Manejo de Eventos

JQuery simplifica la gestión de eventos como clicks, cambios, etc.

```js
$(document).ready(function(){
    $("#miBoton").click(function(){
        alert("Botón clickeado");
    });

    $("input").change(function(){
        console.log("El valor ha cambiado");
    });
});
```

## Efectos y Animaciones
JQuery ofrece varios métodos para animar elementos

```js
// Deslizar hacia arriba y hacia abajo
$("#miElemento").slideUp();
$("#miElemento").slideDown();

// Fundido
$("#miElemento").fadeIn();
$("#miElemento").fadeOut();
```

## AJAX con JQuery
Realizar solicitudes AJAX es sencillo con JQuery
```js
$.ajax({
    url: 'ruta/al/archivo',
    method: 'GET',
    success: function(response) {
        console.log(response);
    },
    error: function(error) {
        console.error(error);
    }
});
```