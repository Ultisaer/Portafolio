export function skillProjectIcons(name , sources) {
  const skillsDetail = document.querySelector(`.skills__detail--${name}`); 

    const skillData = document.createElement('div');
    skillData.className = "skills__data";

    const skillHeader = document.createElement('h3');
    skillHeader.className = 'skills__header fontSize--sub';
    skillHeader.textContent = name === "type" ? "Dominio técnico" : name === "data" ? "Base de Datos" : "Herramientas";
    skillData.append(skillHeader);


    Object.entries(sources).forEach(([key, value]) => {
      const containerDiv = document.createElement('div');
      containerDiv.className = 'skills__data--container';

      const img = document.createElement('img');
      img.className = 'skills__icons';
      img.src = value;
      img.alt = '';

      const p = document.createElement('p');
      p.className = 'skills__text fontSize--xs';
      p.textContent = key;

      containerDiv.append(img , p);
      skillData.append(containerDiv);
    });

    skillsDetail.appendChild(skillData);
}
