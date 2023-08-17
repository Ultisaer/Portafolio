// Importamos la función carrouselSlick como carrousel desde el archivo carrousel.js
import { carrouselSlick as carrousel } from "./carouselController.js";

export function carrouselNested() {
  // Obtenemos las funciones startSlick y buttonSlickMove desde carrousel()
  const { startSlick, buttonSlickMove } = carrousel();

  // Inicializamos el primer carrusel con 2 slides visibles y responsive habilitada / creamos los botones
  startSlick(".projects__elements", 2, 1400, 1);
  buttonSlickMove(".projects__move--back", ".projects__move--after", ".projects__elements");

  // Inicializamos el segundo carrusel con 1 slide visible, no responsive y con animacion  / creamos los botones
  startSlick(".detail", 1 , 0 , 0 , true);
  buttonSlickMove(".focus__move--back", ".focus__move--next", ".detail");

  startSlick(".statistic", 1 , 0 , 0 , true)
  buttonSlickMove(".focus__move--back", ".focus__move--next", ".statistic");

  startSlick(".skills__elements", 3 , 500 , 2)
  buttonSlickMove(".skills__move--back" , ".skills__move--next" , ".skills__elements")
}
