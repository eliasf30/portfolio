import { useSelector } from "react-redux"
import { contacts } from "./contacts"
import "./contacts.css"
import ContactCard from "./ContactsCard/contactcard"


export default function Contacts(){

    const {language} = useSelector(state => state.language)

    return (
        <div className="Contacts_div" id="contactos">
            {(language ==="español")? <h3 className="contact_h3">Contactos</h3> :<h3 className="contact_h3">Contacts</h3> }
            
            <div className="contacts_container">
                {contacts.map(contact => <ContactCard id={contact.id}{...contact} />)

                }
                
                

            </div>
        </div>
    )
}