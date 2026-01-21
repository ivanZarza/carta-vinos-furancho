// Aplicación principal - Maneja la navegación y filtros

class WineApp {
    constructor() {
        this.currentSection = 'blancos';
        this.currentWines = [];
        this.filters = {
            search: '',
            denominacion: '',
            uva: ''
        };
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadSection('blancos');
    }

    bindEvents() {
        // Navegación
        document.querySelectorAll('.nav__btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const section = e.target.dataset.section;
                this.loadSection(section);
                this.updateActiveNav(e.target);
            });
        });

        // Filtros
        const searchInput = document.getElementById('search');
        const doSelect = document.getElementById('filter-do');
        const grapeSelect = document.getElementById('filter-grape');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.filters.search = e.target.value;
                this.applyFilters();
            });
        }

        if (doSelect) {
            doSelect.addEventListener('change', (e) => {
                this.filters.denominacion = e.target.value;
                this.applyFilters();
            });
        }

        if (grapeSelect) {
            grapeSelect.addEventListener('change', (e) => {
                this.filters.uva = e.target.value;
                this.applyFilters();
            });
        }
    }

    updateActiveNav(activeBtn) {
        document.querySelectorAll('.nav__btn').forEach(btn => {
            btn.classList.remove('nav__btn--active');
        });
        activeBtn.classList.add('nav__btn--active');
    }

    loadSection(section = 'blancos') {
        this.currentSection = section;
        const content = document.getElementById('content');
        const filters = document.getElementById('filters');
        
        // Mostrar loading
        content.innerHTML = components.loading();
        
        // Simular carga (en una app real esto sería una llamada a API)
        setTimeout(() => {
            switch(section) {
                case 'blancos':
                    this.showWineSection('blancos');
                    break;
                case 'tintos':
                    this.showWineSection('tintos');
                    break;
                case 'denominaciones':
                    this.showDenominacionesSection();
                    break;
                case 'info':
                    this.showInfoSection();
                    break;
                case 'carnes':
                    this.showCarnesSection();
                    break;
                default:
                    this.showWineSection('blancos');
            }
        }, 300);
    }

    showWineSection(type) {
        const content = document.getElementById('content');
        const searchSticky = document.getElementById('search-sticky');
        const filtersSelects = document.getElementById('filters-selects');
        
        // Mostrar filtros para secciones de vinos
        if (searchSticky) searchSticky.style.display = 'block';
        if (filtersSelects) filtersSelects.style.display = 'flex';
        
        // Cargar contenido
        content.innerHTML = sectionRenderers[type]();
        
        // Actualizar filtros
        this.updateFilters(type);
        
        // Guardar vinos actuales para filtrado
        this.currentWines = type === 'blancos' ? wineData.vinosBlancos : wineData.vinosTintos;
    }

    showDenominacionesSection() {
        const content = document.getElementById('content');
        const searchSticky = document.getElementById('search-sticky');
        const filtersSelects = document.getElementById('filters-selects');
        
        // Ocultar filtros
        if (searchSticky) searchSticky.style.display = 'none';
        if (filtersSelects) filtersSelects.style.display = 'none';
        
        // Cargar contenido
        content.innerHTML = sectionRenderers.denominaciones();
    }

    showInfoSection() {
        const content = document.getElementById('content');
        const searchSticky = document.getElementById('search-sticky');
        const filtersSelects = document.getElementById('filters-selects');
        
        // Ocultar filtros
        if (searchSticky) searchSticky.style.display = 'none';
        if (filtersSelects) filtersSelects.style.display = 'none';
        
        // Cargar contenido
        content.innerHTML = sectionRenderers.info();
    }

    showCarnesSection() {
        const content = document.getElementById('content');
        const searchSticky = document.getElementById('search-sticky');
        const filtersSelects = document.getElementById('filters-selects');
        if (searchSticky) searchSticky.style.display = 'none';
        if (filtersSelects) filtersSelects.style.display = 'none';
        content.innerHTML = sectionRenderers.carnes();
    }

    updateFilters(wineType) {
        const doSelect = document.getElementById('filter-do');
        const grapeSelect = document.getElementById('filter-grape');
        const searchInput = document.getElementById('search');

        // Limpiar filtros
        this.filters = { search: '', denominacion: '', uva: '' };
        if (searchInput) searchInput.value = '';

        // Actualizar opciones de DO
        if (doSelect) {
            const denominaciones = dataUtils.getAllDenominaciones();
            doSelect.innerHTML = '<option value="">Todas</option>' + 
                denominaciones.map(d => `<option value="${d}">${d}</option>`).join('');
        }

        // Actualizar opciones de uva
        if (grapeSelect) {
            const grapes = dataUtils.getAllGrapes(wineType);
            grapeSelect.innerHTML = '<option value="">Todas</option>' + 
                grapes.map(g => `<option value="${g}">${g}</option>`).join('');
        }
    }

    applyFilters() {
        if (this.currentSection !== 'blancos' && this.currentSection !== 'tintos') {
            return;
        }

        let filteredWines = [...this.currentWines];

        // Aplicar filtro de búsqueda
        if (this.filters.search) {
            filteredWines = dataUtils.searchWines(this.filters.search, this.currentSection);
        }

        // Aplicar filtro de denominación
        if (this.filters.denominacion) {
            filteredWines = filteredWines.filter(wine => 
                wine.denominacion === this.filters.denominacion
            );
        }

        // Aplicar filtro de uva
        if (this.filters.uva) {
            filteredWines = filteredWines.filter(wine => 
                wine.uva === this.filters.uva
            );
        }

        // Actualizar vista con vinos filtrados
        this.updateWinesList(filteredWines);
    }

    updateWinesList(wines) {
        const wineContainer = document.querySelector('.section__content .grid');
        
        if (!wineContainer) return;

        if (wines.length === 0) {
            wineContainer.innerHTML = components.emptyState(
                '🔍', 
                'No se encontraron vinos con los filtros seleccionados'
            );
        } else {
            wineContainer.innerHTML = wines.map(wine => components.wineCard(wine)).join('');
        }
    }

    // Método para agregar nuevos vinos (útil para cuando añadas datos reales)
    addWine(wine, type) {
        if (type === 'blanco') {
            wineData.vinosBlancos.push(wine);
        } else if (type === 'tinto') {
            wineData.vinosTintos.push(wine);
        }
        
        // Recargar sección actual si es necesario
        if (this.currentSection === 'blancos' || this.currentSection === 'tintos') {
            this.loadSection(this.currentSection);
        }
    }

    // Método para actualizar datos (útil para futuras actualizaciones)
    updateData(newData) {
        Object.assign(wineData, newData);
        this.loadSection(this.currentSection);
    }
}

// Cuando se cargan los vinos desde localStorage, solo mostrar los que tienen visible=true
function getVisibleVinos(vinos) {
  return vinos.filter(v => v.visible === true || v.visible === 'true');
}

// Inicializar la aplicación cuando se carga el DOM
document.addEventListener('DOMContentLoaded', () => {
    window.wineApp = new WineApp();
});

// Funciones globales útiles para debugging o futuras extensiones
window.wineUtils = {
    // Exportar datos como JSON
    exportData: () => {
        return JSON.stringify(wineData, null, 2);
    },
    
    // Buscar vino específico
    findWine: (name) => {
        const allWines = [...wineData.vinosBlancos, ...wineData.vinosTintos];
        return allWines.find(wine => 
            wine.nombre.toLowerCase().includes(name.toLowerCase())
        );
    },
    
    // Obtener estadísticas
    getStats: () => {
        return {
            totalVinos: wineData.vinosBlancos.length + wineData.vinosTintos.length,
            vinosBlancos: wineData.vinosBlancos.length,
            vinosTintos: wineData.vinosTintos.length,
            denominaciones: wineData.denominaciones.length,
            tiposUva: wineData.uvas.blancas.length + wineData.uvas.tintas.length
        };
    }
};
