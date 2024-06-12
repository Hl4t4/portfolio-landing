'use client';
import React, { CSSProperties, useState, useEffect }  from 'react'
import { Contact } from '../interfaces/Contact';
import ContactItem from './ContactItem';

interface ContactPageProps {
    contacts: Contact[];
    style: CSSProperties;
}
const ContactPage: React.FC<ContactPageProps> = ({ contacts, style }) => {
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
        <div className='flex justify-center items-center p-10'>
            <div className="mockup-phone border border-primary mx-auto min-w-fit w-2/3 ">
                <div className="camera"></div> 
                <div className='bg-cover bg-no-repeat display min-h-[1190px] p-7' style={style}>
                    <div className={"chat chat-start " + (isVisible1 ? 'grid' : 'hidden')}>
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Imagen de perfil" src="/self.jpg" />
                            </div>
                        </div>
                        <div className="chat-header">
                            José Latapiatt
                            <time className="text-xs opacity-50" suppressHydrationWarning > {time1.toLocaleTimeString('en-US')}</time>
                        </div>
                        <div className="chat-bubble">¡Hola! ¿Bienvenido te gustaría trabajar conmigo?</div>
                        <div className="chat-footer opacity-50">
                            Delivered
                        </div>
                    </div>
                    <div className={"chat chat-end " + (isVisible2 ? 'grid' : 'hidden')}>
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="chat-header">
                            Yo
                            <time className="text-xs opacity-50" suppressHydrationWarning > {time2.toLocaleTimeString('en-US')}</time>
                        </div>
                        <div className="chat-bubble">¡Por supuesto! ¿Cómo te contacto?</div>
                        <div className="chat-footer opacity-50" suppressHydrationWarning>
                            Seen at {time2.toLocaleTimeString('en-US')}
                        </div>
                    </div>
                    
                    {contacts.map((contact, index) => (
                        <div className={isVisible3 ? 'grid' : 'hidden'}>
                            <ContactItem key={contact.id} contact={contact} time={times[index]}></ContactItem>
                        </div>
                    ))}
                    <div className={"chat chat-end " + (isVisible6 ? 'grid' : 'hidden')}>
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="chat-header">
                            Yo
                            <time className="text-xs opacity-50" suppressHydrationWarning > {time6.toLocaleTimeString('en-US')}</time>
                        </div>
                        <div className="chat-bubble">¡Muchas gracias!</div>
                        <div className="chat-footer opacity-50" suppressHydrationWarning>
                            Seen at {time6.toLocaleTimeString('en-US')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
