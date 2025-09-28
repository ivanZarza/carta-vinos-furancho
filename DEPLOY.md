# Despliegue - Carta de Vinos Bar Furancho

Este proyecto está listo para desplegar en múltiples plataformas.

## 🚀 Opciones de Despliegue

### 1. GitHub Pages (Recomendado)
```bash
# Crear repositorio en GitHub y subir el código
git remote add origin https://github.com/TU_USUARIO/furancho-vinos.git
git push -u origin main

# Activar GitHub Pages desde la configuración del repositorio
# Settings > Pages > Source: Deploy from branch (main)
```

### 2. Netlify
- Arrastrar la carpeta del proyecto a netlify.app/drop
- O conectar directamente con GitHub

### 3. Vercel
- Importar proyecto desde GitHub en vercel.com
- Despliegue automático con cada push

## 📁 Archivos Necesarios para Producción

Los siguientes archivos son esenciales:
- `index.html` - Aplicación principal
- `js/` - Toda la carpeta JavaScript
- `styles/` - Toda la carpeta de estilos

Archivos opcionales (para testing):
- `debug.html`, `test*.html` - Solo para desarrollo

## 🔧 Configuración de Servidor

Para servidores web estáticos, no se requiere configuración especial.
La aplicación funciona completamente del lado del cliente.

## 🌐 URL de Producción

Una vez desplegado, la aplicación estará disponible en:
- GitHub Pages: `https://TU_USUARIO.github.io/furancho-vinos/`
- Netlify: `https://NOMBRE-GENERADO.netlify.app/`
- Vercel: `https://PROYECTO.vercel.app/`
