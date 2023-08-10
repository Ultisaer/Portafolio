import { dataProject } from "../data/projects.js";
export function stadistic(){
const projectData = dataProject();
const stadistic = document.querySelectorAll(".statistic__graphic")

stadistic.forEach((element, index) => {
  stadisticProjects(`.statistic__graphic--v${index}` , index)
});

function stadisticProjects (elementRf, index){
  const canvas = document.querySelector(elementRf);
  const label = []
  const data = []

  for (let tecnologia in projectData[index].estadistic) {
      label.push(tecnologia);
      data.push(projectData[index].estadistic[tecnologia]);
  }
   // Define 5 colores por defecto
  const defaultColors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)'
  ];
  var colors = projectData.colors || defaultColors;


  new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: label,
      datasets: [{
        data: data,
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('0.2', '1')),
        borderWidth: 4
      }]
    },

    options: {
      responsive: true,
          maintainAspectRatio: true,
          cutout: '70%',
          plugins: {
              legend: {
                  display: false
              }
          }
    }
  });

  const stadisticContainer = document.querySelector(`.statistic__technology--v${index}`)
  
  for ( let i=0; i < data.length; i++){

    const stadisticElementContainer = document.createElement("div")
    stadisticElementContainer.className = "stadistic__element"

    const stadisticLabel = document.createElement("p")
    stadisticLabel.className = "stadistic__label fontSize--xs"
    stadisticLabel.textContent = label[i]

    const stadisticBackground = document.createElement("div")
    stadisticBackground.className = "stadistic__background"
    stadisticBackground.style.backgroundColor = colors[i]

    const stadisticView = document.createElement("div")
    stadisticView.className = "stadistic__view"
    stadisticView.style.width = data[i] + '%';
    stadisticView.style.backgroundColor = colors.map(color => color.replace('0.2', '1'))[i];
    
    stadisticBackground.append(stadisticView)
    stadisticElementContainer.append(stadisticLabel,stadisticBackground)
    stadisticContainer.appendChild(stadisticElementContainer);
  }
}
}
  
