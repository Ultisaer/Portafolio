import { dataProject } from "./data/projects.js";
import { skillProject } from "./data/skills.js";
import { dataSvg } from "./data/svg.js";

import { svgContainer } from "./components/svgElements.js"
import { handleMenu } from "./components/menu.js";
import { createElementProject } from "./components/projectsElements.js"
import { carrouselSlick } from "./components/carrousel.js"
import { carrouselNested } from "./components/carrouselNested.js";
import { bottonNestedAccion } from "./components/bottonNested.js";
import { stadistic } from "./components/stadistic.js"

dataProject();            // Datos de los proyectos
skillProject();           // Datos de las habilidades adquiridas
dataSvg();
svgContainer();
handleMenu();             // Configura el controlador de eventos de clic para el menú móvil
createElementProject();   // Creacion de los elementos del proyecto
carrouselSlick();
carrouselNested();
bottonNestedAccion();
stadistic();
