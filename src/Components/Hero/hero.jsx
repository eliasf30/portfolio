import "./hero.css"
import { useSelector } from "react-redux";


export default function Hero() {
    const { lenguage } = useSelector(state => state.lenguage);
    
    return(
        <div  className="hero_div" id="Hero">


  

            <div className="h2_div">

            {lenguage == "español" ?(  
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