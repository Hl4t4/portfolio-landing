import React from 'react'
import Image from 'next/image'

import profilePic from '../../public/img/self.webp'
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
                <Image alt="Imagen de perfil" src={profilePic} />
            </div>
        </div>
        <div className="chat-header">
            José Latapiatt
            <time className="text-xs opacity-50" suppressHydrationWarning > {time.toLocaleTimeString(contact.locale)}</time>
        </div>
        <div className="chat-bubble min-w-fit">
            <div className="card bg-base-100 shadow-xl pt-3">
            <a href={contact.url}><figure><Image src={'/img/badges/' + contact.img} width={contact.img_width} height={contact.img_height} alt={contact.type}/>
            </figure></a>
                <div className="card-body">
                    <h2 className="card-title">{contact.message1}{contact.type}</h2>
                    <p>{contact.message2}{contact.account}</p>
                    <div className="card-actions justify-end">
                        <a href={contact.url}><button className="btn btn-primary">{contact.button}</button></a>
                    </div>
                </div>
            </div>  
        </div>
        <div className="chat-footer opacity-50">
            {contact.delivered}
        </div>
    </div>
  )
}

export default ContactItem
