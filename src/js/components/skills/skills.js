import { skillProject } from "../../data/skills.js"
import { skillProjectElement } from "./skillsProjectElements.js"
import { skillProjectIcons } from "./skillsProjectIcons.js"
import { skillButtonAccion } from "./skillsButtonAccions.js"
export function skills(){
  const projectskill = skillProject()
  // Importaciones de data
  projectskill.forEach((skill, index) =>{
    skillProjectElement(skill.name, skill.sources, index)
    skillProjectIcons(skill.name, skill.detail)
  })
  // Logica
  projectskill.forEach((skill) =>{
    skillButtonAccion(skill.name)
  })
}
