```text
██      ███████  █████  ██████  ███    ██ ██ ██   ██ 
██      ██      ██   ██ ██   ██ ████   ██ ██  ██ ██  
██      █████   ███████ ██████  ██ ██  ██ ██   ███   
██      ██      ██   ██ ██   ██ ██  ██ ██ ██  ██ ██  
███████ ███████ ██   ██ ██   ██ ██   ████ ██ ██   ██ 
```

**Learnix** es una plataforma digital diseñada para mejorar la gestión y entrega de calificaciones escolares, ofreciendo una experiencia eficiente, clara y accesible tanto para docentes como para estudiantes y familias.  
El proyecto busca reemplazar los sistemas tradicionales, muchas veces lentos o poco intuitivos, con una solución más moderna y organizada.  
Learnix permite registrar, consultar y actualizar notas de manera centralizada, facilitando la comunicación y seguimiento académico dentro de las instituciones educativas.

---

## 🚀 Comenzando

Estas instrucciones te permitirán obtener una copia del proyecto funcionando en tu máquina local para propósitos de desarrollo y prueba.

> Este proyecto cuenta con dos componentes principales:
> - **Backend:** API desarrollada en Node.js con Express y Sequelize.  
> - **Frontend:** Interfaz construida con React y Vite.

---

## 📋 Pre-requisitos

Asegúrate de tener instalados:

- [Node.js](https://nodejs.org/) (v18 o superior)
- [PostgreSQL](https://www.postgresql.org/) (v14 o superior)
- [Git](https://git-scm.com/)
- Un editor de texto, como [VS Code](https://code.visualstudio.com/)

---

## 🔧 Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/InmanageCompany/Learnix.git
cd Learnix
```

### 2. Configurar el Backend
```bash
cd api
npm install
```

Crear la base de datos "learnix" en PostgreSQL.
```sql
-- Crear la base de datos
CREATE DATABASE learnix;

-- Conectarse a la base de datos
\c learnix
```

Ejecutar el servidor:
```bash
npm start
```
El backend se ejecutará en http://localhost:3000

### 3. Configurar el Frontend
En otra terminal:
```bash
cd client
npm install
npm run dev
```
El frontend se ejecutará en http://localhost:5173

---

## ⚙️ Ejecutando las pruebas

Actualmente el proyecto no cuenta con un sistema automatizado de pruebas, pero se recomienda realizar pruebas manuales desde el navegador y herramientas como Postman para verificar los endpoints del backend.

---

## 🛠️ Construido con

### Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

### Frontend
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Material UI (MUI)](https://mui.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Axios](https://axios-http.com/)
- [React Router](https://reactrouter.com/)

---

## 🖇️ Contribuyendo

Por el momento las contribuciones externas están deshabilitadas, pero el equipo interno puede crear Pull Requests hacia la rama development siguiendo las pautas del repositorio.

---

## 📖 Wiki

La documentación interna del proyecto y las guías de trabajo en ramas se encuentran dentro del repositorio. (aun se debe hacer esto jijijija)

---

## 📌 Versionado

El proyecto no sigue aún una convención formal de versionado, pero se planifica adoptar [SemVer](https://semver.org/) en futuras versiones.

---

## ✒️ Autores
- Matías Miranda Medina
- Axel Morales
- William Romero
- Maximiliano Fernández
- Jhon Mayta

---

## 📄 Licencia

Este proyecto no cuenta con licencia pública actualmente.
Todos los derechos son reservados por el equipo desarrollador de Learnix.