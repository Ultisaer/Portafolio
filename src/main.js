// Importar estilos
import "./style.scss";

// Importaciones de datos
import { dataProject } from "./js/data/projects.js";
import { skillProject } from "./js/data/skills.js";
import { dataSvg } from "./js/data/svg.js";

// Importaciones de componentes
import { svgContainer } from "./js/components/svgElements.js";
import { handleMenu } from "./js/components/mobileMenuController.js";
import { createElementProject } from "./js/components/carousel/carouselProjectBuilder.js";
import { carrouselSlick } from "./js/components/carousel/carouselController.js";
import { carrouselNested } from "./js/components/carousel/carouselFactory.js";
import { bottonNestedAccion } from "./js/components/carousel/carouselButtonActions.js";
import { stadistic } from "./js/components/stadistic/stadistic.js";
import { skills } from "./js/components/skills/skills.js";
import { animation } from "./js/components/animation.js";
// Lógica y inicialización

stadistic(); // Esta función puede llamar internamente a createDoughnutChart y createStatisticsProgressBar

dataProject(); // Datos de los proyectos
skillProject(); // Datos de las habilidades adquiridas

dataSvg(); //FIXME No se está usando
svgContainer();
handleMenu(); // Configura el controlador de eventos de clic para el menú móvil
createElementProject(); // Creación de los elementos del proyecto
skills();
carrouselSlick();
carrouselNested();
bottonNestedAccion();
animation(); // Manejo de las animaciones
