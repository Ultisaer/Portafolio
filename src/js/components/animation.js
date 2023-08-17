export function animation(){

const animationElement = document.querySelector(".nav__section--animation");
const iconAnimation = document.querySelector(".nav__icons")

  animationElement.addEventListener('click', function() {

    iconAnimation.classList.add('animationBounce');
    
    setTimeout(function() {
      iconAnimation.classList.remove('animationBounce');
    }, 1000);

  });

}