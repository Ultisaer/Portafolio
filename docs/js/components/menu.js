export function handleNavigation() {
  const menuMobile = document.querySelector(".menu--mobile");
  const navBar = document.querySelector(".nav--element")
  const mediaQuery = window.matchMedia('(min-width: 700px)');

  menuMobile.addEventListener('click', (event) => {
    event.stopPropagation();
    navBar.classList.toggle("hidden");
  });

  document.addEventListener('click', (event) => {
    if (!navBar.classList.contains("hidden") && !navBar.contains(event.target) && !mediaQuery.matches){
      navBar.classList.add("hidden");
    }
  });
  
  mediaQuery.addListener(() => {
    if (mediaQuery.matches){
      navBar.classList.remove("hidden");
    }
  });

}
