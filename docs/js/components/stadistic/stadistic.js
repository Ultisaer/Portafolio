// stadistic.js
import { createDoughnutChart } from "./doughnutChartBuilder.js";
import { createStatisticsProgressBar } from "./statisticsProgressBar.js";
import { dataProject } from "../../data/projects.js";


export function stadistic() {
  const projectData = dataProject();
  const stadistic = document.querySelectorAll(".statistic__graphic");
  
  stadistic.forEach((element, index) => {
    const canvas = document.querySelector(`.statistic__graphic--v${index}`);
    const stadisticContainer = document.querySelector(`.statistic__technology--v${index}`);
    const label = [];
    const data = [];
    // Define 5 colores por defecto
    const defaultColors = [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)'
    ];
    const colors = projectData.colors || defaultColors;


    for (let tecnologia in projectData[index].estadistic) {
      label.push(tecnologia);
      data.push(projectData[index].estadistic[tecnologia]);
    }

    createDoughnutChart(canvas, label, data, colors);
    createStatisticsProgressBar(stadisticContainer, data, label, colors);
    
  });
}