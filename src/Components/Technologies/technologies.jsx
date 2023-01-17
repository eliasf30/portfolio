import "./technologies.css"
import TechCard from "./Card/card"
import { technologies } from "./techonologies"
import { useSelector } from "react-redux"


export default function Technologies() {


    const { lenguage } = useSelector(state => state.lenguage);

    return (
        <div className="tech_div" id="Technologies">
            {(lenguage ==="español")? <h3>Tecnologias</h3> : <h3>Technologies</h3> }
            
            <div className="card_container">

            {technologies.map(tech => <TechCard id={tech.id} {...tech} />)}

                
               
                
            </div>
        </div>
    )
}