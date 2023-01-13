import "./Navbar.css"
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import es from "./images/es.png"
import en from "./images/en.png"

import { useDispatch, useSelector } from "react-redux"
import { toggleLenguage } from "../../redux/actions"



export default function Navbar() {

    const dispatch = useDispatch();

    const { lenguage } = useSelector(state => state.lenguage);
    console.log(lenguage)
    return (

        <div className="Navbar_div" >

            {lenguage == "español"?(

            <ul className="navbar_ul">
                <li className="navbar_li">Inicio</li>
                <li className="navbar_li">Sobre mi</li>
                <li className="navbar_li">Habilidades</li>
                <li className="navbar_li">Tecnologias</li>
                <li className="navbar_li">Proyectos</li>
            </ul>  
            
            )
            :

            (
            

            

            
            <ul className="navbar_ul">
                <li className="navbar_li">Home</li>
                <li className="navbar_li">About me</li>
                <li className="navbar_li">Skills</li>
                <li className="navbar_li">Technologies</li>
                <li className="navbar_li">Projects</li>
            </ul>
            )
        }

            <ul className="navbar_pages">
                <li className="navbar_li">< AiFillGithub className="li_i" /></li>
                <li className="navbar_li"> < AiFillLinkedin className="li_i" /></li>
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