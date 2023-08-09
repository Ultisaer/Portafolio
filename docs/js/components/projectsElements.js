// Se importa el objeto que contiene las img de los proyectos y nombres
import { dataProject } from '../data/projects.js';

export function createElementProject() {
  const projectData = dataProject(); // Llama a la función para obtener el objeto
  const projectElement = document.querySelector(".projects__elements")  // Llama a la clase padre para crear sus hijos

  // Se itera el objeto y se crea la estructura correspondiente del HTML de los elementos 
  Object.keys(projectData).forEach((i , index)=> {
    let projectScroll = document.createElement("div");
    projectScroll.className = "projects__scroll";

    let projectButton = document.createElement("button");
    projectButton.className = `projects__button fontSize--xs projects__button--dt${index}`;
    projectButton.setAttribute('data-id', index); // Crea elementos unicos para ser referenciados con los botones y acceder al slick
    projectButton.innerText = i;

    let projectImg = document.createElement("img");
    projectImg.className = "projects__img"
    projectImg.src = projectData[i].sources.imgPreview

    projectScroll.append(projectButton,  projectImg)
    projectElement.appendChild(projectScroll)
  })

  /*/ Vista de elemento creado en cuestion en el HTML 
    <section class="projects__elements">
      <div class="projects__scroll">
        <button class="projects__button fontSize--xs">Proyecto 1</button>
        <img class="projects__img" src="https://hatrabbits.com/wp-content/uploads/2017/01/tafel-1.jpg" alt="">
      </div>
    </section>
  /*/
}
