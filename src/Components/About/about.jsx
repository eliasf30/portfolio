import "./about.css"
import imagen from "./images/imagenCV.PNG"
import { useSelector } from "react-redux"

export default function About() {

    const { language } = useSelector(state => state.language);
   

    return (

        <div className="about_div" id="About">
            <img className="imagenCV" src={imagen} alt="imagenCV"/>
            {(language === "español") ?

             <div id="text_div" className="text_div" >
                <h3>Sobre mi</h3>
                <p> Mi nombre es Elías Figueroa, tengo 25 años y vivo en Córdoba, Argentina. Soy programador web especializado en Front-End. He trabajado como desarrollador freelance
                     y actualmente curso el tercer año de la carrera de Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional (UTN). En mi tiempo libre, 
                     disfruto investigando sobre nuevas tecnologías y manteniéndome activo con ejercicios en el gimnasio o practicando calistenia.</p>
            </div> :

                <div id="text_div" className="text_div" >
                    <h3 >About me</h3>
                    <p> My name is Elias Figueroa, a 25-year-old Web Developer from Córdoba, Argentina, specializing in Front-End development. I have experience working as a freelance developer
                         and am currently in my third year of Information Systems Engineering at the National Technological University (UTN).
                          In my free time, I enjoy exploring new technologies and staying active through gym workouts and calisthenics</p>
                </div>
            
            
            }

        </div>
    )
}