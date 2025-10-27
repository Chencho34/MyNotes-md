
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

# Como configurar entorno de desarrollo TypeScript con Node.js y Express



## Configuracion de entorno

### 1. 📁 Inicializar el proyecto
Crea una carpeta para tu proyecto y ejecuta:



```bash
mkdir mi-backend
cd mi-backend
npm init -y
```

Esto creará un ``package.json`` con configuraciones predeterminadas.

### 2. 📦 Instalar dependencias

Dependencias principales:

```bash
npm install express cors dotenv pg morgan
```

Dependencias de desarrollo:
```bash
npm install -D typescript ts-node-dev @types/express @types/node @types/cors @types/morgan  @types/pg

```

### 3. 🛠️ Configurar TypeScript

Cada proyecto de TypeScript utiliza un archivo de configuración para gestionar diversas configuraciones. Este archivo, que funciona como archivo de configuración de TypeScript, describe estas opciones predeterminadas y ofrece la flexibilidad de modificar o personalizar la configuración del compilador según sus necesidades.tsconfig.json

**Inicializa TypeScript:**
El archivo suele ubicarse en la raíz del proyecto. Para generarlo, use el siguiente comando para iniciar el compilador de TypeScript:``tsconfig.json`` ``tsc``

```bash
npx tsc --init
```

Veras que se crea el archivo ``tsconfig.json`` en la raíz del directorio de su proyecto. Este archivo contiene las opciones predeterminadas del compilador, como se muestra en la imagen a continuación:

```ts
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",   
    "outDir": "/dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "noUnusedParameters": true,
    "noUnusedLocals": true,
    "noImplicitReturns": true
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules",
    "dist"
  ]
}
```

### 4. 🚀 Configurar el package.json

Agrega estos scripts para facilitar el desarrollo:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "node dist/index.js",
  "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
  "build": "tsc --project tsconfig.json"
}
```

* ``npm run dev``: Inicia el servidor en modo desarrollo (con recarga automática).
* ``npm run build``: Compila TypeScript a JavaScript en la carpeta dist.
* ``npm start:`` Ejecuta el código compilado (para producción).

### 5. Configuracion de Express (``src/index.ts``)

```ts
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json()) 
app.use(morgan('dev'))

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} http://localhost:3000/`)
})

```

### 6. 🛡️ Variables de entorno (``.env``)
Desde la raiz del proyecto crea un archivo .env donde almacenaras las siguiente variables de entorno.

```bash
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_de_tu_base
```

Agrega ``.env`` a ``.gitignore``:

```bash
node_modules/
dist/
.env
```

### 7. 🗄️ Conexión a PostgreSQL (``src/config/db.ts``)

```ts
import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

export const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})
```

### 8. 💻Levantando Servidor

Ejecuta el backeknd con el siguiente comando:
```bash
npm run dev
```

## Arquitectura del poyecto

```
src/
├── config/
│   └── db.config.ts
├── controllers/
│   └── user.controller.ts
├── dto/
│   └── user.dto.ts
├── models/
│   └── user.model.ts
├── routes/
│   └── user.routes.ts
├── schemas/
│   └── user.schema.ts
├── services/
│   └── user.service.ts
├── app.ts (o index.ts)
└── .env
```
### 🗃️ Diagrama de Flujo de la Arquitectura
```
Request → Routes → Controllers → Services → Models (DB) → Response
                │         │
                │         └── DTOs (Validación entrada/salida)
                │
                └── Schemas (JOI - Validación de datos)
```

* **Request** → ``POST /users`` (body: ``{ name, email }``).
* **Routes**: Llama al middleware de validación (JOI) y luego al controller ``createUser``.
* **Controller**: Extrae datos del body, llama a ``userService.createUser(userData)``.
* **Service**: Usa el DTO para validar tipos, luego interactúa con ``UserModel.create()``.
* **Model**: Guarda en la DB y devuelve el nuevo usuario.
* **Response**: El controller envía ``201 Created`` con los datos del usuario.

## Extras recomendados

### Eslint:

ts standard

```bash
npm install ts-standard -D
```

agregar script en el package.json

```bash
"devDependencies": {
  ...
},
"eslintConfig": {
  "extends": [
    "standard-with-typescript"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

### ZOD o JOI

### Sequielize

### swager

