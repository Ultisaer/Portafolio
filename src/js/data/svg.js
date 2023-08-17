//? Se importan los iconos de la carpeta assets/IconsNavigation, necesario para build
import arrowLeft from "../../assets/IconsNavigation/arrowLeft.svg";
import arrowRight from "../../assets/IconsNavigation/arrowRight.svg";
import returnIcon from "../../assets/IconsNavigation/return.svg";
import expand from "../../assets/IconsNavigation/expand.svg";
import menu from "../../assets/IconsNavigation/menu.svg";

export function dataSvg() {
  const dataSvg = {
    arrowLeft,
    arrowRight,
    return: returnIcon,
    expand,
    menu,
  };

  return dataSvg;
}
