import { buildProjectStatistics } from "./components/stadistic/buildProjectStatistics.js"

// Importaciones de datos
import { dataProject } from "./data/projects.js";
import { skillProject } from "./data/skills.js";
import { dataSvg } from "./data/svg.js";

// Importaciones de componentes
import { svgContainer } from "./components/svgElements.js";
import { handleMenu } from "./components/mobileMenuController.js";
import { createElementProject } from "./components/carousel/carouselProjectBuilder.js";
import { carrouselSlick } from "./components/carousel/carouselController.js";
import { carrouselNested } from "./components/carousel/carouselFactory.js";
import { bottonNestedAccion } from "./components/carousel/carouselButtonActions.js";
import { stadistic } from "./components/stadistic/stadistic.js";
// Lógica y inicialización
buildProjectStatistics();

stadistic();              // Esta función puede llamar internamente a createDoughnutChart y createStatisticsProgressBar
dataProject();            // Datos de los proyectos
skillProject();           // Datos de las habilidades adquiridas

dataSvg();
svgContainer();
handleMenu();             // Configura el controlador de eventos de clic para el menú móvil
createElementProject();   // Creación de los elementos del proyecto
carrouselSlick();
carrouselNested();
bottonNestedAccion();
