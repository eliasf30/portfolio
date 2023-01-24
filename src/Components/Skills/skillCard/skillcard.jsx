import "./skillcard.css"
import autodidacta from "../images/autodidacta.png"
import { useSelector } from "react-redux"

export default function SkillCard({image, title, description, enDescription, enTitle}) {

    const {language} = useSelector(state => state.language)

    return(
    <div className="card">
        <img alt={title} src={image} />

        {(language === "español")? 
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