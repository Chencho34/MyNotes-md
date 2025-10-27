
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
  *{
    /* font-family: 'Open Sans' */
    font-family: 'Poppins';

    /* box-sizing: border-box;
    padding: 0;
    margin: 0; */
  }
  h1 {
    text-align: center;
  }
  h2 {

  }
</style>

# Como configurar sequelize en Express + postgres

## Configuracion de entorno

Para establecer una coneccion con sequelize en el proyecto necesitas:

### 1. 📁 Instalar dependencias


```bash
npm install sequelize pg pg-hstore
npm install --save-dev @types/sequelize
```

### 2 Configurar sequelize

Crear archivo de configuracion ``db`` de la siguiente manera:

```ts
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    dialect: 'postgres'
  }
)

export default sequelize
```

### 3 Agregar variables de entorno

Crear archivo ``.evn``
```
PORT=3000
DB_NAME=
DB_UESR=
DB_PASSWORD=
DB_HOST=
```

### 4 Probar la coneccion

Probar la coneccion en el archivo ``index.ts``

```ts
// ...existing code...
import sequelize from './config/db'

sequelize.authenticate()
  .then(() => {
    console.log('connected')
  })
  .catch(() => {
    console.erro('unable to connect to the database')
  })
```
or
```ts
// ...existing code...
import sequelize from './config/db'

sequelize.sync()
  .then(() => {
    console.log('connected')
  })
  .catch(() => {
    console.erro('unable to connect to the database')
  })
```