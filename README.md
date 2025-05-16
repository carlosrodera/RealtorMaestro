# RealtorMaestro

Aplicación para agentes inmobiliarios con backend serverless y frontend React.

## Estructura del proyecto

El proyecto sigue una estructura optimizada para Vercel, separando completamente el backend (API) y el frontend:

```
/api           # Funciones serverless independientes en CommonJS puro
  health.js    # Endpoint para verificar estado del servidor
  users.js     # Endpoint para obtener usuarios
/client        # Aplicación React con Material UI
  /public      # Archivos estáticos
  /src         # Código fuente de React
    /components # Componentes reutilizables
    /pages      # Páginas de la aplicación
package.json   # Configuración mínima del proyecto
vercel.json    # Configuración para despliegue en Vercel
```

## Características

- **Backend**: APIs serverless independientes en CommonJS
- **Frontend**: React con Material UI para una interfaz moderna
- **Despliegue**: Optimizado para Vercel con configuración específica

## Desarrollo local

### Requisitos previos

- Node.js 18 o superior
- npm o yarn
- CLI de Vercel (opcional para desarrollo local)

### Configuración

1. Clonar el repositorio

```bash
git clone https://github.com/carlosrodera/RealtorMaestro.git
cd RealtorMaestro
```

2. Instalar dependencias del frontend

```bash
cd client
npm install
```

3. Iniciar el frontend en modo desarrollo

```bash
npm start
```

4. Para desarrollo con las APIs locales, instala Vercel CLI

```bash
npm install -g vercel
vercel dev
```

## Despliegue en Vercel

Para desplegar esta aplicación en Vercel:

1. Conecta tu repositorio de GitHub con Vercel
2. Selecciona el repositorio en el dashboard de Vercel
3. No modifiques ninguna configuración en el panel, ya que el archivo `vercel.json` tiene toda la configuración necesaria

## Estructura de las APIs

Cada API es totalmente independiente y no comparte dependencias con otras funciones:

- **`/api/health.js`**: Verifica el estado del servidor
- **`/api/users.js`**: Devuelve una lista de usuarios

## Frontend

El frontend está construido con React 18 y Material UI, proporcionando una interfaz de usuario moderna y responsive. Las principales páginas son:

- **Dashboard**: Muestra el estado de la API y usuarios
- **Propiedades**: Lista de propiedades inmobiliarias
- **Clientes**: Gestión de clientes
- **Configuración**: Ajustes del sistema

## Notas importantes

- Las APIs no tienen dependencias entre sí
- Se utiliza CommonJS puro para evitar problemas con Vercel
- La configuración de rutas en vercel.json gestiona tanto el frontend como el backend

## Licencia

MIT
