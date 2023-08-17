export function carrouselSlick(){

  // Valores por defecto de todos los carruceles
  function startSlick(classSlick, slides = 1, responsiveSize, responsiveSlide, fade = false, autoplay = false){
    let slickSettings  = {
      infinite: true,
      speed: 300,
      slidesToShow: slides,
      slidesToScroll: 1,
      arrows: false,
      autoplaySpeed: 1500,
      fade: fade,
      cssEase: 'ease',
    }

    // Condicional para agregar este codigo al slick si es true
    if (responsiveSize != 0) {
      slickSettings.responsive = [
        {
          breakpoint: responsiveSize,
          settings: {
            slidesToShow: responsiveSlide,        
          }
        },
      ]
    }

    // Configuramos el elemento y lo retornamos
    let slickInstance = $(classSlick).slick(slickSettings);
    return slickInstance;
  }

  // Si poseemos botones externos a los del slick mostramos que elementos son
  // y que se activan con el click y hacer referencia al slick padre
  function buttonSlickMove(classBack, classNext, containerSlick){
    $(classBack).click(() => $(containerSlick).slick("slickPrev"));
    $(classNext).click(() => $(containerSlick).slick("slickNext")); 
  }

  // Retornamos ambas funciones para ser usadas en otras partes del codigo
  return { startSlick, buttonSlickMove };
}


