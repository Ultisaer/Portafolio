
// Se importa el objeto que contiene las imágenes de los proyectos y nombres
import { dataProject } from '../data/projects.js';

export function createElementProject() {
  const projectData = dataProject(); // Llama a la función para obtener el objeto
  const projectElement = document.querySelector(".projects__elements"); // Llama a la clase padre para crear sus hijos
  const projectDetail = document.querySelector(".detail");

  // Comprobación de nulos
  if (!projectElement || !projectDetail) {
    console.error('Elementos no encontrados');
    return;
  }

  // Se itera el objeto y se crea la estructura correspondiente del HTML de los elementos 
  Object.keys(projectData).forEach((projectName, index) => {
    let projectScroll = document.createElement("div");
    projectScroll.className = "projects__scroll";

    let projectButton = document.createElement("button");
    projectButton.className = `projects__button fontSize--xs projects__button--dt${index}`;
    projectButton.setAttribute('data-id', index); // Crea elementos únicos para ser referenciados con los botones y acceder al slick
    projectButton.innerText = projectData[projectName].name;

    let projectImg = document.createElement("img");
    projectImg.className = "projects__img";
    projectImg.src = projectData[projectName].imgProyects.imgPreview;
    projectImg.alt = `Proyecto preview ${projectName} ${projectData[projectName].sources.appName}`;

    projectScroll.append(projectButton, projectImg);
    projectElement.appendChild(projectScroll);

    /* Vista de elemento creado en cuestion en el HTML 
    <section class="projects__elements">
      <div class="projects__scroll">
        <button class="projects__button fontSize--xs">Proyecto 1</button>
        <img class="projects__img" src="https://hatrabbits.com/wp-content/uploads/2017/01/tafel-1.jpg" alt="">
      </div>
    </section>
    */

    let detailProject = document.createElement("div");
    detailProject.className = `detail__project detail__project--v${index}`;

    let detailImg = document.createElement("img");
    detailImg.className = "detail__img";
    detailImg.src = projectData[projectName].imgProyects.imgExpand;
    detailImg.alt = `Proyecto ${projectName} ${projectData[projectName].sources.appName}`;

    let detailInfo = document.createElement("div");
    detailInfo.className = "detail__info";

    let detailLink1 = document.createElement("a");
    detailLink1.className = "detail__link detail__accion";
    detailLink1.innerText = projectData[projectName].sources.appName;
    detailLink1.href = projectData[projectName].sources.appLink;

    let detailLink2 = document.createElement("a");
    detailLink2.className = "detail__link detail__accion";
    detailLink2.innerText = projectData[projectName].sources.githubName;
    detailLink2.href = projectData[projectName].sources.githubLink;

    detailInfo.append(detailLink1, detailLink2);
    detailProject.append(detailImg, detailInfo);

    projectDetail.appendChild(detailProject);

        /* Vista de elemento creado en cuestion en el HTML 
    <div class="detail__project detail__project--v1">
      <img class="detail__img" src="https:/Hww&w=1000&q=80" alt="">
      <div class="detail__info">
        <a class="detail__link detail__accion">App 1</a>
        <a class="detail__link detail__accion">GitHub</a>
      </div>
    </div>
    */
  });
}
