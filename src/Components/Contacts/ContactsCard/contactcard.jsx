import "./contactcard.css"
import whatsapp from "../images/whatsapp.png"

export default function ContactCard({title, image, link}) {
    return (
        <div className="contact_card">
            <a  href={link}>
                <img alt={title} src={image} />
                <p>{title}</p>
            </a>
        </div>
    )
}