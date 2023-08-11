// Funcion del manejo del menu interactivo en la version movile
// Permite acceder al menu a traves de menuMobile y salir del elemento desde cualquier parte de la pantalla

export function handleMenu() {
  const menuMobile = document.querySelector(".menu--mobile");
  const navBar = document.querySelector(".nav--element")
  const mediaQuery = window.matchMedia('(max-width: 700px)');

  // Elemento accionador principal evitando la creacion de propagacion para bugs
  menuMobile.addEventListener('click', (event) => {
    event.stopPropagation();
    navBar.classList.toggle("hidden");
  });

  // Escuchador de elementos en el documento excluyendo si el contenedor esta oculto / si se dio click al elemento / si el tamaño de pantalla es superior a los 700px
  document.addEventListener('click', (event) => {
    if (!navBar.classList.contains("hidden") && !navBar.contains(event.target) && mediaQuery.matches){
      navBar.classList.add("hidden");
    }
  });
  
  // Responsive si pasas de la version mobile a la de pc es necesario remover la class hidden

  function handleMediaQueryChange() {
    if (mediaQuery.matches) {
      navBar.classList.add("hidden");
    } else {
      navBar.classList.remove("hidden");
    }
  }

  mediaQuery.addListener(handleMediaQueryChange);
  handleMediaQueryChange();

}
