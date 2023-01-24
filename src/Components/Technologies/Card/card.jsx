import "./card.css"


export default function TechCard({image, title}) {
    return (
        <div className="tech_card">
            <img alt={title} src={image}/>
            <h4>{title}</h4>
        </div>
    )
}


