// Agrega un controlador de eventos de clic al elemento
export function handleNavigation() {
  const menuMobile = document.querySelector(".menu--mobile");

  // Define la función que quieres ejecutar cuando el elemento sea clicado
  function handleClick() {
    alert('Has hecho clic en el menú móvil!');
  }

  // Agrega el controlador de eventos de clic al elemento
  menuMobile.addEventListener('click', handleClick);
}
