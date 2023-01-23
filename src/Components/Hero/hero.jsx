import "./hero.css"
import { useSelector } from "react-redux";


export default function Hero() {
    const { language } = useSelector(state => state.language);
    
    return(
        <div  className="hero_div" id="Hero">


  

            <div className="h2_div">

            {language == "español" ?(  
                <>
                <h2 className="name_h2">Bienvenido! soy Elias Figueroa.</h2>
                <h2>Desarrollador Front-End</h2></>) :
                (
                <>
                <h2 className="name_h2">Welcome! I´m Elias Figueroa.</h2>
                <h2>Front-End Developer</h2></>
                )
            }
            </div>
        </div>
    )
}