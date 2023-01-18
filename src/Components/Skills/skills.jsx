import "./skills.css"
import { skills } from "./skillCard/skills"
import SkillCard from "./skillCard/skillcard"
import { useSelector } from "react-redux"

export default function Skills(){

    const {lenguage} = useSelector(state => state.lenguage)

    return(
        <div className="skills_div" id="Skills">
            {(lenguage ==="español")? <h3>Habilidades</h3> : <h3>Skills</h3>    }
            
            <div className="skill_container">

            {skills.map(skill => <SkillCard id={skill.id} {...skill} />)}
            
            </div>
        </div>
    )
}