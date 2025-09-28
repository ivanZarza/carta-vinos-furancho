// Componentes reutilizables para generar HTML

const components = {
    // Componente para tarjeta de vino
    wineCard: (wine) => {
        return `
            <div class="wine-card" data-wine-id="${wine.id}">
                <div class="wine-card__header">
                    <div>
                        <h3 class="wine-card__title">${wine.nombre}</h3>
                        <p class="wine-card__subtitle">${wine.bodega || 'Bodega por completar'}</p>
                    </div>
                    <span class="wine-card__price">${wine.precio || 'Precio por completar'}</span>
                </div>
                
                <div class="wine-card__info">
                    <div class="wine-card__detail">
                        <span class="wine-card__detail-label">🍇</span>
                        <span class="wine-card__detail-value">${wine.uva}</span>
                    </div>
                    <div class="wine-card__detail">
                        <span class="wine-card__detail-label">🏷️</span>
                        <span class="wine-card__detail-value">${wine.denominacion || 'Por completar'}</span>
                    </div>
                    <div class="wine-card__detail">
                        <span class="wine-card__detail-label">🍷</span>
                        <span class="wine-card__detail-value">${wine.graduacion || 'Por completar'}</span>
                    </div>
                    <div class="wine-card__detail">
                        <span class="wine-card__detail-label">📅</span>
                        <span class="wine-card__detail-value">${wine.añada || 'Por completar'}</span>
                    </div>
                    ${wine.crianza ? `
                    <div class="wine-card__detail">
                        <span class="wine-card__detail-label">🛢️</span>
                        <span class="wine-card__detail-value">${wine.crianza}</span>
                    </div>
                    ` : ''}
                </div>

                ${wine.caracteristicas ? `
                <div class="wine-card__info">
                    ${wine.caracteristicas.color ? `
                    <div class="wine-card__detail">
                        <span class="wine-card__detail-label">👁️</span>
                        <span class="wine-card__detail-value">${wine.caracteristicas.color}</span>
                    </div>
                    ` : ''}
                    ${wine.caracteristicas.aroma ? `
                    <div class="wine-card__detail">
                        <span class="wine-card__detail-label">👃</span>
                        <span class="wine-card__detail-value">${wine.caracteristicas.aroma}</span>
                    </div>
                    ` : ''}
                    ${wine.caracteristicas.sabor ? `
                    <div class="wine-card__detail">
                        <span class="wine-card__detail-label">👅</span>
                        <span class="wine-card__detail-value">${wine.caracteristicas.sabor}</span>
                    </div>
                    ` : ''}
                </div>
                ` : ''}

                ${wine.notas ? `
                <div class="wine-card__description">
                    <strong>Notas de cata:</strong> ${wine.notas}
                </div>
                ` : ''}
            </div>
        `;
    },

    // Componente para información de uva
    grapeInfo: (grape) => {
        return `
            <div class="grape-info">
                <h3 class="grape-info__name">🍇 ${grape.nombre}</h3>
                <p><strong>Origen:</strong> ${grape.origen}</p>
                <p>${grape.descripcion}</p>
                
                <div class="grape-info__characteristics">
                    ${Object.entries(grape.caracteristicas).map(([key, value]) => `
                        <div class="grape-info__char">
                            <span class="grape-info__char-label">${key}:</span>
                            <span>${value}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    // Componente para denominación de origen
    doCard: (denominacion) => {
        // Obtener dinámicamente los vinos por denominación
        const vinosBlancos = dataUtils.getWinesByDO(denominacion.nombre).filter(wine => wineData.vinosBlancos.includes(wine));
        const vinosTintos = dataUtils.getWinesByDO(denominacion.nombre).filter(wine => wineData.vinosTintos.includes(wine));
        
        return `
            <div class="do-card">
                <h3 class="do-card__title">🗺️ ${denominacion.nombre}</h3>
                <p class="do-card__region"><strong>Región:</strong> ${denominacion.region}</p>
                <p>${denominacion.descripcion}</p>
                
                <div class="do-card__wines">
                    ${vinosBlancos.length > 0 ? `
                        <h4 class="do-card__wine-type">🤍 Vinos Blancos</h4>
                        ${vinosBlancos.map(wine => components.wineCard(wine)).join('')}
                    ` : ''}
                    
                    ${vinosTintos.length > 0 ? `
                        <h4 class="do-card__wine-type">🔴 Vinos Tintos</h4>
                        ${vinosTintos.map(wine => components.wineCard(wine)).join('')}
                    ` : ''}
                </div>
            </div>
        `;
    },

    // Componente para información general
    infoCard: (title, icon, content) => {
        return `
            <div class="info-card">
                <h3 class="info-card__title">
                    <span>${icon}</span>
                    ${title}
                </h3>
                <div class="info-card__content">
                    ${content}
                </div>
            </div>
        `;
    },

    // Componente para lista de información
    infoList: (items) => {
        return `
            <ul class="info-card__list">
                ${items.map(item => `
                    <li>
                        <span class="info-card__list-label">${item.label}</span>
                        <span>${item.value}</span>
                    </li>
                `).join('')}
            </ul>
        `;
    },

    // Componente para sección completa
    section: (title, description, content) => {
        return `
            <div class="section">
                <h2 class="section__title">${title}</h2>
                ${description ? `<p class="section__description">${description}</p>` : ''}
                <div class="section__content">
                    ${content}
                </div>
            </div>
        `;
    },

    // Estado vacío
    emptyState: (icon, message) => {
        return `
            <div class="empty-state">
                <div class="empty-state__icon">${icon}</div>
                <p>${message}</p>
            </div>
        `;
    },

    // Estado de carga
    loading: () => {
        return `
            <div class="loading">
                <p>🍷 Cargando vinos...</p>
            </div>
        `;
    }
};

// Funciones para generar contenido completo por sección
const sectionRenderers = {
    // Renderizar vinos blancos
    blancos: () => {
        const wines = wineData.vinosBlancos;
        const grapes = wineData.uvas.blancas;
        
        let content = components.section(
            '🤍 Vinos Blancos',
            'Nuestra selección de vinos blancos, perfectos para acompañar pescados, mariscos y momentos especiales.',
            `
                <div class="grid grid--2">
                    ${wines.map(wine => components.wineCard(wine)).join('')}
                </div>
            `
        );

        content += components.section(
            '🍇 Uvas Blancas',
            'Conoce las características de nuestras principales variedades de uva blanca.',
            `
                ${grapes.map(grape => components.grapeInfo(grape)).join('')}
            `
        );

        return content;
    },

    // Renderizar vinos tintos
    tintos: () => {
        const wines = wineData.vinosTintos;
        const grapes = wineData.uvas.tintas;
        
        let content = components.section(
            '🔴 Vinos Tintos',
            'Nuestra cuidada selección de vinos tintos, ideales para carnes, guisos y cenas especiales.',
            `
                <div class="grid grid--2">
                    ${wines.map(wine => components.wineCard(wine)).join('')}
                </div>
            `
        );

        content += components.section(
            '🍇 Uvas Tintas',
            'Descubre las características de nuestras principales variedades de uva tinta.',
            `
                ${grapes.map(grape => components.grapeInfo(grape)).join('')}
            `
        );

        return content;
    },

    // Renderizar denominaciones
    denominaciones: () => {
        const denominaciones = dataUtils.getDenominacionesWithWines();
        
        return components.section(
            '🗺️ Denominaciones de Origen',
            'Explora nuestros vinos organizados por sus denominaciones de origen.',
            `
                ${denominaciones.map(denominacion => components.doCard(denominacion)).join('')}
            `
        );
    },

    // Renderizar información general
    info: () => {
        const info = wineData.infoGeneral;
        
        let content = '';

        // Levaduras
        content += components.infoCard(
            'Levaduras',
            '🦠',
            `
                <p><strong>${info.levaduras.definicion}</strong></p>
                <div style="margin-top: 1rem;">
                    ${info.levaduras.tipos.map(levadura => `
                        <div style="margin-bottom: 0.75rem;">
                            <strong>${levadura.nombre}:</strong> ${levadura.descripcion}
                        </div>
                    `).join('')}
                </div>
                <p style="margin-top: 1rem;"><strong>Proceso:</strong> ${info.levaduras.proceso}</p>
                <p><strong>Sol y azúcar:</strong> ${info.levaduras.relacion_sol}</p>
            `
        );

        // Fermentación
        content += components.infoCard(
            'Fermentación',
            '⏱️',
            `
                <p><strong>Duración:</strong> ${info.fermentacion.duracion}</p>
                <p><strong>Factores:</strong> ${info.fermentacion.factores}</p>
            `
        );

        // Aromas
        content += components.infoCard(
            'Tipos de Aromas',
            '👃',
            `
                ${info.aromas.tipos.map(aroma => `
                    <div style="margin-bottom: 1rem;">
                        <h4 style="color: var(--color-primary); margin-bottom: 0.5rem;">${aroma.nombre}</h4>
                        <p>${aroma.descripcion}</p>
                    </div>
                `).join('')}
            `
        );

        // Barricas
        content += components.infoCard(
            'Tipos de Barrica',
            '🛢️',
            `
                ${info.barricas.map(barrica => `
                    <div style="margin-bottom: 1rem;">
                        <h4 style="color: var(--color-primary); margin-bottom: 0.5rem;">${barrica.tipo}</h4>
                        <p><strong>Características:</strong> ${barrica.caracteristicas}</p>
                    </div>
                `).join('')}
                <div style="margin-top: 1rem;">
                    <h4 style="color: var(--color-primary); margin-bottom: 0.5rem;">Edad de las Barricas</h4>
                    <p><strong>Nuevas:</strong> ${info.barricas_edad.nuevas}</p>
                    <p><strong>Viejas:</strong> ${info.barricas_edad.viejas}</p>
                </div>
            `
        );

        // Taninos
        content += components.infoCard(
            'Taninos',
            '🫐',
            `
                ${info.taninos.tipos.map(tanino => `
                    <div style="margin-bottom: 1rem;">
                        <h4 style="color: var(--color-primary); margin-bottom: 0.5rem;">${tanino.nombre}</h4>
                        <p><strong>Origen:</strong> ${tanino.origen}</p>
                        <p><strong>Sensación:</strong> ${tanino.sensacion}</p>
                    </div>
                `).join('')}
            `
        );

        // Cata en boca
        content += components.infoCard(
            'Cata en Boca',
            '👅',
            `
                <div style="margin-bottom: 1rem;">
                    <p><strong>Acidez:</strong> ${info.cata_boca.acidez}</p>
                    <p><strong>Amargor:</strong> ${info.cata_boca.amargor}</p>
                    <p><strong>Salado:</strong> ${info.cata_boca.salado}</p>
                    <p><strong>Dulce:</strong> ${info.cata_boca.dulce}</p>
                </div>
                <p><strong>Retrogusto:</strong> ${info.retrogusto.descripcion}</p>
            `
        );

        // Cepas y edad
        content += components.infoCard(
            'Cepas y Calidad',
            '🍇',
            `
                <p>${info.cepas_edad.regla}</p>
            `
        );

        // Información adicional
        content += components.infoCard(
            'Conceptos Adicionales',
            '📚',
            `
                <div style="margin-bottom: 1rem;">
                    <h4 style="color: var(--color-primary); margin-bottom: 0.5rem;">Microoxigenación</h4>
                    <p>${info.microoxigenacion.descripcion}</p>
                </div>
                <div style="margin-bottom: 1rem;">
                    <h4 style="color: var(--color-primary); margin-bottom: 0.5rem;">Acidez y Conservación</h4>
                    <p>${info.acidez.importancia}</p>
                </div>
                <div style="margin-bottom: 1rem;">
                    <h4 style="color: var(--color-primary); margin-bottom: 0.5rem;">Momento de Consumo</h4>
                    <p>${info.momento_consumo.regla}</p>
                </div>
                <div style="margin-bottom: 1rem;">
                    <h4 style="color: var(--color-primary); margin-bottom: 0.5rem;">Clarificación</h4>
                    <p><strong>Proceso:</strong> ${info.clarificacion.proceso}</p>
                    <p><strong>Sin filtrar:</strong> ${info.clarificacion.sin_filtrar}</p>
                </div>
                <div style="margin-bottom: 1rem;">
                    <h4 style="color: var(--color-primary); margin-bottom: 0.5rem;">Piracina</h4>
                    <p>${info.piracina.descripcion}</p>
                </div>
                <div style="margin-bottom: 1rem;">
                    <h4 style="color: var(--color-primary); margin-bottom: 0.5rem;">Elaboración Coupage</h4>
                    <p>${info.elaboracion_coupage.metodos}</p>
                </div>
                <div style="margin-bottom: 1rem;">
                    <h4 style="color: var(--color-primary); margin-bottom: 0.5rem;">Vinos Ecológicos</h4>
                    <p><strong>Definición:</strong> ${info.ecologico.definicion}</p>
                    <p><strong>Características:</strong> ${info.ecologico.caracteristicas}</p>
                </div>
                <div style="margin-bottom: 1rem;">
                    <h4 style="color: var(--color-primary); margin-bottom: 0.5rem;">Uvas Gallegas</h4>
                    <p>${info.uvas_gallegas.variedades}</p>
                </div>
                <div>
                    <h4 style="color: var(--color-primary); margin-bottom: 0.5rem;">Plantación en Espaldera</h4>
                    <p>${info.plantacion.espaldera}</p>
                </div>
            `
        );

        return content;
    }
};
