export function buildProjectStatistics(index) {

  // Buscamos el contenedor donde queremos insertar los elementos
  const container = document.querySelector('.statistic');

  // Accede al proyecto en el índice específico

  const stadisticProject = document.createElement("section");
  stadisticProject.className = `statistic__project statistic__project--v${index}`;

  const stadisticTitle = document.createElement("h3");
  stadisticTitle.className = "statistic--title fontSize--sub";
  stadisticTitle.innerText = "Tecnologías Utilizadas";

  const stadisticTechnology = document.createElement("div");
  stadisticTechnology.className = `statistic__technology statistic__technology--v${index}`;

  const stadisticContainer = document.createElement("div");
  stadisticContainer.className = `statistics__container statistics__container--v${index}`;

  const stadisticGraphic = document.createElement("canvas");
  stadisticGraphic.className = `statistic__graphic statistic__graphic--v${index}`;

  stadisticContainer.append(stadisticGraphic);
  stadisticProject.append(stadisticTitle, stadisticTechnology, stadisticContainer);
  container.appendChild(stadisticProject);
}
