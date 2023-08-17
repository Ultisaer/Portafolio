// statisticsProgressBar.js
export function createStatisticsProgressBar(stadisticContainer, data, label, colors) {
  for ( let i = 0; i < data.length; i++) {
    const stadisticElementContainer = document.createElement("div");
    stadisticElementContainer.className = "stadistic__element";

    const stadisticLabel = document.createElement("p");
    stadisticLabel.className = "stadistic__label fontSize--xs";
    stadisticLabel.textContent = label[i];

    const stadisticBackground = document.createElement("div");
    stadisticBackground.className = "stadistic__background";
    stadisticBackground.style.backgroundColor = colors[i];

    const stadisticView = document.createElement("div");
    stadisticView.className = "stadistic__view";
    stadisticView.style.width = data[i] + '%';
    stadisticView.style.backgroundColor = colors.map(color => color.replace('0.2', '1'))[i];
    
    stadisticBackground.append(stadisticView);
    stadisticElementContainer.append(stadisticLabel, stadisticBackground);
    stadisticContainer.appendChild(stadisticElementContainer);
  }
}
