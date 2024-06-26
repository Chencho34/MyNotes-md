
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
  *{
    font-family: 'Poppins';
    margin: 0;
    padding: 0;
  }
  h1 {
    text-align: center;
  }
</style>

<h1>SQL</h1>

|  Hola aqui yacen todos mis apuntes y conceptos sobres los fundamentos SQL (Structured Query Language) Lenguaje de Estructuras Organizadas. |
|---|

---

## ¿Que es una base de datos?

---

Una base de datos es una recopilación organizada de informacíon o datos estructurados, que normalmente se almacena de forma electrónica en un sistemas informático.

Una base de datos es controlada por un sistema de gestion de bases de datos (DBMS). El conjunto, los datos y el DBMS, junto con las aplicaciones asociadas a ellos, reciben el nombre de sistema de bases de datos o simplemente base de datos.


## ¿Que es un sistema de gestion de bases de datos (DBMS)?

---

Una base de datos requiere un programa de software de bases de datos conocido como sistema de gestión de bases de datos (DBMS). 

- Sirve como interfaz entre la base de datos.

- Permite recuperar, actualizar y gestionar cómo se organiza la informaicón.

- Facilita la supervisión y el control de las bases de datos.

- Ofrece operaciones administrativas como la supervisión del rendimiento, el ajuste, la copia de seguridad y la recuperacion.

**Algunos ejemplos de software de bases de datos o DBMS mas populares:**

- MySQL:
- MicrosoftSQL:
- PostgreSQL:
- MongoDB:
- Oracle Databse:


## ¿Que es SQL?
---
SQL (Strucutured Query Language) es un lenguaje de programacion diseñado para administrar y manipular bases de datos relacionales. El lenguaje SQL se utiliza principalmente para:

* **Gestionar datos:** 
Permite manipular y administrar datos de la DB mediante operaciones como consultas, inserciones, actualizaciones y eliminaciones de informacion.

* **Interactuar con DB:** 
Facilita la comunicacion con los DBMS relacionales como MySQL, PostgreSQL, SQL, Microsoft SQL Server y Oracle.

* **Administrar bases de datos:** 
Utilizado para crear y modificar estructuras de DB, definir tablas, establecer relaciones entre tablas y gestionar permisos de acceso.

### Modelo Entidad-Relacion (ER):
---
El modelo Entidad-Relacion es un enfoque para diseñar bases de datos que describe las entidades (objetos o conceptos del mundo real) y las relaciones entre ellas. Estructura básica:

* **Entidades:**
Representan objetos o conceptos del mundo real, como personas, lugares o cosas. Cada entidad se representa como un rectángulo en el diagrama y tiene atributos que describen sus caracteristicas.

* **Atributos:**
Son las propiedades o caracteristicas de una entidad. Por ejemplo, en una entidad "Persona", los atribustos podrian ser nombre, edad, direccion, etc.

* **Relaciones:**
Representa cómo se relacionan las entidades entre si. Pueden ser uno a uno, uno a muchos o muchos a muchos. Se muestran mediante líneas que conectan las entidades.

* **Claves Primarias o Foráneas:**
En un modelo ER, las claves primarias son identificadores unicos para cada entidad, mientras que las claves foráneas establecen vinculos entre diferentes entidades.

# Crear DB

```sql
CREATE DATABASE "db"
```

# Crear Tablas

```sql
CREATE TABLE "users" (
  "id_user" SERIAL PRIMARY KEY,
  "nombre" TEXT,
  "apellido" TEXT,
  "edad" INTEGER,
  "id_curso" INTEGER
);

CREATE TABLE "cursos" (
  "id_curso" INT PRIMARY KEY,
  "nombre_curso" TEXT,
  "id_profesor" INTEGER,
);

-- Crear tabla de Profesores
CREATE TABLE "profesores" (
  "id_profesor" INT PRIMARY KEY,
  "nombre_profesor" TEXT,
  "Especialidad" TEXT
);
```

# FOREIGN KEY 

Las claves foráneas o "foreign keys" en una base de datos son columnas que establecen una relación entre dos tablas. Su propósito principal es mantener la integridad referencial, lo que significa que garantizan que cada valor en una columna de una tabla apunta a un valor válido en otra tabla.

Algunos propósitos clave de las claves foráneas son:

1. **Establecer relaciones entre tablas:** Permiten definir y expresar relaciones entre diferentes entidades en la base de datos, lo que facilita las consultas y operaciones que involucran datos de múltiples tablas.

2. **Optimización de consultas:** Las claves foráneas se utilizan para realizar operaciones de JOIN entre tablas relacionadas, lo que facilita la extracción de datos relacionados de manera eficiente.

```sql
ALTER TABLE users -- nombre de la tabla
ADD CONSTRAINT fk_cursos --nombre de la fk
FOREIGN KEY (id_curso) -- columna en comun
REFERENCES cursos(id_curso) -- columna en comun 

ALTER TABLE cursos 
ADD CONSTRAINT fk_profesores 
FOREIGN KEY (id_profesor) 
REFERENCES profesores(id_profesor)
```

# Insertar Datos

```sql
INSERT INTO "users" (nombre, apellido, edad)
VALUES ('Jose Armando','Cre scencio Rico',22),
       ('Maria Jose','Crescencio Rico',23)
```

# Modificar datos de la fila de una tabla

```sql
UPDATE users
SET nombre = 'Chencho',
  apellido = 'Crescencio',
  edad = 22
WHERE id_user = 8;
```

# Eliminar fila de una tabla

```sql
DELETE FROM users WHERE id_user = 12;
```

# INNER JOIN:

## INNER JOIN entre 2 tablas

Para realizar un INNER JOIN entre la tabla users y la tabla cursos, se necesita identificar una columna común en ambas tablas que sirva como clave para unirlas. Supongamos que ambas tablas tienen una columna llamada id_curso que se relaciona entre sí.

|Tabla users|Tabla cursos|
------------|------------|
|id_user    |*id_curso*  |
|nombre     |nombre_curso|
|apellido   |
|edad       |
|*id_curso* |

```sql
SELECT * FROM tabla1
INNER JOIN tabla2 ON tabla1.columna_comun = tabla2.columna_comun;
```

```sql
SELECT nombre, nombre_curso, id_profesor FROM users 
INNER JOIN cursos ON users.id_curso = cursos.id_curso;
-- WHERE si se requiere condicionar que fila mostrar
```

## INNER JOIN entre 3 tablas

Para realizar un INNER JOIN entre la tabla users, la tabla cursos y la tabla profesores se necesita identificar una columna común entre las tablas que sirva como clave para unirlas. Supongamos que ambas tablas tienen una columna llamada id_curso que se relaciona entre sí.

la tabla **user** se relaciona con la tabla **cursos** la cual esta relacionada a un **profesor**

|Tabla users|Tabla cursos |Tabla profesores
------------|-------------|-----------------
|id_user    |*id_curso*   |*id_profesor*
|nombre     |nombre_curso |nombre_profesor
|apellido   |*id_profesor*|especialidad
|edad       |
|*id_curso* |

```sql
SELECT * FROM tabla1
INNER JOIN tabla2 ON tabla1.columna_comun = tabla2.columna_comun
INNER JOIN tabla3 ON tabla2.columna_comun = tabla3.columna_comun;
```

```sql
SELECT nombre, nombre_curso, nombre_profesor, especialidad FROM users 
INNER JOIN cursos ON users.id_curso = cursos.id_curso
INNER JOIN profesores ON cursos.id_profesor = profesores.id_profesor
-- WHERE si se requiere condicionar que fila mostrar
```


