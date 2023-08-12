import { skillProject } from "../../data/skills.js"
import { skillProjectElement } from "./skillsProjectElements.js"
export function skills(){
  const projectskill = skillProject()
  projectskill.forEach((skill, index) =>{
    skillProjectElement(skill.name, skill.sources, index)
  })
}
//nombre LogoType