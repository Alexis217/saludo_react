# 📝 Aplicación de Validación y Saludo Personalizado

## 🚀 Descripción del Proyecto

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

Aplicación web que valida nombres de usuario contra un backend y muestra un saludo personalizado si el nombre es válido.

## ✨ Características Principales

- 🔍 Validación de nombres de usuario
- 👋 Saludo personalizado
- 🌐 Conexión frontend-backend
- ⚛️ Desarrollado con React
- 🛠️ Backend con Node.js y Express

## 🛠️ Tecnologías Utilizadas

| Tecnología                                                                                               | Descripción                                    |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=flat)                | Biblioteca frontend para interfaces de usuario |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white&style=flat)          | Entorno de ejecución JavaScript                |
| ![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=flat)          | Framework web para Node.js                     |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat) | Lenguaje de programación principal             |

## 🚀 Cómo Ejecutar el Proyecto

### 🔧 Requisitos Previos

- ![Node.js](https://img.shields.io/badge/Node.js-v16+-brightgreen) instalado
- ![pnpm](https://img.shields.io/badge/pnpm-v8+-blue) instalado

### ⚙️ Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Alexis217/saludo_react.git
   ```

2. Instalar dependencias del backend:

   ```bash
   cd server
   pnpm install
   ```

3. Instalar dependencias del frontend:
   ```bash
   cd ..
   pnpm install
   ```

### ▶️ Ejecución

1. Iniciar el servidor backend:

   ```bash
   cd server
   node server.js
   ```

2. En otra terminal, iniciar el frontend:

   ```bash
   desde raiz del proyecto
   pnpm run dev
   ```

3. Abrir en el navegador:
   🌐 [http://localhost:5173](http://localhost:5173)

## 🌟 Endpoints del API

| Método | Endpoint           | Descripción                                    |
| ------ | ------------------ | ---------------------------------------------- |
| GET    | `/validar/:nombre` | Valida si el nombre está en la lista permitida |
| GET    | `/saludo/:nombre`  | Devuelve un saludo personalizado               |
