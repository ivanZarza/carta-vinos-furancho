<<<<<<< HEAD
# 🍷 Carta de Vinos - Bar Furancho

Una aplicación web estática para consultar la carta de vinos del Bar Furancho, diseñada específicamente para uso de camareros y personal del bar.

## 📋 Descripción

Esta aplicación permite a los camareros consultar de forma rápida y eficiente:
- **Vinos Blancos**: Catálogo completo con características y notas de cata
- **Vinos Tintos**: Selección de tintos con información detallada
- **Denominaciones de Origen**: Organización por regiones vinícolas
- **Información General**: Conocimientos fundamentales sobre vinos

## 🚀 Características

- ✅ **Interfaz intuitiva** - Diseñada para uso rápido en entorno de trabajo
- ✅ **Búsqueda avanzada** - Encuentra vinos por nombre, bodega, denominación o uva
- ✅ **Filtros dinámicos** - Filtra por denominación de origen y tipo de uva
- ✅ **Responsive** - Funciona en móviles, tablets y ordenadores
- ✅ **Sin dependencias** - HTML, CSS y JavaScript puro
- ✅ **Carga rápida** - Optimizado para uso en dispositivos del bar

## 🏗️ Estructura del Proyecto

```
furancho/
├── index.html              # Aplicación principal
├── styles/
│   ├── main.css            # Estilos base y layout
│   └── components.css      # Estilos de componentes
├── js/
│   ├── data.js            # Base de datos de vinos
│   ├── components.js      # Componentes reutilizables
│   └── app.js            # Lógica principal de la aplicación
├── debug.html            # Herramientas de diagnóstico
├── test.html             # Tests básicos
└── test-denominaciones.html # Test de denominaciones dinámicas
```

## 📊 Base de Datos

La aplicación incluye información completa sobre:
- **4 Vinos Blancos** (Quinta do Couselo, Louro, O Gran Mein, Ribeiro Furancho)
- **5 Vinos Tintos** (Ermita del Monte, Iceni, Arx, Abadía de Gomariz, Bancales de los Alcornoques)
- **Denominaciones**: Rías Baixas, Valdeorras, Ribeiro
- **Variedades de Uva**: 7 blancas y 11 tintas
- **Información Técnica**: Levaduras, fermentación, aromas, barricas, etc.

## 🔧 Instalación y Uso

### Uso Local
```bash
# Clonar el repositorio
git clone https://github.com/ivanZarza/carta-vinos-furancho.git
cd carta-vinos-furancho

# Abrir con servidor local (opcional)
python3 -m http.server 3000
# o simplemente abrir index.html en el navegador
```

### Despliegue Web
1. Subir todos los archivos a tu servidor web
2. Acceder a `index.html`
3. ¡Listo para usar!

## 💻 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Diseño responsive con Grid y Flexbox
- **JavaScript ES6** - Lógica de aplicación (clases, módulos, template literals)
- **CSS Custom Properties** - Sistema de diseño consistente

## 🎨 Diseño

- **Colores principales**: Burgundy (#722f37) y Gold (#c9a96e)
- **Tipografía**: Segoe UI, sistema de fuentes nativas
- **Iconos**: Emojis para mejor accesibilidad
- **Layout**: Mobile-first, responsive design

## 📱 Funcionalidades

### Navegación
- Navegación por pestañas (Blancos, Tintos, Denominaciones, Info)
- Navegación sticky que se mantiene visible

### Filtros
- **Búsqueda**: Campo de texto para buscar por nombre, bodega, etc.
- **Denominación**: Filtro dropdown por DO
- **Uva**: Filtro dropdown por variedad
- **Filtros dinámicos**: Se actualizan según el contenido disponible

### Tarjetas de Vino
Cada vino muestra:
- Nombre y bodega
- Precio y graduación
- Denominación de origen
- Tipo de uva
- Características organolépticas (color, aroma, sabor)
- Notas de cata del sommelier
- Información de crianza y producción

## 🔄 Actualizaciones de Datos

Para actualizar la información de vinos:
1. Editar el archivo `js/data.js`
2. Modificar los objetos en `wineData`
3. El sistema es completamente dinámico - los cambios se reflejan automáticamente

## 🧪 Testing

El proyecto incluye archivos de test:
- `debug.html` - Diagnóstico completo del sistema
- `test.html` - Tests básicos de carga
- `test-denominaciones.html` - Test de funcionalidad dinámica

## 🔍 SEO Optimizado

- ✅ Meta tags específicos para camareros
- ✅ Keywords exclusivas: **"vinofuranchosevilla"**
- ✅ Open Graph para redes sociales
- ✅ URL canónica: https://ivanzarza.github.io/carta-vinos-furancho/

## 📝 Contribución

Para contribuir al proyecto:
1. Fork del repositorio
2. Crear una rama para tu feature
3. Commit de los cambios
4. Push a la rama
5. Crear un Pull Request

## 📄 Licencia

Este proyecto está desarrollado para uso exclusivo del Bar Furancho.

## 👥 Desarrollado por

**GitHub Copilot** - Asistente de programación IA

---

*Última actualización: Septiembre 2025*
=======
# carta-vinos-furancho
>>>>>>> 54ce2390952e052b5ec9d97632abd40f82ef3f44
