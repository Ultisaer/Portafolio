//? Se importan los iconos de la carpeta assets, reemplazando los valores correspondientes al arreglo "skillProject", necesario para build
import HTMLpng from "../../assets/LogoType/HTML.png";
import CSSpng from "../../assets/LogoType/CSS.png";
import JSpng from "../../assets/LogoType/JS.png";
import SASSpng from "../../assets/LogoType/SASS.png";
//
import HTMLsvg from "../../assets/IconsType/HTML.svg";
import CSSsvg from "../../assets/IconsType/CSS.svg";
import JSsvg from "../../assets/IconsType/JS.svg";
import SASSsvg from "../../assets/IconsType/SASS.svg";

export function skillProject() {
  const skillProject = [
    {
      name: "type",
      sources: {
        HTML: HTMLpng,
        CSS: CSSpng,
        JS: JSpng,
        Sass: SASSpng,
        TypeScript: HTMLpng,
      },
      detail: {
        HTML: HTMLsvg,
        CSS: CSSsvg,
        JS: JSsvg,
        Sass: SASSsvg,
        TypeScript: SASSsvg,
      },
    },
    {
      name: "data",
      sources: {
        SQL: CSSpng,
        MariaDB: JSpng,
        MySQL: SASSpng,
        MongoDB: HTMLpng,
        JavaScript: JSpng,
      },
      detail: {
        SQL: CSSsvg,
        MariaDB: JSsvg,
        MySQL: SASSsvg,
        MongoDB: HTMLsvg,
        JavaScript: JSsvg,
      },
    },
    {
      name: "tool",
      sources: {
        VisualCode: JSpng,
        GPT4: SASSpng,
        Notion: HTMLpng,
        StabilityIA: CSSpng,
        Terminal: JSpng,
      },
      detail: {
        VisualCode: JSsvg,
        GPT4: SASSsvg,
        Notion: HTMLsvg,
        StabilityIA: CSSsvg,
        Terminal: JSsvg,
      },
    },
  ];

  return skillProject;
}
