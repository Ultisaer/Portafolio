// doughnutChartBuilder.js
export function createDoughnutChart(canvas, label, data, colors) {
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
}
