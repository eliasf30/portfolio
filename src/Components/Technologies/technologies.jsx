import "./technologies.css"
import TechCard from "./Card/card"
import { technologies } from "./techonologies"
import { useSelector } from "react-redux"


export default function Technologies() {


    const { language } = useSelector(state => state.language);

    return (
        <div className="tech_div" id="Technologies">
            {(language ==="español")? <h3>Tecnologias</h3> : <h3>Technologies</h3> }
            
            <div className="card_container">

            {technologies.map(tech => <TechCard ID ={tech.ID} {...tech} />)}

                
               
                
            </div>
        </div>
    )
}