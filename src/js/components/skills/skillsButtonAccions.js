
export function skillButtonAccion(name) {

  const skills = {}

  skills[`skillButtonAccion${name}`] = `.skills__accion--${name}`
  skills[`skillDetailToggle${name}`] = `.skills__detail--${name}`
  skills[`skillCarouselToggle${name}`] = `.skills__elements--${name}`

  const elements = {};
  for (const [key, value] of Object.entries(skills)) {
    elements[key] = document.querySelector(value);

  }
  const buttonElement = elements[`skillButtonAccion${name}`];
  const detailElement = elements[`skillDetailToggle${name}`];
  const carouselElement = elements[`skillCarouselToggle${name}`];
  const skillDetailElements = document.querySelectorAll(".skills__detail")
  const skillCarouselElements = document.querySelectorAll(".skills__elements")
  
  buttonElement.addEventListener('click', () => {
    function logicCommutation(elementDetail, elementSkill, carousel) {
      if (elementDetail.classList.contains("hidden")) {
        elementSkill.forEach(element => {
          element.classList.add("hidden");
        });
        elementDetail.classList.remove("hidden");
        if (carousel != null) {
          $(carousel).slick('refresh');
        }
      }
    }
    logicCommutation(detailElement, skillDetailElements);
    logicCommutation(carouselElement, skillCarouselElements, '.skills__elements');
  });

}
