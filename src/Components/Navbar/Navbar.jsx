import "./Navbar.css"
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import es from "./images/es.png"
import en from "./images/en.png"

import { useDispatch, useSelector } from "react-redux"
import { toggleLenguage } from "../../redux/actions"
import { useState } from "react"
import { Link, animateScroll as scroll } from "react-scroll";


export default function Navbar() {

    const dispatch = useDispatch();

    const { lenguage } = useSelector(state => state.lenguage);
    

    const [Section, UseSection] = useState("")

    return (

        <div className="Navbar_div" >

            {lenguage == "español" ? (

                <ul className="navbar_ul">
                    <Link smooth={true} duration={550} to="Hero">
                        <button onClick={() => UseSection("Inicio")} className="navbar_Button" disabled={Section == "Inicio"}>Inicio</button>
                    </Link>
                    <Link smooth={true} duration={550} offset={-50} to="About">
                        <button onClick={() => UseSection("Sobre mi")} className="navbar_Button" disabled={Section == "Sobre mi"}>Sobre mi</button>
                    </Link>

                    <button onClick={() => UseSection("Habilidades")} className="navbar_Button" disabled={Section == "Habilidades"}>Habilidades</button>
                    <Link smooth={true} duration={550} offset={-70} to="Technologies">
                    <button onClick={() => UseSection("Tecnologias")} className="navbar_Button" disabled={Section == "Tecnologias"}>Tecnologias</button>
                    </Link>
                    <button onClick={() => UseSection("Proyectos")} className="navbar_Button" disabled={Section == "Proyectos"}>Proyectos</button>
                </ul>

            )
                :

                (





                    <ul className="navbar_ul">
                        <Link smooth={true} duration={550} to="Hero">
                            <button onClick={() => UseSection("Inicio")} className="navbar_Button" disabled={Section == "Inicio"}>Home</button>
                        </Link >
                        <Link smooth={true} duration={550} offset={-50} to="About">
                            <button onClick={() => UseSection("Sobre mi")} className="navbar_Button" disabled={Section == "Sobre mi"}>About Me</button>
                        </Link>
                        <button onClick={() => UseSection("Habilidades")} className="navbar_Button" disabled={Section == "Habilidades"}>Skills</button>
                        <Link  smooth={true} duration={550} offset={-70} to="Technologies">
                            <button onClick={() => UseSection("Tecnologias")} className="navbar_Button" disabled={Section == "Tecnologias"}>Technologies</button>
                        </Link>
                        <button onClick={() => UseSection("Proyectos")} className="navbar_Button" disabled={Section == "Proyectos"}>Projects</button>
                    </ul>
                )
            }

            <ul className="navbar_pages">
                <li className="navbar_li"><a href="https://github.com/eliasf30?tab=repositories" target="_blank">< AiFillGithub className="li_i" /></a></li>
                <li className="navbar_li"><a href="https://www.linkedin.com/in/elias-figueroa-ab8312187/" target="_blank"> < AiFillLinkedin className="li_i" /></a></li>
            </ul>
            <ul className="navbar_lenguages">
                <button className="lenguage_button" onClick={() => dispatch(toggleLenguage("español"))}>
                    <li className="navbar_li"><img src={es} alt="es" /></li>
                </button>
                <button className="lenguage_button" onClick={() => dispatch(toggleLenguage("english"))}>
                    <li className="navbar_li"><img src={en} alt="en" /> </li>
                </button>
            </ul>

        </div>

    )
}