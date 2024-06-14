import React from 'react'
import { Contact } from '../interfaces/Contact';

interface ContactItemProps {
    contact: Contact;
    time: Date;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, time }) => {
  return (
    <div className="chat chat-start">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img alt="Imagen de perfil" src="/img/self.webp" />
            </div>
        </div>
        <div className="chat-header">
            José Latapiatt
            <time className="text-xs opacity-50" suppressHydrationWarning > {time.toLocaleTimeString('en-US')}</time>
        </div>
        <div className="chat-bubble min-w-fit">
            <div className="card bg-base-100 shadow-xl pt-3">
            <a href={contact.url}><figure><img src={contact.img} alt={contact.type}/></figure></a>
                <div className="card-body">
                    <h2 className="card-title">Contactame por {contact.type}</h2>
                    <p>Mi cuenta es {contact.account}</p>
                    <div className="card-actions justify-end">
                        <a href={contact.url}><button className="btn btn-primary">Contactar</button></a>
                    </div>
                </div>
            </div>  
        </div>
        <div className="chat-footer opacity-50">
            Delivered
        </div>
    </div>
  )
}

export default ContactItem
