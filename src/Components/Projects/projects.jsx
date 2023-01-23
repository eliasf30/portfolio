import "./Projects.css"
import { Proyectos } from "./Projects"
import ProjectCard from "./projectCard/projectCard"
import { useSelector } from "react-redux"

export default function Projects(){

    const { language } = useSelector(state => state.language)

    return(
        <div id="projects" className="projects_div">
            {(language === "español")? <h3 className="projects_h3" >Proyectos</h3> : <h3 className="projects_h3" >Projects</h3>}
            
            <div className="projects_container">

                {Proyectos.map(project => <ProjectCard ID={project.id} {...project}/>)}


                

            </div>
        </div>
    )
}