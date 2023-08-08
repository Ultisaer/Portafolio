import { dataProject } from "./data/projects.js";
import { skillProject } from "./data/skills.js";

import { handleMenu } from "./components/menu.js";
import { createElementProject } from "./components/projectsElements.js"

dataProject();            // Datos de los proyectos
skillProject();           // Datos de las habilidades adquiridas
handleMenu();             // Configura el controlador de eventos de clic para el menú móvil
createElementProject();   // Creacion de los elementos del proyecto
