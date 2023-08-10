export function bottonNestedAccion() {
  // Se llama a todos los botones que tengan interaccion directa con el slide
  const buttons = document.querySelectorAll(".projects__button");
  const slideDetail = document.querySelector(".projects__gallery");
  const slideExpandDetail = document.querySelector(".focus");
  const slideExpandEstadistic = document.querySelector(".statistic");
  const returnButton = document.querySelector(".focus__move--return");
  
  // Se itera entre la cantidad de botone y se verifica si a alguno se dio click
  // Si se dio click a partir del data-id establecemos la nueva posicion
  // Ocultamos y desecultamos elementos , refrescamos y eliminamos clicks anteriores al elemento
  buttons.forEach((button) => {
    $(button).off('click').on('click', function() { 
      const dataId = this.getAttribute('data-id');
      slideDetail.classList.toggle("hidden");
      slideExpandDetail.classList.toggle("hidden");
      slideExpandEstadistic.classList.toggle("hidden");
      $('.detail').slick('refresh');
      $('.statistic').slick('refresh')
      $('.detail').slick('slickGoTo', dataId); // Va al slide correspondiente
      $('.statistic').slick('slickGoTo', dataId);
    });
  });
  
  // Dependiendo del elemento mostrado en proyect Expand se cambia en automatico la posicion del slick inicial
  $('.detail').on('afterChange', function(event, slick, currentSlide) {
    $('.projects__elements').slick('slickGoTo', currentSlide); // Va al slide correspondiente
    $('.statistic').slick('slickGoTo', currentSlide);
  });

  $('.statistic').on('afterChange', function(event, slick, currentSlide) {
    $('.projects__elements').slick('slickGoTo', currentSlide); // Va al slide correspondiente
    $('.detail').slick('slickGoTo', currentSlide);
  });
  
  // Cuando estamos en proyect Expand y nos devolvemos ocultamos desocultamos y refrescamos para evitar atascados
  $(returnButton).off('click').on('click' , function() {
    slideExpandDetail.classList.toggle("hidden")
    slideExpandEstadistic.classList.toggle("hidden")
    slideDetail.classList.toggle("hidden")
    $('.projects__elements').slick('refresh');
  })
}
