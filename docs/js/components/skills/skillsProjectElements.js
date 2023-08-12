export function skillProjectElement(name, sources, index){
  const skillContainer = document.querySelector(".skills__JS")

  const skillElement = document.createElement("div")
  skillElement.className = `skills__elements skills__elements--${name}`
  if (index >= 1){
    skillElement.classList.add("hidden");

  }
  Object.entries(sources).forEach(([key, value]) => {
    const skillImg = document.createElement("img")
    skillImg.className = "skills__img"
    skillImg.src = value
    skillImg.all = `Logotico de ${key}`

    skillElement.append(skillImg)
  });
  
  skillContainer.appendChild(skillElement)
}
