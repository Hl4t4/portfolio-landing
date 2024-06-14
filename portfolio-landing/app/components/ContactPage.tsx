'use client';
import React, { CSSProperties, useState, useEffect }  from 'react'
import Image from 'next/image'
import { Contact } from '../interfaces/Contact';
import ContactItem from './ContactItem';
import { ContactLocale } from '../interfaces/ContactLocale';

interface ContactPageProps {
    contacts: Contact[];
    contact_locale: ContactLocale;
    style: CSSProperties;
}
const ContactPage: React.FC<ContactPageProps> = ({ contacts, contact_locale, style }) => {
    const [isVisible1, setIsVisible1] = useState<boolean>(true);
    const [isVisible2, setIsVisible2] = useState<boolean>(false);
    const [isVisible3, setIsVisible3] = useState<boolean>(false);
    const [isVisible4, setIsVisible4] = useState<boolean>(false);
    const [isVisible5, setIsVisible5] = useState<boolean>(false);
    const [isVisible6, setIsVisible6] = useState<boolean>(false);
    const [time1, setTime1] = useState<Date>(new Date());
    const [time2, setTime2] = useState<Date>(new Date((new Date).getTime() + 15 * 1000));
    const [time3, setTime3] = useState<Date>(new Date((new Date).getTime() + 25 * 1000));
    const [time4, setTime4] = useState<Date>(new Date((new Date).getTime() + 26 * 1000));
    const [time5, setTime5] = useState<Date>(new Date((new Date).getTime() + 27 * 1000));
    const [time6, setTime6] = useState<Date>(new Date((new Date).getTime() + 37 * 1000));
    const times: Date[] = [time3, time4, time5];

    useEffect(() => {
        // const intervalTimer = setInterval(() => {
        //     setTime1(new Date());
        //     setTime2(new Date((new Date).getTime() + 15 * 1000)),
        //     setTime3(new Date((new Date).getTime() + 25 * 1000));
        //     setTime4(new Date((new Date).getTime() + 26 * 1000));
        //     setTime5(new Date((new Date).getTime() + 27 * 1000));
        //     setTime6(new Date((new Date).getTime() + 37 * 1000));
        // }, 60000);
        
        const timeOutTimer1 = setTimeout(() => {
            setTime1(new Date());
            setIsVisible1(true);
        }, 1000);

        const timeOutTimer2 = setTimeout(() => {
            setTime2(new Date());
            setIsVisible2(true);
        }, 6000);

        const timeOutTimer3 = setTimeout(() => {
            setTime3(new Date());
            setIsVisible3(true);
        }, 9000);

        const timeOutTimer4 = setTimeout(() => {
            setTime4(new Date());
            setIsVisible4(true);
        }, 9000);

        const timeOutTimer5 = setTimeout(() => {
            setTime5(new Date());
            setIsVisible5(true);
        }, 9000);

        const timeOutTimer6 = setTimeout(() => {
            setTime6(new Date());
            setIsVisible6(true);
        }, 12000);

        return () => {
            clearTimeout(timeOutTimer1);
            clearTimeout(timeOutTimer2);
            clearTimeout(timeOutTimer3);
            clearTimeout(timeOutTimer4);
            clearTimeout(timeOutTimer5);
            clearTimeout(timeOutTimer6);
        }
    }, []);

    return (
        <div id='contact' className='flex justify-center items-center p-10'>
            <div className="mockup-phone border border-primary mx-auto min-w-fit w-2/3 ">
                <div className="camera"></div> 
                <div className='bg-cover bg-no-repeat display min-h-[1190px] p-7' style={style}>
                    <div className={"chat chat-start " + (isVisible1 ? 'grid' : 'hidden')}>
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <Image alt="Imagen de perfil" src="/img/self.webp" />
                            </div>
                        </div>
                        <div className="chat-header">
                            José Latapiatt
                            <time className="text-xs opacity-50" suppressHydrationWarning > {time1.toLocaleTimeString(contact_locale.locale)}</time>
                        </div>
                        <div className="chat-bubble">{contact_locale.message1}</div>
                        <div className="chat-footer opacity-50">
                            {contact_locale.delivered}
                        </div>
                    </div>
                    <div className={"chat chat-end " + (isVisible2 ? 'grid' : 'hidden')}>
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <Image alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="chat-header">
                            {contact_locale.recipient}
                            <time className="text-xs opacity-50" suppressHydrationWarning > {time2.toLocaleTimeString(contact_locale.locale)}</time>
                        </div>
                        <div className="chat-bubble">{contact_locale.message2}</div>
                        <div className="chat-footer opacity-50" suppressHydrationWarning>
                            {contact_locale.seen_at} {time2.toLocaleTimeString(contact_locale.locale)}
                        </div>
                    </div>
                    
                    {contacts.map((contact, index) => (
                        <React.Fragment key={contact.id}>
                            <div className={isVisible3 ? 'grid' : 'hidden'}>
                                <ContactItem contact={contact} time={times[index]}></ContactItem>
                            </div>
                        </React.Fragment>
                    ))}
                    <div className={"chat chat-end " + (isVisible6 ? 'grid' : 'hidden')}>
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <Image alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="chat-header">
                            {contact_locale.recipient}
                            <time className="text-xs opacity-50" suppressHydrationWarning > {time6.toLocaleTimeString(contact_locale.locale)}</time>
                        </div>
                        <div className="chat-bubble">{contact_locale.message3}</div>
                        <div className="chat-footer opacity-50" suppressHydrationWarning>
                            {contact_locale.seen_at} {time6.toLocaleTimeString(contact_locale.locale)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
