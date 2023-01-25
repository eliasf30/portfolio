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
                <p> Mi nombre es Elias Figueroa, tengo 23 años, vivo en Córdoba, Argentina. Soy programador web, orientado en el Front-End momentáneamente.
                    He realizado trabajos como desarrollador Freelance y actualmente me encuentro en primer año de Ingeniería en Sistemas de Informacion
                    en la UTN. En mis tiempos libres me gusta investigar cosas nuevas respecto a tecnología y hacer ejercicio en el gimnasio o calistenia.</p>
            </div> :

                <div id="text_div" className="text_div" >
                    <h3 >About me</h3>
                    <p> My name is Elias Figueroa, I´m 23 years old and I live in Cordoba, Argentina. I´m a Web Developer specialized in Front-End.
                        I have done work as a Freelance developer and i´m in the first year of information systems engineering at National Technological University (UTN).
                        In my free times i like to learn new thinks about technology and working out in the gym or calisthenics.</p>
                </div>
            
            
            }

        </div>
    )
}