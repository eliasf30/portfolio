import "./skillcard.css"
import autodidacta from "../images/autodidacta.png"
import { useSelector } from "react-redux"

export default function SkillCard({image, title, description, enDescription, enTitle}) {

    const {lenguage} = useSelector(state => state.lenguage)

    return(
    <div className="card">
        <img src={image} />

        {(lenguage === "español")? 
        <>
        <h4>{title} </h4>
        <p>{description}</p> </>: 
        <>
        <h4>{enTitle} </h4>
        <p>{enDescription}</p>
        </>}
       
    </div>
    )
}