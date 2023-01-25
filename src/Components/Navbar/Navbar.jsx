import "./Navbar.css"
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import es from "./images/es.png"
import en from "./images/en.png"

import { useDispatch, useSelector } from "react-redux"
import { toggleLanguage } from "../../redux/actions"
import { useState } from "react"
import { Link, animateScroll as scroll } from "react-scroll";


export default function Navbar() {

    const dispatch = useDispatch();

    const { language } = useSelector(state => state.language);
    

    const [Section, UseSection] = useState("")

    return (

        <div className="Navbar_div" >

            {language == "español" ? (

                <ul className="navbar_ul">
                    <Link smooth={true} duration={550} to="Hero">
                        <button onClick={() => UseSection("Inicio")} className="navbar_Button" disabled={Section == "Inicio"}>Inicio</button>
                    </Link>
                    <Link smooth={true} duration={550} offset={-60} to="About">
                        <button onClick={() => UseSection("Sobre mi")} className="navbar_Button" disabled={Section == "Sobre mi"}>Sobre mi</button>
                    </Link>
                    <Link smooth={true} duration={550} offset={-70} to="Technologies">
                    <button onClick={() => UseSection("Tecnologias")} className="navbar_Button" disabled={Section == "Tecnologias"}>Tecnologias</button>
                    </Link>
                    <Link smooth={true} duration={550} offset={-50} to="Skills">
                    <button onClick={() => UseSection("Habilidades")} className="navbar_Button" disabled={Section == "Habilidades"}>Habilidades</button>
                    </Link>
                    <Link smooth={true} duration={550} offset={-50}  to="projects"> 
                    <button onClick={() => UseSection("Proyectos")} className="navbar_Button" disabled={Section == "Proyectos"}>Proyectos</button>
                    </Link>   
                    <Link smooth={true} duration={550}  to="contactos"> 
                        <button onClick={() => UseSection("Contactos")} className="navbar_Button" disabled={Section == "Contactos"}>Contactos</button>
                    </Link>            
                </ul>

            )
                :

                (

                    <ul className="navbar_ul">
                        <Link smooth={true} duration={550} to="Hero">
                            <button onClick={() => UseSection("Inicio")} className="navbar_Button" disabled={Section == "Inicio"}>Home</button>
                        </Link >
                        <Link smooth={true} duration={550} offset={-60} to="About">
                            <button onClick={() => UseSection("Sobre mi")} className="navbar_Button" disabled={Section == "Sobre mi"}>About Me</button>
                        </Link>
                        <Link  smooth={true} duration={550} offset={-70} to="Technologies">
                            <button onClick={() => UseSection("Tecnologias")} className="navbar_Button" disabled={Section == "Tecnologias"}>Technologies</button>
                        </Link>
                        <Link smooth={true} duration={550} offset={-50} to="Skills">
                        <button onClick={() => UseSection("Habilidades")} className="navbar_Button" disabled={Section == "Habilidades"}>Skills</button>
                        </Link> 
                        <Link smooth={true} duration={550} offset={-50}  to="projects"> 
                        <button onClick={() => UseSection("Proyectos")} className="navbar_Button" disabled={Section == "Proyectos"}>Projects</button>
                        </Link>
                        <Link smooth={true} duration={550}  to="contactos"> 
                        <button onClick={() => UseSection("Contactos")} className="navbar_Button" disabled={Section == "Contactos"}>Contacts</button>
                        </Link>
                    </ul>
                )
            }

            <ul className="navbar_pages">
                <li className="navbar_li"><a href="https://github.com/eliasf30?tab=repositories" target="_blank">< AiFillGithub className="li_i" /></a></li>
                <li className="navbar_li"><a href="https://www.linkedin.com/in/elias-figueroa-ab8312187/" target="_blank"> < AiFillLinkedin className="li_i" /></a></li>
            </ul>
            <ul className="navbar_lenguages">
                <button className="lenguage_button" onClick={() => dispatch(toggleLanguage("español"))}>
                    <li className="navbar_li"><img src={es} alt="es" /></li>
                </button>
                <button className="lenguage_button" onClick={() => dispatch(toggleLanguage("english"))}>
                    <li className="navbar_li"><img src={en} alt="en" /> </li>
                </button>
            </ul>
            <div className="responsive_navbar_lenguages">
                {
                    (language ==="español")? 

                    <button className="lenguage_button" onClick={() => dispatch(toggleLanguage("english"))}>
                        <li className="navbar_li"><img src={en} alt="en" /> </li>
                    </button>
                    
                    :

                    <button className="lenguage_button" onClick={() => dispatch(toggleLanguage("español"))}>
                        <li className="navbar_li"><img src={es} alt="es" /></li>
                    </button>
                }
            </div>
        </div>

    )
}