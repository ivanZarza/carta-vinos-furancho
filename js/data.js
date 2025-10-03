// Base de datos - Carta de Vinos Bar Furancho
const wineData = {
    // Vinos Blancos
    vinosBlancos: [
        {
            id: 1,
            nombre: "QUINTA DO COUSELO",
            bodega: "", // COMPLETAR
            uva: "Albariño + Loureira + Caiño Blanco",
            denominacion: "Rías Baixas",
            precio: "", // COMPLETAR
            graduacion: "", // COMPLETAR
            añada: "", // COMPLETAR
            crianza: "", // COMPLETAR (si aplica)
            produccion: "", // COMPLETAR (si aplica)
            vendimia: "", // COMPLETAR (si aplica)
            plantacion: "", // COMPLETAR (si aplica)
            elaboracion: "", // COMPLETAR (si aplica)
            tipo: "", // COMPLETAR (ecológico, etc.)
            caracteristicas: {
                color: "Amarillo verdoso",
                aroma: "Cítrico (Albariño), Laurel seco (Loureira), Flores, jazmín, melisa, dama de noche (Caiño Blanco)",
                sabor: "Muy aromático, salino, sin dulzor, toque cítrico al entrar y toque amargo al retrogusto"
            },
            notas: "Cepas de 70 años. Vino muy aromático, salino, sin dulzor, un toque cítrico al entrar y un toque amargo al retrogusto.",
            maridaje: "" // COMPLETAR
        },
        {
            id: 2,
            nombre: "LOURO",
            bodega: "", // COMPLETAR
            uva: "Godello",
            denominacion: "Valdeorras",
            precio: "", // COMPLETAR
            graduacion: "", // COMPLETAR
            añada: "", // COMPLETAR
            crianza: "", // COMPLETAR (si aplica)
            produccion: "", // COMPLETAR (si aplica)
            vendimia: "", // COMPLETAR (si aplica)
            plantacion: "", // COMPLETAR (si aplica)
            elaboracion: "", // COMPLETAR (si aplica)
            tipo: "", // COMPLETAR (ecológico, etc.)
            caracteristicas: {
                color: "", // COMPLETAR
                aroma: "Flores blancas y frutas tropicales, toque graso por la glicerina",
                sabor: "Poca salinidad y menos cítrico que el albariño, con más volumen y más amargor al retrogusto"
            },
            notas: "Rafael Palacios es el mejor elaborador de godello del mundo. En Valdeorras la uva tiene menos grasa y menos aroma que en Monterrei.",
            maridaje: "" // COMPLETAR
        },
        {
            id: 3,
            nombre: "O GRAN MEIN",
            bodega: "", // COMPLETAR
            uva: "Albariño + Loureira + Caiño Blanco + Godello + Treixadura + Torrontes",
            denominacion: "Ribeiro",
            precio: "", // COMPLETAR
            graduacion: "", // COMPLETAR
            añada: "", // COMPLETAR
            crianza: "", // COMPLETAR (si aplica)
            produccion: "", // COMPLETAR (si aplica)
            vendimia: "", // COMPLETAR (si aplica)
            plantacion: "", // COMPLETAR (si aplica)
            elaboracion: "", // COMPLETAR (si aplica)
            tipo: "", // COMPLETAR (ecológico, etc.)
            caracteristicas: {
                color: "", // COMPLETAR
                aroma: "Cítrico (Albariño), Laurel (Loureira), Flores (Caiño Blanco), Flores blancas y tropicales (Godello), Fruta blanca (Treixadura y Torrontes)",
                sabor: "Muy complejo donde se notan casi todos los destellos de las uvas"
            },
            notas: "Vino muy complejo donde se notan casi todos los destellos de las uvas: el cítrico del albariño, el toque más graso del godello, el aroma a laurel de la loureira. Al vendimiar todo por separado se perciben todas las notas de sus uvas.",
            maridaje: "" // COMPLETAR
        },
        {
            id: 4,
            nombre: "RIBEIRO FURANCHO",
            bodega: "", // COMPLETAR
            uva: "Palomino Fino",
            denominacion: "Ribeiro",
            precio: "", // COMPLETAR
            graduacion: "", // COMPLETAR
            añada: "", // COMPLETAR
            crianza: "", // COMPLETAR (si aplica)
            produccion: "", // COMPLETAR (si aplica)
            vendimia: "", // COMPLETAR (si aplica)
            plantacion: "", // COMPLETAR (si aplica)
            elaboracion: "", // COMPLETAR (si aplica)
            tipo: "", // COMPLETAR (ecológico, etc.)
            caracteristicas: {
                color: "", // COMPLETAR
                aroma: "", // COMPLETAR
                sabor: "Sencillo, poco expresivo, de baja graduación y acidez, con tendencia a evolución oxidativa"
            },
            notas: "Vino fácil de beber, de trago largo, suave, no tiene grandes matices, no persiste o no empalaga. Un vino que agrada.",
            maridaje: "" // COMPLETAR
        },
        {
            id: 5,
            nombre: "Furancho Albariño",
            bodega: "Furancho",
            uva: "Albariño 100%",
            denominacion: "Rías Baixas",
            precio: "",
            graduacion: "",
            añada: "2023",
            crianza: "",
            produccion: "",
            vendimia: "2024",
            plantacion: "",
            elaboracion: "Monovarietal, cosechero del año",
            tipo: "",
            caracteristicas: {
                color: "Amarillo limón",
                aroma: "Aromático (frutas melocotón)",
                sabor: "Vino suave, fácil de beber, con un punto ácido refrescante, vino de mano"
            },
            notas: "Color amarillo limón. Vino suave, fácil de beber, aromático (frutas melocotón) y con un punto ácido que lo hace refrescante. Vino de mano.",
            maridaje: ""
        }
    ],

    // Vinos Tintos
    vinosTintos: [
        {
            id: 101,
            nombre: "ERMITA DEL MONTE",
            bodega: "", // COMPLETAR
            uva: "Tempranillo + Syrah + Merlot",
            denominacion: "", // COMPLETAR
            precio: "", // COMPLETAR
            graduacion: "", // COMPLETAR
            añada: "", // COMPLETAR
            crianza: "14 meses en barrica nueva",
            produccion: "1600 botellas",
            vendimia: "A mano",
            plantacion: "En espaldera",
            elaboracion: "", // COMPLETAR (si aplica)
            tipo: "", // COMPLETAR (ecológico, etc.)
            caracteristicas: {
                color: "", // COMPLETAR
                aroma: "Tempranillo (volumen en boca), Syrah (especias dulces, vainilla, pimienta rosa, clavo), Merlot (fruta ácida, fresa y cereza)",
                sabor: "Vino amplio con volumen, toque dulce y ácido, no persiste"
            },
            notas: "Tanino dulce. Vino amplio con volumen, toque dulce y ácido, no persiste y marida bien con pescados y carnes a la brasa, guisos y quesos.",
            maridaje: "Pescados y carnes a la brasa, guisos y quesos"
        },
        {
            id: 102,
            nombre: "ICENI",
            bodega: "", // COMPLETAR
            uva: "Tintilla de Rota + Syrah + Petit Verdot",
            denominacion: "", // COMPLETAR
            precio: "", // COMPLETAR
            graduacion: "", // COMPLETAR
            añada: "", // COMPLETAR
            crianza: "Entre 6 y 8 meses de crianza en barrica",
            produccion: "", // COMPLETAR (si aplica)
            vendimia: "", // COMPLETAR (si aplica)
            plantacion: "", // COMPLETAR (si aplica)
            elaboracion: "Copage hecho por separado",
            tipo: "Vino ecológico pero sin certificar",
            caracteristicas: {
                color: "", // COMPLETAR
                aroma: "Tintilla de Rota (volumen en boca), Syrah (especias dulces, vainilla, pimienta rosa, clavo), Petit Verdot (rudeza, aspereza y vigor sutil)",
                sabor: "Sensación alcohólica que se puede contrarrestar con más frío en la botella"
            },
            notas: "Sensación alcohólica que se puede contrarrestar con más frío en la botella y así potenciar la sensación de fruta que aporta la Syrah.",
            maridaje: "" // COMPLETAR
        },
        {
            id: 103,
            nombre: "ARX",
            bodega: "", // COMPLETAR
            uva: "Tintilla de Rota + Syrah + Petit Verdot + Cabernet Sauvignon",
            denominacion: "", // COMPLETAR
            precio: "", // COMPLETAR
            graduacion: "", // COMPLETAR
            añada: "", // COMPLETAR
            crianza: "14 meses en barrica (dependiendo de la añada puede jugarse con el tiempo)",
            produccion: "", // COMPLETAR (si aplica)
            vendimia: "", // COMPLETAR (si aplica)
            plantacion: "", // COMPLETAR (si aplica)
            elaboracion: "Copage hecho por separado",
            tipo: "", // COMPLETAR (ecológico, etc.)
            caracteristicas: {
                color: "", // COMPLETAR
                aroma: "Tintilla de Rota (volumen), Syrah (especias dulces, vainilla, pimienta rosa, clavo), Petit Verdot (rudeza sutil), Cabernet Sauvignon (dulzor, contiene piracina - sabor a pimiento asado)",
                sabor: "Bien integrado el alcohol"
            },
            notas: "Bien integrado el alcohol. El Cabernet Sauvignon aporta dulzor y contiene piracina (sabor a pimiento asado).",
            maridaje: "" // COMPLETAR
        },
        {
            id: 104,
            nombre: "ABADIA DE GOMARIZ",
            bodega: "", // COMPLETAR
            uva: "Souson + Ferron + Brancellao + Mencia",
            denominacion: "Ribeiro",
            precio: "", // COMPLETAR
            graduacion: "", // COMPLETAR
            añada: "", // COMPLETAR
            crianza: "Crianza en barrica",
            produccion: "", // COMPLETAR (si aplica)
            vendimia: "", // COMPLETAR (si aplica)
            plantacion: "", // COMPLETAR (si aplica)
            elaboracion: "", // COMPLETAR (si aplica)
            tipo: "", // COMPLETAR (ecológico, etc.)
            caracteristicas: {
                color: "", // COMPLETAR
                aroma: "Souson (florales, mineralidad), Ferron (cítricos, mineral, persistencia), Brancellao (frutas negras, toques florales), Mencia (frutas rojas, afrutado)",
                sabor: "Vino de trago largo aromático con sabor a especias por la madera, fresco y que perdura el sabor, con acidez controlada"
            },
            notas: "Vino de trago largo aromático con sabor a especias por la madera, un vino fresco y que perdura el sabor, con acidez controlada por la crianza en barrica.",
            maridaje: "" // COMPLETAR
        },
        {
            id: 105,
            nombre: "BANCALES DE LOS ALCORNOQUES",
            bodega: "", // COMPLETAR
            uva: "Mencia + Garnacha",
            denominacion: "", // COMPLETAR
            precio: "", // COMPLETAR
            graduacion: "", // COMPLETAR
            añada: "", // COMPLETAR
            crianza: "12 meses en barrica de roble francés",
            produccion: "", // COMPLETAR (si aplica)
            vendimia: "", // COMPLETAR (si aplica)
            plantacion: "", // COMPLETAR (si aplica)
            elaboracion: "", // COMPLETAR (si aplica)
            tipo: "", // COMPLETAR (ecológico, etc.)
            caracteristicas: {
                color: "", // COMPLETAR
                aroma: "Mencia (frutas rojas, afrutado), Garnacha (frutas rojas y especias dulces, cuerpo potente con dulzor natural)",
                sabor: "Vino sedoso, con olor a frutas rojas, con amplitud en el paso por boca"
            },
            notas: "Vino sedoso, con olor a frutas rojas, con amplitud en el paso por boca y con acidez controlada por la crianza de 12 meses en barrica de roble francés.",
            maridaje: "" // COMPLETAR
        },
        {
            id: 106,
            nombre: "Pago de Zancuo",
            bodega: "Pago de Zancuo",
            uva: "Tempranillo y Syrah",
            denominacion: "Sin D.O. (Sierra Norte de Sevilla)",
            precio: "",
            graduacion: "",
            añada: "",
            crianza: "9 meses de barrica de roble nueva",
            produccion: "",
            vendimia: "",
            plantacion: "",
            elaboracion: "Doble fermentación maloláctica",
            tipo: "",
            caracteristicas: {
                color: "Violáceo",
                aroma: "Fruta negra, tostados, pimienta, nuez moscada, monte bajo",
                sabor: "Vino con volumen, potente, tanino dulce pero por pulir, sensación final de equilibrio"
            },
            notas: "Taninos marcados por la fuerte maduración debido al sol. Intensidad de color con tonos violáceos. Aromas a fruta negra, tostados, pimienta, nuez moscada y monte bajo. En boca, vino con volumen, potente, tanino dulce pero por pulir. Sensación final de equilibrio.",
            maridaje: ""
        }
    ],

    // Denominaciones de Origen
    denominaciones: [
        {
            nombre: "Rías Baixas",
            region: "Galicia",
            descripcion: "Conocida por sus excepcionales vinos blancos"
        },
        {
            nombre: "Valdeorras",
            region: "Galicia",
            descripcion: "Famosa por sus vinos de Godello"
        },
        {
            nombre: "Ribeiro",
            region: "Galicia",
            descripcion: "Denominación gallega tradicional"
        }
    ],

    // Información sobre uvas
    uvas: {
        blancas: [
            {
                nombre: "Albariño",
                origen: "Galicia",
                caracteristicas: {
                    aroma: "Cítrico",
                    aporte: "Frescura y salinidad",
                    textura: "Mineral",
                    compuesto: "",
                    perfil: "Aromática, fresca, salina"
                },
                descripcion: "Uva gallega autóctona."
            },
            {
                nombre: "Godello",
                origen: "Galicia",
                caracteristicas: {
                    aroma: "Flores blancas y frutas tropicales",
                    aporte: "Volumen y estructura",
                    textura: "Toque graso por la glicerina",
                    compuesto: "",
                    perfil: "Elegante, compleja, estructurada"
                },
                descripcion: "La uva godello es muy grasa. En Valdeorras tiene menos grasa y menos aroma que en Monterrei."
            },
            {
                nombre: "Treixadura",
                origen: "Galicia",
                caracteristicas: {
                    aroma: "Fruta blanca",
                    aporte: "Suavidad y redondez",
                    textura: "Suave",
                    compuesto: "",
                    perfil: "Delicada, frutal, equilibrada"
                },
                descripcion: "Uva gallega autóctona."
            },
            {
                nombre: "Loureira",
                origen: "Galicia",
                caracteristicas: {
                    aroma: "Laurel seco",
                    aporte: "Aromaticidad herbal",
                    textura: "Aromática",
                    compuesto: "",
                    perfil: "Muy aromática, herbal, distintiva"
                },
                descripcion: "Uva gallega autóctona."
            },
            {
                nombre: "Caiño Blanco",
                origen: "Galicia",
                caracteristicas: {
                    aroma: "Flores, jazmín, melisa, dama de noche",
                    aporte: "Complejidad floral",
                    textura: "Floral",
                    compuesto: "",
                    perfil: "Muy aromática, floral, compleja"
                },
                descripcion: "Uva gallega autóctona."
            },
            {
                nombre: "Torrontes",
                origen: "Galicia",
                caracteristicas: {
                    aroma: "Fruta blanca y flores blancas",
                    aporte: "Frescura frutal",
                    textura: "Ligera",
                    compuesto: "",
                    perfil: "Frutal, floral, fresca"
                },
                descripcion: "Uva gallega autóctona."
            },
            {
                nombre: "Palomino Fino",
                origen: "España",
                caracteristicas: {
                    aroma: "Neutro, poco expresivo",
                    aporte: "Base neutra",
                    textura: "Ligera",
                    compuesto: "",
                    perfil: "Sencilla, poco expresiva, baja graduación y acidez, tendencia a evolución oxidativa"
                },
                descripcion: "Esta variedad produce vinos sencillos, poco expresivos, de baja graduación y acidez, y con tendencia a la evolución oxidativa."
            }
        ],
        tintas: [
            {
                nombre: "Tempranillo",
                origen: "España",
                caracteristicas: {
                    aroma: "Frutas rojas, especias suaves",
                    aporte: "Volumen en la boca, llena la boca",
                    textura: "Estructurada",
                    compuesto: "",
                    perfil: "Elegante, equilibrada, versátil"
                },
                descripcion: "Variedad que aporta volumen en la boca."
            },
            {
                nombre: "Syrah",
                origen: "Francia",
                caracteristicas: {
                    aroma: "Especias dulces, vainilla, pimienta rosa, clavo",
                    aporte: "Especias y complejidad",
                    textura: "Potente",
                    compuesto: "",
                    perfil: "Especiada, intensa, aromática"
                },
                descripcion: "Aporta aromas a especias dulces, vainilla, pimienta rosa, clavo."
            },
            {
                nombre: "Merlot",
                origen: "Francia",
                caracteristicas: {
                    aroma: "Fruta ácida, fresa y cereza",
                    aporte: "Suavidad y fruta",
                    textura: "Suave",
                    compuesto: "",
                    perfil: "Frutal, suave, accesible"
                },
                descripcion: "Aporta aromas a fruta ácida, fresa y cereza."
            },
            {
                nombre: "Tintilla de Rota",
                origen: "España",
                caracteristicas: {
                    aroma: "Frutas maduras, toques terrosos",
                    aporte: "Volumen en la boca",
                    textura: "Corpulenta",
                    compuesto: "",
                    perfil: "Potente, estructurada, territorial"
                },
                descripcion: "Variedad que aporta volumen en la boca."
            },
            {
                nombre: "Petit Verdot",
                origen: "Francia",
                caracteristicas: {
                    aroma: "Frutas negras, especias intensas",
                    aporte: "Rudeza, aspereza y vigor de forma sutil",
                    textura: "Tánica",
                    compuesto: "",
                    perfil: "Intensa, tánica, estructural"
                },
                descripcion: "Aporta rudeza, aspereza y vigor de forma sutil buscando el mismo efecto que la tintilla de rota y la madera."
            },
            {
                nombre: "Cabernet Sauvignon",
                origen: "Francia",
                caracteristicas: {
                    aroma: "Cassis, pimiento verde, herbáceos",
                    aporte: "Dulzor",
                    textura: "Tánica",
                    compuesto: "Contiene piracina (sabor a pimiento asado)",
                    perfil: "Estructurada, compleja, longeva"
                },
                descripcion: "Aporta dulzor y contiene piracina (sabor a pimiento asado). La piracina es una enzima que si se marida con pimiento rojo o asados intensifica las propiedades del vino de forma sorprendente."
            },
            {
                nombre: "Souson",
                origen: "Galicia",
                caracteristicas: {
                    aroma: "Florales",
                    aporte: "Buena acidez, aporta mineralidad",
                    textura: "Mineral",
                    compuesto: "",
                    perfil: "Floral, mineral, fresca"
                },
                descripcion: "Aromas florales, con buena acidez, aporta mineralidad."
            },
            {
                nombre: "Ferron",
                origen: "Galicia",
                caracteristicas: {
                    aroma: "Cítricos",
                    aporte: "Acidez acentuada, mineral, aporta persistencia",
                    textura: "Mineral",
                    compuesto: "",
                    perfil: "Cítrica, mineral, persistente"
                },
                descripcion: "Aromas cítricos, acidez acentuada, mineral, aporta persistencia."
            },
            {
                nombre: "Brancellao",
                origen: "Galicia",
                caracteristicas: {
                    aroma: "Frutas negras, toques florales",
                    aporte: "Acidez suave, aporta color y suavidad",
                    textura: "Suave",
                    compuesto: "",
                    perfil: "Frutal, suave, colorante"
                },
                descripcion: "Aromas a frutas negras, toques florales, acidez suave, aporta color y suavidad."
            },
            {
                nombre: "Mencia",
                origen: "Galicia",
                caracteristicas: {
                    aroma: "Frutas rojas",
                    aporte: "Afrutado, con acidez y persistencia",
                    textura: "Elegante",
                    compuesto: "",
                    perfil: "Frutal, ácida, persistente"
                },
                descripcion: "Aromas a frutas rojas, afrutado, con acidez y persistencia."
            },
            {
                nombre: "Garnacha",
                origen: "España",
                caracteristicas: {
                    aroma: "Frutas rojas y especias dulces",
                    aporte: "Cuerpo, sabor potente y con dulzor natural",
                    textura: "Carnosa",
                    compuesto: "",
                    perfil: "Potente, frutal, con dulzor natural"
                },
                descripcion: "Aroma a frutas rojas y especias dulces, con cuerpo sabor potente y con dulzor natural."
            }
        ]
    },

    // Información general
    infoGeneral: {
        levaduras: {
            definicion: "Hay 2 tipos de levadura",
            tipos: [
                {
                    nombre: "Levadura autóctona",
                    descripcion: "Proviene de la propia fruta y el entorno"
                },
                {
                    nombre: "Levadura añadida",
                    descripcion: "Se añade de forma externa"
                }
            ],
            proceso: "La levadura se come el azúcar y devuelve el alcohol, por cada 16gr de azúcar se genera un grado de alcohol. Si la levadura se come todo el azúcar el vino será seco.",
            relacion_sol: "Cuanto más sol, más azúcar en la fruta y por lo tanto más posibilidad de alcohol en el vino."
        },
        fermentacion: {
            duracion: "Entre 7 y 21 días",
            factores: "La piel determina el color del vino. El color y el aroma del vino proviene mayoritariamente de la piel."
        },
        aromas: {
            tipos: [
                {
                    nombre: "Aromas Primarios",
                    descripcion: "Son aromas inherentes a la variedad de la uva, provienen de la uva y el terruño (clima, suelo, etc.)"
                },
                {
                    nombre: "Aromas Secundarios",
                    descripcion: "Se generan durante el proceso de fermentación, depende de las levaduras y las condiciones de la fermentación"
                },
                {
                    nombre: "Aromas Terciarios",
                    descripcion: "Se desarrollan durante el envejecimiento del vino, ya sean en barrica o botella"
                }
            ]
        },
        microoxigenacion: {
            descripcion: "Dependiendo de la elaboración hay una microoxigenación, y dependiendo del tipo de recipiente donde permanezca el vino, la microoxigenación puede ser mayor o menor, pudiendo hacer evolucionar el vino de una forma u otra."
        },
        acidez: {
            importancia: "Dependiendo de la acidez el vino podrá aguantar más o menos sin estropearse, cuanta más acidez más aguante."
        },
        momento_consumo: {
            regla: "Se considera que el vino está en su mejor momento para consumir, cuando lleva el mismo tiempo en botella que ha tenido de crianza, y de ahí aguanta algo más de un año, después empezará a perder aromas."
        },
        barricas: [
            {
                tipo: "Barrica Francesa",
                caracteristicas: "Aporta especias dulces y vainilla"
            },
            {
                tipo: "Barrica Americana",
                caracteristicas: "Aporta coco y chocolate"
            }
        ],
        barricas_edad: {
            nuevas: "Barricas nuevas aportan más detalles al vino, ya que dejan que el vino se infiltre en la madera",
            viejas: "La barrica vieja tiene los poros más tapados"
        },
        cata_boca: {
            acidez: "Se nota en la punta de la lengua",
            amargor: "Se nota en la parte de la garganta",
            salado: "Se nota en la parte lateral delantera de la lengua",
            dulce: "Se nota en la parte lateral trasera de la lengua"
        },
        retrogusto: {
            descripcion: "En el retrogusto vendrán los aromas peculiares de cada vino"
        },
        cepas_edad: {
            regla: "Las cepas cuanto más viejas, menos producción pero más calidad. En un esquema de aristas, las cepas viejas tendrán las aristas menos pronunciadas pero más equilibradas, consiguiendo un vino más redondo."
        },
        taninos: {
            tipos: [
                {
                    nombre: "Tanino dulce",
                    origen: "Proviene de la barrica",
                    sensacion: "Se nota en la encía superior"
                },
                {
                    nombre: "Tanino amargo",
                    origen: "Proviene de la pepita",
                    sensacion: "Seca el labio superior de forma astringente"
                }
            ]
        },
        clarificacion: {
            proceso: "Vino clarificado, pasa por clara de huevo para recoger sedimentos sin aportar sabor",
            sin_filtrar: "Los vinos sin filtrar no tienen posos"
        },
        piracina: {
            descripcion: "La piracina es una enzima que contiene el vino por la uva Cabernet, si se marida con pimiento rojo o asados intensifica las propiedades del vino de forma sorprendente. Con sabor a pimiento verde, herbáceos."
        },
        elaboracion_coupage: {
            metodos: "Las uvas se pueden fermentar juntas o trabajarlas por separado, al hacerlo por separado se puede jugar con ellas en su %, para conseguir la misma calidad del vino dependiendo de los factores (clima, maduración, de la sensación alcohólica, etc.)"
        },
        ecologico: {
            definicion: "Ecológico = 5 años sin químicos en la parcela y no uso de químicos a 500 metros a la redonda",
            caracteristicas: "Los vinos ecológicos llevan un filtrado más leve, ya que no se puede usar ciertos procesos, y esto hace que pueda contener algún poso"
        },
        uvas_gallegas: {
            variedades: "Albariño, Godello, Treixadura, Loureira, Caiño, Lado, Torrontes"
        },
        plantacion: {
            espaldera: "Se planta en espaldera, es cuando se planta en fila y las vides tocan entre ellas en la punta de las ramas"
        }
    }
};

// Funciones utilitarias para acceso a datos
const dataUtils = {
    // Obtener vino por ID
    getWineById: (id) => {
        const allWines = [...wineData.vinosBlancos, ...wineData.vinosTintos];
        return allWines.find(wine => wine.id === id);
    },

    // Obtener vinos por denominación
    getWinesByDO: (doName) => {
        const allWines = [...wineData.vinosBlancos, ...wineData.vinosTintos];
        return allWines.filter(wine => wine.denominacion === doName);
    },

    // Obtener vinos por uva
    getWinesByGrape: (grapeName) => {
        const allWines = [...wineData.vinosBlancos, ...wineData.vinosTintos];
        return allWines.filter(wine => wine.uva === grapeName);
    },

    // Buscar vinos por texto
    searchWines: (query, wineType = 'all') => {
        let wines = [];
        
        if (wineType === 'blancos') {
            wines = wineData.vinosBlancos;
        } else if (wineType === 'tintos') {
            wines = wineData.vinosTintos;
        } else {
            wines = [...wineData.vinosBlancos, ...wineData.vinosTintos];
        }

        const searchTerm = query.toLowerCase();
        return wines.filter(wine => 
            wine.nombre.toLowerCase().includes(searchTerm) ||
            (wine.bodega && wine.bodega.toLowerCase().includes(searchTerm)) ||
            (wine.denominacion && wine.denominacion.toLowerCase().includes(searchTerm)) ||
            (wine.uva && wine.uva.toLowerCase().includes(searchTerm))
        );
    },

    // Obtener todas las denominaciones únicas
    getAllDenominaciones: () => {
        const allWines = [...wineData.vinosBlancos, ...wineData.vinosTintos];
        return [...new Set(allWines.map(wine => wine.denominacion).filter(Boolean))];
    },

    // Obtener todas las uvas únicas
    getAllGrapes: (type = 'all') => {
        let wines = [];
        
        if (type === 'blancos') {
            wines = wineData.vinosBlancos;
        } else if (type === 'tintos') {
            wines = wineData.vinosTintos;
        } else {
            wines = [...wineData.vinosBlancos, ...wineData.vinosTintos];
        }

        return [...new Set(wines.map(wine => wine.uva).filter(Boolean))];
    },

    // Obtener denominaciones con vinos existentes
    getDenominacionesWithWines: () => {
        const allWines = [...wineData.vinosBlancos, ...wineData.vinosTintos];
        const activeDenominaciones = [...new Set(allWines.map(wine => wine.denominacion).filter(Boolean))];
        
        return wineData.denominaciones.filter(denominacion => 
            activeDenominaciones.includes(denominacion.nombre)
        );
    }
};
