import { dataProject } from "../../data/projects.js";

export function buildProjectStatistics() {
  const projectData = dataProject(); // Importamos los datos del proyecto

  // Buscamos el contenedor donde queremos insertar los elementos
  const container = document.querySelector('.statistic');

  // Iteramos sobre los datos del proyecto
  projectData.forEach((project, index) => {
    const stadisticProject = document.createElement("section");
    stadisticProject.className = `statistic__project statistic__project--v${index}`; // Asignar, no llamar
  
    const stadisticTitle = document.createElement("h3");
    stadisticTitle.className = "statistic--title fontSize--sub"; // Asignar, no llamar
    stadisticTitle.innerText = "Tecnologías Utilizadas"; // Asignar, no llamar
  
    const stadisticTechnology = document.createElement("div");
    stadisticTechnology.className = `statistic__technology statistic__technology--v${index}`; // Asignar, no llamar
  
    const stadisticContainer = document.createElement("div");
    stadisticContainer.className = `statistics__container statistics__container--v${index}`; // Corregir el nombre de la clase y asignar
  
    const stadisticGraphic = document.createElement("canvas");
    stadisticGraphic.className = `statistic__graphic statistic__graphic--v${index}`; // Asignar, no llamar
  
    stadisticContainer.append(stadisticGraphic);
    stadisticProject.append(stadisticTitle, stadisticTechnology, stadisticContainer);
    container.appendChild(stadisticProject);
  });
  

}
